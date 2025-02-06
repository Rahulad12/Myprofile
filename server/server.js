const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const logger = require("./utils/logger");
const { validator } = require("./utils/validator");
const rateLimit = require("express-rate-limit");

require("dotenv").config();
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

const allowedOrigins = [
  "https://adhikarirahul.com.np",
  "https://www.adhikarirahul.com.np",
  "http://localhost:5173",
];

// Middleware
app.use(cors({ origin: allowedOrigins, methods: "GET,POST,PUT,DELETE" }));
app.use(express.json());

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

// API Route with Correct Middleware Usage
app.post("/send-email", validator, async (req, res) => {
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
