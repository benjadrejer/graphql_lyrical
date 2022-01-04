import React, { FC } from 'react';
import { useMutation } from '@apollo/client';
import { ILyric } from '../interfaces';
import { LIKE_LYRIC } from '../queries';

interface ILyricListProps {
  lyrics: ILyric[];
}

const LyricList: FC<ILyricListProps> = ({ lyrics }) => {
  const [likeLyric, { loading, error, data}] = useMutation(LIKE_LYRIC);

  const handleLike = (lyricId: string, likes: number, content: string) => {
    likeLyric({
      variables: {
        id: lyricId,
      },
      optimisticResponse: {
        likeLyric: {
          id: lyricId,
          __typename: 'LyricType',
          content,
          likes: likes + 1,
        }
      }
    });
  };

  return (
    <ul className="collection">
      {lyrics.map(lyric => {
        return (
          <li key={lyric.id} className="collection-item">
            {lyric.content}
            <div className="vote-box">
              <i
                className="material-icons"
                onClick={() => handleLike(lyric.id, lyric.likes, lyric.content)}
              >thumb_up</i>
              {lyric.likes}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default LyricList;
