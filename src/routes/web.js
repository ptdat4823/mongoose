import express from "express";
import { getData } from "../controllers/userController.js";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    res.send("Main page");
  });
  router.get("/user", async (req, res) => {
    let data = await getData();
    console.log("data: ", data);
    res.send(data);
  });
  router.get("/new", (req, res) => {
    res.render("index2.ejs");
  });
  router.get("/page1", (req, res) => {
    res.send("Page 1 ");
  });

  return app.use("/", router);
};

export default initWebRoute;
