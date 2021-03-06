import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import AboutUs from "./component/About/AboutUs";
import Vision from "./component/About/Vision";
import History from "./component/About/History";
import Responsibility from "./component/About/Responsibility";
import ManagementTeam from "./component/About/ManagementTeam";
import QualityTide from "./component/About/QualityTide";
import Brands from "./component/Product/Brands";
import BrandsItem from "./component/Product/BrandsItem";
import ProductDetail from "./component/Product/ProductDetail";
import Career from "./component/Career/Career";
import ContactUs from "./component/Contact/ContactUs";
import Products from "./component/Product/Products";
import NewsOur from "./component/NewsOur/NewsOur";
import NewsDetail from "./component/NewsOur/NewsDetail";
import json from "./assets/js/brands.json";

export default class App extends Component {
  state = {
    brands: json.brands,
    news: json.news,
    brandsName: [],
  };

  getCategories = () => {
    fetch(json)
      .then((response) => response.json())
      .then((data) => this.setState({ brands: data, news: data }));
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
          
            <Route path="/haberler-videolar" >
              <NewsOur news={this.state.news} />
            </Route>
            <Route path="/haberler/">
              <NewsDetail />
            </Route>
            <Route path="/iletisim">
              <ContactUs />
            </Route>
            <Route path="/kariyer">
              <Career />
            </Route>
            <Route path="/urun-detay/">
              <ProductDetail />
            </Route>
            <Route path="/markalar/urunler/">
              <BrandsItem />
            </Route>
            <Route path="/markalar">
              <Brands brands={this.state.brands} />
            </Route>
            <Route path="/urunler">
              <Products products={this.state.brands} />
            </Route>
            <Route path="/belgelerimiz">
              <QualityTide />
            </Route>
            <Route path="/yonetim-kadrosu">
              <ManagementTeam />
            </Route>
            <Route path="/sosyal-sorumluluklarimiz">
              <Responsibility />
            </Route>
            <Route path="/tarihce">
              <History />
            </Route>
            <Route path="/vizyon-ve-misyon">
              <Vision />
            </Route>
            <Route path="/hakkimizda">
              <AboutUs />
            </Route>
            <Route path="/">
              <HomePage brands={this.state.brands} news={this.state.news} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
