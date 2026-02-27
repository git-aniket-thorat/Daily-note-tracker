import mongoose from "mongoose";
import Note from "./Note.js";

async function seedData() {
  await mongoose.connect(
    "mongodb+srv://admin:aSwJ4PcTg6H2qL8M@cluster0.r4emr5x.mongodb.net/Node-API?appName=Cluster0",
  )

  console.log("MongoDB connected for seeding");

  // clear existing notes (optional)
  await Note.deleteMany();

  const notes = [
    {
      text: "Finish React routing",
      completed: true,
      date: "2026-02-25",
    },
    {
      text: "Fix backend bugs",
      completed: false,
      date: "2026-02-25",
    },
    {
      text: "Learn MongoDB basics",
      completed: true,
      date: "2026-02-26",
    },
    {
      text: "Prepare internship report",
      completed: false,
      date: "2026-02-26",
    },
    {
      text: "Refactor frontend components",
      completed: false,
      date: "2026-02-26",
    },
    {
      text: "Push project to GitHub",
      completed: false,
      date: "2026-02-27",
    },
  ];

  await Note.insertMany(notes);

  console.log("Fake notes inserted successfully");
  process.exit();
}

seedData();