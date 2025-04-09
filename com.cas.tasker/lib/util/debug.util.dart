class Console {
  static log(dynamic content) {
    print("${DateTime.now().toString()}: $content");
  }

  // static 
}

log(dynamic content) {
  print("${DateTime.now().toString()}: $content");
}