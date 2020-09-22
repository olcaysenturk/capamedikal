import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/brands-1.png";

export default class Brands extends Component {
  setStorage(brand) {
    localStorage.setItem("brandItem", JSON.stringify(brand));
    window.location.href = "/markalar/urunler/" + brand.url;
  }

  renderBrands() {
    return this.props.brands.map((brand) => (
      <Col
        className={"animate__animated"}
        lg={"3"}
        md={"3"}
        sm={"6"}
        xs={"6"}
        key={brand.id}
      >
        <div
          className={"brands-item"}
          onClick={(e) => {
            this.setStorage(brand);
          }}
        >
          <div className={"brands-img"}>
            <img src={brand.path} alt={""} />
          </div>
          <h2>{brand.name}</h2>
        </div>
      </Col>
    ));
  }

  render() {
    document.title = "Çapa Medikal - Markalar";
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"MARKALAR"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"brands-box"}>
          <Container>
            <p>
              Çapa Medikal, yılların getirdiği deneyimiyle Türk sağlık sistemi
              paydaşları için uygun ürünleri sunmaktadır. 3M, Aesculap,
              Coloplast, BD, WIPAK, ConvaTec, Spiggle & Theis, Bıçakçılar,
              Medikokim, Sempermed gibi alanlarının lider yerli ve yabancı
              firmalarının ürünlerini Türkiye genelindeki sağlık işletmeleriyle
              buluşturan kurumumuz, aynı zamanda bu alandaki yerli ürün
              kullanımına yönelik ülkemiz politikalarını desteklemek ve ihracat
              çeşitliliğini artırmak amacıyla Nextech markası alında üretim de
              gerçekleştirmekte; bununla birlikte iştirakleri arasında bulunan
              Honnes markasını da hastanelerimizle buluşturmaktadır.
              <br></br>
              <br></br>
              Toplamda 30’un üzerinde markanın 4 bine yakın ürününü sunan
              şirketimiz, bu zengin ürün portföyünü değişen ihtiyaçlar ve
              gelişen teknolojiye uygun olarak düzenli olarak
              zenginleştirmektedir.
            </p>
            <div className={"brands-item-box"}>
              <Row>{this.renderBrands()}</Row>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
