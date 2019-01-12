import React, { Component } from 'react';

const HOComponent = (WrappedComponent) => {
  return (props) => {
    return <div className="hoc">
    <WrappedComponent type="primary">
      {props.children}
    </WrappedComponent>
  </div>
}
}

const Button = (props) => {
  return <div>
  <div>{props.type}</div>
  <div> {props.children}</div>
 </div>
};

const PrimaryButton = HOComponent(Button)

class Tools extends Component {
  render() {
    return <PrimaryButton>Kamil </PrimaryButton>;
  }
}

export default Tools;
