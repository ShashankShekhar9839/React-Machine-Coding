import { useState } from "react";

import "./App.css";
import ImageCarousel from "./components/ImageCarousel";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h2>Image Carousel Component</h2>
      <ImageCarousel oneViewCount={3}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ImageCarousel>
    </>
  );
}

export default App;
