import React, { Component } from "react";

class Card extends Component {
  render() {
    const { abstract, lead_paragraph, web_url } = this.props.data || {};
    const {list} = this.props;

    if(list){
      return(
        
        <article className="card-box">
          <a>{list.title}</a>
          <p>{list.body}</p>
          <button className="cardBtn" onClick={this.props.delete}>Eliminar</button>
        </article>
        
      )
    }
    else{
      return (
      
      <article className="card-box">
      <a href={web_url}>{abstract}</a>
      <p>{lead_paragraph}</p>
      <button className="cardBtn" onClick={this.props.delete}>Eliminar</button>
      </article>
     
      )
    }

   
  }
}

export default Card;
