const UserModel = require('../models/user.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class UserController {
  getAllUsers = async (req, res, next) => {
    let userList = await UserModel.find();
    if (!userList.length) {
      throw new HttpException(404, 'Users not found');
    }

    userList = userList.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    res.send(userList);
  };

  getUserById = async (req, res, next) => {
    const user = await UserModel.findOne({ id: req.params.id });
    if (!user) {
      throw new HttpException(404, 'User not found');
    }

    const { password, ...userWithoutPassword } = user;

    res.send(userWithoutPassword);
  };

  createUser = async (req, res, next) => {
    this.checkValidation(req);
    await this.hashPassword(req);
    const { confirm_password, ...otherBody } = req.body;
    const result = await UserModel.create(otherBody);

    if (!result) {
      throw new HttpException(500, 'Something went wrong');
    }

    res.status(201).send('User was created!');
  };

  userLogin = async (req, res, next) => {
    this.checkValidation(req);

    const { email, password: pass } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(401);
      return res.send('User not found!!');
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      res.status(401);
      return res.send('Incorrect password!');
    }

    // user matched!
    const secretKey = process.env.SECRET_JWT || '';
    const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
      expiresIn: '24h',
    });

    const { password, ...userWithoutPassword } = user;

    res.send({ ...userWithoutPassword, token });
  };

  checkValidation = req => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpException(400, 'Validation failed', errors);
    }
  };

  // hash password if it exists
  hashPassword = async req => {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 8);
    }
  };
}

module.exports = new UserController();
