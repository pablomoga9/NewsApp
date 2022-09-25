import React, { Component } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


class Form extends Component {
  state = {
    data:{}
  }

  
  
  handleForm = (event)=>{
    event.preventDefault();
    const {getInfo} = this.props;
    const data = {
      title: event.target.title.value,
      body: event.target.body.value
    }
    getInfo(data)
    // const navigate = useNavigate();
   
    }
  
  render() {
   
    return <form onSubmit={this.handleForm}>
      <input type="text" name="title" placeholder="Añade un titular" />
      <input type="text" name="body" placeholder="Añade un cuerpo a la noticia" />
      <Button variant="contained" color="success" type="submit">
        Publicar
  
      </Button>
    </form>;
  }
}

export default Form;
