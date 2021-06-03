const { body } = require('express-validator');

exports.createUserSchema = [
  body('username')
    .exists()
    .withMessage('username is required')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('first_name')
    .exists()
    .withMessage('Your first name is required')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('last_name')
    .exists()
    .withMessage('Your last name is required')
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
  body('email')
    .exists()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email')
    .normalizeEmail(),
  body('password')
    .exists()
    .withMessage('Password is required')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must contain at least 6 characters')
    .isLength({ max: 10 })
    .withMessage('Password can contain max 10 characters'),
  body('confirm_password')
    .exists()
    .custom((value, { req }) => value === req.body.password)
    .withMessage(
      'confirm_password field must have the same value as the password field',
    ),
];

exports.validateLogin = [
  body('email')
    .exists()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email')
    .normalizeEmail(),
  body('password')
    .exists()
    .withMessage('Password is required')
    .notEmpty()
    .withMessage('Password must be filled'),
];
