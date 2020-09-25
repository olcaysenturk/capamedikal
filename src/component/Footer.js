import React, { Component } from "react";
import { Container, Col, Media } from "reactstrap";
import LogoImg from "../assets/images/logo.png";
import FooterMap from "../assets/images/footer-map.png";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <div className={"item-box"}>

           
          <Col xs={"12"} sm={"12"} md={"6"} lg={"3"}>
            <div className={"logo"}>
              <Media object src={LogoImg} width={160} alt="Logo" />
            </div>
          </Col>
          <Col xs={"12"} sm={"12"} md={"6"} lg={"3"}>
            <ul className={"footer-menu"}>
              <li className="item">
                <a href="/">Anasayfa</a>
              </li>
              <li className="item">
                <a href="/hakkimizda">Kurumsal</a>
              </li>
              <li className="item">
                <a href="/markalar">Markalar</a>
              </li>
              <li className="item">
                <a href="/kariyer">Kariyer</a>
              </li>
              <li className="item">
                <a href="/?page=basinda-biz">Basında Biz</a>
              </li>
              <li className="item">
                <a href="/iletisim">İletişim</a>
              </li>
            </ul>
          </Col>
          <Col className={"adress"} xs={"12"} sm={"12"} md={"6"} lg={"3"}>
          Yassıören Mah. Ağaçkakan Sok. No:15/A<br></br>
          Arnavutköy / İstanbul / Türkiye<br></br>
            <Media object src={FooterMap}  alt="map" />
          </Col>
          <Col className={"footerSocial"} xs={"12"} sm={"12"} md={"6"} lg={"3"}>
            <a className={"numberMail"} href={"tel:444 8 717"}>444 8 717</a>
            <a className={"numberMail"} href={"tel:+90 212 671 9070"}>0212 671 9070</a>
            <a className={"numberMail"} href={"mailto:bilgi@capamedikal.com.tr"}>bilgi@capamedikal.com.tr</a>
            <ul>
                <li>
                    <a href={"/"} className={"fb"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/"} className={"tw"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/"} className={"ins"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/"} className={"in"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/"} className={"yt"}>&nbsp;</a>
                </li>
            </ul>
          </Col>
          </div>
        </Container>
      </footer>
    );
  }
}
