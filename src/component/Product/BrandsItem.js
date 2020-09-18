import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/brands-1.png";
import PaginationList from "react-pagination-list";

export default class BrandsItem extends Component {
  state = {
    brands: JSON.parse(localStorage.getItem("brandItem")),
  };

  setStorage(brand) {
    let brandInfo = JSON.parse(localStorage.getItem("brandItem"));
    localStorage.setItem("brandItemDetail", JSON.stringify(brand));
    window.location.href = "/urun-detay/" + brandInfo.url;
  }

  render() {
    let StorageItem = this.state.brands;
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
                <PaginationList
                  data={StorageItem.items}
                  pageSize={8}
                  renderItem={(item, key) => (
                    <Col
                      className={"animate__animated"}
                      lg={"3"}
                      md={"3"}
                      sm={"6"}
                      xs={"6"}
                      key={key}
                      onClick={(e) => {
                        this.setStorage(item);
                      }}
                    >
                      <div className={"brands-item"}>
                        <div className={"brands-img"}>
                          <img src={item.img} alt={""} />
                          <span>{item.code}</span>
                        </div>

                        <div className={"brands-text"}>
                          {item.name} <br></br>
                          {item.area}
                        </div>
                      </div>
                    </Col>
                  )}
                ></PaginationList>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
