(async () => {

  const Sequelize = require('sequelize')

  const sequelize = new Sequelize('rock_node', 'root', 'wzq19970302', {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false
  })

  const Fruit = sequelize.define("Fruit", { name: { type: Sequelize.STRING(20), allowNull: false }, price: { type: Sequelize.FLOAT, allowNull: false }, stock: { type: Sequelize.INTEGER, defaultValue: 0 } });
  let res = await Fruit.sync()

  res = await Fruit.create({
    name: '香蕉',
    price: 3.5
  })
  console.log(res)
})()