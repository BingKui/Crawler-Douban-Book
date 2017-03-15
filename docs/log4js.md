# log4js使用教程
log4js是一个node的日志记录模块，可以用来记录我们的应用开发和使用过程中的日志信息。

npm地址：[log4js](https://www.npmjs.com/package/log4js)

#### 配置文件
log4js的需要通过我们的配置才能按照我们的意愿记录相应的日志信息到相应的目录和文件。

具体配置项的内容格式，可[查看官方文档](https://github.com/nomiddlename/log4js-node/wiki/Appenders)。

log4js-config.json
```
{
	"appenders":[{
    	"type":"clustered",
        "appenders":[{
        	"type":"dataFile",
            "filename":"logs/access.log",
            "pattern":"-yyyy-MM-dd",
            "category":"http"
        }, {
            "type": "file",
            "filename": "logs/app.log",
            "maxLogSize": 10485760,
            "numBackups": 3
        }, {
            "type": "logLevelFilter",
            "level": "ERROR",
            "appender": {
                "type": "file",
                "filename": "logs/errors.log"
            }
        }]
    }]
}
```
在测试的时候如果我们需要在终端输出的话，可以在配置文件中添加一项，来支持所有的信息都在终端输出。

在`appenders`中添加一项
```
{
	"appenders":[{
    	"type":"clustered",
        "appenders":[{
        	"type":"console"
        }, {
        	"type":"dataFile",
            "filename":"logs/access.log",
            "pattern":"-yyyy-MM-dd",
            "category":"http"
        }, {
            "type": "file",
            "filename": "logs/app.log",
            "maxLogSize": 10485760,
            "numBackups": 3
        }, {
            "type": "logLevelFilter",
            "level": "ERROR",
            "appender": {
                "type": "file",
                "filename": "logs/errors.log"
            }
        }]
    }]
}
```
在文件中使用
```
var logger = require('log4js').getLogger('app');
```
其中`app`可以自己定义，定义后可以在日志信息中系那是相应的名称。
```
[2017-03-08 16:15:39.598] [INFO] MongoDB - connect success!
[2017-03-08 16:15:45.558] [INFO] app - server start at 3000!
```
#### express集成log4js
express默认使用的`morgan`日志系统太过简陋，我们现在用log4js替换默认的日志系统。

**删除默认的日志系统**

注释下列代码，停用默认的日志系统
```
var logger = require('morgan');

app.use(logger('dev'));
```
引入log4js，并配置使用。
```
var log4js = require('log4js');

log4js.configure('./log4js-config.json');
app.use(log4js.connectLogger(log4js.getLogger("http"), {
	level: 'auto',
	format: ':method :url'
}));
```
信息级别设置为自动，系统会根据需要调用相应的级别。

查看[官方文档](https://github.com/nomiddlename/log4js-node/wiki)。

