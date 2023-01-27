import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import mainlogo from "../images/logo1.jpg"
import Accordion from 'react-bootstrap/Accordion';


const PageOne = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='page-one'>
   
    <Button
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    Click me
  </Button>
  <div style={{ minHeight: '250px' }}>
    <Collapse in={open} dimension="width">
     
        <Container>
        <Row>
          <Col md={6}>
          <Card body style={{ padding:"5vh" }}>
          <div>
          <h1 className='welcome'>Welcome to Codetrain Africa</h1> 
          </div>
          
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <h5>Read more</h5>
        </Accordion.Header>
        <Accordion.Body>
        Codetrain is a coding bootcamp school designed to provide aspiring software developers with the technical skills that will allow them to have a career in the software development industry. The founder, Richard Brandt, first thought about setting up a coding school when he had trouble finding interns with hands-on experience. </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>

    <Button variant="outline-primary" className='enroll'>Enroll now</Button>
          </Card>
          </Col>
          <Col className='col-md-6'>
          <Card body style={{ padding:"5vh" }}>
          <div>
          <img className='mainlogo' src={mainlogo} alt=''/>
          </div>
          </Card>
          </Col>
          
          
        </Row>

        
      </Container>



     
    </Collapse>


    
   
    </div>
    </div>
  )
}

export default PageOne