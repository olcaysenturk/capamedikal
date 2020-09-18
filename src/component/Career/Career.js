import React, { Component } from "react";
import { Container } from "reactstrap";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/career.png";
import CareerPeople1 from "../../assets/images/career-1.png";

export default class Career extends Component {
  responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    993: {
      items: 2,
    },
  };

  state = {
    brands: [],
    galleryItems: [],
  };

  render() {
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"KARİYER"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"career-box"}>
          <Container>
            <div className={"slide"}>
              <AliceCarousel
                responsive={this.responsive}
                mouseTrackingEnabled={true}
                dotsDisabled={false}
              >
                <div className={"item"}>
                    <div className={"img-box"}>
                        <img src={CareerPeople1} alt={""} />
                    </div>
                    <div className={"text-box"}>
                        <div className={"title"}>
                        BERNARDO
                        </div>
                        <div className={"title-bottom"}>
                        TOURIST // ITALIAN
                        </div>
                        <div className={"text"}>
                        Turkey is filled with historical places, and Mount Nemrut is one of them. A World Heritage listed mountain with some precious statues and places. Definitely, a place you should go if you like history!
                        </div>
                    </div>
                </div>
                <div className={"item"}>
                    <div className={"img-box"}>
                        <img src={CareerPeople1} alt={""} />
                    </div>
                    <div className={"text-box"}>
                        <div className={"title"}>
                        BERNARDO
                        </div>
                        <div className={"title-bottom"}>
                        TOURIST // ITALIAN
                        </div>
                        <div className={"text"}>
                        Turkey is filled with historical places, and Mount Nemrut is one of them. A World Heritage listed mountain with some precious statues and places. Definitely, a place you should go if you like history!
                        </div>
                    </div>
                </div>
                <div className={"item"}>
                    <div className={"img-box"}>
                        <img src={CareerPeople1} alt={""} />
                    </div>
                    <div className={"text-box"}>
                        <div className={"title"}>
                        BERNARDO
                        </div>
                        <div className={"title-bottom"}>
                        TOURIST // ITALIAN
                        </div>
                        <div className={"text"}>
                        Turkey is filled with historical places, and Mount Nemrut is one of them. A World Heritage listed mountain with some precious statues and places. Definitely, a place you should go if you like history!
                        </div>
                    </div>
                </div>
              </AliceCarousel>
            </div>
          </Container>
          <div className={"form-area"}>
            <Container>
                <div className={"form-box"}>
                    <h2 className={"title"}>
                        BAŞVURU FORMU
                    </h2>
                    <div className={"form-item-box"}>
                        <div className={"form-item"}>
                            <input type={"text"} placeholder={"Adınız"} />
                        </div>
                        <div className={"form-item"}>
                            <input type={"text"} placeholder={"Soyadınız"} />
                        </div>
                        <div className={"form-item"}>
                            <input type={"text"} placeholder={"E-Mail Adresiniz"} />
                        </div>
                    </div>
                    <div className={"form-item-box"}>
                        <div className={"form-item"}>
                            <textarea></textarea>
                        </div>
                        <div className={"form-item"}>
                            <input type={"text"} placeholder={"Özgeçmişiniz"} />
                            <a className={"button"}>Yükle</a>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={"button-area"}>
            <div className={"form-box"}>
                <a className={"button"}>Gönder</a>
            </div>
            </div>
        </div>
        </section>

        
      </div>
    );
  }
}
