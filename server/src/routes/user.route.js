const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

const {
  createUserSchema,
  updateUserSchema,
  validateLogin,
} = require('../middleware/validators/userValidator.middleware');

// localhost:5000/api/v1/users
router.get('/', auth(), userController.getAllUsers);

// localhost:5000/api/v1/users/id/1
router.get('/id/:id', auth(), userController.getUserById);

// localhost:5000/api/v1/users
router.post('/', createUserSchema, userController.createUser);

// localhost:5000/api/v1/users/login
router.post('/login', validateLogin, userController.userLogin);

module.exports = router;
