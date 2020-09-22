import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import BackgroundTitle from "./BackgroundTitle";
import BackgroundImage from "../../assets/images/about-5.jpg";
import manegement1 from "../../assets/images/y1.jpg";
import manegement2 from "../../assets/images/y2.jpg";
import manegement3 from "../../assets/images/y3.jpg";
import manegement4 from "../../assets/images/y4.jpg";

export default class ManagementTeam extends Component {
  document.title = "Çapa Medikal - Yönetim Kadrosu";
  render() {
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"YÖNETİM KADROSU"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"management-team"}>
          <Container>
            <div className={"item-box"}>
              <Col className={"item-img item"} xs={"12"} sm={"12"} md={"12"} lg={"6"}>
                <Row>
                  <img src={manegement1} alt={""} />
                </Row>
              </Col>
              <Col
                className={"item-text item"}
                xs={"12"}
                sm={"12"}
                md={"12"}
                lg={"6"}
              >
                <Row>
                  <strong>RECEP AVŞAR</strong>
                  <span>YÖNETİM KURULU BAŞKANI</span>
                  <p>
                    Gerek temsilciliğini ve bayiliğini yaptığı ürünlerin
                    kalitesi gerekse Türkiye’nin dört bir yanında gelen
                    talepleri karşılamadaki hızıyla başarısını kanıtlayan Çapa
                    Medikal, Temmuz 2017 itibariyle İstanbul’un her iki
                    yakasındaki toplam 10 bin metrekare alana sahip depoları;
                    İstanbul, İzmir ve Ankara’daki 100’ün üzerinde çalışanın
                    görev yaptığı hizmet ve kalite odaklı ofisleriyle sağlık
                    sektörüne katma değer yaratmaktadır.
                  </p>
                </Row>
              </Col>
            </div>
            <div className={"item-box"}>
             
              <Col className={"item-img item"} xs={"12"} sm={"12"} md={"12"} lg={"6"}>
                <Row>
                  <img src={manegement2} alt={""} />
                </Row>
              </Col>
              <Col
                className={"item-text item"}
                xs={"12"}
                sm={"12"}
                md={"12"}
                lg={"6"}
              >
                <Row>
                  <strong>ZEKERİYA AVŞAR</strong>
                  <span>YÖNETİM KURULU ÜYESİ</span>
                  <p>
                    Çapa Medikal firmasının kurucularından biri olan Zekeriya
                    Avşar, halen Yönetim Kurulu Üyesi ve Genel Müdür olarak
                    ailede yer almaktadır.
                  </p>
                </Row>
              </Col>
            </div>

            <div className={"item-box"}>
              <Col className={"item-img item"} xs={"12"} sm={"12"} md={"12"} lg={"6"}>
                <Row>
                  <img src={manegement3} alt={""} />
                </Row>
              </Col>
              <Col
                className={"item-text item"}
                xs={"12"}
                sm={"12"}
                md={"12"}
                lg={"6"}
              >
                <Row>
                  <strong>SEVİM ÖZTAŞKIN</strong>
                  <span>GENEL MÜDÜR YARDIMCISI</span>
                  <p>
                    Yönetim Kurulu Üyesi ve Genel Müdür Yardımcısı görevlerini yürütmektedir.
                  </p>
                </Row>
              </Col>
            </div>
            <div className={"item-box"}>
              
              <Col className={"item-img item"} xs={"12"} sm={"12"} md={"12"} lg={"6"}>
                <Row>
                  <img src={manegement4} alt={""} />
                </Row>
              </Col>
              <Col
                className={"item-text item"}
                xs={"12"}
                sm={"12"}
                md={"12"}
                lg={"6"}
              >
                <Row>
                  <strong>RECAİ ÖZTAŞKIN</strong>
                  <span>YÖNETİM KURULU ÜYESİ</span>
                  <p>
                  Yönetim Kurulu Üyesi olarak ailede yer almaktadır.
                  </p>
                </Row>
              </Col>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
