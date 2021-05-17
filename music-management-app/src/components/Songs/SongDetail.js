import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Song from './Song';
import SongsContext from '../../context/SongsContext';
import { deleteSong } from '../../middleware/api';

const SongDetail = () => {
    const { id } = useParams();
    const history = useHistory();
    const { songs, setSongs } = useContext(SongsContext);
    const songToShow = songs.find((song) => song.id === id);

    const handleRemoveSong = (songToShow) => {
        deleteSong(songToShow).then((response) =>{
            if(Object.keys(response).length !== 0){                
                history.push('/');
              } 
        });
        // setSongs(songs.filter((song) => song.id !== id));        
      };

    return (
        <Song key={songToShow.id} {...songToShow} handleRemoveSong={handleRemoveSong} />
    );
}

export default SongDetail;