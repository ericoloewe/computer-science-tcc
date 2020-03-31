import 'package:flutter/material.dart';

class WelcomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
          padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 16.0),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
            Container(
                height: 350,
                child: ListView(children: <Widget>[
                  Text('Bem vindo!', style: Theme.of(context).textTheme.title),
                  Text(
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                      style: Theme.of(context).textTheme.body1),
                ])),
            Align(
                alignment: Alignment.bottomCenter,
                child: SizedBox(
                    width: double.infinity,
                    child: RaisedButton(
                      child: Text('Continuar'),
                      onPressed: () => print("Continuou"),
                    )))
          ])),
    );
  }
}
