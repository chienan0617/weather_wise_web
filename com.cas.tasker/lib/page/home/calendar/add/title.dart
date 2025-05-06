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
    return SizedBox(
      // margin: EdgeInsets.symmetric(vertical: 0),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                flex: 3,
                child: Container(
                  margin: const EdgeInsets.only(left: 25, right: 15),
                  child: TextField(
                    decoration: InputDecoration(
                      hintText: 'add title...',
                      hintStyle: TextStyle(
                        color: style(os: -128)
                      )
                      // color
                    ),
                    cursorColor: primary,
                    controller: AddTaskInputCtrl.title.controller,
                    style: TextStyle(
                      color: style(),
                      fontSize: 18,
                      fontWeight: FontWeight.w500
                    ),
                  ),
                ),
              ),
              FittedBox(
                // flex: 1,
                child: Row(
                  children: [
                    Container(
                      margin: edge(h: 0),
                      decoration: BoxDecoration(
                        color: primary,
                        shape: BoxShape.rectangle,
                        borderRadius: BorderRadius.circular(5),
                      ),
                      width: 17.5, height: 17.5,
                    ),
                    Container(
                      margin: const EdgeInsets.only(right: 0, left: 5),
                      child: text('Pearl Pink', os: -128),
                    ),
                    Container(
                      margin: const EdgeInsets.only(right: 20, left: 5),
                      child: icon(Icons.arrow_drop_down),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
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
      firstDate: DateTime(DateTime.now().year -3),
      lastDate: DateTime(DateTime.now().year +3),
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
              headerHeadlineStyle: TextStyle(
                color: style(),
                fontSize: 24,
              ),
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

              // b) 年份選擇列表 (year picker)
              yearStyle: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
                color: style(), // 深淺自動選
              ),

              yearForegroundColor:
                  WidgetStateColor.resolveWith((states) => style()),

              // c) 星期標頭
              weekdayStyle:
                  TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: style()),
              // weekdayForegroundColor:
              //     WidgetStateColor.resolveWith((states) => style()),

              // d) 日期格子
              dayStyle: TextStyle(fontSize: 16, color: style()),
              dayForegroundColor:
                  WidgetStateColor.resolveWith((states) => style()),
              dayBackgroundColor: WidgetStateProperty.resolveWith((states) =>
                  states.contains(WidgetState.selected) ? primary : null),

              // e) 今日高亮
              todayForegroundColor: WidgetStateColor.resolveWith((states) => primary),
              todayBackgroundColor: WidgetStateProperty.resolveWith((states) =>
                  states.contains(WidgetState.selected) ? primary.withOpacity(0.4) : null),

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
            dialogTheme: DialogThemeData(backgroundColor: style(op: false, n: true, os: 0)),
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
        _dateController.text = "${pickedDate.year}-${pickedDate.month}-${pickedDate.day}";
      });
      print('選取的日期: $pickedDate');
      // 在這裡處理選取的時間
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Row(
        children: <Widget>[
          Expanded(
            child: TextField(
              controller: _dateController,
              readOnly: true, // 防止使用者手動輸入
              decoration: const InputDecoration(
                labelText: '選擇日期',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          const SizedBox(width: 16.0),
          IconButton(
            onPressed: _selectDate,
            icon: icon(Icons.calendar_today),
          ),
        ],
      ),
    );
  }
}

class _DatePickerWithCustomTitle extends StatelessWidget {
  final String? selectDateText;
  final Widget child;

  const _DatePickerWithCustomTitle({
    super.key,
    this.selectDateText,
    required this.child,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(
            selectDateText ?? 'Select date',
            style: Theme.of(context).dialogTheme.titleTextStyle,
            textAlign: TextAlign.center,
          ),
        ),
        Expanded(
          child: child,
        ),
      ],
    );
  }
}