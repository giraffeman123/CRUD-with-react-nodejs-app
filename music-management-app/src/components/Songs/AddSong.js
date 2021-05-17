import React, { useContext } from 'react';
import SongsContext from '../../context/SongsContext';
import SongForm from './SongForm';
import { addSong } from '../../middleware/api';

const AddSong = ({ history }) => {
  const { songs, setSongs } = useContext(SongsContext);

  const handleOnSubmit = (song) => {    
    addSong(song).then((response) =>{
      if(Object.keys(response).length !== 0){        
        history.push('/');
      }      
    });    
  };

  return (
    <React.Fragment>
      <SongForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddSong;