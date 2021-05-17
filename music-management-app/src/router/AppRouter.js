import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import useToken from '../hooks/useToken';
import useSongs from '../hooks/useSongs';
import Login from '../components/Login/Login';
import Header from '../components/Header/Header'
import SongsContext from '../context/SongsContext';
import SongList from '../components/Songs/SongList';
import AddSong from '../components/Songs/AddSong';
import EditSong from '../components/Songs/EditSong';
import SongDetail from '../components/Songs/SongDetail';

function App() {
  const { token, setToken } = useToken();
  const [songs, setSongs] = useState([]);
  // const [songs, setSongs] = useSongs('songs', []);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">      
      <BrowserRouter>
        <Header />
        {/* <Route component={Login} path="/login" />         */}
        <SongsContext.Provider value={{ songs, setSongs }}>
          <Switch>            
            <Route component={SongList} path="/songs" exact={true} />
            <Route component={SongDetail} path='/songs/:id' />
            <Route component={AddSong} path="/add" />
            <Route component={EditSong} path="/edit/:id" />            
            <Route component={() => <Redirect to="/songs" />} />
          </Switch>
        </SongsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;