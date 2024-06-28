{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    
  
 "bradlc.vscode-tailwindcss"
 "esbenp.prettier-vscode"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "bun"
          "add"
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}