import 'dart:math';

import 'package:flutter/material.dart';
import 'package:music_player/theme.dart';


class CricleClipper extends CustomClipper<Rect> {
  @override
  Rect getClip(Size size) {
    return Rect.fromCircle(
        center: Offset(size.width / 2, size.height / 2),
        radius: min(size.width, size.height) / 2);
  }

  @override
  bool shouldReclip(CustomClipper<Rect> oldClipper) {
    return null;
  }
}


class BottomControlls extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: Material(
        shadowColor: const Color(0x44000000),
        color: accentColor,
        child: Padding(
          padding: const EdgeInsets.only(top: 4.0, bottom: 50.0),
          child: Column(
            children: <Widget>[
              RichText(
                text: TextSpan(text: "", children: [
                  new TextSpan(
                      text: "song title\n",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 14.0,
                        height: 1.5,
                        letterSpacing: 4.0,
                        fontWeight: FontWeight.bold,
                      )),
                  TextSpan(
                      text: "artist name",
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.75),
                        letterSpacing: 3.0,
                        height: 1.5,
                        fontSize: 12.0,
                      ))
                ]),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 40.0),
                child: Row(
                  children: <Widget>[
                    Expanded(
                      child: Container(),
                    ),
                    PerviousButton(),
                    Expanded(
                      child: Container(),
                    ),
                    PlayPauseButton(),
                    Expanded(
                      child: Container(),
                    ),
                    NextButton(),
                    Expanded(
                      child: Container(),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}

class PerviousButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return IconButton(
      splashColor: lightAccentColor,
      highlightColor: Colors.transparent,
      icon: Icon(Icons.skip_previous),
      color: Colors.white,
      onPressed: () {},
      iconSize: 35.0,
    );
  }
}

class PlayPauseButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return RawMaterialButton(
      shape: CircleBorder(),
      fillColor: Colors.white,
      splashColor: lightAccentColor,
      highlightColor: lightAccentColor.withOpacity(0.5),
      elevation: 10.0,
      highlightElevation: 5.0,
      onPressed: () {},
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Icon(
          Icons.play_arrow,
          color: darkAccentColor,
          size: 35.0,
        ),
      ),
    );
  }
}

class NextButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return IconButton(
      splashColor: lightAccentColor,
      highlightColor: Colors.transparent,
      icon: Icon(Icons.skip_next),
      color: Colors.white,
      onPressed: () {},
      iconSize: 35.0,
    );
  }
}
