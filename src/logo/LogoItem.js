import React, { Component } from 'react';
import './LogoItem.css';
class LogoItem extends Component{
    render(){
        return(
            <p className="logo-item">
            {this.props.logoText}
            </p>

        )
    }
}
export default LogoItem;