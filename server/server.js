const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();
const app = express();

app.use(cors({ origin: "adhikarirahul.com.np" }));
// app.use(cors());

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});
app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "st.rahul07@gmail.com",
      subject: "Portfolio Contact",
      text: `Email: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({
      success: true,
      message: "Server is running",
    });
  });
}

// Error handling for any unexpected errors
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong!");
  next();
});
app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
