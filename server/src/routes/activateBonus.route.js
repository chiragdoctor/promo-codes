const express = require('express');
const router = express.Router();
const activateBonusController = require('../controllers/activateBonusController');
const auth = require('../middleware/auth.middleware');

const {
  createActivateBonusSchema,
} = require('../middleware/validators/activateBonusValidator.middleware');

// localhost:5000/api/v1/activateBonus
router.post(
  '/',
  auth(),
  createActivateBonusSchema,
  activateBonusController.createBonusService,
);

// localhost:5000/api/v1/activateBonus/id/1
router.get('/id/:id', auth(), activateBonusController.getAllBonusByUserId);

module.exports = router;
