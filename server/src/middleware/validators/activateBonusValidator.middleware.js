const { body } = require('express-validator');

exports.createActivateBonusSchema = [
  body('serviceId').exists().withMessage('ServiceId is required'),
  body('userId').exists().withMessage('UserId is required'),
];
