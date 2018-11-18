import React, { Component } from 'react';
import './ButtonItem.css';

class ButtonItem extends Component{
    render(){
        return(
            <div className="button-item">
            <button type="button">{this.props.buttonName}</button>
            </div>

        )
    }
}
export default ButtonItem;