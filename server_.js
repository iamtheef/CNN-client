(() => {
  const express = require("express");
  const path = require("path");
  const app = express();

  app.use(express.static(path.join(__dirname, "build")));
  // app.use(require("compression"));
  app.listen(80);
  console.log("Serving on 80");
  console.log("*".repeat(10));
  console.log("Love is forever...");
})();
