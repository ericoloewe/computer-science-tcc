from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
import pandas as pd

def getModel(X, y):
    from sklearn.neighbors import KNeighborsClassifier

    # k = bestK(X, y)

    model = KNeighborsClassifier(n_neighbors=9)

    model.fit(X, y)

    return model

def bestK(X, y):
    # Intervalo de números ímpares de 1 a 10 para utilização do k no KNN
    listakvizinhos = list(range(1,10,2))
    print(listakvizinhos)

    # Intervalo de possíveis valores para k-fold
    listakfolds = list(range(10,20))
    print(listakfolds)

    # Estruturas para armazenar os valores dos modelos
    listakmodelo = []
    listakfoldmodelo = []
    listaresultadosmodelo = []
    print(listakmodelo, listakfoldmodelo, listaresultadosmodelo)

    # Executando o Knn para cada k de listakvizinhos e para cada fold (f) de listakfolds
    for k in listakvizinhos:
        for f in listakfolds:
            knn = KNeighborsClassifier(n_neighbors=k)
            scores = cross_val_score(knn, X, y, cv=f, scoring='accuracy')
            listaresultadosmodelo.append(scores.mean())
            listakmodelo.append(k)                 
            listakfoldmodelo.append(f)

    MSE = [(1 - x) for x in listaresultadosmodelo]

    # contrução do dataframe
    df_1 = pd.DataFrame (listakmodelo, columns=['listakmodelo'])
    df_2 = pd.DataFrame (listakfoldmodelo, columns=['listakfoldmodelo'])
    df_3 = pd.DataFrame (MSE, columns=['MSE'])
    df_knn = pd.concat([df_1, df_2, df_3], axis=1)
    print(df_knn)

    # retorna o menor erro obtido
    menorerro = min(df_knn['MSE'])
    print(menorerro)

    # descobre quais linhas do dataframe possuem os valores ótimos
    elementosotimos = df_knn[df_knn['MSE'] == menorerro]
    print(elementosotimos)

    return elementosotimos['listakmodelo'][elementosotimos.index[0]]
