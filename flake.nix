{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };
  outputs = { self, nixpkgs }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
      overlays = [
        (final: prev: {
          pulumi-bin = prev.pulumi-bin.overrideAttrs rec {
            version = "3.138.0";
            srcs = [
              (prev.fetchurl {
                url = "https://get.pulumi.com/releases/sdk/pulumi-v${version}-linux-x64.tar.gz";
                sha256 = "sha256-ACRe4mMoXuBf8z7JbIiapNEXHgyOsDZqZCBbRer9btg=";
              })
            ];
            postUnpack = "";
          };
        })
      ];
    }; in {
    devShells.${system}.default = pkgs.mkShell {
      packages = with pkgs; [
        go_1_22
        jq
        gnumake
        pulumi-bin
      ];
    };
  };
}
