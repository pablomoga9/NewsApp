import React, { Component } from "react";
import Card from './Card/Card'
import {v4 as uuidv4} from 'uuid';
// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';

class ListNews extends Component {
  constructor(props){
    super(props);
    this.state={
      newsList : this.props.defaultList
    }

  }

  // handleFormData = ()=>{

  // }


  async componentDidMount(){
    
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Culture&api-key=${process.env.REACT_APP_APIKEY}`);
    const data = await res.json();
    this.setState({
      newsList:data.response.docs
    })
  }


  deleteNew = (i) => {
    const leftNews = this.state.newsList.filter((article, j) =>  i !== j)
    this.setState({newsList:leftNews})
   }

  render() {
    const {list} = this.props;
    return(
      <div>
        <h1 className="listTitle">Noticias</h1>
        <div className="list">
       
        {
          this.state.newsList.map((article,i) =>
          i<5?<Card data={article} key={uuidv4()} delete={()=>this.deleteNew(i)}/>: null
          )}
          <Card list={list}/>
          </div>
        {/* <Card handleFormData={this.handleFormData}/> */}
      </div>
    )
  }
}

ListNews.defaultProps = {
  defaultList:[]
}

export default ListNews;
