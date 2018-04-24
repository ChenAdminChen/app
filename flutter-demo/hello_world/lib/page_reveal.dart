import 'dart:math';

import 'package:flutter/material.dart';

//用于页面转换时的动画
class PageReveal extends StatelessWidget {

  final double revealPercent;
  final Widget child;

  PageReveal({
    this.child,
    this.revealPercent,
 });

  @override
  Widget build(BuildContext context) {
    return new ClipOval(
      clipper: new CircleRevealClipper(revealPercent:revealPercent),
      child:child,
    );
  }
}

class CircleRevealClipper extends CustomClipper<Rect>{
  final double revealPercent;

  CircleRevealClipper({
    this.revealPercent,
});

  @override
  Rect getClip(Size size) {
    final epicenter = new Offset(size.width / 2, size.height * 0.9);

    //calculate distance from epicenter to the top left corner tomakte sure we fill th screen
    double theta = atan(epicenter.dy/ epicenter.dx);

    final distanceToCorner = epicenter.dy / sin(theta);

    final radius = distanceToCorner * revealPercent;

    final diameter  = 2 * radius;

    return new Rect.fromLTWH(epicenter.dx -radius, epicenter.dy -radius, diameter, diameter);
  }

  @override
  bool shouldReclip(CustomClipper<Rect> oldClipper) {
    return true;
  }

}
