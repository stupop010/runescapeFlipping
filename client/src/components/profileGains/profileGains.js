import React, { Component } from 'react';
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
                {isLoggedIn ? this.reRenderLogin(isLoggedIn) : null}
            </div>
        )
    }
}

export default ProfileGains;