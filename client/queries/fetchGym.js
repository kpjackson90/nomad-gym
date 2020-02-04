import gql from 'graphql-tag';

export default gql`
  query GymQuery($id: ID!) {
    gym(id: $id) {
      id
      address
      name
      phone_number
      website
      gym_type
      rating
      gym_image
    }
  }
`;
