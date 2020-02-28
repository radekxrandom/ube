var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  },
  number: {
    type: Number,
    required: true
  },
  img: { type: String, required: false }
});

module.exports = mongoose.model("Quotation", QuotationSchema);
