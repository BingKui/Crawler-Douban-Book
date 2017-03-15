# Mongolass使用入门
[Mongolass](https://github.com/mongolass/mongolass)是一个node连接mongoDB数据库的驱动，类似的驱动还有[Mongoose](https://www.npmjs.com/package/mongoose)、[mongodb](https://www.npmjs.com/package/mongodb)等。
#### 优点
+ 支持Promise
+ 简单
+ 可选的Schema
+ 强大的插件系统
+ 详细的错误信息

#### 安装依赖
使用之前需要先安装为项目依赖。
```
npm isntall mongolass --save
```
配置并连接数据库
```
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect('mongodb://localhost:27017/splider');
```
创建数据模型
```
let Tag = mongolass.model('tag', {
	name: {
		type: 'string'
	},
	count: {
		type: 'number'
	},
});
```
对数据进行操作

**新增**
```
//一个参数，为一个对象，根据模型的对象
Model.create(post).exec()
```
**修改**
```
//两个参数，第一个查询条件，根据条件查询记录
//第二个更新项为{$set:data},其中data为更新的数据对象，为一个对象{key:value}
Model.update({_id:id},{$set:data}).exec()
```
**查询**
```
//一个参数，为查询的对象条件，返回为一个数组
Model.find({_id:id});
//一个参数，查询的条件，返回一个对象，只有一个结果
Model.findOne({_id:id});
```
**删除**
```
//一个参数，要删除的查询条件，根据条件查询相应结果删除
Model.remove({author: author,_id: postId}).exec();
```
其他方法使用请查询[官方文档](https://github.com/mongolass/mongolass/blob/master/README.md)。