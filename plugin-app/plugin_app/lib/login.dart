import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _MyLoginPageState createState() => _MyLoginPageState();
}

class _MyLoginPageState extends State<LoginPage> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
          padding: const EdgeInsets.symmetric(vertical: 30, horizontal: 16.0),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                Image.network(
                    'https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png', width: 94, height: 94),
                TextFormField(
                  decoration: const InputDecoration(
                    hintText: 'Enter your email',
                  ),
                  controller: emailController,
                  validator: (value) {
                    if (value.isEmpty) {
                      return 'Please enter some text';
                    }
                    return null;
                  },
                ),
                TextFormField(
                  decoration: const InputDecoration(
                    hintText: 'Enter your password',
                  ),
                  controller: passwordController,
                  validator: (value) {
                    if (value.isEmpty) {
                      return 'Please enter some text';
                    }
                    return null;
                  },
                ),
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
