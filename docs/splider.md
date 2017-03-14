# 怎么实现简单的爬虫？

### 什么是爬虫？
爬虫是按照一种特定的规则，来获取互联网上数据的程序或者脚本。

### 通过爬虫我们能得到什么？
通过爬虫，我们可以获取互联网上的所有公开信息，为自己所用，建立海量的数据库系统，进行数据的分析和研究。

### 实现爬虫的技术
实现爬虫的技术有很多，主要的就时Python、Ruby、NodeJs等等。作为前端开发工程师我们自然选择使用NodeJs来实现我们的爬虫项目。

### 环境搭建
* NodeJs安装
* express框架

**NodeJs安装**

Windows系统：http://uiseed.cn/106.html

Ubuntu系统：http://uiseed.cn/427.html

文章中的版本不是最新的，可以按照自己的需求安装最新版本，流程配置一样。

**express框架**

可以按照[官方文档](http://www.expressjs.com.cn/starter/installing.html)来安装。或者根据下边进行安装。（此项依赖NodeJs，安装前确NodeJs能够正常使用。）

项目中安装express
> npm isntall express --save

还可以通过全局安装express框架生成器，生成express项目
> npm install -g express-generator

### 使用库介绍
**request**

网络请求库，[后续介绍。](./request.md)

**cheerio**

请求处理库，[后续介绍。](./request.md)

### 开始爬虫代码编写
新建项目文件夹demo，命令行进去文件夹，执行下列命令生成项目配置文件package.json。
> npm init

根据提示键入相应的信息。
安装相应的依赖包，并保存为依赖
> npm install request cheerio express --save

新建app.js键入下列代码
```
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World!');
});

var server = app.listen(3000, function() {
	console.log('Example app listening at 3000');
});
```

测试服务是否能启动，命令行键入
> node app.js

如果成功，控制台会输出一句`Example app listening at 3000`，然后打开浏览器，在地址栏输入`http://localhost:3000`回车打开，你会看到页面上打印了一句`Hello World!`。

修改代码获取**[UISeed - 前端开发乐园,分享技术干货!](http://uiseed.cn/)**的首页内容。

引入request、cheerio
```
var request = require('request');
var cheerio = require('cheerio');
```
修改`app.get()`为下列代码
```
app.get('/', function(req, res){
	request('http://uiseed.cn', function(error, response, body){
    	if(!error && response.statusCode == 200){
        	var $ = cheerio.load(body);
            //获取备案号并返回给页面
            var id = $('#footer').find('.social').text();
            res.send('备案号为：' + id);
        }
    });
});
```
这时页面上会显示`备案号为： 豫ICP备16006014号-1`，到这里我们的爬虫系统的基本功能已经实现了。