const graphql = require('graphql');
const mongoose = require('mongoose');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const City = mongoose.model('City');

const GymType = new GraphQLObjectType({
  name: 'GymType',
  fields: () => ({
    id: { type: GraphQLID },
    address: { type: GraphQLString },
    name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    website: { type: GraphQLString },
    gym_type: { type: GraphQLString },
    gym_image: { type: GraphQLString },
    rating: { type: GraphQLString },
    longitude: { type: GraphQLString },
    latitude: { type: GraphQLString },
    city: {
      type: require('./city_type'),
      resolve(parentValue) {
        return City.findById(parentValue)
          .populate('city')
          .then(gym => {
            console.log(gym);
            return gym.city;
          });
      }
    }
  })
});

module.exports = GymType;
