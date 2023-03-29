const jsonServer = require("json-server");
const server = jsonServer.create();
const route = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(route);
server.listen(port, () => {
  console.log("App listening port", port);
});
