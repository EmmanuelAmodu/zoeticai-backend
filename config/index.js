/* eslint-disable no-undef */
require('dotenv').config()
const args = require('minimist')(process.argv.slice(2));

module.exports = {
  port: process.env.PORT,
  env: args.env,
  dbUrl: process.env.MONGOURL,
  appKey: process.env.SECRET_KEY
}
