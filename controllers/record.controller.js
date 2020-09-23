const _ = require('lodash');
const RecordModel = require('../models/record.model')

module.exports = {
  createRecord(req, res) {
    const record = new RecordModel(req.body)
    record.save()
      .then(rec => res.send(rec.toObject()))
      .catch(error => {
        if (error.code === 11000) {
          res.status(409).send('Record already created for the time specified')
        } else {
          res.status(500).send()
        }
      })
  },

  getRecord(req, res) {
    RecordModel.find({...req.query, user: req.user._id})
      .then(records => res.send(records))
      .catch(error => res.status(500).send())
  },
}
