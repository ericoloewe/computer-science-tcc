import 'package:flutter/material.dart';

class GenderPage extends StatefulWidget {
  @override
  _MyGenderPage createState() => _MyGenderPage();
}

class _MyGenderPage extends State<GenderPage> {
  final findController = TextEditingController();
  List<Gender> genders = <Gender>[
    Gender('lorem'),
    Gender('ipsum'),
    Gender('dolor'),
    Gender('set'),
    Gender('lorem 2'),
    Gender('ipsum 3'),
    Gender('dolor 4'),
    Gender('set 5'),
    Gender('lorem 1'),
    Gender('ipsum 321'),
    Gender('dolor 3213'),
    Gender('set 434'),
    Gender('lorem 55'),
    Gender('ipsum 66'),
    Gender('dolor 77'),
    Gender('set 8'),
  ];

  Gender _value;

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
          title: Text("Generos musicais preferidos"),
        ),
        body: Padding(
            padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 16.0),
            child: Column(
              children: <Widget>[
                TextFormField(
                  decoration: const InputDecoration(
                    hintText: 'Nome do Generos',
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
                        children: genders
                            .map((a) => ListTile(
                          leading: CircleAvatar(
                            backgroundImage: NetworkImage(a.image),
                          ),
                          title: Text(a.name),
                          selected: _value == a,
                          onTap: () => setState(() {
                            _value = a;
                          }),
                        ))
                            .toList()))
              ],
            )));
  }
}

class Gender {
  String name;
  String description;
  String image =
      'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl-2.jpg';

  Gender(this.name);
}
