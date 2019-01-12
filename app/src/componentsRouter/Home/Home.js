import React, { Component } from 'react';

const SW_URL = 'https://swapi.co/api/people/?search='

class Home extends Component {  
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: false,
      search: '',
    }
  }

  componentDidMount(){
   this.fetchData('');
  }

  fetchData = (search = '') => {
    this.setState({
      isLoading: true,
      data: null,
    })

    fetch(SW_URL + search)
     
    .then((resp) => resp.json())
    .then((resp) => {
      this.setState({
        isLoading: false,
        data: resp,
      })
    })

  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    }, () => {
      this.fetchData(value);
    })
  }

  render(){
    const { isLoading, data, search } = this.state;
    return <div>
      <h1>Home</h1>
      <form>
        <input name="search" type="text" value={search} onChange={this.handleChange}/>
      </form>
      {isLoading && <div>Loading</div>}
      {data && data.results && data.results.map((person) => {
        return <div> 
          {person.name},
          
           </div>
      })}
    </div>
    
   
  }
}

export default Home;
