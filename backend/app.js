import express from "express";
import dotenv from "dotenv";
import cors from "cors";    // Import the cors middleware to handle Cross-Origin Resource Sharing
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config();   // Load environment variables from .env file

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());// to give string data to json data and send to frontend 
app.use(express.urlencoded({ extended: true }));  //  which format we have to receive data from frontend 

app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })
})

dbConnection();

app.use(errorMiddleware);

export default app;
