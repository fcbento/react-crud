import React, { Component } from 'react'
import Formr from '../user/Formr.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} >
                        <Formr />
                    </Col>
                </Row>
            </Container>
        )
    }
}
