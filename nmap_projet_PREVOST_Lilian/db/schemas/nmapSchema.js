import { Schema } from "mongoose"

const nmapSchema = new Schema({
  ip: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  optionScan: {
    type: String,
  },
  option: {
    type: String,
  },
  optionNumber: {
    type: Number,
  },
})

export default nmapSchema
