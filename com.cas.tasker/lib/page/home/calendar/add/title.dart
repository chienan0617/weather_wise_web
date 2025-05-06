import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:tasker/func/home/calendar/add/edit_content.ctrl.dart';
import 'package:tasker/library.util.dart';
import 'package:tasker/page/home/calendar/view/content.mod.dart';

class AddTitle extends StatefulWidget {
  const AddTitle({super.key});

  @override
  State<AddTitle> createState() => _AddTitleState();
}

class _AddTitleState extends State<AddTitle> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(left: 25, right: 15),
      child: TextField(
        decoration: InputDecoration(
          hintText: 'add title...',
          hintStyle: TextStyle(color: style(os: -128)),
          // color
        ),
        cursorColor: primary,
        controller: AddTask.titleInput.controller,
        style: TextStyle(
          color: style(),
          fontSize: 18,
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }
}

class AddContentEditor extends StatefulWidget {
  const AddContentEditor({super.key});

  @override
  State<AddContentEditor> createState() => _AddContentEditorState();
}

class _AddContentEditorState extends State<AddContentEditor> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Expanded(
        child: Container(
          margin: const EdgeInsets.only(left: 25, right: 15),
          child: TextField(
            expands: true,
            maxLines: null, minLines: null,
            decoration: InputDecoration(
              hintText: 'add content...',
              hintStyle: TextStyle(color: style(os: -128)),
            ),
            cursorColor: primary,
            controller: AddTask.contentInput.controller,
            style: TextStyle(
              color: style(),
              fontSize: 18,
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
      ),
    );
  }
}

class AddDate extends StatefulWidget {
  const AddDate({super.key});

  @override
  State<AddDate> createState() => _AddDateState();
}

class _AddDateState extends State<AddDate> {
  final TextEditingController _dateController = TextEditingController();

  void _selectDate() async {
    DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(DateTime.now().year - 3),
      lastDate: DateTime(DateTime.now().year + 3),
      builder: (context, child) {
        return Theme(
          data: Theme.of(context).copyWith(
            // 1. 整體 Dialog 背景
            // colorScheme: Theme.of(context).colorScheme.copyWith(
            //   primary: primary, // 修改這裡以更改標頭背景色 (包含 May 2025 和按鈕)
            //   onPrimary: style(), // 修改這裡以更改標頭文字和按鈕顏色
            // ),

            // 3. DatePicker 主題細節
            datePickerTheme: DatePickerThemeData(
              backgroundColor: style(op: false, n: true, os: 0),

              // a) Header 文字：年、月
              headerHeadlineStyle: TextStyle(color: style(), fontSize: 24),
              // rangePickerHeaderHeadlineStyle: ,
              headerBackgroundColor: primary,
              headerForegroundColor: primaryStyle(), // 使用 .color 獲取顏色

              rangePickerHeaderHelpStyle: TextStyle(
                color: style(),
                fontSize: 55,
              ),
              rangePickerBackgroundColor: style(),
              rangePickerHeaderBackgroundColor: style(),
              rangePickerHeaderForegroundColor: style(),
              inputDecorationTheme: InputDecorationTheme(
                hintStyle: TextStyle(color: Colors.amber),
              ),

              // b) 年份選擇列表 (year picker)
              yearStyle: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
                color: style(), // 深淺自動選
              ),

              yearForegroundColor: WidgetStateColor.resolveWith(
                (states) => style(),
              ),

              // c) 星期標頭
              weekdayStyle: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: style(),
              ),
              // weekdayForegroundColor:
              //     WidgetStateColor.resolveWith((states) => style()),

              // d) 日期格子
              dayStyle: TextStyle(fontSize: 16, color: style()),
              dayForegroundColor: WidgetStateColor.resolveWith(
                (states) => style(),
              ),
              dayBackgroundColor: WidgetStateProperty.resolveWith(
                (states) =>
                    states.contains(WidgetState.selected) ? primary : null,
              ),

              // e) 今日高亮
              todayForegroundColor: WidgetStateColor.resolveWith(
                (states) => primary,
              ),
              todayBackgroundColor: WidgetStateProperty.resolveWith(
                (states) =>
                    states.contains(WidgetState.selected)
                        ? primary.withOpacity(0.4)
                        : null,
              ),

              // f) 按鈕：取消、確定
              cancelButtonStyle: ButtonStyle(
                foregroundColor: WidgetStateProperty.all(primary),
                textStyle: WidgetStateProperty.all(
                  const TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
              ),
              confirmButtonStyle: ButtonStyle(
                foregroundColor: WidgetStateProperty.all(primary),
                textStyle: WidgetStateProperty.all(
                  const TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
              ),
            ),
            dialogTheme: DialogThemeData(
              backgroundColor: style(op: false, n: true, os: 0),
            ),
          ),
          child: _DatePickerWithCustomTitle(
            selectDateText: '請選擇一個日期', // 自訂標題文字
            child: child!,
          ),
        );
      },
    );

    if (pickedDate != null) {
      setState(() {
        _dateController.text =
            "${pickedDate.year}-${pickedDate.month}-${pickedDate.day}";
      });
      print('選取的日期: $pickedDate');
      // 在這裡處理選取的時間
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: edge(v: 7.5, h: 15),
      child: Row(
        children: <Widget>[
          Expanded(
            // flex: 1,
            child: Container(
              // height: 45,
              // decoration: BoxDecoration(
              //   // border: Border.all(color: Colors.a)
              // ),
              margin: edge(h: 10),
              child: TextField(
                // scrollPadding: edge(h: 10),
                style: TextStyle(
                  color: style(),
                  fontSize: 16,
                  fontWeight: FontWeight.w500,
                ),
                controller: _dateController,
                readOnly: true, // 防止使用者手動輸入
                decoration: InputDecoration(
                  suffixIcon: IconButton(
                    onPressed: _selectDate,
                    icon: icon(Icons.calendar_today, size: 18),
                  ),
                  contentPadding: edge(h: 10),
                  labelStyle: TextStyle(fontSize: 16, color: primary),
                  labelText: '選擇日期',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8.0), // 邊框圓角
                    borderSide: BorderSide(
                      color: Colors.grey, // 預設邊框顏色
                      width: 1.0,
                    ),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8.0),
                    borderSide: BorderSide(
                      color: style(os: 32, op: false), // 未聚焦時的邊框顏色
                    ),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8.0),
                    borderSide: BorderSide(
                      color: style(os: 64, op: false), // 聚焦時的邊框顏色
                    ),
                  ),
                ),
              ),
            ),
          ),
          // const SizedBox(width: 16.0),
          // IconButton(
          //   onPressed: _selectDate,
          //   icon: icon(Icons.calendar_today),
          // ),
          // Expanded(
          // flex: 1,
          GestureDetector(
            onTap: () => showPickColorDialog(context),
            child: Row(
              children: [
                Container(
                  margin: edge(h: 0),
                  decoration: BoxDecoration(
                    color: primary,
                    shape: BoxShape.rectangle,
                    borderRadius: BorderRadius.circular(5),
                  ),
                  width: 17.5,
                  height: 17.5,
                ),
                Container(
                  margin: const EdgeInsets.only(right: 0, left: 5),
                  child: text('Pearl Pink', os: -128),
                ),
                Container(margin: edge(h: 5), child: icon(Icons.arrow_drop_down)),
              ],
            ),
          )
          // ),
        ],
      ),
    );
  }
}

class _DatePickerWithCustomTitle extends StatelessWidget {
  final String? selectDateText;
  final Widget child;

  const _DatePickerWithCustomTitle({this.selectDateText, required this.child});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Padding(
          padding: const EdgeInsets.all(0),
          child: text(selectDateText ?? 'Select date', size: 18),
        ),
        Expanded(child: child),
      ],
    );
  }
}

void showPickColorDialog(context) =>
  showDialog(context: context, builder: (_) => PickDialog());

class PickDialog extends StatefulWidget {
  const PickDialog({super.key});

  @override
  State<PickDialog> createState() => PickDialogState();
}

class PickDialogState extends State<PickDialog> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      content: Container(
        child: Column(
          children: [...List.generate(
            AddTask.pickColor.colorList.length,
            (int index) {
              return Container(
                child: ListTile(
                  leading: Container(
                    width: 25, height: 25,
                    decoration: BoxDecoration(
                      color: AddTask.pickColor.colorList[index],
                      shape: BoxShape.circle
                    ),
                  ),
                )
              );
            }
          ),
        ]),
      ),
    );
  }
}