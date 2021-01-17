const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/*", {target: "localhost:3000/login"}))
}


// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = app => {
//     app.use(
//         '/*',
//         createProxyMiddleware({
//             target: 'localhost:3000/login',
//         })
//     )
// }