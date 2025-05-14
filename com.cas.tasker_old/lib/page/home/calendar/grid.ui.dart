import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/calendar.ctrl.dart';

class GridPageView extends StatefulWidget {
  final BoxConstraints cons;
  const GridPageView({
    super.key,
    required this.cons,
  });

  @override
  State<GridPageView> createState() => _GridPageViewState();
}

class _GridPageViewState extends State<GridPageView> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget.cons.maxWidth,
      height: widget.cons.maxHeight -30,
      child: PageView(
        controller: CalendarCtrl.controller,
        onPageChanged: (index) {
          CalendarCtrl.onPageChange(index, () => setState(() {}));
        },
        children: CalendarCtrl.getPageMonth(widget.cons),
      )
    );
  }
}