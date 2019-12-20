import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormText, Container } from "reactstrap";

export default function SearchForm(props) {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="search">Search through Results</Label>
          <Input
            id="search"
            type="text"
            name="search"
            value={props.query}
            onChange={props.handleChange}
          />
        </FormGroup>
      </Form>
    </Container>
  );
}
