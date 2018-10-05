import React, { Component } from 'react'
import Payment from './Payment'
import { Step } from 'semantic-ui-react'


import Autosuggest from 'react-autosuggest';

const style = {
    label: {
        display: 'block',
        fontSize: 14,
    },
    formInput:{
        display: 'block',
        marginTop: 10,
        marginBottom: 10
    }
}


const courses = [
    {
        courseCode: 'B00021-181901',
        title: 'Website Design & Creation - Introduction',
        date: '01/10/2018',
        fee: '150'
    },
    {
        courseCode: 'B00021-181902',
        title: 'Office Skills OCNLR Level 1 Certificate',
        date: '05/10/2018',
        fee: '256'
    },
    {
        courseCode: 'B00114-181901',
        title: 'Excel - Intermediate',
        date: '13/12/2018',
        fee: '256'
    }
]

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : courses.filter(lang =>
      lang.title.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  const getSuggestionValue = suggestion => suggestion.title;
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.title} | {suggestion.date} | £{suggestion.fee}.00
    </div>
  );
  

export default class Two extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            fullValue: '',
            suggestions: []
        };
    }

    findObject = (newValue) => {
        const res = courses.find(val => {
            return val.title === newValue
        })
        this.setState({
            fullValue: res
        })
    }

    onChange = (event, { newValue }) => {
        this.findObject(newValue);
        this.setState({
            value: newValue,
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

 
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    render() {

        const { value, suggestions , fullValue} = this.state;
        const inputProps = {
            placeholder: "Enter the course name",
            value,
            onChange: this.onChange
        };

        return (
            <div style={{ marginBottom: 50 }}>
                <h2>
                    Course
                </h2>
                <label style={style.label}>Course Title</label>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                <div style={{textAlign: 'right', marginTop: 10}}>
                <Step.Group>
                    <Step icon='pound sign' title={`${fullValue ? fullValue.fee : 0}.00`} description='Course Fee' />
                </Step.Group>
                </div>
                
                 <div style={{textAlign: 'right', marginTop: 30}}>
                    <Payment course={fullValue}/>
                 </div>
            </div>
        )
    }
}
