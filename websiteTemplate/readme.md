Instruction to create something like this.

1. Create folders
In the terminal inside vscode:
2. npm init -y
3. npm i bootstrap
4. npm i -D webpack webpack-cli
5. in the package.json attach in the "script" section:
   "watch": "webpack --watch",
   "build": "webpack"
5. npm i -D sass style-loader css-loader sass-loader
6. npm i -D mini-css-extract-plugin postcss postcss-loader
7. npm i -D compression-webpack-plugin
8. npm i -D file-loader