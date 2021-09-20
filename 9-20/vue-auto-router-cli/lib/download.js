const { promisify } = require('util')

module.exports.clone = async (repo, desc) => {
  const download = promisify(require('download-git-repo'))
  //版本升级，有坑
  // const ora = require('ora')
  // const process = ora(`下载${repo}中...`)
  // await process.start()
  await download(repo, desc)
  // process.succeed()
}