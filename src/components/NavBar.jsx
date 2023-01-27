
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../images/logo.png"
const Landing = () => {
  return (
    <div>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <div className='logodiv'>
      <img className='logo' src={logo} alt='' />
      </div>
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
    </div>
  )
}

export default Landing

