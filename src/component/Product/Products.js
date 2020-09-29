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
    dataName: "",
  };

  setStorage(brand) {
    let brandInfo = JSON.parse(localStorage.getItem("brandItem"));
    localStorage.setItem("brandItemDetail", JSON.stringify(brand));
    window.location.href = "/urun-detay/" + brandInfo.url;
  }

  productSetData(dataEl) {
    let uniqueNames = [];
    let uniqueItems = [];
    let uniqueFilter = [];
    let dataName = "";
    if(window.innerWidth < 768){
      dataName = document.getElementById("findSelect")
      ? document.getElementById("findSelect").value
      : "TÜM ÜRÜNLER";
    }else{
      dataName = dataEl ? dataEl : "TÜM ÜRÜNLER";
    }

    console.log({dataName});
    this.setState({
      dataName: dataName,
    });

    this.state.productItem.map(function (item) {
      var items = item.items;
      if (items) {
        items.map((item) => uniqueNames.push(item.type));
        items.map((item) => uniqueItems.push(item));
      }
    });

    if (dataName !== "TÜM ÜRÜNLER") {
      uniqueItems.filter(function (item) {
        if (item.type === dataName) {
          uniqueFilter.push(item);
        }
      });
    }

    let uniqueArr = [...new Set(uniqueNames)];
    let paginationItem =
      dataName !== "TÜM ÜRÜNLER" ? uniqueFilter : uniqueItems;
    this.setState({
      paginationItem: paginationItem,
      uniqueArr: uniqueArr,
      uniqueNames: uniqueNames,
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
            <Row className={"flex-row"}>
              <Col lg={"3"} className={"productFilterArea"}>
                <div className="item-box">
                  <span>ÜRÜN KATEGORİSİ</span>
                  <ul>
                    {this.state.uniqueArr.map((item, index) => (
                     
                        <li key={index} onClick={(e) => {
                          this.productSetData(item);
                        }}>{item}</li>
                    ))}
                    </ul>
                    <select
                  id={"findSelect"}
                  className={"findSelect"}
                  onChange={(e) => {
                    this.productSetData();
                  }}
                >
                  <option value={"TÜM ÜRÜNLER"}>TÜM ÜRÜNLER</option>
                  {this.state.uniqueArr.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                </div>
              </Col>
              <Col lg={"9"} className={"brands-item-box-detail"}>
                <Col className={"list-title"}>
                  {this.state.dataName}
                </Col>
                <Row>
                  <PaginationList
                    data={this.state.paginationItem}
                    pageSize={8}
                    renderItem={(item, key) => (
                      <Col
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
