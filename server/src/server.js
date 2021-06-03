const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');
const userRouter = require('./routes/user.route');
const serviceRouter = require('./routes/service.route');
const activateBonusRouter = require('./routes/activateBonus.route');

// Init express
const app = express();
// Init environment
dotenv.config();
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options('*', cors());

let port = Number(process.env.PORT) || process.argv[2] || 3331;
port = typeof port === 'number' ? port : 3331;

app.use('/api/v1/users', userRouter);
app.use('/api/v1/services', serviceRouter);
app.use('/api/v1/activateBonus', activateBonusRouter);

// 404 error
app.all('*', (req, res, next) => {
  const err = new HttpException(404, 'Endpoint Not Found');
  next(err);
});

// Error middleware
app.use(errorMiddleware);

// starting the server
if (!module.parent) {
  app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
}

module.exports = app;
