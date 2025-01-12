import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          leading: Builder(
            builder: (BuildContext context) {
              return GestureDetector(
                onTap: () {},
                child: Image.asset("/images/logo.png"),
              );
            },
          ),
          backgroundColor: Colors.brown,
          title: Center(child: const Text('Home Page')),
        ),
      ),
    );
  }
}
