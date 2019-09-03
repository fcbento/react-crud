import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export class NavLeft extends Component {

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
                <Nav activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" style={this.navLink()}>Active</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default NavLeft
