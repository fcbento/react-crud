import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavLeft from './NavLeft'
import NavCenter from './NavCenter';
import NavRight from './NavRight';

export class Navbar extends Component {

    getNavStyle = () => {
        return {
            padding: '1rem',
            backgroundColor: '#0db7ed',
            color: 'white'
        }
    }

    render() {
        return (
            <Row style={this.getNavStyle()}>
                <Col xs={2}>
                    <NavLeft />
                </Col>
                <Col xs={6}>
                    <NavCenter />
                </Col>
                <Col xs={4}>
                    <NavRight />
                </Col>
            </Row>
        )
    }
}

export default Navbar
