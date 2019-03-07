import React, { Component } from 'react';
import './MenuItem.scss';

class MenuItem extends Component{
    render(){
        return(
            <li className="nav-item">
                <a>{this.props.name}</a>
            </li>
        )
    }
}

export default MenuItem;