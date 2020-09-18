import React, { Component } from "react";
import { Container } from "reactstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class BrandsArea extends Component {
  responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    993: {
      items: 4,
    },
  };

  state = {
    brands: [],
    galleryItems: [],
  };

  renderImages() {
    return (
      this.props.brands.map((brand) => (
        <div className="item" key={brand.id}>
          <a href={"/markalar/" + brand.url}>
            <div className={"img-box"}>
              <img src={brand.path} className="sliderimg" alt={brand.name} />
            </div>
          </a>
        </div>
      ))
    )
  }

  renderCart() {
    return (
      <div>
        <Container>
          <div className={"title"}>
            <span>MARKALAR</span>
          </div>
          <div className={"slide"}>
            <AliceCarousel responsive={this.responsive} items={this.renderImages()} mouseTrackingEnabled={true} dotsDisabled={true} />
          </div>
        </Container>
      </div>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
