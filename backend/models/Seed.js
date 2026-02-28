import mongoose from "mongoose";
import Note from "./Note.js";

async function seedData() {
  await mongoose.connect(
    "mongodb+srv://admin:aSwJ4PcTg6H2qL8M@cluster0.r4emr5x.mongodb.net/Node-API?appName=Cluster0",
  )

  console.log("MongoDB connected for seeding");


  const notes = [
  // 2026-02-24
  {
    text: "Revise JavaScript ES6 concepts",
    completed: true,
    date: "2026-02-24",
  },
  {
    text: "Plan Daily Notes Tracker features",
    completed: false,
    date: "2026-02-24",
  },

  // 2026-02-25
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
    text: "Test API endpoints with Postman",
    completed: true,
    date: "2026-02-25",
  },

  // 2026-02-26
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

  // 2026-02-27
  {
    text: "Push project to GitHub",
    completed: false,
    date: "2026-02-27",
  },
  {
    text: "Add notes count per date feature",
    completed: true,
    date: "2026-02-27",
  },
  {
    text: "Review mentor feedback",
    completed: false,
    date: "2026-02-27",
  },

  // 2026-02-28
  {
    text: "Implement update note functionality",
    completed: true,
    date: "2026-02-28",
  },
  {
    text: "Add search notes by keyword page",
    completed: false,
    date: "2026-02-28",
  },
  {
    text: "Prepare demo for Daily Notes app",
    completed: false,
    date: "2026-02-28",
  },
];
  await Note.insertMany(notes);

  console.log("Fake notes inserted successfully");
  process.exit();
}

seedData();