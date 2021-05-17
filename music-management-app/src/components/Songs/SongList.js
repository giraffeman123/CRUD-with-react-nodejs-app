import _ from 'lodash';
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import SongsContext from '../../context/SongsContext';
import { Button, Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getAllSongs } from '../../middleware/api';

const SongList = () => {
  const history = useHistory();
  const { songs, setSongs } = useContext(SongsContext);  
  
  useEffect(() => {
    getAllSongs().then((songs) => {      
      if(!_.isEmpty(songs)){
        setSongs(songs);        
      }            
    });  
  })

  const handleSongClick = ({id}) => {       
    history.push(`/songs/${id}`);
  }

  return (
    <React.Fragment>     
      <Container>
        {!_.isEmpty(songs) ? (
          <Table variant="dark" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Song</th>
              </tr>
            </thead>
            <tbody>                
              {songs.map((song, index) => (                
                <tr>
                  <td>{index}</td>
                  <td>
                    <Button variant="info" onClick={() => handleSongClick(song)} >
                    {song.songname}
                    </Button>                      
                  </td>
                </tr>          
              ))}           
            </tbody>
          </Table>
        ) : (
          <p className="message">No songs available. Please add some songs.</p>
        )}
      </Container>
    </React.Fragment>
  );
};

export default SongList;