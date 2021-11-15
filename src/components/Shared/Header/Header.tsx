import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall,FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone,BsChatLeft } from 'react-icons/bs';
import {BiSearch,BiUser} from 'react-icons/bi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import logo from '../../../assets/images/fvaly.png';
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="top-header py-2 bg-light border-bottom">
          <Container className=" d-flex justify-content-between">
            <ul className="list-unstyled d-flex align-items-center gap-3">
              <li>
                <FiPhoneCall /> <a href="tel:09638111666">09638111666</a>
              </li>
              <li>
                <FaRegEnvelope />{' '}
                <a href="mail:support@fvaly.com.bd">support@fvaly.com.bd</a>
              </li>
            </ul>
            <div>
              <li className="list-unstyled">
                <BsPhone />
                <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.fvalyshop">
                  Save big on our app!
                </a>
              </li>
            </div>
          </Container>
        </div>

        <div className="middle-header">
          <Container>
            <div className="d-flex align-items-center gap-5 py-4">
              <img className="brand" src={logo} alt="fvaly" />
              <InputGroup>
                <FormControl
                className="border border-primary"
                  placeholder="Search for..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                  <BiSearch/> 
                </Button>
              </InputGroup>
              <div className="list-icon">
              <ul className="list-unstyled d-flex align-items-center gap-4">
                <li><FiShoppingBag/></li>
                <li><IoMdNotificationsOutline/></li>
                <li><BsChatLeft/></li>
                <li><BiUser/></li>
              </ul>
              </div>
            </div>
          </Container>
        </div>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Categories</Navbar.Brand>
            <Nav className="mx-auto">
            <Nav.Link href="#home">All Shops</Nav.Link>
              <Nav.Link href="#features">Gift Card</Nav.Link>
              <Nav.Link href="#home">Campaigns</Nav.Link>
              <Nav.Link href="#features">Top-up</Nav.Link>
              <Nav.Link href="#home">Express</Nav.Link>
              <Nav.Link href="#features">T10</Nav.Link>
              <Nav.Link href="#home">News Feed</Nav.Link>
              <Nav.Link href="#features">Merchant Zone</Nav.Link>
              <Nav.Link href="#pricing">Help</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
