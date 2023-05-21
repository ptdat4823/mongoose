"use strict";

import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./routes/web.js";
import express from "express";
import bodyParser from "body-parser";
import { connect } from "./configs/connectDB.js";

const app = express();
const port = 3000;
//set up view engine
configViewEngine(app);

// Sử dụng middleware body-parser để phân tích dữ liệu từ body của request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//init web route
initWebRoute(app);

//connect to compass
connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
