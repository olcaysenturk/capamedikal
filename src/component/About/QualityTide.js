import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import BackgroundTitle from "./BackgroundTitle";
import BackgroundImage from "../../assets/images/about-6.jpg";
import Tide1 from "../../assets/images/l1.png";

export default class QualityTide extends Component {
  render() {
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"KALİTE BELGELERİMİZ"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>

        <Container>
          <section className={"tide-section"}>
            <div className={"tide-box"}>
              <Col
                className={"tide-item"}
                lg={"4"}
                md={"4"}
                sm={"12"}
                xs={"12"}
              >
                <div className={"item"}>
                  <img src={Tide1} alt={""} />
                  <h2>BELGE ADI</h2>
                </div>
              </Col>
              <Col
                className={"tide-item"}
                lg={"4"}
                md={"4"}
                sm={"12"}
                xs={"12"}
              >
                <div className={"item"}>
                  <img src={Tide1} alt={""} />
                  <h2>BELGE ADI</h2>
                </div>
              </Col>
              <Col
                className={"tide-item"}
                lg={"4"}
                md={"4"}
                sm={"12"}
                xs={"12"}
              >
                <div className={"item"}>
                  <img src={Tide1} alt={""} />
                  <h2>BELGE ADI</h2>
                </div>
              </Col>
            </div>
            <div className={"tide-box"}>
              <Col
                className={"tide-item"}
                lg={"4"}
                md={"4"}
                sm={"12"}
                xs={"12"}
              >
                <div className={"item"}>
                  <img src={Tide1} alt={""} />
                  <h2>BELGE ADI</h2>
                </div>
              </Col>
              <Col
                className={"tide-item"}
                lg={"4"}
                md={"4"}
                sm={"12"}
                xs={"12"}
              >
                <div className={"item"}>
                  <img src={Tide1} alt={""} />
                  <h2>BELGE ADI</h2>
                </div>
              </Col>
              <Col
                className={"tide-item"}
                lg={"4"}
                md={"4"}
                sm={"12"}
                xs={"12"}
              >
                <div className={"item"}>
                  <img src={Tide1} alt={""} />
                  <h2>BELGE ADI</h2>
                </div>
              </Col>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}
