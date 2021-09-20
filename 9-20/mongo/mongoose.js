//通过关系型数据库的思想来设计非关系型数据库
// callback promise generaotr async/await EventEmitter 五种解决异步的方案
const mongoose = require('mongoose');

(async () => {
  await mongoose.connect('mongodb://localhost:27017/fruits');
  const Schema = mongoose.Schema;


  const BlogPost = new Schema({
    author: String,
    title: String,
    body: String,
    date: Date
  });

  const Post = mongoose.model('post', BlogPost)
  const post = new Post({
    author: 'Rock',
    title: '字节青训营向社会输送大量前端人才',
    body: `
    字节跳动致力于成为全球创作与交流平台，让几十亿人的数字生活更美好、更有效率、更有趣。我们相信，高道德标准和诚信文化在实现这一愿景方面发挥着关键作用。因此，我们制定了字节跳动行为准则 和字节跳动合作伙伴行为准则。
    `,
    date: Date.now()
  })

  await post.save()


})()