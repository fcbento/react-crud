import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { FaComments } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';

export class NavRight extends Component {

    navLink = () => {
        return {
            color: 'white',
            textWeight: 'bold',
            fontSize: '20px'
        }
    }

    render() {
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" style={this.navLink()}><FaComments/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" style={this.navLink()}><FaGlobeAmericas/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" style={this.navLink()}><FaUser/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home" style={this.navLink()}><FaCalendar/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" style={this.navLink()}><FaCamera/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" style={this.navLink()}><FaUserFriends/></Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default NavRight
