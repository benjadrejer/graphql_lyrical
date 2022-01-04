import React, { FC } from 'react';
import {
  useQuery,
  useMutation,
} from "@apollo/client";
import { Link } from 'react-router-dom';
import { FETCH_SONGS, DELETE_SONG } from '../queries';
import { ISongsResponse, IDeleteMutationResponse } from '../interfaces';

const SongList: FC = () => {
  const { loading, error, data, refetch } = useQuery<ISongsResponse>(FETCH_SONGS);
  const [
    deleteMutation,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation<IDeleteMutationResponse, { id: string }>(
    DELETE_SONG,
  );

  const handleDelete = async (id: string) => {
    const response = await deleteMutation({
      variables: {
        id,
      }
    });

    await refetch();
    console.log('response: ', response);
    console.log('deleteData: ', deleteData);
  };

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  const renderSongs = () => {
    return data && data.songs.map(song => {
      return (
        <li className="collection-item" key={song.id}>
          <Link to={`songs/${song.id}`}>
            {song.title}
          </Link>
          <i className="material-icons" onClick={() => handleDelete(song.id)}>delete</i>
        </li>
      )
    });
  };

  return (
    <div>
      <ul className="collection">
        {renderSongs()}
      </ul>
      <Link to="songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
