import React, { Component } from "react";
import { Container } from "reactstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../assets/images/slider-1.jpg";
import image2 from "../../assets/images/slider-2.png";
import imageTransparent from "../../assets/images/transparent.png";

export default class HomeSlider extends Component {
  render() {
    return (
      <AliceCarousel
      autoPlay={true}
      infinite={true}
        mouseTrackingEnabled={true}
        autoPlayInterval={5000}
        autoPlayDirection="rtl"
        fadeOutAnimation={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div
          className={"sliderItem"}
          style={{ backgroundImage: "url(" + image1 + ")" }}
        >
          <div className={"sliderContent"}>
            <Container>
              <div className={"title"}>
                MEDİKAL <br></br>
                DEPOSU
              </div>
              <div className={"text"}>
                1987'de kurulan, sektöründe lider olan <br></br>
                <strong>Çapa Medikal</strong> müşterilerine sunduğu <br></br>
                geniş ürün yelpazesiyle Türkiye'nin en <br></br>
                büyük medikal deposudur.
              </div>
            </Container>
          </div>

          <img src={imageTransparent} className="sliderimg" alt={""} />
        </div>
        <div
          className={"sliderItem"}
          style={{ backgroundImage: "url(" + image2 + ")" }}
        >
          <div className={"sliderContent"}>
            <Container>
              <div className={"title"}>
                SAĞLIK <br></br>
                LOJİSTİĞİ
              </div>
              <div className={"text"}>
              Sağlık sektörünün spesifik medikal sarf malzemesi <br></br>
              talebini karşılıyor; bu ürünleri yalnızca taşıyan değil, <br></br>
              tanıyan uzman ekiplerimizle Türkiye sağlık sektörünün <br></br>
              değer yaratan paydaşları arasındaki yerimizi alıyoruz.
              </div>
            </Container>
          </div>

          <img src={imageTransparent} className="sliderimg" alt={""} />
        </div>
      </AliceCarousel>
    );
  }
}
