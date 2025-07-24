// validators/jobValidator.js
const { body } = require("express-validator");

const jobValidationRules = [
  body("first_name").notEmpty().withMessage("First name is required"),
  body("last_name").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone")
    .notEmpty().withMessage("Phone number is required")
    .isNumeric().withMessage("Phone number must contain only numbers"),
  body("country_code").notEmpty().withMessage("Country code is required"),
];

module.exports = {
  jobValidationRules,
};
