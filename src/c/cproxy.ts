
import app from "../app";
const { createProxyMiddleware } = require('http-proxy-middleware');
const { apiCache } = require('../util/api-cache');

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
const cache = apiCache();
app.use('/gameServiceC', cache, cproxy);

