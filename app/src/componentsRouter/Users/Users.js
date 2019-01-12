import React, { Component } from 'react';
import { Link } from "react-router-dom";

const users = [
  {
    name: 'Tomek',
    id: '1'
  },{
    name: 'Romek',
    id: '2'
  },{
    name: 'Leon',
    id: '3'
  }
];

class Users extends Component {  

  filterById = ({id}) => {
    const { match: {params : {userId}} } = this.props;
    return id === userId || userId === undefined;
  }

  renderUser({name, id}){
    return <div>
      <Link key={id} to={`/users/${id}`}>{name}</Link>
    </div>
  };

  render(){
    const { match: {params : {userId}} } = this.props;

    return <div>
      <h1>users</h1>
      {users
        .filter(this.filterById)
        .map(this.renderUser)
      }
      {userId && <Link to="/users">Full list</Link>}

    </div>
  }
}

export default Users;
