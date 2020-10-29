#!/usr/bin/env python
# coding: utf-8

# # Poc utilizando KNN para trabalho de conclusão de Ciência da computação da Feevale

from data import getData
from knn import getModel

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