import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

import {
    Container,
} from 'semantic-ui-react'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container style={{ marginTop: '7em' }}>
                    {this.props.children}
                </Container>
                <Footer />
            </div>
        )
    }
}
