const router = require('express').Router()
const validate = require('../middlewares/validate')
const auth = require('../middlewares/auth')

/**
 * 
 * @param {{type: String, path: String, validator: String, tranformers: Function[], controller: Function}[]} routes // Route Objects
 */
module.exports = function routerValidator(routes) {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const dataToReqTypeMap = { 
      'get': 'query',
      'post': 'body',
      'put': 'body',
      'delete': 'params'
    };

    if (
      Object.keys(dataToReqTypeMap).includes(route.type) &&
      route.path.constructor !== String &&
      route.validator.constructor !== String &&
      route.tranformers.constructor !== Array &&
      route.controller.constructor !== Function &&
      route.prop.constructor !== String
    ) {
      throw new Error(`${route.path} router not properly configured`);
    }

    const def = ((req, res, next) => next())

    router[route.type](
      route.path,
      route.validator ? validate(route.validator, dataToReqTypeMap[route.type]) : def,
      route.auth ? auth() : def,
      ...route.tranformers,
      route.controller
    );
  }
  return router;
}
