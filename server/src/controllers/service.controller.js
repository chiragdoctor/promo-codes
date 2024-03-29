const ServiceModel = require('../models/service.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class ServiceController {
  getAllServices = async (req, res, next) => {
    const page = req.query.page;
    let serviceList = await ServiceModel.findWithPage(page);
    if (!serviceList.length) {
      return res.send([]);
    }
    res.send(serviceList);
  };

  getServiceListByName = async (req, res, next) => {
    const serviceList = await ServiceModel.find({
      name: req.query.serviceName,
    });
    if (!serviceList) {
      return res.send([]);
    }
    res.send(serviceList);
  };
}
module.exports = new ServiceController();
