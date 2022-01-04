import { gql } from '@apollo/client';

const CREATE_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      title
      id
    }
  }
`;

export default CREATE_SONG;
