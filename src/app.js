/* app.js */

require("./modules/tracing");
require("./modules/logging.js");
require('./modules/metrics.js');

const express = require("express");

const PORT = process.env.PORT || "8080";
const app = express();

app.use(require('express-bunyan-logger')({
    name: 'logger',
    format: ":remote-address - :user-agent[major] custom logger",
    streams: [{
        level: 'info',
        stream: process.stdout
    }]
  }));

app.get("/", (req, res) => {
  res.send("What are you doing here?");
});

app.listen(parseInt(PORT, 10), () => {
  //console.log(`Listening for requests on http://localhost:${PORT}`);
  log.info({status: "started", port: PORT});
});