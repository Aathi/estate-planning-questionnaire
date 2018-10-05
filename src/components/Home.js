import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


 class Home extends Component {
    handle = () => {
        this.props.history.push('/married/1')
    }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
          <Button primary onClick={this.handle}>Married</Button>
          <Button primary onClick={this.handle}>Unmarried</Button>
      </div>
    )
  }
}

export default withRouter(Home)