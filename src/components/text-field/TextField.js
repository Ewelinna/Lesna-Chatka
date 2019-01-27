import React, { Component } from 'react';
import "./TextField.css"

class TextField extends React.Component{
    render(){
        return(
            <div className="text-container">
            <h1 className="title-text">{this.props.header}</h1>
            <p className="description-text">{this.props.text}</p>
            </div>
        )
    }
}

export default TextField;