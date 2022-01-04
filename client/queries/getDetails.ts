import { gql } from '@apollo/client';

const GET_DETAILS = gql`
  query GetDetails($id: ID!) {
    song(id: $id) {
      title
      id
      lyrics {
        likes
        content
        id
      }
    }
  }
`;

export default GET_DETAILS;
