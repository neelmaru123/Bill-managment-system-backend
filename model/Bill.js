const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  billNo: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  productDetails: {
    type: String,
  },
  date: {
    type: Date,
  },
  amount: {
    type: Number,
  },
  paidAmount: {
    type: Number,
  },
  dueAmount: {
    type: Number,
  },
  gst: {
    type: Number,
  },
  totalBillAmount: {
    type: Number,
  },
  gtsPercent: {
    type: Number,
  },
  days: {
    type: Number,
  },
});

module.exports = mongoose.model("Bill", billSchema);