import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const SongForm = (props) => {
  const [song, setSong] = useState(() => {
    return {
        id: props.song ? props.song.id : '',
        songname: props.song ? props.song.songname : '',
        author: props.song ? props.song.author : '',
        genre: props.song ? props.song.genre : '',        
        quantity: props.song ? props.song.quantity : '',
        price: props.song ? props.song.price : '',
        date: props.song ? props.song.date : ''
    }
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { id, songname, author, genre, price, quantity } = song;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [songname, author, genre, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0' && value !== 'Select genre';
    });

    if (allFieldsFilled) {
      console.log(id);
      const uuid = (id !== '' && id !== '0' && id !== 'undefined' ) ? id : uuidv4();
      console.log(uuid);
      const song = {
        id: uuid,   
        songname,     
        author,
        genre,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(song);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
            setSong((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setSong((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setSong((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Song Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="songname"
            value={songname}
            placeholder="Enter name of song"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Song Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control             
            as="select"            
            name="genre"
            value={genre}
            onChange={handleInputChange}>            
            <option>Select genre</option>
            <option>Pop Urbano</option>
            <option>Reggaeton</option>
            <option>Trap</option>
            <option>Rock</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SongForm;