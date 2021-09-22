#!/usr/bin/env node

//esm
import fs from "fs";
import { createTemplate } from "../createTemplate.js";
import question from "../question/index.js";
import { createConfig } from "../config.js";
import execa from "execa";
import { resolve } from "path";

const answer = await question();
// console.log(answer);
const config = createConfig(answer);
// console.log(config);

//核心：自动化思维
//1.创建文件夹
if (!fs.existsSync(getRootPath())) {
  fs.mkdirSync(getRootPath());
}

//2.创建index.js
fs.writeFileSync(
  resolve(getRootPath(), "index.js"),
  createTemplate("index.ejs", config)
);

//3.创建package.json
fs.writeFileSync(
  resolve(getRootPath(), "package.json"),
  createTemplate("package.ejs", config)
);

//4.安装依赖
const command = process.platform === "win32" ? "npm.cmd" : "npm";
await execa(command, ["install"], {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

//5.提示创建完毕
console.log(`
  successful!
  cd ${answer.packageName}
  node index.js
`);

function getRootPath() {
  return resolve(process.cwd(), answer.packageName);
}
