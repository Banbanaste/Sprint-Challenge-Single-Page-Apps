import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Row, Col, Container } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState({ firstLoad: true });
  const [query, setQuery] = useState("");

  const handleChange = event => {
    setCharacters({ ...characters, firstLoad: true });
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    characters.firstLoad &&
      getCharacters("https://rickandmortyapi.com/api/character/");
  }, [query]);

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
      });
  };

  return (
    <Container className="character-list">
      <Row>
        <SearchForm handleChange={handleChange} value={query} />
      </Row>
      <Row>
        {!characters.firstLoad &&
          characters.results.map(character => {
            return (
              <Col sm="3" xs="12" key={character.created}>
                <CharacterCard
                  img={character.image}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  status={character.status}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
