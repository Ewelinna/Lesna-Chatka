import React, { Component } from "react";
import TextField from "../../components/text-field/TextField";

class MainPageContent extends React.Component{
    render(){
        return(
            <div>
            <div className="text-container">
            <TextField header={"Stawiamy na naturę"} text={"Leśna Chatka położona jest w samym sercu Puszczy \
            Kłowskiej nad jeziorem Larytowym. \
            Zaprojektowana została z myślą o otaczającej ją przyrodzie, dlatego wypoczynek w domku gwarantuje \
            niezapomniane wrażenia."}/>
            </div>
            <div className="square-images">
            <img src="interior.jpg" alt={"bedroom"}/>
        </div>
        </div>
        )

    }
}
export default MainPageContent;