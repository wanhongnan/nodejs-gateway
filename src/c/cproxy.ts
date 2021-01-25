
import app from "../app";
const { createProxyMiddleware } = require('http-proxy-middleware');
import apicache from 'apicache';
var cache = apicache.middleware;

const options = {
    target: "http://*",
    changeOrigin: true, 
    ws: true, 
    pathRewrite: {
        '^/gameServiceC': '/gameServiceC', 
    },
    router: {
        '/gameServiceC': 'http://cn2.efs-h5.esport777.net',
    }
};

const cproxy = createProxyMiddleware(options);
app.use('/gameServiceC', cache('5 minutes'), cproxy);

