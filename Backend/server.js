import express from "express";
import { ConnectDB } from "./DB/ConnectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRoutes from "./Routes/AuthRoutes.js";
import path from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", AuthRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}
app.listen(PORT, () => {
  ConnectDB();
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
