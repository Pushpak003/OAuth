import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

import "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(passport.initialize());

app.use("/auth", authRoutes);

export default app;