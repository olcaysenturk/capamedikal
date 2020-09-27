import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import PaginationList from "react-pagination-list";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/brands-1.png";

export default class Products extends Component {
  state = {
    productItem: this.props.products,
    paginationItem: [],
    uniqueArr: [],
    uniqueNames: [],
    uniqueItems: [],
    uniqueFilter: [],
    dataName : ""
  };

  setStorage(brand) {
    let brandInfo = JSON.parse(localStorage.getItem("brandItem"));
    localStorage.setItem("brandItemDetail", JSON.stringify(brand));
    window.location.href = "/urun-detay/" + brandInfo.url;
  }

  productSetData() {
    let uniqueNames = [];
    let uniqueItems = [];
    let uniqueFilter = [];
    let dataName = document.getElementById("findSelect")
      ? document.getElementById("findSelect").value
      : "Tüm ürünler";
      this.setState({
        dataName : dataName
      });

    this.state.productItem.map(function (item) {
      var items = item.items;
      if (items) {
        items.map((item) => uniqueNames.push(item.type));
        items.map((item) => uniqueItems.push(item));
      }
    });

    if (dataName !== "Tüm ürünler") {
      uniqueItems.filter(function (item) {
        if (item.type === dataName) {
          uniqueFilter.push(item);
        }
      });
    }

    let uniqueArr = [...new Set(uniqueNames)];
    let paginationItem = dataName !== "Tüm ürünler" ? uniqueFilter : uniqueItems;
    this.setState({
      paginationItem: paginationItem,
      uniqueArr: uniqueArr,
      uniqueNames: uniqueNames
    });
  }

  componentWillMount() {
    this.productSetData();
  }
  render() {
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"ÜRÜNLER"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className="brands-box">
          <Container>
            <section className={"productFilterArea"}>
              <div className="item-box" Col={12}>
                <span>
                  Filtreleme için 
                </span>
                <select
                  id={"findSelect"}
                  className={"findSelect"}
                  onChange={(e) => {
                    this.productSetData();
                  }}
                >
                  <option value={"Tüm ürünler"}>Kategori seçiniz</option>
                  {this.state.uniqueArr.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                
              </div>
            </section>
            <section className={"brands-item-box-detail"}>
              <Col className={"list-title"}>
                  {this.state.dataName} listeleniyor
              </Col>
              <Row>
                <PaginationList
                  data={this.state.paginationItem}
                  pageSize={8}
                  renderItem={(item, key) => (
                    <Col
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
            </section>
          </Container>
        </section>
      </div>
    );
  }
}
