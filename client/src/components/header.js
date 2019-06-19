import React, { Component } from "react";
import { connect } from "react-redux";
import "../components/css/itemList.css";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="2" className="nav-item">
            <a href="/api/logout">LogOut</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
