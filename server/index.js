// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import mongoose from "mongoose";
// import authRoutes from "./routes/AuthRoutes.js";
// import contactsRoutes from "./routes/ContactRoutes.js";
// import messagesRoutes from "./routes/MessagesRoutes.js";
// import setupSocket from "./socket.js";
// import channelRoutes from "./routes/ChannelRoutes.js";

// dotenv.config();

// const app = express();
// const port = process.env.PORT;
// const databaseURL = process.env.DATABSE_URL;

// app.use(
//   cors({
//     origin: [process.env.ORIGIN],
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     credentials: true,
//   })
// );

// app.use("/uploads/profiles", express.static("uploads/profiles"));
// app.use("/uploads/files", express.static("uploads/files"));

// app.use(cookieParser());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/contacts", contactsRoutes);
// app.use("/api/messages", messagesRoutes);
// app.use("/api/channel", channelRoutes);

// const server = app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// setupSocket(server);

// mongoose
//   .connect(databaseURL)
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import authRoutes from "./routes/AuthRoutes.js";
import contactsRoutes from "./routes/ContactRoutes.js";
import messagesRoutes from "./routes/MessagesRoutes.js";
import channelRoutes from "./routes/ChannelRoutes.js";

import setupSocket from "./socket.js";

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Get environment variables
const port = process.env.PORT || 5000; // fallback if PORT is not set
const databaseURL = process.env.DATABASE_URL; // ✅ Corrected variable name

// Debug: Log the important env vars (optional)
// console.log("PORT:", port);
// console.log("DATABASE_URL:", databaseURL);
// console.log("ORIGIN:", process.env.ORIGIN);

// Middleware setup
app.use(
  cors({
    origin: [process.env.ORIGIN], // ORIGIN from env
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Serve static files (optional folders, make sure these exist)
app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads/files", express.static("uploads/files"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/channel", channelRoutes);

// Start the server
const server = app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});

// Setup Socket.io
setupSocket(server);

// Connect to MongoDB
mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("✅ MongoDB connection successful");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

