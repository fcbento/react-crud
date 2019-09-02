import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom'
import '../App.css';
import './User.css'

const axios = require('axios');

export default class Formr extends Component {

    constructor(props) {
        super(props)

        this.stateInicial = {
            name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.state = this.stateInicial;
    }

    inputListener = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    saveUser = event => {
        event.preventDefault();
        const url = 'http://localhost:8080/api/users'

        axios.post(url, {
            data: this.state
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });

        this.setState(this.stateInicial);
    }

    render() {

        const { name, last_name, email, password } = this.state;

        return (
            <div className="user-background">
                <Container>
                    <Row>
                        <Col xs={5} className="user-box">
                            <div className="user-content">
                                <Form>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={this.inputListener} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="last_name"
                                            placeholder="Enter your last name"
                                            value={last_name}
                                            onChange={this.inputListener} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={email}
                                            placeholder="Enter your email"
                                            onChange={this.inputListener} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={this.inputListener} />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicChecbox">
                                        <small><Link to={'/'}>Login</Link> if you are already a member</small>
                                    </Form.Group>
                                    
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={this.saveUser}>
                                        Submit
                                </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}
