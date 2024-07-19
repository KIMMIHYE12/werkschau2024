import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='container_warp'>
      <Container>
        <h1>Kannst du meine Stimme hören?</h1>
        <ul className='list_menu'>
          <li className='menu'>
            <Link to='aufgabe1'>Aufgabe1</Link>
          </li>
          <li className='menu'>
            <Link to='aufgabe2'>Aufgabe2</Link>
          </li>
          <li className='menu'>
            <Link to='aufgabe3'>Aufgabe3</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Home;
