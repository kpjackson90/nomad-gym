const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  city_name: {
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

CitySchema.statics.addGym = (
  id,
  address,
  name,
  phone_number,
  website,
  gym_type,
  rating
) => {
  const City = mongoose.model("City");

  return this.findById(id).then(city => {
    const gym = new Gym({
      address,
      name,
      phone_number,
      website,
      gym_type,
      rating,
      city
    });
    city.gym.push(gym);
    return Promise.all([gym.save(), city.save()]).then(([gym, city]) => gym);
  });
};

CitySchema.statics.findGym = id => {
  return this.findById(id)
    .populate("gym")
    .then(city => city.gym);
};

mongoose.model("City", CitySchema);
