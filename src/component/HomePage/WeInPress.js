import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import images3 from "../../assets/images/news-3.png";
import images2 from "../../assets/images/news-2.png";
import images1 from "../../assets/images/news-1.png";

export default class WeInPress extends Component {
  render() {
    return (
      <Container>
        <div className={"title"}>
          <span>BASINDA BİZ</span>
        </div>
        <div className={"slide"}>
          <Row>
            <AliceCarousel dotsDisabled responsive={this.responsive}>
            <div className="item">
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"img-box"}>
                    <img src={images2} className="sliderimg" alt={""} />
                  </div>
                </Col>
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"text-box"}>
                    <div className={"title-text"}>ÇAPA MEDİKAL TIBBİ TEDARİK ZİNCİRİNE YÖN VERMEYE DEVAM EDİYOR</div>
                    <div className={"date"}>01.07.2020</div>
                    <div className={"text"}>
                    Sağlık sektörünün kritik bileşenlerinden biri olan sarf malzemesi ihtiyacını karşılamak adına yaklaşık 30 yıl önce yola çıkan ve bugün sağlık lojistiği alanında Türkiye’nin önde gelen firmalarından biri olan Çapa Medikal, sektörün önemli etkinliklerinden biri olan Tıbbi Tedarik Zinciri Yönetimi Kongresi’ne ana sponsor olarak destek verdi.
                    </div>
                    <div className={"button"}><span>İNCELE</span></div>
                  </div>
                </Col>
              </div>

              <div className="item">
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"img-box"}>
                    <img src={images1} className="sliderimg" alt={""} />
                  </div>
                </Col>
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"text-box"}>
                    <div className={"title-text"}>ÇAPA MEDİKAL'DEN GLOBAL MARKA HAMLESİ</div>
                    <div className={"date"}>01.07.2020</div>
                    <div className={"text"}>
                    Türkiye sağlık sektörüne uzun yıllardır sağladığı ürünlerle sektörün en önemli paydaşları arasında bulunan Çapa Medikal, 25 yılı aşan tecrübesini Pakistan’da düzenlenen Pakmedica Medikal, Sağlık ve Kozmetik Fuarı’nda aktardı.
                    </div>
                    <div className={"button"}><span>İNCELE</span></div>
                  </div>
                </Col>
              </div>
              
              <div className="item">
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"img-box"}>
                    <img src={images3} className="sliderimg" alt={""} />
                  </div>
                </Col>
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"text-box"}>
                    <div className={"title-text"}>HASTANELER, SAĞLIK SEKTÖRÜNÜN İHTİYAÇLARINI BİLEN İŞ ORTAKLARINA İHTİYAÇ DUYUYOR</div>
                    <div className={"date"}>01.07.2020</div>
                    <div className={"text"}>
                    Türkiye’nin sağlık politikalarında yapılan köklü değişiklikler, vatandaşlar için özel hastanelerin ulaşılabilirliğini ve tercih edilebilirliğini artırıyor. Artık sadece özel sağlık sigortası olanlar değil, her vatandaş özel hastanelerde pek çok işlemi gerçekleştirebiliyor.
                    </div>
                    <div className={"button"}><span>İNCELE</span></div>
                  </div>
                </Col>
              </div>
            </AliceCarousel>
          </Row>
        </div>
      </Container>
    );
  }
}
