const express = require("express");
const http = require("http");
const reload = require("reload");

const PORT = 8080;

const app = express();

app.set("port", PORT);
app.use(express.static("dist"));

const server = http.createServer(app);

// Reload code here
reload(app)
  .then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README

    // Reload started, start web server
    server.listen(app.get("port"), function () {
      console.log("Web server listening on port " + app.get("port"));
    });
  })
  .catch(function (err) {
    console.error(
      "Reload could not start, could not start server/sample app",
      err
    );
  });
