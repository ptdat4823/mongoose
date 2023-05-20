"use strict";

import configViewEngine from "./configs/viewEngine.js";
import initWebRoute from "./routes/web.js";
import express from "express";
import { connect } from "./configs/connectDB.js";

const app = express();
const port = 3000;
//set up view engine
configViewEngine(app);

//init web route
initWebRoute(app);

//connect to compass
connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
