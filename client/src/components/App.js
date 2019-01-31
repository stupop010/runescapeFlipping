import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Admin from './admin';
import AdminItem from './adminItem/AdminItem';
import DeleteItem from './adminItem/deleteItem';
import Header from './header';
import Dashboard from './Dashboard';
import history from '../history';
import CreateItem from './adminItem/CreateItem';
import ItemLog from './ItemLog';
import Footer from './Footer';

import { fetchUser } from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return(
      <div>
        <Router history={history}>
           <div>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/log" component={ItemLog} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/create" component={CreateItem} />
            <Route exact path="/admin/edit/:id" component={AdminItem} />
            <Route exact path="/admin/delete/:id" component={DeleteItem} />
            <Footer />
          </div>
         </Router>
      </div>
    )
  }
}



export default connect(null, { fetchUser })(App);
