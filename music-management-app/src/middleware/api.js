const SERVER_URL = 'http://localhost:8080';

export const loginUser = async (credentials) => {    
  const json = {"username": credentials.username, "password": credentials.password};

  const response = await fetch(SERVER_URL + '/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(json)
  })
  return await response.json();
}

export const getAllSongs = async () => {
  const response = await fetch(SERVER_URL+'/api/songs');
  return await response.json();
}

export const addSong = async (data) => {
  const response = await fetch(SERVER_URL + '/api/songs', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  return await response.json();
}

export const updateSong = async (data) => {
  const response = await fetch(SERVER_URL + '/api/songs/'+data.id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  return await response.json();
}

export const deleteSong = async (data) => {
  const response = await fetch(SERVER_URL + '/api/songs/'+data.id, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  return await response.json();
}