const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  ExpenseNo: {
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
    type: String,
  },
  totalAmount: {
    type: Number,
  },
  gst: {
    type: Number,
  },
  totalBillAmount: {
    type: Number,
  },
});

module.exports = mongoose.model("Expence", expenseSchema);