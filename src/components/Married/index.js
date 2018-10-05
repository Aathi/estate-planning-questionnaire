import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import { Button } from 'semantic-ui-react'
import BreadCumb from './BreadCumb'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'

class Index extends Component {
    state = {
        step: 1
    }

    currentStep = () => {
        const { match: { params: { step } } } = this.props
        switch (step) {
            case '1':
                return <One />
            case '2':
                return <Two />
            case '3':
                return <Three />
            case '4':
                return <Four />
            case '5':
                return <Five />
            default:
                return <One />
        }
    }
      
    handleNext = () => {
        this.setState((state) => {
            this.props.history.push(`/married/${state.step + 1}`)
            return {step: state.step + 1};
        });

    }

    handleBack = () => {
        this.setState((state) => {
            this.props.history.push(`/married/${state.step === 1 ? 1 : state.step - 1 }`)
            return {step: state.step === 1 ? 1 : state.step - 1};
        });
    }
    
    render() {
        return (
            <div>
                <BreadCumb />
                {this.currentStep()}
                <div style={{ textAlign: 'center' }}>
                    <Button content='Back' icon='left arrow' labelPosition='left' onClick={this.handleBack}/>
                    <Button content='Next' icon='right arrow' labelPosition='right' onClick={this.handleNext}/>
                </div>
            </div>
        )
    }
}


export default withRouter(Index)