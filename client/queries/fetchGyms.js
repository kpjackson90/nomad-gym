import gql from 'graphql-tag';

export default gql`
  query GymQuery($id: ID!) {
    city(id: $id) {
      id
      city_name
      city_image
      gym {
        id
        name
        rating
        gym_image
      }
    }
  }
`;
