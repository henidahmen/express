const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(
  (addActiveTime = (req, res, next) => {
    let requestAt = new Date().getDay();

    if (requestAt <= 2 || requestAt >= 2) {
      res.send("From Monday to Friday");
    } else {
      next();
    }
  })
);
app.use(
  (addActiveTime = (req, res, next) => {
    let requestAt = new Date().getHours();

    if (requestAt <= 9 || requestAt >= 17) {
      res.send(" from 9 to 17");
    } else {
      next();
    }
  })
);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/home.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);
