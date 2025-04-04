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
        onPageChanged: CalendarCtrl.onPageChange,
        children: CalendarCtrl.getPageMonth(widget.cons),
      )
    );
  }
}

// ddd

class CalendarPageView extends StatefulWidget {
  const CalendarPageView({super.key});

  @override
  _CalendarPageViewState createState() => _CalendarPageViewState();
}

class _CalendarPageViewState extends State<CalendarPageView> {
  late PageController _pageController;
  // 假设用 DateTime 表示当前月份
  DateTime _currentMonth = DateTime.now();

  // 三个页面的数据，可以是 widget 或者直接数据，下面用简单字符串代表
  late List<String> _pages;

  @override
  void initState() {
    super.initState();
    _pageController = PageController(initialPage: 1);
    _updatePages();
  }

  // 根据当前月份更新三个页面的数据（调用你写好的 getPageUpdate()）
  void _updatePages() {
    // 假设 getPageUpdate 返回一个包含 [前一月, 这月, 后一月] 的列表
    // 这里你可以根据 _currentMonth 做相应的计算
    _pages = getPageUpdate(_currentMonth);
  }

  // 模拟 getPageUpdate 方法
  List<String> getPageUpdate(DateTime currentMonth) {
    DateTime prev = DateTime(currentMonth.year, currentMonth.month - 1);
    DateTime next = DateTime(currentMonth.year, currentMonth.month + 1);
    return [
      '前一月：${prev.year}-${prev.month}',
      '本月：${currentMonth.year}-${currentMonth.month}',
      '后一月：${next.year}-${next.month}',
    ];
  }

  // 当滑动结束时更新数据
  void _onPageChanged(int index) {
    if (index == 0) {
      // 向左滑，表示进入前一月
      setState(() {
        _currentMonth = DateTime(_currentMonth.year, _currentMonth.month - 1);
        _updatePages();
      });
      // 重置为中间页面（无动画跳转）
      _pageController.jumpToPage(1);
    } else if (index == 2) {
      // 向右滑，表示进入后一月
      setState(() {
        _currentMonth = DateTime(_currentMonth.year, _currentMonth.month + 1);
        _updatePages();
      });
      _pageController.jumpToPage(1);
    }
    // 如果 index == 1，则正好是中间页，不做更新
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('日历 PageView')),
      body: PageView.builder(
        controller: _pageController,
        itemCount: _pages.length, // 固定为3
        onPageChanged: _onPageChanged,
        itemBuilder: (context, index) {
          return Center(
            child: Text(
              _pages[index],
              style: TextStyle(fontSize: 24),
            ),
          );
        },
      ),
    );
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }
}
