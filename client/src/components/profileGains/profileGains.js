import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileCard from './profileCard';

class ProfileGains extends Component{
    reRenderLogin = (isLoggedIn) => {
        return(
            <ProfileCard {...isLoggedIn}/>
        )
    }

    render(){
        const isLoggedIn = this.props.auth
        return( 
            <div>
                {isLoggedIn ? this.reRenderLogin(isLoggedIn) : 'Loding'}
            </div>
        )
    }
}

function mapStateToProps({auth}){
    return { auth }
}

export default connect(mapStateToProps)(ProfileGains);