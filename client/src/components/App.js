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
import Search from './Search';
import Favourite from './Favourite';
import BuyingItem from './buyingItem';
import RecentLog from './RecentLog';
import ProfileGains from './profileGains/profileGains';


import { fetchUser } from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <Router history={history}>
           <>
            <Header />
                <div>
                    <div className="row">
                    <div className="col-sm-2">
                        <Favourite />
                    </div>
                    <div className="col col-sm-8">
                      <Route exact path="/" component={Dashboard} />
                      <Route exact path="/log" component={ItemLog} />
                      <Route exact path="/admin" component={Admin} />
                      <Route exact path="/admin/create" component={CreateItem} />
                      <Route exact path="/admin/edit/:id" component={AdminItem} />
                      <Route exact path="/admin/delete/:id" component={DeleteItem} />
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
