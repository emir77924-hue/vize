import "dotenv/config";
import mongoose from "mongoose";
import { connectDatabase } from "./config/database.js";
import { Event } from "./models/event-model.js";
import { seedEvents } from "./data/seed-events.js";
import { parseDate } from "./utils/date.js";

await connectDatabase();
await Event.deleteMany({});

// insertMany setter'ları çağırmaz — tarihleri manuel dönüştürüyoruz
const processedEvents = seedEvents.map((e) => ({ ...e, date: parseDate(e.date) }));
const created = await Event.insertMany(processedEvents);
console.log(`${created.length} etkinlik eklendi`);
await mongoose.disconnect();
