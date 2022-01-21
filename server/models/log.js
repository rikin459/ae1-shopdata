const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = new Schema(
    {
      logID: String,
      name: String,
      price: String,
      date: String,
      paymenttype : String,
      reasonofpayment : String,
      paidwith: String,
    },
    { timestamps: false }
);


module.exports = mongoose.model("logs", logSchema);