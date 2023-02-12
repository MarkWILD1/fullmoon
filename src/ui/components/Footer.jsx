import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
    <Container>
      <Row>
        <Col md={6}>
          <h5>Sobre nos</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra neque euismod, suscipit diam vel, bibendum velit.</p>
        </Col>
        <Col md={6}>
          <h5>Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre nos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </Col>
        {/* <Col md={3}>
          <h5>Contato</h5>
          <Form>
            <Form.Control type="email" placeholder="Enter email" />
            <Button className="mt-3" variant="outline-light">Subscribe</Button>
          </Form>
        </Col> */}
      </Row>
      <p className="text-center mt-3">&copy; {new Date().getFullYear()} © Copyright Fullmoon. Developed by Marcos Mello</p>
    </Container>
  </footer>
  );
}
