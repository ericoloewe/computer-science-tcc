#!/usr/bin/env python
# coding: utf-8

# # Poc utilizando KNN para trabalho de conclusão de Ciência da computação da Feevale

dataframeCache = {}

def prepareData(uri):
    if uri in dataframeCache:
        return dataframeCache[uri].copy()


    # ## Carrega JSON

    # In[17]:


    import json
    import os

    users = {}

    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file_path = os.path.join(THIS_FOLDER, 'spotify-plugin-app-export.json')

    with open(my_file_path) as json_file:
        data = json.load(json_file)

        for userKey in data['events'].keys():
            user = data['events'][userKey]
            userEvents = []

            for key in user.keys():
                userEvents.append(user[key])

            users[userKey] = userEvents


    for userKey in users.keys():
        print(f"len({userKey}) => {len(users[userKey])}")


    # ## Separa Contexto

    # In[18]:


    import pandas as pd

    contexts = []
    currentCtx = None

    for event in users[uri]:
        if event['action'] == "CHOOSE_FEELING":
            if currentCtx:
                contexts.append(currentCtx)

            currentCtx = {"musics": [], "info": {"feeling": event['value']}}
        elif event['action'] == "CHOOSE_ACTIVITY":
            currentCtx['info']['activity'] = event['value']
        elif event['action'] == "CHOOSE_LOCATION":
            currentCtx['info']['location'] = event['value']
        elif event['action'] == "LOAD_LOCATION":
            # currentCtx['info']['loaded_location'] = event['value']
            a = 0
        else:
            currentCtx['musics'].append(event)

    contexts.append(currentCtx)

    df=pd.DataFrame(contexts)

    df.head()


    # ## Separa contexto das musicas

    # In[19]:


    musicTable = []
    currentMusicCtx = None
    lastMusic = None

    for ctx in contexts:
        for music in ctx['musics']:
            if music['value'] != lastMusic:
                if lastMusic:
                    currentMusicCtx.update(ctx['info'])
                    musicTable.append(currentMusicCtx)
                
                lastMusic = music['value']
                currentMusicCtx = {'uri': music['value'], 'like': 0, 'hate':0, 'restart':0}

            if music['action'] == 'LIKED_MUSIC':
                currentMusicCtx['like'] += 1
            elif music['action'] == 'HATED_MUSIC':
                currentMusicCtx['hate'] += 1
            elif music['action'] == 'RESTART_MUSIC':
                currentMusicCtx['restart'] += 1

        currentMusicCtx.update(ctx['info'])
        musicTable.append(currentMusicCtx)


    dfm=pd.DataFrame(musicTable)

    dfm.head()


    # ## busca informações das musicas

    # In[20]:


    import os
    import spotipy
    from spotipy.oauth2 import SpotifyClientCredentials
    from dotenv import load_dotenv # add this line

    load_dotenv() # add this line

    sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id=os.getenv('SPOTIFY_CLIENT_ID'),
                                                            client_secret=os.getenv('SPOTIFY_CLIENT_SECRET')))

    musicsIds = list(map(lambda x : x['uri'], musicTable))

    tracks = []
    tracksMap = {}

    i = 0

    while i < len(musicsIds):
        ids = musicsIds[i:i + 50]
        response = sp.tracks(ids)
        tracks.extend(response['tracks'])
        i += 50

    for track in tracks:
        tracksMap[track['uri']] = track

    dft=pd.DataFrame(tracksMap)

    dft


    # ## busca informações dos artistas (genero)

    # In[21]:


    artistsIds = list(map(lambda x : x['artists'][0]['id'], tracks))

    artists = []
    artistsMap = {}

    i = 0
    while i < len(artistsIds):
        ids = artistsIds[i:i + 50]
        response = sp.artists(ids)
        artists.extend(response['artists'])
        i += 50

    for artist in artists:
        artistsMap[artist['uri']] = artist

    dfa=pd.DataFrame(artistsMap)

    dfa


    # ## adiciona genero a tabela

    # In[22]:


    for music in musicTable:
        artistId = tracksMap[music['uri']]['artists'][0]['uri']

        music['genre'] = artistsMap[artistId]['genres']

    dfmg=pd.DataFrame(musicTable)

    dfmg.head()


    # ## trocar musica por genero

    # In[23]:


    genreTable = []

    for music in musicTable:
        for genre in music['genre']:
            newGenre = music.copy()

            del newGenre['uri']
            del newGenre['genre']

            newGenre['genre'] = genre

            genreTable.append(newGenre)

    # https://www.allmusic.com/genres
    # https://developer.spotify.com/community/showcase/music-popcorn/

    genres = {}

    THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
    my_file_path = os.path.join(THIS_FOLDER, 'genres.json')

    with open(my_file_path) as json_file:
        data = json.load(json_file)

        for genre in data:
            genres[genre['name']] = genre

    genresDF = pd.DataFrame(genres)

    genresDF.head()

    # ## tratar generos

    for item in genreTable:
        genreName = item['genre']

        if (genreName in genres): # aqui verificamos se existe o genero na lista dos padrões
            item['genre'] = genres[genreName]['family']
        

    i = 0

    print(f"before genre len({len(genreTable)})")

    while i < len(genreTable):
        item = genreTable[i]
        genrelist = item['genre']

        if isinstance(genrelist, list):
            genreTable.pop(i)

            for genre in genrelist:
                copy = item.copy()
                copy['genre'] = genre
                genreTable.insert(i, copy)
        i += 1

    print(f"after genre len({len(genreTable)})")


    # ## Trata contextos duplicados (;)

    # In[24]:


    def trataMultiplosDaColuna(key):
        print(f"before {key} len({len(genreTable)})")

        i = 0

        while i < len(genreTable):
            genre = genreTable[i]
            ctxSplit = genre[key].split(";")
            genreTable.pop(i)

            for ctx in ctxSplit:
                genreCopy = genre.copy()
                genreCopy[key] = ctx
                genreTable.insert(i, genreCopy)

            i += 1

        print(f"after {key} len({len(genreTable)})")


    trataMultiplosDaColuna("feeling") 
    trataMultiplosDaColuna("activity")
    trataMultiplosDaColuna("location")

    # ## Trata contextos musicais (multiplos like, hate, restart)

    # In[25]:

    def trataNumericosDaColuna(key):
        print(f"before {key} len({len(genreTable)})")

        i = 0

        while i < len(genreTable):
            genre = genreTable[i]
            
            if genre[key] > 0:
                genreTable.pop(i)

                j = 0

                while j < genre[key]:
                    genreCopy = genre.copy()
                    genreCopy[key] = 1
                    genreTable.insert(i, genreCopy)

                    j += 1

            i += 1

        print(f"after {key} len({len(genreTable)})")


    trataNumericosDaColuna("like") 
    trataNumericosDaColuna("hate")
    trataNumericosDaColuna("restart")

    dfg=pd.DataFrame(genreTable)

    dataframeCache[uri] = dfg

    return dfg

def getData(uri):
    # ## knn 

    # In[31]:


    from sklearn import preprocessing
    from sklearn.model_selection import train_test_split

    # ## transformar labels

    # In[25]:


    le = preprocessing.LabelEncoder()
    dfg = prepareData(uri)
    dfgCopy = dfg.copy()

    dfgCopy['feeling'] = le.fit_transform(dfg['feeling'])
    dfgCopy['activity'] = le.fit_transform(dfg['activity'])
    dfgCopy['location'] = le.fit_transform(dfg['location'])


    del dfgCopy['genre']

    labels = le.fit_transform(dfg['genre'])

    X = dfgCopy[dfgCopy.columns[:]]
    y = labels

    return train_test_split(X, y, test_size=.3)