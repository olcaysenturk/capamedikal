import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class WeInPress extends Component {

  setStorage(item) {
    localStorage.setItem("news", JSON.stringify(item));
    window.location.href = "/haberler/" + item.url;
  }

  renderNews() {
    return (
      this.props.news.map((item) => (
        <div className="item" key={item.id}>
        <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
          <div className={"img-box"}>
            <img src={item.image} className="sliderimg" alt={""} />
          </div>
        </Col>
        <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
          <div className={"text-box"}>
            <div className={"title-text"}>{item.title}</div>
            <div className={"date"}>{item.date}</div>
            <div className={"text"} dangerouslySetInnerHTML={ {__html: item.text} }>
            
            </div>
            <div className={"button"} onClick={(e) => {
            this.setStorage(item);
          }}><span>İNCELE</span></div>
          </div>
        </Col>
      </div>
      ))
    )
  }


  render() {
    return (
      <Container>
        <div className={"title"}>
          <span>BASINDA BİZ</span>
        </div>
        <div className={"slide"}>
          <Row>
            <AliceCarousel dotsDisabled responsive={this.responsive}>
             {this.renderNews()} 
            </AliceCarousel>
          </Row>
        </div>
      </Container>
    );
  }
}
