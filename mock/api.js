const fs = require('fs');
function fromJSONFile(filename) {
    console.log("KKKKKKKKKKKKK file nmae ",filename)
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${filename}.json`).toString();
        const json = JSON.parse(data);
        return res.json(json);
    };
}
const proxy = {
    _proxy: {
        proxy: {
            '/repos/*': 'https://api.github.com/',
            '/:owner/:repo/raw/:ref/*': 'http://127.0.0.1:8080'
        },
        changeHost: true,
        // modify the http-proxy options
        httpProxy: {
            options: {
                ignorePath: true,
            },
            listeners: {
                proxyReq: function (proxyReq, req, res, options) {
                    console.log('proxyReq');
                },
            },
        },
    },

    'GET /mock/app/products' : fromJSONFile('products'),
    'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
        const { owner, repo, ref } = req.params;
        // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
        // owner => admin
        // repo => webpack-mock-api
        // ref => master
        // req.params[0] => add/ddd.md
        return res.json({
            id: 1,
            owner, repo, ref,
            path: req.params[0]
        });
    },
};
module.exports = proxy;