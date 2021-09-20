const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require('../lib/download')
const log = content => {
  console.log(chalk.green(content))
}

module.exports = async name => {
  //打印欢迎界面
  clear()
  const data = await figlet('Welcome to use ROCK!')
  log(data)

  //项目模板
  log(`创建项目${repo}中...`)
  await clone('github:su37josephxia/vue-template', name)
}