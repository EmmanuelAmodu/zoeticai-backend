const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const validators = {
  "create-record": Joi.object({
    date: Joi.date().required(),
    temp: Joi.number().required(),
    mmHg: Joi.object({
      low: Joi.number().required(),
      high: Joi.number().required(),
    }),
    spo2: Joi.number().required(),
    bpm: Joi.number().required(),
    user: Joi.objectId().required()
  }),

  "get-record": Joi.object({
    date: Joi.date()
  }),
}

module.exports = (validator, reqProp) => async (req, res, next) => {
  const validatorFunc = validators[validator];

  if (!validatorFunc) return res.status(500).send({ 
    message: 'Validator method does not exist', 
    status: false 
  });

  const { error } = validatorFunc.validate(req[reqProp])
  if (error) {
    const message = {};
    error.details.forEach(err => message[err.context.key] = err.message);
    return res.status(400)
      .send('invalid input, some data are missing or not properly set');
  }

  next();
}
