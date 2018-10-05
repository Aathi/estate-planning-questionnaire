import React, { Component } from 'react';
import { Button, Select, Input,     Header,
    Icon,
    Grid, 
    Divider,
    Segment,
    Image} from 'semantic-ui-react'
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput,
  } from 'semantic-ui-calendar-react'

const options = [
    { key: 'mr', text: 'Mr', value: 'mr' },
    { key: 'mrs', text: 'Mrs', value: 'mrs' },
    { key: 'ms', text: 'Ms', value: 'ms' },
]

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

class One extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: "",
      dateTime: "",
      datesRange: "",
      values: []
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };


  spousedetails = () => {
      return(
          <div>
               <label style={style.label}>First</label>
                <Input size="large" placeholder="First" style={style.formInput} />

                <label style={style.label}>Middle Initial</label>
                <Input
                size="large"
                placeholder="Middle Initial"
                style={style.formInput}
                />

                <label style={style.label}>Middle Initial</label>
                <Input
                size="large"
                placeholder="Last"
                style={style.formInput}
                />
                
                <label style={style.label}>Social Security Number</label>
                <Input
                size="large"
                placeholder="Social Security Number"
                style={style.formInput}
                />

                <label style={style.label}>Date of Birth</label>
                <DateInput
                name="date"
                placeholder="Date of Birth"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
                />
          </div>
      )
  }

  email = () => {
    return(
        <div>
             <label style={style.label}>Self</label>
              <Input size="large" placeholder="emailSelf" style={style.formInput} />

              <label style={style.label}>Spouse</label>
              <Input
              size="large"
              placeholder="SpouseEmail"
              style={style.formInput}
              />
              
        </div>
    )
}


  address = () => {
    return(
        <div>
             <label style={style.label}>Street</label>
              <Input size="large" placeholder="Street" style={style.formInput} />

              <label style={style.label}>City</label>
              <Input
              size="large"
              placeholder="City"
              style={style.formInput}
              />

              <label style={style.label}>Country</label>
              <Input
              size="large"
              placeholder="Country"
              style={style.formInput}
              />
              
              <label style={style.label}>Zip </label>
              <Input
              size="large"
              placeholder="Zip"
              style={style.formInput}
              />

        </div>
    )
}

phone = () => {
    return(
        <div>
             <label style={style.label}>Home</label>
              <Input size="large" placeholder="Home" style={style.formInput} />

              <label style={style.label}>Cell</label>
              <Input
              size="large"
              placeholder="Cell"
              style={style.formInput}
              />

              <label style={style.label}>Cell(Spouse)</label>
              <Input
              size="large"
              placeholder="cellSpouse"
              style={style.formInput}
              />
              
              <label style={style.label}>Business(Self) </label>
              <Input
              size="large"
              placeholder="businessSelf"
              style={style.formInput}
              />

              <label style={style.label}>Business(Spouse) </label>
              <Input
              size="large"
              placeholder="businessSelf"
              style={style.formInput}
              />

              <label style={style.label}>Email</label>

              <Input
              size="large"
              placeholder="email"
              style={style.formInput}
              />
        </div>
    )
}

occupationYou = () => {
    return(
        <div>
             <label style={style.label}>Occupation/ Employer(You)</label>
              <Input size="large" placeholder="Home" style={style.formInput} />
        
              <label style={style.label}>Retired</label>
                <div style={style.formInput}>
                <Button attached="left">Yes</Button>
                <Button attached="right">No</Button>
                </div>

             <label style={style.label}>Occupation/ Employer(Spouse)</label>
              <Input size="large" placeholder="Home" style={style.formInput} />
        
              <label style={style.label}>Retired</label>
                <div style={style.formInput}>
                <Button attached="left">Yes</Button>
                <Button attached="right">No</Button>
                </div>
        </div>
    )
}


dateAndPlaceOfMarriage = () => {
    return(
        <div>
             <label style={style.label}>Date and place of marriage</label>
              <Input size="large" placeholder="dateAndPlaceOfMarriage" style={style.formInput} />

            <label style={style.label}>Date of marriage</label>
            <DateInput
                name="dateOfMarriage"
                placeholder="Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
            />
        </div>
    )
}

areYouRegistered = () => {
    return(
        <div>
              <label style={style.label}>Pre Meritial Agreement?</label>
                <div style={style.formInput}>
                <Button attached="left">Yes</Button>
                <Button attached="right">No</Button>
                </div>

            <label style={style.label}>If yes please provide a copy of registration</label>

        </div>
    )
}

countryCitizenship = () => {
    return(
        <div>
              <label style={style.label}>You</label>
                <div style={style.formInput}>
                <Button attached="left">Yes</Button>
                <Button attached="right">No</Button>
                </div>

                <label style={style.label}>Country Of Citizenship</label>
              <Input size="large" placeholder="Home" style={style.formInput} />
        

            <label style={style.label}>Spouse</label>
                <div style={style.formInput}>
                <Button attached="left">Yes</Button>
                <Button attached="right">No</Button>
                </div>

                <label style={style.label}>Country Of Citizenship</label>
              <Input size="large" placeholder="Home" style={style.formInput} />
        
        </div>
    )
}


areYouUsCitizen = () => {
    return(
        <div>
              <label style={style.label}>Are you registered as demestic partners</label>
                <div style={style.formInput}>
                <Button attached="left">Yes</Button>
                <Button attached="right">No</Button>
                </div>

            <label style={style.label}>If yes date of registration</label>
            <DateInput
                name="dateOfRegistration"
                placeholder="Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
            />
        </div>
    )
}

nameInDrivindLicence = () => {
    return(
        <div>
            <label style={style.label}>You</label>
            <Input size="large" placeholder="Home" style={style.formInput} />

            <label style={style.label}>Spouse</label>
            <Input size="large" placeholder="Home" style={style.formInput} />
        </div>
    )
}

signingDocument = () => {
    return(
        <div>
            <label style={style.label}>You</label>
            <Input size="large" placeholder="Home" style={style.formInput} />

            <label style={style.label}>Spouse</label>
            <Input size="large" placeholder="Home" style={style.formInput} />
        </div>
        )
}

child = (i) => {
    return(
        <div>
            <label style={style.label}>Name</label>
            <Input size="large" placeholder="Name" style={style.formInput} />
            <label style={style.label}>Sex</label>
            <div style={style.formInput}>
                <Button attached="left">M</Button>
                <Button attached="right">F</Button>
            </div>
            <DateInput
                name="dateOfBirth"
                placeholder="Birth Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
            />
            <label style={style.label}>Married?</label>
            <div style={style.formInput}>
                <Button attached="left">Yes</Button>
                <Button attached="right">No</Button>
            </div>

            <label style={style.label}>Number of childrem</label>
            <Input size="large" placeholder="Number Of children" style={style.formInput} />
            <Button secondary onClick={ () => this.removeClick(i)}>Remove</Button>
        </div>
        )
}
  

  render() {
    return (
      <div>

        <div style={{ textAlign: 'right'}}>
        <DateInput
                name="startDate"
                placeholder="Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
            />
        </div>
        
        <Segment >
            <Divider horizontal >
            Personal And Family Informations
            </Divider>
        </Segment>
        
        {/* <label style={style.label}>Title</label>
        <Select size="large" compact options={options} defaultValue="mr" />
         */}
        <label style={style.label}>First</label>
        <Input size="large" placeholder="First" style={style.formInput} />

        <label style={style.label}>Middle Initial</label>
        <Input
          size="large"
          placeholder="Middle Initial"
          style={style.formInput}
        />

        <label style={style.label}>Middle Initial</label>
        <Input
          size="large"
          placeholder="Last"
          style={style.formInput}
        />
        
        <label style={style.label}>Social Security Number</label>
        <Input
          size="large"
          placeholder="Social Security Number"
          style={style.formInput}
        />

        <label style={style.label}>Date of Birth</label>
        <DateInput
          name="date"
          placeholder="Date of Birth"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange}
        />

        <Header as='h3'>Spouse Details</Header>
        <hr/>
         {this.spousedetails()}

        <Header as='h3'>Address</Header>
        <hr/>
         {this.address()}

        <Header as='h3'>Phone</Header>
        <hr/>
         {this.phone()}

        <Header as='h3'>Email</Header>
        <hr/>
         {this.email()}
        
        <Header as='h3'>Email</Header>
        <hr/>
         {this.email()}
        
         <Header as='h3'>Occupation/ Employer</Header>
         <hr/>
        {this.occupationYou()}

         <Header as='h3'>Date And Place of your Marriage</Header>
         <hr/>
        {this.dateAndPlaceOfMarriage()}

        <Header as='h3'>Are you registered as demestic partners?</Header>
         <hr/>
        {this.areYouRegistered()}

         <Header as='h3'>Is there a pre meritial agreement?</Header>
         <hr/>
        {this.areYouRegistered()}
         
        <Header as='h3'>Are you US Citizen?</Header>
         <hr/>
        {this.countryCitizenship()}
         
        <Header as='h3'>Indicates name as it appears on your driving licence?</Header>
        <hr/>
        {this.nameInDrivindLicence()}

        <Header as='h3'>Indicates name you would like to use in signing document.</Header>
        <hr/>
        {this.signingDocument()}
         
        <Segment >
            <Divider horizontal >
            Children of parent marriage
            </Divider>
        </Segment>
        <form onSubmit={this.handleSubmit} style={{ marginBottom: 50}}>
            {this.state.values.map((el, i) => {
                return(
                    <div>
                        {this.child(i)}
                        <hr/>
                    </div>
                )
            })}
            <Button secondary onClick={this.addClick}>Add A Child</Button>      
        </form>

      </div>
    );
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
 }
 
 addClick = () => {
   this.setState(prevState => ({ values: [...prevState.values, '']}))
 }
 
 removeClick = (i) => {
    let values = [...this.state.values];
    values.splice(i,1);
    this.setState({ values });
 }

 handleSubmit =(event) => {
   event.preventDefault();
 }
}

export default One;