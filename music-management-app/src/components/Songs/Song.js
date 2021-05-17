import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Song = ({ id, songname, author, genre, price, quantity, date, handleRemoveSong }) => {
    const history = useHistory();
    return (
        <Card style={{ width: '18rem' }} className="song">
            <Card.Body>
                <Card.Title className="song-title">{songname}</Card.Title>
                <div className="song-details">
                <div>Author: {author}</div>
                <div>Genre: {genre}</div>
                <div>Quantity: {quantity} </div>
                <div>Price: {price} </div>
                <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)} >
                    Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveSong({ id, songname, author, genre, price, quantity, date })}>
                Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Song;

