import React, {Component} from 'react';


import bed from "../../images/bed.jpg"
import salon from "../../images/salon.jpg"
import plant from "../../images/plant.jpg"



class GalleryBoxWithButton extends Component {
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
                <button type="button">Click Me!</button>
            </div>
        );
    }
}


export default GalleryBoxWithButton;