const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString } = graphql;
const City = mongoose.model("City");
const GymType = require("./gym_type");

const CityType = new GraphQLObjectType({
  name: "CityType",
  fields: () => ({
    id: { type: GraphQLID },
    city_name: { type: GraphQLString },
    city_image: { type: GraphQLString },
    gym: {
      type: new GraphQLList(GymType),
      resolve(parentValue) {
        return City.findGym(parentValue.id);
      }
    },
    country: {
      type: require("./country_type"),
      resolve(parentValue) {
        return Country.findById(parentValue)
          .populate("country")
          .then(city => {
            return city.country;
          });
      }
    }
  })
});

module.exports = CityType;
