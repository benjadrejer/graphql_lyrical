import React, { FC, FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LYRIC_TO_SONG } from '../queries';

interface ILyricCreateProps {
  songId: string;
}

const LyricCreate: FC<ILyricCreateProps> = ({ songId }) => {
  const [content, setContent] = useState('');
  const [addLyricToSong, { loading, error, data}] = useMutation(ADD_LYRIC_TO_SONG);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addLyricToSong({
      variables: {
        content,
        songId,
      },
    });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a Lyric
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">Add Lyric</button>
      </label>
    </form>
  );
};

export default LyricCreate;
