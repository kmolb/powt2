import React, { Component } from 'react';
import './Button.css';
import classnames from 'classnames';

class Button extends Component{
  render(){
    const { children, type, action } = this.props;
    return <div 
      onClick={action} 
      className={classnames('Button', {
        primary: type === 'primary',
        error: type === 'error',
      })}>{ children }</div>
  }
}
export default Button;
