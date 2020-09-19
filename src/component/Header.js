import React, { Component } from "react";
import { Container, Media } from "reactstrap";
import LogoImg from "../assets/images/logo.png";
import HamburgerMenu from "react-hamburger-menu";

export default class Header extends Component {
  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }
  componentWillMount() {
    this.setState({ open: false });
  }
  render() {
    return (
      <div className="Header">
        <Container>
          <div className={"logo"}>
            <a href="/">
              <Media object src={LogoImg} width={160} alt="Logo" />
            </a>
          </div>
          <div className={"main-menu-box"}>
            <ul className={"main-menu"}>
              <li className="item">
                <a href="/">Anasayfa</a>
              </li>
              <li className="item sub">
                Kurumsal
                <div className={"sub-menu"}>
                  <div className={"sub-menu-item-box"}>
                    <div className={"sub-menu-item"}>
                      <a href="/hakkimizda">Hakkımızda</a>
                    </div>
                    <div className={"sub-menu-item"}>
                      <a href="/vizyon-ve-misyon">Vizyon ve Misyon</a>
                    </div>
                    <div className={"sub-menu-item"}>
                      <a href="/tarihce">Tarihçe</a>
                    </div>
                    <div className={"sub-menu-item"}>
                      <a href="/yonetim-kadrosu">Yönetim Kadrosu</a>
                    </div>
                    <div className={"sub-menu-item"}>
                      <a href="/kalite-belgelerimiz">Kalite Belgelerimiz</a>
                    </div>
                    <div className={"sub-menu-item"}>
                      <a href="/sosyal-sorumluluklarimiz">
                        Sosyal Sorumluluklarimiz
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <a href="/markalar">Markalar</a>
              </li>
              <li className="item">
                <a href="/kariyer">Kariyer</a>
              </li>
              <li className="item toNews">
                <a href={"/"}>Basında Biz</a>
              </li>
              <li className="item">
                <a href="/iletisim">İletişim</a>
              </li>
              <li className="item find-area">
                <span className={"find-ico"}>Arama</span>
                <div className={"sub-menu item animate__animated"}>
                  <div className={"sub-menu-item-box"}>
                    <Container>
                      <input
                        type={"text"}
                        placeholder={"Arama yapacağınız kelimeyi yazınız"}
                      />
                      <span className={"find-ico"}></span>
                      <span className={"find-close"}>X</span>
                    </Container>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <HamburgerMenu
            className={"hamburger-menu"}
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={30}
            height={20}
            strokeWidth={2}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.8}
          ></HamburgerMenu>
        </Container>
      </div>
    );
  }
}
