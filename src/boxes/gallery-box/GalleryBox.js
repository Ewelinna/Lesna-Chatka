import React, { Component } from 'react';
import bed from "../../images/bed.jpg"
import salon from "../../images/salon.jpg"
import plant from "../../images/plant.jpg"
import "./GalleryBox.css";


class GalleryBox extends Component {
    render() {
        let chosenPicture;

        switch(this.props.picture){
            case "bed":
                chosenPicture=bed;
                break;
            case "plant":
                chosenPicture=plant;
                break;
            case "salon":
                chosenPicture=salon;
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