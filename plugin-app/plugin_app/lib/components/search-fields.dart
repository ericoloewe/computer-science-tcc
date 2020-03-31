import 'package:flutter/material.dart';

class SearchFields extends StatefulWidget {
  @override
  _SearchFields createState() => _SearchFields();
}

class _SearchFields extends State<SearchFields> {
  final findController = TextEditingController();
  List<SearchFieldItem> artists;

  SearchFieldItem _value;

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
        constraints: new BoxConstraints(
          minHeight: 300.0,
          maxHeight: MediaQuery.of(context).size.height - 193,
        ),
        child: ListView(
            children: artists
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
                .toList()));
  }
}

class SearchFieldItem {
  String image;
  String name;
}
