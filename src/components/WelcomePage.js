import React from "react";
import { Jumbotron, Button, Badge, Container } from "reactstrap";
import SearchForm from "./SearchForm";

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
        </Jumbotron>
      </Container>
    </section>
  );
}
