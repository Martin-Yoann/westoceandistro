const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
 
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));
 
// 处理单页面应用的路由，返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});