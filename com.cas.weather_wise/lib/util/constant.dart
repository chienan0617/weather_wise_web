class System {
  static String version = 'Beta 1.0.3';
  static bool isPublicVersion = false;
  static bool isStableVersion = false;
  static bool isDebugMode = true;

  static String apiKey = '569f2ae006bb4c4c9f8153435252005';

  static Map<String, String> toMap() => {
    'version': version,
    'isPublicVersion': isPublicVersion.toString(),
    'isStableVersion': isStableVersion.toString(),
    'isDebugMode': isDebugMode.toString(),
    'apiKey': apiKey
  };
}