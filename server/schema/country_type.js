const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const CityType = require("./city_type");
const Country = mongoose.model("Country");

const CountryType = new GraphQLObjectType({
  name: "CountryType",
  fields: () => ({
    id: { type: GraphQLID },
    country: { type: GraphQLString },
    city: {
      type: new GraphQLList(CityType),
      resolve(parentValue) {
        return Country.findCity(parentValue.id);
      }
    }
  })
});

module.exports = CountryType;
