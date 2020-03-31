import 'package:flutter/material.dart';

class ArtistPage extends StatefulWidget {
  @override
  _MyArtistPage createState() => _MyArtistPage();
}

class _MyArtistPage extends State<ArtistPage> {
  final findController = TextEditingController();
  List<Artist> artists = <Artist>[
    Artist('lorem'),
    Artist('ipsum'),
    Artist('dolor'),
    Artist('set'),
    Artist('lorem 2'),
    Artist('ipsum 3'),
    Artist('dolor 4'),
    Artist('set 5'),
    Artist('lorem 1'),
    Artist('ipsum 321'),
    Artist('dolor 3213'),
    Artist('set 434'),
    Artist('lorem 55'),
    Artist('ipsum 66'),
    Artist('dolor 77'),
    Artist('set 8'),
  ];

  Artist _value;

  @override
  void dispose() {
    findController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          // Here we take the value from the MyHomePage object that was created by
          // the App.build method, and use it to set our appbar title.
          title: Text("Artista preferidos"),
        ),
        body: Padding(
            padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 16.0),
            child: Column(
              children: <Widget>[
                TextFormField(
                  decoration: const InputDecoration(
                    hintText: 'Nome do artista',
                  ),
                  controller: findController,
                  validator: (value) {
                    if (value.isEmpty) {
                      return 'Please enter some text';
                    }
                    return null;
                  },
                ),
                ConstrainedBox(
                    constraints: new BoxConstraints(
                      minHeight: 300.0,
                      maxHeight: MediaQuery.of(context).size.height - 193,
                    ),
                    child: ListView(
                        children: artists
                            .map((a) => ChoiceChip(
                                  padding: const EdgeInsets.symmetric(
                                      vertical: 15, horizontal: 15),
                                  label: Text(a.name),
                                  selected: _value == a.name,
                                  onSelected: (bool selected) {
                                    print(selected);
                                  },
                                ))
                            .toList()))
              ],
            )));
  }
}

class Artist {
  String name;
  String description;
  String image;

  Artist(this.name);
}
