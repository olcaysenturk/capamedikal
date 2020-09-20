import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
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
          <Router>
            <ul className={"footer-menu"}>
              <li className="item">
                <Link to="/anasayfa">Anasayfa</Link>
              </li>
              <li className="item">
                <Link to="/hakkimizda">Kurumsal</Link>
              </li>
              <li className="item">
                <Link to="/markalar">Markalar</Link>
              </li>
              <li className="item">
                <Link to="/kariyer">Kariyer</Link>
              </li>
              <li className="item">
                <Link to="/anasayfa">Basında Biz</Link>
              </li>
              <li className="item">
                <Link to="/iletisim">İletişim</Link>
              </li>
            </ul>
            </Router>
          </Col>
          <Col className={"adress"} xs={"12"} sm={"12"} md={"6"} lg={"3"}>
            İkitelli O.S.B Mahallesi <br></br>
            Hürriyet Bulvarı No: 54/03<br></br>
            Başakşehir / İstanbul<br></br>
            <Media object src={FooterMap}  alt="map" />
          </Col>
          <Col className={"footerSocial"} xs={"12"} sm={"12"} md={"6"} lg={"3"}>
            <Link className={"numberMail"} to="tel:444 8 717">444 8 717</Link>
            <Link className={"numberMail"} to="mailto:bilgi@capamedikal.com.tr">bilgi@capamedikal.com.tr</Link>
            <ul>
                <li>
                    <a href={"/anasayfa"} className={"fb"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/anasayfa"} className={"tw"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/anasayfa"} className={"ins"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/anasayfa"} className={"in"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"/anasayfa"} className={"yt"}>&nbsp;</a>
                </li>
            </ul>
          </Col>
          </div>
        </Container>
      </footer>
    );
  }
}
