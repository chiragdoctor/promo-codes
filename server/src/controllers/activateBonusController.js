const ActivateBonusModel = require('../models/activateBonus.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class ActivateBonusController {
  createBonusService = async (req, res, next) => {
    this.checkValidation(req);
    const result = await ActivateBonusModel.create(req.body);

    if (!result) {
      throw new HttpException(500, 'Something went wrong');
    }

    res.status(201).send('Bonus has been added for the user!');
  };

  getAllBonusByUserId = async (req, res, next) => {
    let bonusList = await ActivateBonusModel.find({ userId: req.params.id });
    if (!bonusList.length) {
      return res.send([]);
    }

    res.send(bonusList);
  };

  checkValidation = req => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Validation failed', errors);
    }
  };
}

module.exports = new ActivateBonusController();
