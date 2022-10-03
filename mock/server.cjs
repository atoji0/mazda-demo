// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: true });

server.post("/login", (req, res) => {
  req.on("data", (chunk) => {
    const data = JSON.parse(chunk);
    if (data.userID == "admin") {
      res.jsonp(router.db.get("loginAdmin").value());
    } else if (data.userID == "user") {
      res.jsonp(router.db.get("loginUser").value());
    } else {
      res.jsonp({});
    }
  });
});

server.post("/asAdjustment/searchCondition", (req, res) => {
  res.jsonp(router.db.get("asAdjustmentSearchCondition").value());
});

server.post("/asAdjustment/searchList", (req, res) => {
  res.jsonp(router.db.get("asAdjustmentSearchList").value());
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
