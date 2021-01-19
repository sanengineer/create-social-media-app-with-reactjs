import { createProxyMiddleware } from "http-proxy-middleware";

export default (app) => {
  app.use(
    "/*",
    createProxyMiddleware({
      target: "http://localhost:3000/login",
    })
  );
};
