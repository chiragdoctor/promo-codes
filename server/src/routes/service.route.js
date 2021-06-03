const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');
const auth = require('../middleware/auth.middleware');

// localhost:5000/api/v1/services
router.get('/', auth(), serviceController.getAllServices);

// localhost:5000/api/v1/services/by-name?serviceName="abc"
router.get('/by-name', auth(), serviceController.getServiceListByName);
module.exports = router;
