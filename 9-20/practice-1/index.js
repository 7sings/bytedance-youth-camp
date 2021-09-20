const http = require('http')
const fs = require('fs').promises
http.createServer((req, res) => {
  const { url, method } = req
  if (url === '/' && method === 'GET') {
    fs.readFile('./index.html').then(data => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    }).catch(err => {
      req.writeHead(500, {
        'Content-Type': 'text/plain;charset=utf-8'
      })
      //中文
      res.end('500 服务器挂了,请联系管理员QAQ!')
    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('404 服务器没有该资源哦')
  }

}).listen(3000, () => {
  console.log('Server has started at port 3000')
})