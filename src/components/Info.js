import React from 'react'
import Carousel from "react-elastic-carousel";
import Infoitem from "./Infoitem";
import "./info.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


export default function Info() {
    return (
        <div className="info-top">
        <h1 style={{ textAlign: "center" }}>HOW IT WORKS ?</h1>
        <div className="info">
          <Carousel breakPoints={breakPoints}>
            <Infoitem><img src="/images/image1.png" alt="First slide" /></Infoitem>
            <Infoitem><img src="/images/image2.png" alt="First slide" /></Infoitem>
            <Infoitem><img src="/images/image4.jpg" alt="First slide" /></Infoitem>
            <Infoitem><img src="/images/image5.jpg" alt="First slide" /></Infoitem>
            <Infoitem><img src="/images/image6.jpg" alt="First slide" /></Infoitem>
            <Infoitem><img src="/images/image7.jpg" alt="First slide" /></Infoitem>
            <Infoitem><img src="/images/image8.jpg" alt="First slide" /></Infoitem>
            <Infoitem><img src="/images/slider4.jpg" alt="First slide" /></Infoitem>
          </Carousel>
        </div>
      </div>
    )
}
