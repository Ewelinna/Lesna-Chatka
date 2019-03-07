import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import GalleryPictures from "../../containers/gallery-pictures/GalleryPictures";


export default function GalleryPage() {
    return (
      <div>
        <NavBar/>
       <GalleryPictures/>
       
      </div>
    );
  }