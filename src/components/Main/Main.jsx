import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import ListNews from './ListNews/ListNews';
import Form from './Form/Form';
class Main extends Component {
 state = {
    list:""
  }
  
  getInfo=(e)=>{
    this.setState({list:e})
  }



  render() {
    return(
    <main>
      <Routes>
        <Route element={<Home/>} path={"/"}/>;
        <Route element={<ListNews list={this.state.list}/>} path={"/list"}/>;
        <Route element={<Form getInfo={this.getInfo}/>} path={"/form"}/>;
      </Routes>
    </main>
    )
    
  }
}



export default Main;
