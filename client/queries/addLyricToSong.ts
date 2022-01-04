import { gql } from '@apollo/client';

const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      title
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default ADD_LYRIC_TO_SONG;
