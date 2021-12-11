import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from 'types';
import imageUrlParser from 'utils/imageUrlParser';

const Product = ({ pd }:{ pd:IProduct }) => {
  const { name, image, _id}=pd;
  return (
    <Col md={3} className="mb-3">
      <Link to={`/product/${_id}`}>
      <Card>
        <Card.Img variant="top" src={imageUrlParser(image)} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
};

export default Product;
