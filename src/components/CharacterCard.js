import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Card
      style={{
        marginBottom: "30px",
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      }}
    >
      <CardImg top width="100%" src={props.img} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.species}</CardSubtitle>
        <CardSubtitle>{props.gender}</CardSubtitle>
        <CardSubtitle>{props.status}</CardSubtitle>
      </CardBody>
    </Card>
  );
}
