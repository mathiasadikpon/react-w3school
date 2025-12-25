import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => (
  <Card style={{ width: "18rem", margin: "1rem" }}>
    <CardImg src={anime.images.jpg.image_url} alt={anime.title} />
    <CardBody>
      <CardTitle tag="h5">{anime.title}</CardTitle>
      <Link to={`/anime/${anime.mal_id}`}>View Details</Link>
    </CardBody>
  </Card>
);

export default AnimeCard;
