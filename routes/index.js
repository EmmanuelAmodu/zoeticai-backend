const router = require('express').Router()

const usersController = require('../controllers/record.controller')
const asyncHandler = require('../middlewares/asyncHandler')
const routeFactoryFunc = require('../services/router.service')

router.use('/record', routeFactoryFunc(
  [
    {
      type: 'post',
      path: '',
      validator: 'create-record',
      auth: false,
      tranformers: [],
      controller: asyncHandler(usersController.createRecord, usersController)
    },
    {
      type: 'get',
      path: '',
      validator: 'get-record',
      auth: true,
      tranformers: [],
      controller: asyncHandler(usersController.getRecord, usersController)
    },
  ]
));

module.exports = router
