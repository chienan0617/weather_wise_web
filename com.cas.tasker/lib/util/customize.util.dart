import 'package:flutter/material.dart';
import 'package:tasker/library.util.dart';

int currentLanguageIndex = 1;
bool b = true;  // todo true: English, false: Chinese
String err = '<Error!>';
String notYetEnable = '<Not Yet Enable!>';

changeLan(VoidCallback v) {
  b = !b;
  currentLanguageIndex = b ? 1 : 0;
  v();
}

lan(String name) => normal[name]?[currentLanguageIndex] ?? normal[name]?[0] ?? '<Error!>';
List<String> com(String name) => (combine[name]?[currentLanguageIndex] as List) ?? combine[name]?[0] ?? '<Error!>';

getIndex(int normal) => ['en', 'zh'][normal];

List<String> combineLists(List<String> list1, List<String> list2) {
  List<String> combined = [];
  combined.addAll(list1);
  combined.addAll(list2);
  return combined;
}

Map<String, List<String>> normal = {
  'calendar': ['calendar', '日曆'],
  'testing': ['testing', '測試'],
  'setting': ['setting', '設定'],
  'layout': ['layout', '外觀設定'],
  'dark_mode': ['Dark Mode', '深色模式'],
  'theme_color': ['Theme Color', '主題顏色'],
  'about': ['About', '關於'],
  'version': ['Version', '版本'],
  'developers': ['Developers', '開發者'],
  'warning': ['Warning', '警告'],
  'there_is_no_full_day_task_today': ['there is no full day task today', '今日沒有整天的活動'],
  'repeat': ['Repeat', '重複'],
  'color': ['Color', '顏色'],
  'export_calendar_data': ['Export Calendar Data', '匯出日曆檔案'],
  'import_calendar_data': ['Import Calendar Data', '匯入日曆檔案'],
  'an_error_occurred_!': ['An error occurred !', '目前發生錯誤 !'],
  'delete_all': ['Delete all data', '刪除所有檔案'],
  'language': ['language', '繁體中文'],
  'tap_to_switch': ['tap to switch', '點擊以切換'],
  'chose_repeat_time': ['Chose repeat time', '選擇重複時間'],
  'no_title': ['untitled', '未命名'],
  'todo': ['todo', '代辦事項']
};

Map<String, List<dynamic>> combine = {
  'week': [
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  ],
  'week_ab': [
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ['日', '一', '二', '三', '四', '五', '六']
  ],
  'month': [
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  ],
  'repeat': [
    ['no repeat', 'daily', 'weekly', 'monthly', 'more will be soon'],
    ['不重複', '每天', '每周', '每月', '更多即將到來']
  ],
  'color': [
    ['Persimmon Red', 'Coral', 'Orange', 'Gold', 'Apple Green', 'Emerald', 'Medium Aqua', 'Deep Sky Blue', 'Dodger Blue', 'Slate Blue', 'Blue Violet', 'Dark Orchid', 'Orchid', 'Light Pearl Pink', 'Gray', 'Camel'],
    ['柿子紅', '珊瑚色', '橙色', '金色', '蘋果綠', '碧綠', '中寶藍色', '深天藍', '道奇藍', '岩藍', '藍紫', '重紫', '淺紫紅', '淺珍珠紅', '灰色', '駝色'],
  ],
  'language': [
    []
  ]
};

List<Color> colors = [
  hexColor('#FF4D40'), // 柿子紅 (Persimmon Red)
  hexColor('#FF7F50'), // 珊瑚色 (Coral)
  hexColor('#FFA500'), // 橙色 (Orange)
  hexColor('#FFD700'), // 金色 (Gold)
  hexColor('#ADFF2F'), // 蘋果綠 (Apple Green)
  hexColor('#50C878'), // 碧綠 (Emerald)
  hexColor('#66CDAA'), // 中寶藍色 (Medium Aqua)
  hexColor('#00BFFF'), // 深天藍 (Deep Sky Blue)
  hexColor('#1E90FF'), // 道奇藍 (Dodger Blue)
  hexColor('#6A5ACD'), // 岩藍 (Slate Blue)
  hexColor('#8A2BE2'), // 藍紫 (Blue Violet)
  hexColor('#9932CC'), // 重紫 (Dark Orchid)
  hexColor('#DA70D6'), // 淺紫紅 (Orchid)
  hexColor('#FFB3E6'), // 淺珍珠紅 (Light Pearl Pink)
  hexColor('#808080'), // 灰色 (Gray)
  hexColor('#A16B47'), // 駝色 (Camel)
];
  // hexColor('#7CFC00'), // 草坪綠 (Lawn Green)