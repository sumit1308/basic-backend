const express = require('express');
//const axios = require('axios');
const connectMongoDatabase = require("./config/database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
const userRoute = require("./routes/userRoute");
const fundRoute = require("./routes/fundRoute");
const advertiserRoute = require("./routes/advertiserRoute");

dotenv.config({ path: "./config/config.env"});


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

connectMongoDatabase();

app.use(cookieParser()); 
// For parsing application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));

// mongoose.connect("mongodb://0.0.0.0:27017/test1")   
//  .then(() => console.log("Database connected!"))
//  .catch(err => {
//    console.log("Database catch")
//   console.log(err)
//  });
// console.log(mongoose.connection.readyState);
app.use("/api", userRoute);
app.use("/api", fundRoute);
app.use("/api", advertiserRoute);

// Middleware for Errors
app.use(errorMiddleware);

// Handling Unhandle Exception
process.on("unhandleRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandle Exception`);
  server.close(()=>{
    process.exit(1);
  })
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})