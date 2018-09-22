import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component{
    render(){
        return(
            <li className="nav-item">
                <a href="#">{this.props.name}</a>
            </li>
        )
    }
}

export default MenuItem;