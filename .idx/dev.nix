# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.flutter
  ];


  # Sets environment variables in the workspace
  env = {};
  idx.previews = {
    enable = true;
    previews = {
      # The following object sets web previews
      web = {
        command = [
          "npm"
          "run"
          "start"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
          "--disable-host-check"
        ];
        manager = "web";
        # Optionally, specify a directory that contains your web app
        # cwd = "app/client";
      };
      # The following object sets Android previews
      # Note that this is supported only on Flutter workspaces
      android = {
        manager = "flutter";
      };
    };
  };
}
