import express from "express";
import User from "../models/user.js";
import { getData } from "../controllers/userController.js";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    res.send("Main page");
  });
  router.get("/user", async (req, res) => {
    let data = await getData();
    console.log("typeof data: ", typeof data);
    let array = Object.entries(data);
    res.send(array);
  });
  router.post("/user", async (req, res) => {
    let reqData = req.body;
    const newUser = new User({
      name: reqData.name,
      email: reqData.email,
      password: reqData.password,
      userId: reqData.userId,
    });
    try {
      await newUser.save();
      res.status(200).json({
        message: "user was saved!!",
      });
    } catch {
      res.status(500).json({
        message: "ERROR saving user!!",
      });
    }
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
