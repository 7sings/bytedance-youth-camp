const Koa = require("koa");
const app = new Koa();

//根据模型自动生成rest api
//思路1：代码生成，根据模型生成相应的接口代码
//思路2：动态编程
//  1). 根据模型文件，自动加载模型

const config = require("./conf");
const { loadModel } = require("./framework/loader");

loadModel(config)(app);

//  2). 自动产生路由

const bodyParser = require("koa-bodyparser");

app.use(bodyParser());

const restful = require("./framework/router");

app.use(restful);

app.listen(3000, () => {
  console.log("Server started at 3000");
});
