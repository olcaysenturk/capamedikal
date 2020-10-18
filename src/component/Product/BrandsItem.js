import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/brands-1.png";
import PaginationList from "react-pagination-list";

export default class BrandsItem extends Component {
  state = {
    brands: JSON.parse(localStorage.getItem("brandItem")),
    productItem: JSON.parse(localStorage.getItem("brandItem")).items,
    paginationItem: [],
    uniqueArr: [],
    uniquebrand: [],
    uniqueNames: [],
    uniqueItems: [],
    uniqueFilter: [],
    itemBrands: [],
    uniquebrands: [],
    dataName: "",
  };

  setStorage(brand) {
    let brandInfo = JSON.parse(localStorage.getItem("brandItem"));
    localStorage.setItem("brandItemDetail", JSON.stringify(brand));
    window.location.href = "/urun-detay/" + brandInfo.url;
  }

  productSetData(opData) {
    let uniqueNames = [];
    let uniquebrands = [];
    let uniqueItems = [];
    let uniqueFilter = [];
    let dataName = "";
    
    dataName = document.getElementById("findSelect") ? document.getElementById("findSelect").value : "TÜM ÜRÜNLER";
  

    this.setState({
      dataName: dataName,
    });

    this.state.productItem.map(function (item) {
       uniqueNames.push(item.type);
       uniquebrands.push(item.brand);
       uniqueItems.push(item);
    });
    
    if (dataName !== "TÜM ÜRÜNLER") {
      uniqueItems.filter(function (item) {
        if(item.type === dataName){
          uniqueFilter.push(item);
      }
      });
    }

    let uniqueArr = [...new Set(uniqueNames)];
    let uniquebrand = [...new Set(uniquebrands)];
    let paginationItem = dataName !== "TÜM ÜRÜNLER" ? uniqueFilter : uniqueItems;
    
    this.setState({
      paginationItem: paginationItem,
      uniqueArr: uniqueArr,
      uniquebrand: uniquebrand,
      uniqueNames: uniqueNames,
    });
    
  }

  componentWillMount() {
    this.productSetData();
  }

  render() {
    let StorageItem = this.state.brands;
    document.title = `Çapa Medikal - Markalar ${StorageItem.name}`;
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
          <Row className={"flex-row"}>
            <div className={"brands-info"}>
              <div className={"img-info"}>
                <img src={StorageItem.path} alt={""} />
                <span>{StorageItem.name}</span>
              </div>
              <div className={"text-info"}>{StorageItem.info}</div>
            </div>
            <Col lg={"3"} className={"productFilterArea"}>
                <div className="item-box">
                  <span>Ürün Kategorisi</span>
                  <select
                    id={"findSelect"}
                    className={"findSelect"}
                    onChange={(e) => {
                      this.productSetData("type");
                    }}
                  >
                    <option value={"TÜM ÜRÜNLER"}>TÜM ÜRÜNLER</option>
                    {this.state.uniqueArr.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <p>
                    Yukarıda ürün filtreleme bölümünden ürün grubu filtreleyerek detaylarına ulaşabilirsiniz.
                  </p>
                </div>
              </Col>
              <Col lg={"9"} className={"brands-item-box-detail"}>
              <Col className={"list-title"}>{this.state.dataName}</Col>
              <Row>
                <PaginationList
                  data={this.state.paginationItem}
                  pageSize={8}
                  renderItem={(item, key) => (
                    <Col
                      className={"animate__animated"}
                      lg={"4"}
                      md={"4"}
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
              </Col>
              </Row>
          </Container>
        </section>
      </div>
    );
  }
}
