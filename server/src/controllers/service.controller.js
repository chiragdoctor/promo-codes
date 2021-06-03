const ServiceModel = require('../models/service.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class ServiceController {
  getAllServices = async (req, res, next) => {
    let serviceList = await ServiceModel.find();
    if (!serviceList.length) {
      throw new HttpException(404, 'Services not found');
    }
    res.send(serviceList);
  };
}
module.exports = new ServiceController();
