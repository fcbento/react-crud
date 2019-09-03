import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FiUser } from "react-icons/fi";
import './Sidenav.css'

export class Sidenav extends Component {
    render() {
        return (
            <Row className="sidenav">
                <Col>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home"> Profile </Nav.Link>
                        <Nav.Link eventKey="link-1">About</Nav.Link>
                        <Nav.Link eventKey="link-2">Friends</Nav.Link>
                        <Nav.Link eventKey="link-2">Photos</Nav.Link>
                        <Nav.Link eventKey="link-2">Edit Profile</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        )
    }
}

export default Sidenav
