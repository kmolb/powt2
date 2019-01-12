import React, { Component } from 'react';

const matchMobile = (WrappedComponent) => {
  return class extends Component {
    constructor(props){
      super(props)
      this.state = {
        width: window.innerWidth,
      }
    }
   
  
   componentDidMount(){
     window.addEventListener('resize', () => {
     this.setState({
       width: window.innerWidth,
     });
     })
   }

   isMobile(){
    return this.state.width < 700;
   }

   render(){
   return<div>{
     this.isMobile() &&
    <WrappedComponent type="primary">
      {this.props.children}
    </WrappedComponent>
      }</div>
    } 
  }
}

const Button = (props) => {
  return <div>
  <div>{props.type}</div>
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
