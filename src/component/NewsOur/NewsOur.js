import React, { Component } from "react";
import { Container, Col } from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BackgroundTitle from "../About/BackgroundTitle";
import BackgroundImage from "../../assets/images/about-6.jpg";
import Tide1 from "../../assets/images/l1.png";

export default class NewsOur extends Component {
  
  setStorage(item) {
    localStorage.setItem("news", JSON.stringify(item));
    window.location.href = "/haberler/" + item.url;
  }

  renderNews() {
    return this.props.news.map((item) => (
      <Col className={"newsVideo-item"} lg={"6"} md={"6"} sm={"12"} xs={"12"} onClick={(e) => {
        this.setStorage(item);
      }}>
        <div className={"item"}>
          <img src={item.image} alt={""} />
          <h2>{item.title}</h2>
        </div>
      </Col>
    ));
  }
  render() {
    document.title = "Çapa Medikal - Haberler ve Videolar";
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"HABERLER VİDEOLAR"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>

        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <span>HABERLER</span>
              </Tab>
              <Tab>
                <span>VİDEOLAR</span>
              </Tab>
            </TabList>

            <TabPanel>
              <section className={"newsVideo-section"}>
                <div className={"newsVideo-box"}>{this.renderNews()}</div>
              </section>
            </TabPanel>
            <TabPanel>
              <section className={"newsVideo-section"}>
                <div className={"newsVideo-box"}>
                  <Col
                    className={"newsVideo-item"}
                    lg={"4"}
                    md={"4"}
                    sm={"12"}
                    xs={"12"}
                  >
                    <div className={"item"}>
                      <img src={Tide1} alt={""} />
                      <h2>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </h2>
                    </div>
                  </Col>
                  <Col
                    className={"newsVideo-item"}
                    lg={"4"}
                    md={"4"}
                    sm={"12"}
                    xs={"12"}
                  >
                    <div className={"item"}>
                      <img src={Tide1} alt={""} />
                      <h2>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </h2>
                    </div>
                  </Col>
                  <Col
                    className={"newsVideo-item"}
                    lg={"4"}
                    md={"4"}
                    sm={"12"}
                    xs={"12"}
                  >
                    <div className={"item"}>
                      <img src={Tide1} alt={""} />
                      <h2>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </h2>
                    </div>
                  </Col>
                </div>
                <div className={"newsVideo-box"}>
                  <Col
                    className={"newsVideo-item"}
                    lg={"4"}
                    md={"4"}
                    sm={"12"}
                    xs={"12"}
                  >
                    <div className={"item"}>
                      <img src={Tide1} alt={""} />
                      <h2>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </h2>
                    </div>
                  </Col>
                  <Col
                    className={"newsVideo-item"}
                    lg={"4"}
                    md={"4"}
                    sm={"12"}
                    xs={"12"}
                  >
                    <div className={"item"}>
                      <img src={Tide1} alt={""} />
                      <h2>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </h2>
                    </div>
                  </Col>
                  <Col
                    className={"newsVideo-item"}
                    lg={"4"}
                    md={"4"}
                    sm={"12"}
                    xs={"12"}
                  >
                    <div className={"item"}>
                      <img src={Tide1} alt={""} />
                      <h2>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </h2>
                    </div>
                  </Col>
                </div>
              </section>
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    );
  }
}
