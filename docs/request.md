# request获取页面后的处理方式

### request介绍
request是被设计成可进行http调用的最简单的方法的node模块。默认情况下。它支持HTTPS并遵循重定向。

Github地址：[request](https://github.com/request/request)

npm地址：[request](https://www.npmjs.com/package/request)

**简单介绍**

request拥有两个参数，第一个为调用的url地址，第二个为一个匿名函数。
匿名函数拥有三个参数，第一个为error（错误信息），第二个为response（响应），第三个为body（返回的页面内容）。

我们主要关注的就是response和body。

**调用方式**
```
request('http://uiseed.cn',function(err,res,body){})
```

### cheerio介绍
cheerio为一个node模块。官方介绍为一个为服务器端设计的快速、灵活并且简单的jQuery核心API。

Github地址：[cheerio](https://github.com/cheeriojs/cheerio)

npm地址：[cheerio](https://www.npmjs.com/package/cheerio)

cheerio实现了大部分jQuery的Dom操作API，通过这些API我们可以在获取到body后像使用jQuery操作页面一样，来操作获取的内容，而省去了使用正则表达式匹配的苦恼。

**使用方式**

定义、加载：
```
var $ = cheerio.load(body);
```
其中body可以为任何的html字符串，如
```
<div class="demo"></div>
```
**项目中用到的方法**
+ $('selector')：选择器，支持id、class、tag，使用方法和jQuery一样
+ find('selector')：查找，可以用来查找子节点,支持id、class、tag
+ text()：获取标签的文本内容，包括子节点的文本
+ attr('attrName')：获取标签的指定属性值

其他方法：
+ addClass(classname)
+ hasClass(classname)
+ removeClass(classname)
+ val()

更多的方法请查看[官方文档](https://github.com/cheeriojs/cheerio)

### 处理请求返回的页面
我们通过使用cheerio来处理返回后的页面内容。

引用
```
var cheerio = require('cheerio');
```
加载、定义
```
var $ = cheerio.load(body);
```
通过cheerio的方法获取想要的内容。如：获取备案号
```
var id = $('#footer').find('.social').text();
```
如果获取的内容为多个，返回一个数组，我们可以通过for循环处理
```
var posts = $('#main').find('.blog-posts').find('.post');
for(var i = 0;i < posts.length; i++){
	//获取每个文章名字
	var postName = $(posts[i]).find('.content').find('h2')；
    //输出每个名字
    console.log(postName);
}
```
