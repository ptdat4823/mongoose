const configViewEngine = (app) => {
  app.set("viewEngine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
