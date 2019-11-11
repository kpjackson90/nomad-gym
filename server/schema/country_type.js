const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const CityType = require("./city_type");

const CountryType = new GraphQLObjectType({
  name: "CountryType",
  fields: () => ({
    id: { type: GraphQLID },
    country: { type: GraphQLString },
    city: {
      type: new GraphQLList(CityType),
      resolve(parentValue) {
        return CountryType.findCity(parentValue.id);
      }
    }
  })
});

module.exports = CountryType;
