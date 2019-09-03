import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { HashLoaderSpinner } from '../common/spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './User.css'

const axios = require('axios');


export default class Login extends Component {
    
    constructor(props) {
        super(props)

        this.stateInicial = {
            email: '',
            password: '',
            loading: false
        }
        this.state = this.stateInicial;
    }

    inputListener = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    loginUser = e => {
        
        this.setState({
            loading: true,
        });
        e.preventDefault();

        const url = 'http://localhost:8080/api/login'

        axios.post(url, {
            data: this.state
        }).then((response) => {
            if (response.data) {
                this.setState({
                    loading: false,
                });
            }
        }).catch((error) => {
            this.setState({
                loading: false,
            });
            toast.error("Apparently something went wrong");
        });
    }

    render() {

        const { email, password, loading } = this.state;

        return (

            <div className="user-background">
                <Container>
                    <Row>
                        <Col xs={5} className="user-box">
                            <div className="user-content">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={this.inputListener}
                                            placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={password}
                                            name="password"
                                            onChange={this.inputListener}
                                            placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicChecbox">
                                        <small><Link to={'/form'}>Sign up</Link> if you are not a member yet</small>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={this.loginUser}>Login</Button>
                                </Form>
                            </div>
                        </Col>
                        <Col>
                            {loading ? <HashLoaderSpinner /> : null}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
