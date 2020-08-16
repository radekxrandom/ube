var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  },
  options: {
    type: Object,
    required: false
  }
});

module.exports = mongoose.model("Quotation", QuotationSchema);
