import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import '../App.css';
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
        console.log(this.state)
        const url = 'http://localhost:8080/api/users'

        axios.post(url, {
            data: this.state
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });

        //this.setState(this.stateInicial);
    }

    render() {

        const { name, last_name, email, password } = this.state;

        return (
            <Card className="someMargin">

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

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={this.saveUser}>
                        Submit
                    </Button>
                </Form>
            </Card>
        )
    }
}
