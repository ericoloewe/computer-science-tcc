#!/usr/bin/env python
# coding: utf-8

# # Poc utilizando KNN para trabalho de conclusão de Ciência da computação da Feevale

from data import prepareData, getModel

def transformOrDefault(le, key):
    value = 0

    try:
        value = le.transform([key])[0]
    except:
        print(f"Problem to transform")

    return value

modelResultCache = {}

def getResultOfUri(uri, feeling, activity, location):
    model = None

    from sklearn import preprocessing

    fle = preprocessing.LabelEncoder()
    ale = preprocessing.LabelEncoder()
    lle = preprocessing.LabelEncoder()
    gle = preprocessing.LabelEncoder()

    dfg = prepareData(uri)

    dfgCopy = dfg.copy()
    dfgCopy['feeling'] = fle.fit_transform(dfg['feeling'])
    dfgCopy['activity'] = ale.fit_transform(dfg['activity'])
    dfgCopy['location'] = lle.fit_transform(dfg['location'])

    del dfgCopy['genre']

    labels = gle.fit_transform(dfg['genre'])

    X = dfgCopy[dfgCopy.columns[:]]
    y = labels

    if (uri not in modelResultCache):
        modelResultCache[uri] = getModel(X, y)

    model = modelResultCache[uri]
    # like  hate  restart  feeling  activity  location

    toPredict = [[1,  0,  1,  transformOrDefault(fle, feeling), transformOrDefault(ale, activity), transformOrDefault(lle, location)]]

    print(f"predicting {toPredict}")
    result = model.predict(toPredict)

    return gle.inverse_transform(result)[0]