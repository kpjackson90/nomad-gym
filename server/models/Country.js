const mongoose = require("mongoose");
const { Schema } = mongoose;

const CountrySchema = new Schema({
  country: {
    type: String,
    unique: true
  },
  city: [
    {
      type: Schema.Types.ObjectId,
      ref: "City"
    }
  ]
});

CountrySchema.statics.addCity = city_name => {
  const Country = mongoose.model("Country");

  return this.findById(id).then(country => {
    const city = new City({ city_name, country });
    country.city.push(city);
    return Promise.all([city.save(), city.save()]).then(
      ([city, country]) => city
    );
  });
};

CountrySchema.statics.findCity = id => {
  return this.findById(id)
    .populate("city")
    .then(country => country.city);
};

mongoose.model("Country", CountrySchema);
