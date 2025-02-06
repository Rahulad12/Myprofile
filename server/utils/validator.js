const { body } = require("express-validator");

const validator = [
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("message")
    .isLength({ min: 100 })
    .withMessage("Message must be at least 100 characters long"),
];

module.exports = { validator };
