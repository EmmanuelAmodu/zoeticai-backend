const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordschema = new Schema({
  date: {
    type: Date,
    required: true
  },
  temp: {
    type: Number,
    required: true
  },
  mmHg: {
    low: {
      type: Number,
      required: true
    },
    high: {
      type: Number,
      required: true
    }
  },
  spo2: {
    type: Number,
    required: true
  },
  bpm: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    // ref: 'Users', commented out for now
    required: true
  },
}, { timestamps: true });

recordschema.index({ date: 1, user: 1 }, { unique: true });
module.exports = mongoose.model('Records', recordschema)
