const proxy = require("http-proxy-middleware")

module.exports = app => {
    app.use(proxy("/*", {target: "https://sosmetend.herokuapp.com/api/v1/login"}))
}