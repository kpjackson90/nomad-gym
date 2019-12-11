const mongoose = require("mongoose");
const { Schema } = mongoose;

const CountrySchema = new Schema(
  {
    country: {
      type: String,
      unique: true
    },
    country_image: {
      type: String
    },
    city: [
      {
        type: Schema.Types.ObjectId,
        ref: "City"
      }
    ]
  },
  {
    usePushEach: true
  }
);

CountrySchema.statics.addCity = function(id, city_name) {
  const City = mongoose.model("City");

  return this.findById(id).then(country => {
    const city = new City({ city_name, country });
    country.city.push(city);
    return Promise.all([city.save(), country.save()]).then(
      ([city, country]) => country
    );
  });
};

CountrySchema.statics.findCity = function(id) {
  return this.findById(id)
    .populate("city")
    .then(country => country.city);
};

mongoose.model("Country", CountrySchema);
