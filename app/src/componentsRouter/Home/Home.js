import React, { Component } from 'react';

class Home extends Component {  
  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then((resp) => {
      console.log(resp);
    })
  } 
  render(){
    return <h1>Home</h1>
  }
}

export default Home;
