const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require('../lib/download')
const open = require('open')

const spawn = async (...args) => {
  //同步promise api
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    //输出流 子进程合并到主进程
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}
const log = content => {
  console.log(chalk.green(content))
}

module.exports = async name => {
  //打印欢迎界面
  clear()
  const data = await figlet('Welcome to use ROCK!')
  log(data)

  //项目模板
  log(`创建项目${name}中...`)
  // await clone('github:su37josephxia/vue-template', name)
  log(`🚲安装依赖...`)
  // await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], { cwd: `./${name}` })

  log(chalk.green(`
    👌安装完成：
    to get start:
    ---------------
    cd ${name}
    npm run serve
    ---------------
  `))

  open('http://localhost:8080')
  await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'serve'], { cwd: `./${name}` })
}