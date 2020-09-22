import React, {  } from "react";
import { Container } from "reactstrap";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/contact.png";
import { Map, GoogleApiWrapper } from "google-maps-react";

class ContactUs extends React.Component {
  
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    document.title = "Çapa Medikal - İletişim";
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"İLETİŞİM"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"contact-box"}>
          <Container>
            <div className={"adress-band"}>
              <div className={"text"}>
                Çapa Medikal Sanayi ve Ticaret A.Ş. <br></br>
                <a href={"tel:444 8 717"}>444 8 717</a> -{" "}
                <a href={"mailto:bilgi@capamedikal.com.tr"}>
                  bilgi@capamedikal.com.tr
                </a>
              </div>
            </div>
            <div className={"map-box"}>
              <div className={"item-box"}>
                <div className={"map"}>
                  <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    initialCenter={{
                      lat: 41.190088,
                      lng: 28.607496,
                    }}
                  />
                </div>
                <div className={"adress"}>
                  <div className={"title"}>İSTANBUL MERKEZ</div>
                  <div className={"item"}>
                    <span className={"ico place"}></span>
                    <span className={"text-item"}>
                      Yassıören Mah. Ağaçkakan Sok. No:15/A <br></br>
                      Arnavutköy / İstanbul / Türkiye
                    </span>
                  </div>
                  <div className={"item"}>
                    <span className={"ico phone"}></span>
                    <span className={"text-item"}>
                      444 8 777
                    </span>
                  </div>
                  <div className={"item"}>
                    <span className={"ico fax"}></span>
                    <span className={"text-item"}>
                    +90 212 671 9070
                    </span>
                  </div>
                </div>
              </div>

              <div className={"item-box"}>
                <div className={"map"}>
                  <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    initialCenter={{
                      lat: 41.190088,
                      lng: 28.607496,
                    }}
                  />
                </div>
                <div className={"adress"}>
                  <div className={"title"}>İSTANBUL MERKEZ</div>
                  <div className={"item"}>
                    <span className={"ico place"}></span>
                    <span className={"text-item"}>
                      Yassıören Mah. Ağaçkakan Sok. No:15/A <br></br>
                      Arnavutköy / İstanbul / Türkiye
                    </span>
                  </div>
                  <div className={"item"}>
                    <span className={"ico phone"}></span>
                    <span className={"text-item"}>
                      444 8 777
                    </span>
                  </div>
                  <div className={"item"}>
                    <span className={"ico fax"}></span>
                    <span className={"text-item"}>
                    +90 212 671 9070
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBVa3oRstfVmQnLFV97OEOZMeydAoOh3Ss",
})(ContactUs);
