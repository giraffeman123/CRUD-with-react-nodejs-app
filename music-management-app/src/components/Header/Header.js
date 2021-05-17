import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Song Management App</h1>
      <hr />
      <Container>
        <NavLink to="/" exact>          
          <Badge variant="dark">Songs List</Badge>
        </NavLink>
        <NavLink to="/add" >          
          <Badge variant="dark">Add Song</Badge>
        </NavLink>        
      </Container>
    </header>
  );
};

export default Header;