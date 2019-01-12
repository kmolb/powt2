import React, { Component } from 'react';

class Home extends Component {  
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    }
  }
  componentDidMount(){
    fetch("https://randomuser.me/api/")
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      this.setState({
        isLoading:false,
        data: resp,
      })
      console.log(resp);
    })
  } 

  render(){
    const { isLoading, data } = this.state;
    return <div><h1>Home</h1>
    {isLoading && <div>Loading</div>}
    {data && <div>
      {data.results[0].email}
    </div>}
    </div>
    
   
  }
}

export default Home;
