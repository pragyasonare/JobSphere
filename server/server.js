
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import dbConnection from "./dbConfig/dbConnection.js";
import router from "./routes/index.js";
import errorMiddleware from "./middlewares/errorMiddlewares.js";

const app = express();

const PORT = process.env.PORT || 8800;

// MONGODB CONNECTION
dbConnection();

//middlewares
app.use(cors({
  origin : `https://jobsphere-87xx.onrender.com`,
  credentials: true,
}));
app.options("*", cors({
  origin: "https://jobsphere-87xx.onrender.com",
  credentials: true,
}));
app.use(xss())
app.use(mongoSanitize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(router);

//error middleware
app.use(errorMiddleware);



app.listen(PORT, () => {
    console.log(`Dev Server running on port: ${PORT}`);
  });
