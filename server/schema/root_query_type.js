const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const GymType = require("./gym_type");
const CountryType = require("./country_type");
const CityType = require("./city_type");
const Gym = mongoose.model("Gym");
const Country = mongoose.model("Country");
const City = mongoose.model("City");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    gyms: {
      type: new GraphQLList(GymType),
      resolve() {
        return Gym.find({});
      }
    },
    gym: {
      type: GymType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Gym.findById(id);
      }
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve() {
        return Country.find({});
      }
    },
    country: {
      type: CountryType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Country.findById(id);
      }
    },
    city: {
      type: CityType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return City.findById(id);
      }
    },
    cities: {
      type: new GraphQLList(CityType),
      resolve() {
        return City.find({});
      }
    }
  })
});

module.exports = RootQuery;
