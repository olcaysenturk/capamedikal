import React, { Component } from "react";
import { Container } from "reactstrap";
import BackgroundTitle from "./BackgroundTitle";
import BackgroundImage from "../../assets/images/about-4.jpg";

export default class Responsibility extends Component {
  render() {
    document.title = "Çapa Medikal - Sosyal Sorumluluklarımız";
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"SOSYAL SORUMLULUKLARIMIZ"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"about-us-text"}>
          <Container>
            <strong>SOSYAL SORUMLULUK ADI</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim i
            </p>

            <strong>SOSYAL SORUMLULUK ADI</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim i
            </p>

            <strong>SOSYAL SORUMLULUK ADI</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim i
            </p>

            <strong>SOSYAL SORUMLULUK ADI</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim i
            </p>

            <br></br>
          </Container>
        </section>
      </div>
    );
  }
}
