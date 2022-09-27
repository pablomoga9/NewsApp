import React, { Component } from "react";
import Button from '@mui/material/Button';


import {userContext} from '../../../context/userContext';

class Home extends Component {

  static contextType = userContext;

  constructor(props){
    super(props);

    this.username = React.createRef();

    this.state = {
      username:""
    }
  }


  sendName = ()=>{
    const {login} = this.context;

    login(this.state.username);


    this.username.current.value = "";
    this.setState({username: ""});
  }

  handleChange = ()=>{
    const username = this.username.current.value;
    this.setState({username});
  }
  render() {
    return <div className="bodyContainer">
      <h3>{this.props.message}</h3>
      <div className="insertName">
      <label className="homeLabel" htmlFor="homeComment">Ingresa tu nombre:</label>
      <input type="text" className="homeInput" palceholder="Usuario" ref={this.username} onChange={this.handleChange}/>
      {this.state.username ? <Button variant="contained" onClick={this.sendName}>Login</Button> : ""}
      </div>
    </div>
  }
}

export default Home;
