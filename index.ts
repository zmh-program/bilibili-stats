import { port } from "./config";
import { getLogger } from 'log4js';
const express = require('express');
// import stats from './stats';

const logger = getLogger("server");
logger.level = 'info';

const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");


app.get('/user/:user/', async function (req: any, res: any) {
    res.type('svg');

});

app.get('/repo/:user/:repo/', async function (req: any, res: any) {
    res.type('svg');

    const dark: boolean = req.query['theme'] === 'dark',
        username = req.params['user'],
        repo = req.params['repo'];

});

app.listen(port, () =>
    logger.info(`Starting deployment server at http://127.0.0.1:${port}/.`));
