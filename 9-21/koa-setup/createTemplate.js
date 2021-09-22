import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

/**
 * @description 根据配置创建模板
 * @param {string} templateFile 模板文件
 * @param {object} config 配置选项
 * @returns {string}
 */
export function createTemplate(templateFile, config) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const template = fs
    .readFileSync(resolve(__dirname, "template", templateFile))
    .toString();
  const code = ejs.render(template, {
    router: config.middleware.router,
    static: config.middleware.static,
    port: config.port,
    packageName: config.packageName,
  });

  let parser;
  if (templateFile.indexOf("package") > -1) {
    parser = "json";
  } else {
    parser = "babel";
  }

  return prettier.format(code, {
    parser: parser,
  });
}
