import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import { Breadcrumb } from 'semantic-ui-react'

 class BreadCumb extends Component {
  render() {
    return (
      <div style={{marginBottom: 20}}>
         <Breadcrumb size='huge'>
            <Link to="/step/1">
                <Breadcrumb.Section active >Step 1</Breadcrumb.Section>
            </Link>
            <Breadcrumb.Divider icon='right angle' />
            <Breadcrumb.Section >Step 2</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right angle' />
            <Breadcrumb.Section >Step 3</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right angle' />
            <Breadcrumb.Section >Step 4</Breadcrumb.Section>
        </Breadcrumb>
      </div>
    )
  }
}

export default BreadCumb