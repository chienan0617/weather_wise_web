
class LocalIoApi {
  static String getFormatTime(int index) {
    index *= 3;
    if (index < 12) {
      return "${index.toString().padRight(2)}AM";
    } else if(index == 12) {
      return '12PM';
    } else {
      return "${(index -12).toString().padRight(2)}PM";
    }
  }
}