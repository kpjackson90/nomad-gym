const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  city: {
    type: String
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: "Country"
  },
  gym: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gym"
    }
  ]
});

mongoose.model("City", CitySchema);
