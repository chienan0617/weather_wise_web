import 'package:flutter/material.dart';
import 'package:tasker/func/home/calendar/view/content.ctrl.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/util/customize.util.dart';

Widget contentListTile({
  required IconData iconData,
  required String title,
  required Widget trailing,
  required VoidCallback onPressed, // 修改這裡
  bool autoTranslate = true,
}) => _ContentListTile(
  iconData: iconData, 
  title: title, 
  trailing: trailing, 
  autoTranslate: autoTranslate,
  onPressed: onPressed, // 傳入的是 VoidCallback
);

class _ContentListTile extends StatefulWidget {
  final IconData iconData;
  final String title;
  final Widget trailing;
  final VoidCallback onPressed; // 修改這裡
  final bool autoTranslate;

  const _ContentListTile({
    required this.iconData,
    required this.title,
    required this.trailing,
    required this.autoTranslate,
    required this.onPressed,
  });

  @override
  State<_ContentListTile> createState() => _ContentListTileState();
}

class _ContentListTileState extends State<_ContentListTile> {
  // 其他程式碼保持不變...

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 10),
      decoration: BoxDecoration(
        color: style(os: 0, op: false)
      ),
      padding: EdgeInsets.symmetric(horizontal: 7.5, vertical: 5),
      child: ListTile(
        onTap: widget.onPressed, // 直接調用 VoidCallback
        leading: Icon(
          widget.iconData, 
          size: 24,
          color: style(),
        ),
        title: Text(
          widget.autoTranslate ? lan(widget.title) : widget.title,
          maxLines: 1,
          style: TextStyle(
            color: style(),
            fontWeight: FontWeight.w500,
            fontSize: 20,
          ),
        ),
        trailing: widget.trailing,
      ),
    );
  }
}


Widget contentDivider({
  double h = 0.25,
  double mh = 20,
  double mv = 0,
  double pv = 0,
}) => _ContentDivider(
  height: h,
  marginHor: mh,
  marginVer: mv,
  paddingVer: pv,
);

class _ContentDivider extends StatelessWidget {
  final double height, marginHor, marginVer, paddingVer;

  const _ContentDivider({
    required this.height, 
    required this.marginHor,
    required this.marginVer,
    required this.paddingVer,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(vertical: paddingVer),
      margin: EdgeInsets.symmetric(
        horizontal: marginHor,
        vertical: marginVer,
      ),
      height: height,
      color: style(),
    );
  }
}

void showSelectColorDialog(BuildContext context) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return const _SelectColorDialog();
    },
  );
}


class _SelectColorDialog extends StatefulWidget {
  const _SelectColorDialog({super.key});

  @override
  State<_SelectColorDialog> createState() => __SelectColorDialogState();
}

class __SelectColorDialogState extends State<_SelectColorDialog> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      backgroundColor: style(op: false, os: 0),
      content: SingleChildScrollView(
        child: Column(
          children: List.generate(
            CalendarAddCtrl.color.colorList.length, (int index) {
              return ListTile(
                leading: GestureDetector(
                  onTap: () => CalendarAddCtrl.color.onIndexChange(
                    index, () => setState(() {}), context,
                  ),
                  child: Container(
                    width: 17.5,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: CalendarAddCtrl.color.colorList[index]
                    ),
                  ),
                ),
                title: text(CalendarAddCtrl.color.colorName[index]),
              );
            }
          ),
        ),
      ),
      title: text('選擇顏色', size: 22),
    );
  }
}