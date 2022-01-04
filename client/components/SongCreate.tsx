import React, { useState, FormEvent, FC } from 'react';
import {
  useMutation,
} from "@apollo/client";
import { Link, useNavigate } from 'react-router-dom';
import FETCH_SONGS from '../queries/fetchSongs';
import { IAddSongResponse } from '../interfaces';
import { CREATE_SONG } from '../queries';

const SongCreate: FC = () => {
  const [addSongMutation, { loading, error, data }] = useMutation<
    IAddSongResponse,
    { title: string }
  >(CREATE_SONG, { refetchQueries: [{ query: FETCH_SONGS }]});
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (title.length > 0) {
      const response = await addSongMutation({
        variables: {
          title,
        },
      });

      if (response.data?.addSong) {
        navigate('/');
      }
    }
  };

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Song Title: 
          <input
            id="title"
            name="title"
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <button type="submit">Add song</button>
      </form>
      {/* {data &&
        <div>
          <div>Created song:</div>
          <div>{data.addSong.title}</div>
        </div>
      } */}
    </div>
  );
};

export default SongCreate;
