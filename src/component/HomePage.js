import React, { Component } from "react";
import HomeSlider from "./HomePage/HomeSlider";
import WhyOur from "./HomePage/WhyOur";
import BrandsArea from "./HomePage/BrandsArea"
import WeInPress from "./HomePage/WeInPress"
export default class HomePage extends Component {


  
  
  render() {
    document.title = "Çapa Medikal - Anasayfa";
    return (
      <div>
        <section className={"homeslider"}>
          <HomeSlider></HomeSlider>
        </section>
        <section className={"whyour"}>
          <WhyOur></WhyOur>
        </section>
        <section className={"brands animate__animated"}>
            <BrandsArea brands={this.props.brands}></BrandsArea>
        </section>
        
      </div>
    );
  }
}
