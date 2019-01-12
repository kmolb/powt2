import React, { Component } from 'react';
import on from 'classnames';
import './Tools.css';
import classnames from 'classnames';

const SW_URL = 'https://swapi.co/api/people/';

const fetchData = () => {
  return fetch(SW_URL)
    .then((resp) => {
      return resp.json();
    });
}

fetchData().then((resp) => {console.log('siema', resp)});

const mouseMoveColor = (WrappedComponent) => {
  return class extends Component {
        render(){
          return null;
        }
      }
    }
   
  
const Button = (props) => {
  const {type} = props
  return <div className={type ? 'ButtonRed' : 'ButtonGreen'}>
  <div>{type}</div>
  <div> {props.children}</div>
 </div>
};

const MobileButton = mouseMoveColor(Button)

class Tools extends Component {
  render() {
    return <MobileButton>Kamil </MobileButton>;
  }
}

export default Tools;
