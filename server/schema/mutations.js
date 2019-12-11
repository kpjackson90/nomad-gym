const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require("mongoose");
const Country = mongoose.model("Country");
const City = mongoose.model("City");
const CityType = require("./city_type");
const CountryType = require("./country_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCountry: {
      type: CountryType,
      args: {
        country: { type: GraphQLString },
        country_image: { type: GraphQLString }
      },
      resolve(parentValue, { country, country_image }) {
        return new Country({ country, country_image }).save();
      }
    },
    addCityToCountry: {
      type: CountryType,
      args: {
        city_name: { type: GraphQLString },
        city_image: { type: GraphQLString },
        countryId: { type: GraphQLID }
      },
      resolve(parentValue, { city_name, countryId, city_image }) {
        return Country.addCity(countryId, city_name, city_image);
      }
    },
    addGymToCity: {
      type: CityType,
      args: {
        cityId: { type: GraphQLID },
        address: { type: GraphQLString },
        name: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        website: { type: GraphQLString },
        gym_type: { type: GraphQLString },
        rating: { type: GraphQLString },
        gym_image: { type: GraphQLString }
      },
      resolve(
        parentValue,
        { cityId, address, name, phone, website, gym_type, rating, gym_image }
      ) {
        return City.addGym(
          cityId,
          address,
          name,
          phone,
          website,
          gym_type,
          rating,
          gym_image
        );
      }
    } // TODO: Add Edit and Delete mutations
  }
});

module.exports = mutation;
