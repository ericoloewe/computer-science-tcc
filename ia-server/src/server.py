#!/usr/bin/env python
# coding: utf-8

# # Poc utilizando KNN para trabalho de conclusão de Ciência da computação da Feevale

from result import getResultOfUri
from score import getScoreOfUri

# ## Server

# In[ ]:

from flask import Flask, request, jsonify

server = Flask(__name__)

@server.route("/")
def hello():
    uri = request.args.get("uri", default = '', type = str)
    feeling = request.args.get("feeling", default = '', type = str)
    activity = request.args.get("activity", default = '', type = str)
    location = request.args.get("location", default = '', type = str)
    response = {'message': "Invalid request (params: uri, feeling, activity, location)"}

    if uri != "" and feeling != "" and activity != "" and location != "":
        response["message"] = f"your score is: {getScoreOfUri(uri)}"
        response["genre"] = getResultOfUri(uri, feeling, activity, location)

    return jsonify(response)

if __name__ == "__main__":
   server.run(host='0.0.0.0')