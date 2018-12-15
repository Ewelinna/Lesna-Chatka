import MenuBar from "../../header/menu-bar/MenuBar";
import GalleryBoxes from "../../containers/gallery-boxes/GalleryBoxes";
import React, { Component } from "react";

export default function HomePage() {
  return (
    <div>
      <MenuBar />
      <GalleryBoxes />
    </div>
  );
}
