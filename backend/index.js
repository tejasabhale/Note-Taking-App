import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRouter from "./routes/note.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// MUST COME FIRST
app.use(cors({
  origin: 'https://note-taking-app-seven-bice.vercel.app',
  credentials: true
}));

app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB error:", error.message);
  }
};

connectDB();

// Routes
app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/v1/noteapp", noteRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
