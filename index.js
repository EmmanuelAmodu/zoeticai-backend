const mongoose = require('mongoose')
const express = require('express');
require('express-async-errors')
const app = require('./services/express.service')()
require('./main')(app, mongoose)

// var mongoose = require('mongoose');
// console.log(mongoose.Types.ObjectId());

// 5f69dec3f542ca47b40b3fc3
// 5f69ded29a73d247bd679367