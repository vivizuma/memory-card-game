const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => res.json("fosfkdsj"));
app.get("/news", (req, res) => res.json("news"));
app.get;
app.listen(8000, () => console.log(`"backend is running on port ${PORT}`));
