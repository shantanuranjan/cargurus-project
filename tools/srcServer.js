import express from 'express';
import webpack from 'webpack';
import cors from 'cors';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import { createProxyMiddleware } from 'http-proxy-middleware';
/* eslint-disable no-console */

const port = 5000;
const app = express();
const compiler = webpack(config);

app.use(cors());

app.use('/api', createProxyMiddleware({
    target: 'https://www.autolist.com/search?page=1&latitude=30.3414&location=Austin%2C+TX&longitude=-97.7312&make=Jeep&ads=web&price_min=5000&price_max=9000', //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
