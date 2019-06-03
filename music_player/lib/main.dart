import 'dart:math';

import 'package:flutter/cupertino.dart' as prefix0;
import 'package:flutter/material.dart';
import 'package:music_player/songs.dart';
import 'package:music_player/theme.dart';

import 'package:fluttery/gestures.dart';

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
              child: RadialDragGestureDetector(
                child: Container(
                  width: double.infinity,
                  height: double.infinity,
                  color: Colors.transparent,
                  child: Center(
                      child: Container(
                    width: 140.0,
                    height: 140.0,
                    child: RadisProgressBar(
                      trackColor: const Color(0xFFDDDDDD),
                      progressPrecent: 0.25,
                      thumbPosition: 0.25,
                      progressColor: accentColor,
                      thumbColor: lightAccentColor,
                      innerEdgePadding: EdgeInsets.all(10.0),
                      // trackWidth: 10.0,
                      // progressWidth: 6.0,
                      // progressColor: Colors.red,
                      // thumbSize: 3.0,
                      // thumbColor: Colors.black,
                      child: ClipOval(
                        clipper: CricleClipper(),
                        child: Image.network(
                          demoPlaylist.demoSongs[0].albumArtUrl,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  )),
                ),
              ),
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

class RadisProgressBar extends StatefulWidget {
  final double trackWidth;
  final Color trackColor;
  final double progressWidth;
  final double progressPrecent;
  final Color progressColor;
  final double thumbSize;
  final Color thumbColor;
  final double thumbPosition;

  final EdgeInsets outEdgePadding;
  final EdgeInsets innerEdgePadding;

  final Widget child;
  RadisProgressBar(
      {this.trackColor = Colors.grey,
      this.trackWidth = 3.0,
      this.progressColor = Colors.black,
      this.progressWidth = 5.0,
      this.progressPrecent = 0.0,
      this.thumbColor = Colors.black,
      this.thumbSize = 10.0,
      this.thumbPosition = 0.0,
      this.outEdgePadding = const EdgeInsets.all(0.0),
      this.innerEdgePadding = const EdgeInsets.all(0.0),
      this.child});

  @override
  _RadisProgressBarState createState() => _RadisProgressBarState();
}

class _RadisProgressBarState extends State<RadisProgressBar> {
  EdgeInsets _insetsForPainter() {
    final outerThickness =
        max(widget.trackWidth, max(widget.progressWidth, widget.thumbSize)) /
            2.0;
    return EdgeInsets.all(outerThickness);
  }

  @override
  Widget build(BuildContext context) {
    return prefix0.Padding(
      padding: widget.outEdgePadding,
      child: CustomPaint(
        foregroundPainter: RadialSeekBarPaint(
            thumbColor: widget.thumbColor,
            thumbSize: widget.thumbSize,
            thumbPosition: widget.thumbPosition,
            progressColor: widget.progressColor,
            progressPrecent: widget.progressPrecent,
            progressWidth: widget.progressWidth,
            trackColor: widget.trackColor,
            trackWidth: widget.trackWidth),
        child: Padding(
          padding: _insetsForPainter() + widget.innerEdgePadding,
          child: widget.child,
        ),
      ),
    );
  }
}

class RadialSeekBarPaint extends CustomPainter {
  final double trackWidth;
  Paint trackPaint;
  final double progressWidth;
  final double progressPrecent;
  final Paint progressPaint;
  final double thumbSize;
  final double thumbPosition;
  final Paint thumbPaint;

  RadialSeekBarPaint(
      {@required trackColor,
      @required this.trackWidth,
      @required progressColor,
      @required this.progressWidth,
      @required this.progressPrecent,
      @required thumbColor,
      @required this.thumbSize,
      @required this.thumbPosition})
      : trackPaint = Paint()
          ..color = trackColor
          ..style = PaintingStyle.stroke
          ..strokeWidth = trackWidth,
        progressPaint = Paint()
          ..color = progressColor
          ..style = PaintingStyle.stroke
          ..strokeWidth = progressWidth
          ..strokeCap = StrokeCap.round,
        thumbPaint = Paint()
          ..color = thumbColor
          ..style = PaintingStyle.fill;

  @override
  void paint(Canvas canvas, Size size) {
    final outerThickness = max(trackWidth, max(progressWidth, thumbSize));

    Size contarinedSize =
        Size(size.width - outerThickness, size.height - outerThickness);

    final radius = min(contarinedSize.width, contarinedSize.height) / 2;
    final center = Offset(size.width / 2, size.height / 2);

    canvas.drawCircle(center, radius, trackPaint);

    final progressAngle = 2 * pi * progressPrecent;
    canvas.drawArc(Rect.fromCircle(center: center, radius: radius), -pi / 2,
        progressAngle, false, progressPaint);

    final thumbAngle = 2 * pi * thumbPosition - (pi / 2);
    final thumbX = cos(thumbAngle) * radius;
    final thumbY = sin(thumbAngle) * radius;
    final thumbCenter = Offset(thumbX, thumbY) + center;
    final thumbRadius = thumbSize / 2.0;

    canvas.drawCircle(thumbCenter, thumbRadius, thumbPaint);
  }

  @override
  bool shouldRepaint(prefix0.CustomPainter oldDelegate) {
    // TODO: implement shouldRepaint
    return null;
  }
}
