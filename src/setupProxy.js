const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/*", {target: "localhost:3000/login"}))
}
