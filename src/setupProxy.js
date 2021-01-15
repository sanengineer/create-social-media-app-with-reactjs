const proxy = require("http-proxy-middleware");

<<<<<<< HEAD
module.exports = app => {
    app.use(proxy("/*", {target: "https://sosmetend.herokuapp.com/api/v1/login"}))
}
=======
module.exports = (app) => {
  app.use(proxy("/*", { target: "http://localhost:5000/user" }));
};
>>>>>>> 0ebfa4e81bd5d998fb76b772db5c5e0c7e4eb8a8
