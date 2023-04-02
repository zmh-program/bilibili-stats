import { port } from "./config";
import { getLogger } from 'log4js';
import { getUser } from './stats';
import { ua } from './utils';
import { createProxyMiddleware } from "http-proxy-middleware";
const express = require('express');

const logger = getLogger("server");
logger.level = 'info';

const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");


app.get('/user/:uid/', async function (req: any, res: any) {
    res.type('svg');
    try {
        res.render('user', await getUser(req.params['uid']));
    } catch (e) {
        res.render('error');
    }
});


app.use('/proxy', createProxyMiddleware({
    target: "https://i0.hdslb.com/bfs",
    changeOrigin: true,
    pathRewrite: { '^/proxy': '' },
    onProxyReq: (proxy, request, response) => {
        proxy.removeHeader('referer');
        // proxy.setHeader('user-agent', ua.get());
    }
}))


app.listen(port, () => logger.info(`Starting deployment server at http://127.0.0.1:${port}/.`));
