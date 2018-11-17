import React, {Component} from 'react';


import kid from "../../images/kid.jpg"
import fireplace from "../../images/fireplace.jpg"
import livingroom from "../../images/livingroom.jpg"



class GalleryBoxWithButton extends Component {
    render() {
        let chosenPicture;

        switch(this.props.picture){
            case "kid":
                chosenPicture=kid;
                break;
            case "fireplace":
                chosenPicture=fireplace;
                break;
            case "livingroom":
                chosenPicture=livingroom;
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