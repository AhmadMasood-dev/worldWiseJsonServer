const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("cities.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000; //  chose port from here like 0080

server.use(middlewares);
server.use(router);

server.listen(port);
