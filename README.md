# nodejs-gateway
nodejs-gateway

npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
npm install --save-dev ts-node
npm install --save-dev nodemon

并像下面这样配置package.json文件，才能完成开发环境的搭建。
"scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch src/**/*.ts --exec ts-node src/index.ts",
    "all": "start & build"
},


