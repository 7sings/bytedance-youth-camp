(async () => {
  const mysql = require('mysql2/promise')

  //设置连接配置
  const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'wzq19970302',
    database: 'rock_node'
  }
  const connection = await mysql.createConnection(cfg)
  let res = await connection.execute(`CREATE TABLE IF NOT EXISTS test
 ( id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(45) NULL,
  PRIMARY KEY(id))`)
  console.log("create", res)
  res = await connection.execute('INSERT INTO test(message) VALUES(?)', ["rock is handsome"])
  console.log('insert', res)
  res = connection.execute('SELECT * FROM test')
  console.log('slelect', JSON.stringify(res))
})()


