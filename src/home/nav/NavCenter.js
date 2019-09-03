import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export class NavCenter extends Component {

    widthInput = () => {
        return {
            width: '80%'
        }
    }

    render() {
        return (
            <div>
                <InputGroup size="lg">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Large</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={this.widthInput()} />
                </InputGroup>
            </div>
        )
    }
}

export default NavCenter
