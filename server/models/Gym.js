const mongoose = require('mongoose');
const { Schema } = mongoose;

const GymSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String //Think about formatting for this
  },
  website: {
    type: String
  },
  gym_type: {
    type: String
  },
  rating: {
    type: String
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  },
  gym_image: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  }
});

mongoose.model('Gym', GymSchema);
