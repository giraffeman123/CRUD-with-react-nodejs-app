import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SongForm from './SongForm';
import SongsContext from '../../context/SongsContext';
import { updateSong } from '../../middleware/api';

const EditSong = ({ history }) => {
  const { id } = useParams();
  const { songs, setSongs } = useContext(SongsContext);
  const songToEdit = songs.find((song) => song.id === id);

  const handleOnSubmit = (song) => {
    updateSong(song).then((response) =>{
      if(Object.keys(response).length !== 0){        
        history.push('/');
      }      
    });  
    // const filteredSongs = songs.filter((song) => song.id !== id);
    // setSongs([song, ...filteredSongs]);    
  };

  return (
    <div>
      <SongForm song={songToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditSong;