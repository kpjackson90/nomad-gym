import gql from "graphql-tag";

export default gql`
{
    country(id: $ID!) {
        id
        city{
            id
            city_name
        }
    }
}
`;
