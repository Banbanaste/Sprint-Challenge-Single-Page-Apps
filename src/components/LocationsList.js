import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Row, Col, Container, Button } from "reactstrap";
import Spinner from "react-bootstrap/Spinner";

export default function LocationsList() {
  const [characters, setCharacters] = useState({ firstLoad: true });
  const [query, setQuery] = useState("");

  const handleChange = event => {
    setCharacters({ ...characters, firstLoad: true });
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    characters.firstLoad &&
      getCharacters("https://rickandmortyapi.com/api/location/");
  }, [query]);

  const nextPage = () => {
    characters.info.next && getCharacters(characters.info.next);
  };

  const prevPage = () => {
    characters.info.prev && getCharacters(characters.info.prev);
  };

  const getCharacters = url => {
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        const result = data.results.filter(char => {
          return char.name.toLowerCase().includes(query.toLowerCase());
        });
        console.log(result);
        setCharacters({
          firstLoad: false,
          ...data,
          results: result
        });
      })
      .catch(error => {
        document.querySelector(
          "#root"
        ).innerHTML = `<div class="container" style="background-color: red; display: flex; justify-content: center; align-items:center; height: 100vh; font-size: 30px">${error}<div>`;
      });
  };

  return (
    <Container className="character-list">
      <Row>
        <SearchForm handleChange={handleChange} value={query} />
      </Row>
      <Row>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 0 20px 0"
          }}
        >
          <Button onClick={prevPage} color="primary">
            Previous Page
          </Button>
          <Button onClick={nextPage} color="primary">
            Next Page
          </Button>
        </Container>
      </Row>
      <Row>
        {characters.firstLoad && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100vw"
            }}
          >
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
        {!characters.firstLoad &&
          characters.results.map(character => {
            return (
              <Col sm="3" xs="12" key={character.created}>
                <CharacterCard
                  img="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Rick_and_Morty_season_4.png/250px-Rick_and_Morty_season_4.png"
                  name={character.name}
                  species={character.type}
                  gender={character.dimension}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
