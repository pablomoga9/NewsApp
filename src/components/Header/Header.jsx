import React, { Component } from "react";
import Nav from './Nav/Nav'
class Header extends Component {
  render() {
    return <div>
      <div className="headerBar">
      <img className="newsImage" src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="newsImage" />  
      <h2 className="headerTitle">React</h2>
      </div>
      <Nav/>
    </div>;
  }
}

export default Header;
