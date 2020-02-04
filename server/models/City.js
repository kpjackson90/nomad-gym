const mongoose = require('mongoose');
const { Schema } = mongoose;

const CitySchema = new Schema({
  city_name: {
    type: String
  },
  country: {
    type: Schema.Types.ObjectId,
    ref: 'Country'
  },
  gym: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Gym'
    }
  ],
  city_image: {
    type: String
  }
});

CitySchema.statics.addGym = function(
  id,
  address,
  name,
  phone_number,
  website,
  gym_type,
  rating,
  gym_image,
  longitude,
  latitude
) {
  const Gym = mongoose.model('Gym');

  return this.findById(id).then(city => {
    const gym = new Gym({
      address,
      name,
      phone_number,
      website,
      gym_type,
      rating,
      city,
      gym_image,
      longitude,
      latitude
    });
    city.gym.push(gym);
    return Promise.all([gym.save(), city.save()]).then(([gym, city]) => city);
  });
};

CitySchema.statics.findGym = function(id) {
  return this.findById(id)
    .populate('gym')
    .then(city => city.gym);
};

mongoose.model('City', CitySchema);
