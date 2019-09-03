import React, { Component } from 'react'
import Sidenav from './sidenav/Sidenav';
import Navbar from './nav/Navbar';
import Info from './info/Info';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Home extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Navbar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Info />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <Sidenav />
                    </Col>
                    <Col xs={9}>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home
