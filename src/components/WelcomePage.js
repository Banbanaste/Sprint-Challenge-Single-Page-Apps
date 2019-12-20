import React from "react";
import { Jumbotron, Button, Badge, Container } from "reactstrap";
import { Link } from "react-router-dom";

export default function WelcomePage(props) {
  return (
    <section className="welcome-page">
      <Container>
        <Jumbotron>
          <h1 className="display-4" style={{ textAlign: "center" }}>
            Welcome to the ultimate fan site!
            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
              width="50px"
              style={{ borderRadius: "50%", border: "solid 2px green" }}
            />
          </h1>

          <Link to="/characters">
            <Button>Characters</Button>
          </Link>
          <Link to="/locations" style={{ marginLeft: "20px" }}>
            <Button>Locations</Button>
          </Link>
          <Link to="/episodes" style={{ marginLeft: "20px" }}>
            <Button>Episodes</Button>
          </Link>
        </Jumbotron>
      </Container>
    </section>
  );
}
