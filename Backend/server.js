import express from "express";
import { ConnectDB } from "./DB/ConnectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRoutes from "./Routes/AuthRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);
app.listen(PORT, () => {
  ConnectDB();
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
