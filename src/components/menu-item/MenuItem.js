import React, { Component } from 'react';
import './MenuItem.scss';

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