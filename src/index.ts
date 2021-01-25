import app from "./app";
const { createProxyMiddleware } = require('http-proxy-middleware');
import domain = require('domain');

app.all('*', function (req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use(function (req: any, res: any, next: (...args: any[]) => any) {
    var d = domain.create();
    //监听domain的错误事件
    d.on('error', function (err) {
      console.log(err)
      res.json({ret: -1, msg: 'GateWay系统异常'});
    });
    
    d.add(req);
    d.add(res);
    d.run(next);
});

require("./c/cproxy")
require("./c/cservice")
app.listen(8082);

