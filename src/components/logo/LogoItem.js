import React, { Component } from 'react';
import './LogoItem.scss';
class LogoItem extends Component{
    render(){
        return(
            <div>
            <p className="logo-item">
            {this.props.logoText}
            </p>
            </div>

        )
    }
}
export default LogoItem;