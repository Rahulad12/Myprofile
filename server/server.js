const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const logger = require("./utils/logger");

require("dotenv").config();
const app = express();

const allowedOrigins = [
  "https://adhikarirahul.com.np",
  "http://localhost:5173",
];

// Allow preflight requests for all routes
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    allowedOrigins.includes(req.headers.origin) ? req.headers.origin : ""
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(express.json());

// CORS Middleware (after preflight handler)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Check if .env variables are available
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
}

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  logger.info("API hit: /send-email");
  const { email, message } = req.body;

  if (!email || !message) {
    logger.error("Email and message are required");
    return res.status(400).json({ error: "Email and message are required" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "st.rahul07@gmail.com",
      subject: "Portfolio Contact",
      text: `Email: ${email}\nMessage: ${message}`,
    });
    logger.info("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    logger.error(`Failed to send email: ${error.message}`);
    res.status(500).json({ error: `Failed to send email${error}` });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
