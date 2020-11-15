import React, { Component } from 'react';
import Pokemos from './pokemos'
import {Container, Row, Col} from 'react-bootstrap';

class Pokemones extends Component {
    state = {  }
    render() { 
        return (
        <Container fluid="md">
        <Row>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
          <Col className="pd50"><Pokemos/></Col>
        </Row>
      </Container>
      
      );
    }
}
 
export default Pokemones;