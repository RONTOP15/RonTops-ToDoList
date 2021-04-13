const mongoose = require("mongoose");
const moment = require("moment");

const fullTimeDate = require('../Date')

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
  // createdAt2: {type : String ,default: fullTimeDate }

});



module.exports = Todo = mongoose.model("Todo", todoSchema);
