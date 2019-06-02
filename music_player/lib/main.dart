import 'dart:math';

import 'package:flutter/cupertino.dart' as prefix0;
import 'package:flutter/material.dart';
import 'package:music_player/songs.dart';
import 'package:music_player/theme.dart';

import 'bottom_controlls.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'music player Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'music player page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("music player"),
        backgroundColor: Colors.transparent,
        elevation: 0.0,
        leading: IconButton(
          icon: Icon(
            Icons.arrow_back_ios,
          ),
          color: const Color(0xFFDDDDDD),
          onPressed: () {},
        ),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.menu,
            ),
            color: const Color(0xFFDDDDDD),
            onPressed: () {},
          ),
        ],
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            //seek bar
            Expanded(
              child: Center(
                  child: Container(
                width: 125.0,
                height: 125.0,
                child: ClipOval(
                  clipper: CricleClipper(),
                  child: Image.network(
                    demoPlaylist.demoSongs[0].albumArtUrl,
                    fit: BoxFit.cover,
                  ),
                ),
              )),
            ),

            //visualize
            Container(
              width: double.infinity,
              height: 125.0,
            ),

            //song
            BottomControlls(),

            //song title, artis name
          ],
        ),
      ),
    );
  }
}

class RadisSeekBar extends StatefulWidget {
  final double trackWidth;
  final Color trackColor;
  final double progressWidth;
  final double progressPrecent;
  final Color progressColor;
  final double thumbWidth;
  final Color thumbColor;
  final double thumbPosition;

  final Widget chile;
  RadisSeekBar(
      {this.trackColor = Colors.grey,
      this.trackWidth = 3.0,
      this.progressColor = Colors.black,
      this.progressWidth = 5.0,
      this.progressPrecent = 0.0,
      this.thumbColor = Colors.black,
      this.thumbWidth = 10.0,
      this.thumbPosition = 0.0,
      this.chile});

  @override
  _RadisSeekBarState createState() => _RadisSeekBarState();
}

class _RadisSeekBarState extends State<RadisSeekBar> {
  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      child: RadialSeekBarPaint(),
    );
  }
}

class RadialSeekBarPaint extends StatefulWidget {
  final double trackWidth;
  final Color trackColor;
  Paint trackPaint;
  final double progressWidth;
  final double progressPrecent;
  final Color progressColor;
  final Paint progressPaint;
  final double thumbWidth;
  final Color thumbColor;
  final double thumbPosition;
  final Paint thumbPaint;

  RadialSeekBarPaint(
      {this.trackColor,
      this.trackWidth,
      this.trackPaint,
      this.progressColor,
      this.progressWidth,
      this.progressPaint,
      this.progressPrecent,
      this.thumbColor,
      this.thumbWidth,
      this.thumbPaint,
      this.thumbPosition});

  @override
  _RadialSeekBarPaintState createState() => _RadialSeekBarPaintState();
}

class _RadialSeekBarPaintState extends State<RadialSeekBarPaint> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
