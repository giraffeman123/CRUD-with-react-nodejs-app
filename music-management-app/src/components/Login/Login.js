import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button } from 'react-bootstrap';
import { loginUser } from '../../middleware/api';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const values = [username, password];
    let errorMsg = '';
    
    const allFieldAreFilled = values.every((field) => {
      const value = `${field}`.trim();      
      return value !== '' && value !== '0' && (value !== 'undefined');
    });    
       
    if(allFieldAreFilled){      
      loginUser({username, password}).then((response) => {        
        let token = response;        
        if(Object.keys(token).length !== 0)
          setToken(token);
      });            
    }else{
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  }

  return(
    <Container>    
      <h1>Please Log In</h1>
      <hr />
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group><br/>        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>      
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};