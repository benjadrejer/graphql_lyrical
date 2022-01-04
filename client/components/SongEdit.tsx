import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ISongResponse } from '../interfaces';
import { GET_DETAILS } from '../queries';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongEdit: FC = () => {
  const params = useParams<{ songId: string }>();
  const { loading, error, data } = useQuery<ISongResponse>(
    GET_DETAILS,
    { variables: { id: params.songId }},
  );

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  if (data && params.songId) {
    const { song } = data;
    return (
      <div>
        <div>
          <div>
            <Link to="/">Go Back</Link>
          </div>
          <h3>{song.title}</h3>
          {song.lyrics &&
            <LyricList lyrics={song.lyrics} />
          }
          <LyricCreate songId={params.songId} />
        </div>
      </div>
    );
  }

  return null;

};

export default SongEdit;
