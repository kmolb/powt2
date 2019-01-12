import React, { Component } from 'react';
import './Tools.css';

const matchMobile = (WrappedComponent) => {
  return class extends Component {
    constructor(props){
      super(props)
      this.state = {
       offsetY: null,
      }
    }
   
  
   componentDidMount(){
     window.addEventListener('mousemove', ({ offsetY}) => {
     this.setState({
     offsetY,
     });
     })
   }

   isTop(){
    return this.state.offsetY < 300;
   }

   render(){
   return<div>{
     
    <WrappedComponent type={this.isTop()}>
      {this.props.children}
    </WrappedComponent>
      }</div>
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

const MobileButton = matchMobile(Button)

class Tools extends Component {
  render() {
    return <MobileButton>Kamil </MobileButton>;
  }
}

export default Tools;
