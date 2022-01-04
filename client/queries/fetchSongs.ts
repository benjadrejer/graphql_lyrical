import { gql } from '@apollo/client';

const FETCH_SONGS = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;

export default FETCH_SONGS;
