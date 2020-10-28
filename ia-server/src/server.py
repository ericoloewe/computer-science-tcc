#!/usr/bin/env python
# coding: utf-8

# # Poc utilizando KNN para trabalho de conclusão de Ciência da computação da Feevale

def prepareData(uri):
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

    dfg=pd.DataFrame(genreTable)

    dfg.head()


    # ## Trata contextos duplicados (;)

    # In[24]:


    def asd(key):
        print(f"before {key} len({len(genreTable)})")

        for i in range(len(genreTable)):
            genre = genreTable[i]
            ctxSplit = genre[key].split(";")
            genreTable.pop(i)

            for ctx in ctxSplit:
                genreCopy = genre.copy()
                genreCopy[key] = ctx
                genreTable.insert(i, genreCopy)

        print(f"after {key} len({len(genreTable)})")


    asd("feeling")
    asd("activity")
    asd("location")

    dfg=pd.DataFrame(genreTable)

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

    dfg['feeling'] = le.fit_transform(dfg['feeling'])
    dfg['activity'] = le.fit_transform(dfg['activity'])
    dfg['location'] = le.fit_transform(dfg['location'])

    dfgCopy = dfg.copy()

    del dfgCopy['genre']

    labels = le.fit_transform(dfg['genre'])

    X = dfgCopy[dfgCopy.columns[:]]
    y = labels

    return train_test_split(X, y, test_size=.3)

def getModel(X, y):
    from sklearn.neighbors import KNeighborsClassifier

    model = KNeighborsClassifier(n_neighbors=3)

    model.fit(X, y)

    return model


# ## Score KNN

# In[32]:

modelCache = {}
dataCache = {}

def getScoreOfUri(uri):
    model = None

    if (uri not in dataCache):
        dataCache[uri] = getData(uri)

    X_train, X_test, y_train, y_test = dataCache[uri]

    if (uri not in modelCache):
        modelCache[uri] = getModel(X_train, y_train)

    model = modelCache[uri]

    return model.score(X_test, y_test)

modelResultCache = {}

def getResultOfUri(uri):
    model = None

    from sklearn import preprocessing

    le = preprocessing.LabelEncoder()
    dfg = prepareData(uri)

    dfg['feeling'] = le.fit_transform(dfg['feeling'])
    dfg['activity'] = le.fit_transform(dfg['activity'])
    dfg['location'] = le.fit_transform(dfg['location'])

    dfgCopy = dfg.copy()

    del dfgCopy['genre']

    labels = le.fit_transform(dfg['genre'])

    X = dfgCopy[dfgCopy.columns[:]]
    y = labels

    if (uri not in modelResultCache):
        modelResultCache[uri] = getModel(X, y)

    model = modelResultCache[uri]
    result = model.predict([[1,  0,  1,  0,  0,  0]])

    return le.inverse_transform(result)[0]

# ## Server

# In[ ]:

from flask import Flask, request, jsonify

server = Flask(__name__)

@server.route("/")
def hello():
    uri = request.args.get("uri", default = '', type = str)
    response = {'message': "Invalid uri"}

    if uri != "":
        response["message"] = f"your score is: {getScoreOfUri(uri)}"
        response["genre"] = getResultOfUri(uri)

    return jsonify(response)

if __name__ == "__main__":
   server.run(host='0.0.0.0')