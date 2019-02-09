import React, {Component} from "react";
import "./Footer.css";

const Footer =(props)=>{
    return(
    <div className="footer-container">
    <p>{props.address}</p>
    <p>{props.phone}</p>
    <p>{props.email}</p>
    <div>{props.media}</div>

    </div>
    )}

export default Footer;


