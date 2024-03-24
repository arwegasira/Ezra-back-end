const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientHistorySchema = new Schema(
  {
    accommodations: {
      type: Array,
    },
    services: {
      type: Array,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('ClientHistory', clientHistorySchema)
