import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import notesRoutes from "./routes/notes.js";

const app = express();
app.use(cors());
app.use(express.json())

const PORT = 5000;
app.get("/", (req, res) => res.send("backend is running"));

app.use("/notes", notesRoutes);

mongoose
  .connect(
    "mongodb+srv://admin:aSwJ4PcTg6H2qL8M@cluster0.r4emr5x.mongodb.net/Node-API?appName=Cluster0",
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));
