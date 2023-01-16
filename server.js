const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");


require("dotenv").config();
// app
const app = express();

//cors
app.use(cors());

// db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((err) => `DB Connection failed due to ${err.message}`);

// middlewares
app.use (express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));

//routes middleware
fs.readdirSync("./routes", { withFileTypes: true })
  .filter((dirent) => dirent.isFile())
  .map((dirent) => dirent.name)
  .map((r) => {
    app.use("/api", require("./routes/" + r));
  });

// port
port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on port ${port}`));
