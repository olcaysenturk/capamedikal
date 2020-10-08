import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/brands-1.png";

export default class NewsDetail extends Component {
  renderNewsDetail() {
    let NewsStorage = JSON.parse(localStorage.getItem("news"));
    return (
      <Container>
        
        <div className={"news-img"}>
          <img src={NewsStorage.image} alt={""} />
        </div>
        <h2>{NewsStorage.title}</h2>
        <div
          className={"news-text"}
          dangerouslySetInnerHTML={{ __html: NewsStorage.text }}
        ></div>
      </Container>
    );
  }

  render() {
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"HABERLER"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"news-detail-box"}>
          {this.renderNewsDetail()}
        </section>
      </div>
    );
  }
}
