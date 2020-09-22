import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import ReactImageMagnify from 'react-image-magnify';
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/brands-1.png";


export default class ProductDetail extends Component {
  render() {
    let StorageItem = JSON.parse(localStorage.getItem("brandItem"));
    let brandItemDetail = JSON.parse(localStorage.getItem("brandItemDetail"));
    document.title = `Çapa Medikal - ${StorageItem.name} - ${brandItemDetail.name}`;
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
            <div className={"brands-info"}>
              <div className={"img-info"}>
                <img src={StorageItem.path} alt={""} />
                <span>{StorageItem.name}</span>
              </div>
              <div className={"text-info"}>{StorageItem.info}</div>
            </div>
            <div className={"brands-item-box-detail"}>
              <h2>ÜRÜNLER</h2>
              <Row>
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"brands-item"}>
                    <div className={"brands-img"}>
                      <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Çapa Medikal',
                                isFluidWidth: true,
                                src: brandItemDetail.img
                            },
                            largeImage: {
                                src: brandItemDetail.img,
                                width: 800,
                                height: 600
                            }
                        }} />
                      <span>{brandItemDetail.code}</span>
                    </div>

                    <div className={"brands-text"}>
                      {brandItemDetail.name} <br></br>
                      {brandItemDetail.area}
                    </div>
                  </div>
                </Col>

                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"product-detail-info"}>
                    <div className={"text"}>
                      <span>Genel Kullanım Alanı : </span> {brandItemDetail.area}
                    </div>
                    <div className={"text"}>
                      <span>Ürün Sınıfı : </span> {brandItemDetail.class}
                    </div>
                    <div className={"text"}>
                      <span>Ürün Tipi : </span> {brandItemDetail.type}
                    </div>
                    <div className={"text"}>
                      <span>Marka : </span> {StorageItem.name}
                    </div>
                    <div className={"text"}>
                      <span>Alt Marka : </span> {brandItemDetail.bottomBrand}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
