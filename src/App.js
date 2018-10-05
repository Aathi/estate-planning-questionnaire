import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './App.css'

import Layout from './Layouts/'

import Home from './components/Home'

import Married from './components/Married'

  export default ({ childProps }) => (
    <Router>
        <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/married/:step" component={Married} />
        </Layout>
    </Router>  
);
