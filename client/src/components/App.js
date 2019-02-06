import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';



import Header from './header';
import Dashboard from './Dashboard';
import history from '../history';
import ItemLog from './ItemLog';
import Footer from './Footer';
import Favourite from './Favourite';
import RecentLog from './RecentLog';
import ProfileGains from './profileGains/profileGains';


import { fetchUser } from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  reRender = () => {
    if(!this.props.auth){
      return (
        <div>
          Please Log in 
        </div>
      )
    } else {
      return(
              <div>
              <div className="row">
              <div className="col-sm-2">
                  <Favourite />
              </div>
              <div className="col col-sm-8">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/log" component={ItemLog} />
              </div>
              <div className="col-sm-2">
                  <div>
                      <ProfileGains auth={this.props.auth}/>
                  </div>
                  <div style={{backgroundColor: '#999D9E'}} className="border border-dark">
                      <RecentLog />
                  </div>
              </div>
              </div>
          </div>
          )
      }
  }

  render() {
    return(
      <div>
        <Router history={history}>
           <>
            <Header />
                {this.reRender()}
            <Footer />
          </>
         </Router>
      </div>
    )
  }
}

function mapStateToProps({auth}){
  return { auth }
}

export default connect(mapStateToProps, { fetchUser })(App);
