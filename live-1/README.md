# Effective Developer Enviroment

## 1 - Windows

### 1.1 - Required Tools
- WSL2 - Linux Enviroment
- Windows Terminal
- Docker Desktop
- Optional: OhMyZsh https://dev.to/erickrock80/pt-br-instalando-oh-my-zsh-no-windows-terminal-3a8l



## 2 - Linux
### 2.1 - Required Tools
- bash
- Terminator || Xterm
- Docker Engine
- Optional: oh-my-zsh for ubuntu https://www.tecmint.com/install-oh-my-zsh-in-ubuntu/

### 3 - Mac
- Docker Desktop
- iTerm2 + OhMyZsh https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#macos

### 4 - VS Code Plugin
- Settings Sync
- Docker

### 5 - Docker
- docker run hello-word: download "hello-world" image and run its container
- docker ps: list running containers
- docker ps -a: list all containers
- docker run -p 8080:80 nginx: through localhost:8080 we access port 80 of nginx
- docker rm b829389238j: remove container id b829389238j
- docker ps -aq: list all container ids
- docker rm $(docker ps -aq): remove all containers
- docker images: list all images
- docker rmi $(docker images -aq): delete all images


