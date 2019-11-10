const mongoose = require("mongoose");
const { Schema } = mongoose;

const CountrySchema = new Schema({
  country: {
    type: String,
    unique: true
  }
});

mongoose.model("Country", CountrySchema);
