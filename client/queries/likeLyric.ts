import { gql } from '@apollo/client';

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      content
      likes
      id
    }
  }
`;

export default LIKE_LYRIC;
