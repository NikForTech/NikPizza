import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';// we are using react-bootstrap which has his own disigen mode
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdLocalOffer} from 'react-icons/md'

const TopNav = () => {
  return (
    <div>
        <Navbar bg = "dark" variant ="dark" expand ="lg">
            <Container fluid>
                <h6 className='text-light'>
                  <MdLocalOffer className="text-warning"/>
                  Free pizza on order of 500/
                </h6>
                <Nav className ="ms-auto">
                   <LinkContainer to = "/">
                    <Nav.Link>Home</Nav.Link>
                   </LinkContainer>
                   <LinkContainer to = "/about">
                    <Nav.Link>About</Nav.Link>
                   </LinkContainer>
                   <LinkContainer to = "/Contact">
                    <Nav.Link>Contact</Nav.Link>
                   </LinkContainer>
                   <LinkContainer to = "/Policy">
                    <Nav.Link>Policy Term & Condition</Nav.Link>
                   </LinkContainer> 
                </Nav>
            </Container>
        </Navbar>
      
    </div>
  );
};

export default TopNav;
