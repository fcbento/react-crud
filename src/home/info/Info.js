import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
    
const ProfileImg = () => {
    return (
        <div style={{ marginTop: '1rem' }}>
            <Image src="https://placeimg.com/150/150/people" roundedCircle style={{ border: '2px solid white' }} />
        </div>
    );

}

const ProfileName = () => {
    return (
        <div>
            <h1 style={{color: 'white'}}>Hillary McBrewk</h1>
        </div>
    );
}

export class Info extends Component {

    infoBackground = () => {
        return {
            backgroundColor: "#0db7ed",
            padding: '1rem',
            height: '200px',
        }
    }

    render() {
        return (
            <section>
                <Row style={this.infoBackground()} className="justify-content-md-center">
                    <ProfileImg />
                </Row>
                <Row style={this.infoBackground()} className="justify-content-md-center">
                    <ProfileName />
                </Row>
            </section>

        )
    }
}

export default Info
