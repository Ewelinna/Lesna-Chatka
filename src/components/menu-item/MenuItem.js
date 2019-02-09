import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component{
    render(){
        return(
            <li className="nav-item">
                <span>{this.props.name}</span>
            </li>
        )
    }
}

export default MenuItem;