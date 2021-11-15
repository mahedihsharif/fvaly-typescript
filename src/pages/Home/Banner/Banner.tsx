import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import CarouselItem from './CarouselItem';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={9} className="mt-3">
              <CarouselItem/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
