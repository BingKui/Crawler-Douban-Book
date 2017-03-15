# express简单介绍
#### 安装
express作为项目的依赖安装
> npm install express --save

这样会安装最新版的express，或者安装指定版本
> npm install express@version --save

其中version为所需要安装的版本号。

#### 安装express-generator
express-generator为官方提供的生成express项目的脚手架工具，使用他我们可以快速的新建一个包含基本依赖的express项目。

全局安装命令
>npm install -g express-generator

新建项目命令
>express demo-project

命令行输出结果
```
   create : demo-project
   create : demo-project/package.json
   create : demo-project/app.js
   create : demo-project/public
   create : demo-project/bin
   create : demo-project/bin/www
   create : demo-project/routes
   create : demo-project/routes/index.js
   create : demo-project/routes/users.js
   create : demo-project/views
   create : demo-project/views/index.jade
   create : demo-project/views/layout.jade
   create : demo-project/views/error.jade
   create : demo-project/public/javascripts
   create : demo-project/public/images
   create : demo-project/public/stylesheets
   create : demo-project/public/stylesheets/style.css

   install dependencies:
     $ cd demo-project && npm install

   run the app:
     $ DEBUG=my-application ./bin/www
```
脚手架会生成相应的目录结构，以及相应的模板文件。

根据提示进入项目目录，执行`npm install`安装相应的依赖。

然后运行项目，打开浏览器，输入地址`http://localhost:3000`，页面输出`Hello World！`

#### 基本目录介绍
routes：路由路径，配置所有的路由文件全在这里

views：视图目录，所有的末班文件全放在这里

public：公共资源目录，存放所有的静态资源

#### 路由
基本的路由方法
```
app.get('/', function(req, res){
	res.send('get request');
});
app.post('/', function(req, res){
	res.send('post request');
});
```
也可以使用express的路由模块来定义路由
```
var router = express.Router();
router.get('/', function(req, res){
	res.send('router get request');
});
router.post('/', function(req, res){
	res.send('router post request');
});
```
使用定义的路由
```
//然后在app.js中使用路由
var routes = require('.routes/route');
app.use('/', routes);
```
在大型复杂的项目中使用路由能够很好的提高代码的可读性，能够更方便的定义每个模块的路由，降低代码的管理成本。

### 中间件
中间件是express主要组成部分，express本身功能非常简洁，完全是有路由和中间件构成的web框架。

中间件是一个函数，它可以访问请求对象（req）、响应对象（res）以及相应中间流程的中间件next。

一般在中间件执行完毕后需要执行下个中间件的时候就需要用到next。

中间件的功能一般包括
+ 执行任何代码
+ 修改请求和响应对象
+ 终止请求-响应循环
+ 调用堆栈中的下个中间件

中间件一般分为
+ 应用级中间件
+ 路由级中间件
+ 错误处理级中间件
+ 内置中间件
+ 第三方中间件

具体有那些可查看[官方列表](http://www.expressjs.com.cn/guide/using-middleware.html)

[应用级](http://www.expressjs.com.cn/4x/api.html#app)

[错误处理](http://www.expressjs.com.cn/guide/error-handling.html)

[内置](https://github.com/senchalabs/connect#middleware)

[第三方](http://www.expressjs.com.cn/resources/middleware.html)