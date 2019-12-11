import gql from "graphql-tag";

export default gql`
  {
    countries {
      id
      country
      country_image
      city {
        id
      }
    }
  }
`;
