# mongoDB的安装和使用
mongoDB是由C++语言编写的，一个基于分布式文件存储的数据库。主要目的是为web应用提供可扩展的高性能数据存储解决方案。

mongoDB时一个介于关系型数据库（SQL数据库）和非关系数据（NoSQL数据库）库之间的产品，功能丰富。

#### 安装

数据库的安装可以按照[官方文档](https://docs.mongodb.com/manual/administration/install-enterprise/)，在不同的系统下安装使用。

在这里贴上几个常用操作系统的安装地址。

ubuntu 16.04：[ubuntu 下安装mongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-ubuntu/)

Windows：[windows 下安装mongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-windows/)

OS X：[Mac 下安装mongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/)

安装完后测试是否安装成功，控制到输入`mongo -version`，输出下列信息，表示安装成功。（ubuntu下）
```
MongoDB shell version v3.4.2
git version: 3f76e40c105fc223b3e5aac3e20dcd026b83b38b
OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
allocator: tcmalloc
modules: none
build environment:
    distmod: ubuntu1604
    distarch: x86_64
    target_arch: x86_64

```

#### 连接使用
安装成功后，启动服务。

**以ubuntu下的演示为例。**

在终端输入下列命令启动服务
```
sudo service mongod start
```
连接数据库
```
mongo 

//成功输出信息
MongoDB shell version v3.4.2
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.2

```
查看所有存在的数据库
```
show dbs
```
使用test数据库
```
use test
//输出信息
switched to db test
```
新建一个集合，并插入一条数据
```
//创建user集合
db.createCollection('user')
//插入一个用户{name:"admin"}
db.user.insert({name:"admin"});
```
查询
```
//查询所有
db.user.find({});
//查询name为admin的用户
db.user.find({name:"admin"});
```
修改
```
//修改name为admin的age为22
sb.user.updateOne({name:"admin"},{age:22});
```
删除
```
//删除所有数据
db.user.remove({})；
//删除用户名为admin的数据
db.user.deleteOne( { name: "admin" } )
```

其他操作请查询[官方文档](https://docs.mongodb.com/manual/crud/)。

