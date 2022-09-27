import { Button } from "@mui/material";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';

import {userContext} from '../../../context/userContext';

class Nav extends Component {
  render(){
    return(
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/list">News</Link>
        <Link to="/form">Create New</Link>



        <userContext.Consumer>
          {({logout,user})=>user?<span className="userNav">Usuario: {user} <Button variant="contained" size="small" onClick={logout}>Logout</Button></span>:""
          }
        </userContext.Consumer>
      </nav>
    )
  }
}

export default Nav;
