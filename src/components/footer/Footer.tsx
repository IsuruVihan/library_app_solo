import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Globe, Linkedin, Facebook, Home, Info, Phone, User} from "react-feather";
import '../../assets/styles/partials/_Footer.scss';
import {Link} from "react-router-dom";

const Footer: FC = () => {
  return (
    <Container className="px-0 footer" fluid>
      <Row className="mx-0" style={{borderBottom: '2px solid white'}}>
        <Col className="px-0 text-center">
          <Row className="mx-0">
            <Col className="px-0">
              <a href="https://www.softvessel.com/" rel="noreferrer" target="_blank">
                <Globe className="m-3 social-media-icon"/>
              </a>
              <a href="https://www.linkedin.com/company/softvessel/" rel="noreferrer" target="_blank">
                <Linkedin className="m-3 social-media-icon"/>
              </a>
              <a href="https://www.facebook.com/search/top?q=softvessel" rel="noreferrer" target="_blank">
                <Facebook className="m-3 social-media-icon"/>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mx-0">
        <Col className="p-4" md={6} xs={12}>
          <p className="my-library-title text-md-left">MyLibrary</p>
          <p className="my-library-text text-justify">
            A library is a place where many books are kept. Most libraries are public and let people take
            the books to use in their home. Most libraries let people borrow books for several weeks. Also
            a person's bookshelves at home can have many books and be a library.
          </p>
        </Col>
        <Col className="p-4 text-center" md={3} xs={12}>
          <p className="useful-links-title">Useful Links</p>
          <Link to="/">
            <p className="link">
              <Home className="link-icon"/>
              <span>Home</span>
            </p>
          </Link>
          <Link to="/about">
            <p className="link">
              <Info className="link-icon"/>
              <span>About</span>
            </p>
          </Link>
          <Link to="/contactus">
            <p className="link">
              <Phone className="link-icon"/>
              <span>Contact Us</span>
            </p>
          </Link>
        </Col>
        <Col className="p-4 text-center" md={3} xs={12}>
          <p className="developer-title">Developer</p>
          <a
            className="developer-link"
            href="https://www.linkedin.com/in/isuru-harischandra-9b09081a4/"
            rel="noreferrer"
            target="_blank"
          >
            <User className="link-icon"/>
            <span>Isuru Harischandra</span>
          </a>
        </Col>
      </Row>
      <Row className="mx-0 bg-light copyright">
        <Col className="px-0 py-3 text-center">
          © 2021 Copyright :
          <a className="text-reset fw-bold" href="https://www.softvessel.com/" rel="noreferrer" target="_blank">
            softvessel.com
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;