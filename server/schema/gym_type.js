const graphql = require("graphql");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const City = mongoose.model("City");

const GymType = new GraphQLObjectType({
  name: "GymType",
  fields: () => ({
    id: { type: GraphQLID },
    address: { type: GraphQLString },
    name: { type: GraphQLString },
    phone_number: { type: GraphQLInt },
    website: { type: GraphQLString },
    gym_type: { type: GraphQLString },
    rating: { type: GraphQLString },
    city: {
      type: require("./city_type"),
      resolve(parentValue) {
        return City.findById(parentValue)
          .populate("city")
          .then(gym => {
            console.log(gym);
            return gym.city;
          });
      }
    }
  })
});

module.exports = GymType;
