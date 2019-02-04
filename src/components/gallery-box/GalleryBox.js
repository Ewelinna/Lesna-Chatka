import React, { Component } from 'react';
import fireplace from "../../images/fireplace.jpg"
import lamp from "../../images/lamp.jpg"
import mirror from "../../images/mirror.jpeg"
import "./GalleryBox.css";


class GalleryBox extends Component {
    render() {
        let chosenPicture;

        switch(this.props.picture){
            case "fireplace":
                chosenPicture=fireplace;
                break;
            case "lamp":
                chosenPicture=lamp;
                break;
            case "mirror":
                chosenPicture=mirror;
                break;
    

        }

        // if (this.props.picture === "bed"){
        //     chosenPicture = bed;
        // }
        // else if (this.props.picture==="salon"){
        //     chosenPicture=salon;
        // }
        // else if (this.props.picture==="plant"){
        //     chosenPicture=plant;
        // }

        return (
            <div className="square-images">
                <img src={chosenPicture} alt={"bedroom"}/>
            </div>
        );
    }
}

export default GalleryBox;