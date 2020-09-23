const jwt = require('jsonwebtoken')
const config = require('../config')

// TODO implement auth service
module.exports = () => async (req, res, next) => {
  const encToken = req.header('x-auth-token')
  req.user = { _id: '5f69dec3f542ca47b40b3fc3'};
  next();
}
