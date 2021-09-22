/**
 * @description 根据开发者选项生成配置对象
 * @param {object} answer 开发者选项
 * @returns {object}
 */
export function createConfig(answer) {
  const used = (name) => {
    return answer.middlewares.indexOf(name) > -1;
  };

  return {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      router: used("koaRouter"),
      static: used("koaStatic"),
    },
  };
}
