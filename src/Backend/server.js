const express = require("express");
const app = express();
const mongoose = require("mongoose");



const UserRouter = require("./UserRouter");
const uri = "mongodb+srv://Yashraj:23%40ugust1996@realmcluster.qget5.mongodb.net/db?authSource=admin&replicaSet=atlas-103ulp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
app.use(express.json());

mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

    app.use("/", UserRouter);
    

  app.listen(5000, () => {
    console.log("Backend server is running!");
  });