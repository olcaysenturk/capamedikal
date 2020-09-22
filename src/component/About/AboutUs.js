import React, { Component } from "react";
import { Container } from "reactstrap";
import BackgroundTitle from "./BackgroundTitle";
import BackgroundImage from "../../assets/images/about-1.jpg";

export default class AboutUs extends Component {
  render() {
    document.title = "Çapa Medikal - Hakkımızda";
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"HAKKIMIZDA"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"about-us-text"}>
          <Container>
            <p>
              Her şeyin her işin başı sağlık. 1987 yılında medikal sektöre adım
              atan ve 1992 yılından bu yana Çapa Medikal olarak istikrarlı
              büyümesini sürdüren şirketimiz, sektörde yaşanan teknolojik
              dönüşümde geniş medikal sarf malzemesi portföyüyle sağlıkta hizmet
              sunucu firmaların en büyük destek unsurlarından biri olmayı
              sürdürüyor.
            </p>
            <p>
              Hastanelerin ve diğer sağlık işletmelerinin temel gereksinimi olan
              pek çok ürünü ilk kez Türkiye ile buluşturan Çapa Medikal, bugün
              özel odaklanma ve deneyim isteyen sağlık sektörüne yönelik
              lojistik hizmetlerde yalnızca ülkemizde değil, bölge ülkeleri
              arasında da ön sıralarda yer alıyor.
            </p>
            <p>
              “Önce İnsan” ve “İstikrarlı Fiyat” ilkelerinden ödün vermeyen Çapa
              Medikal, başta özel hastaneler olmak üzere kamu ve üniversite
              hastanelerinin, , eczanelerin ve ilgili dağıtım firmalarının
              medikal sarf malzemesi ihtiyacını büyük bir titizlik ve hız ile
              karşılayarak “Sağlık Lojistiği” alanında uzman bir paydaş olarak
              konumlanıyor.
            </p>
            <p>
              2003 yılında aldığı ISO 9001:2000 kalite belgesi ile uluslararası
              standartlarda hizmet verdiğini kanıtlayan Çapa Medikal, bu
              kapsamda Ar-Ge birimi, yüksek teknolojiyle işleyen depoları ve
              ürün bazındaki deneyimiyle sektörün en başarılı tedarikçileri
              arasında yerini almış durumda.
            </p>
            <p>
              <strong>Kalite ve Hız Bileşimi</strong>
            </p>
            <p>
              Gerek temsilciliğini ve bayiliğini yaptığı ürünlerin kalitesi
              gerekse Türkiye’nin dört bir yanında gelen talepleri karşılamadaki
              hızıyla başarısını kanıtlayan Çapa Medikal, Temmuz 2017 itibariyle
              İstanbul’un her iki yakasındaki toplam 10 bin metrekare alana
              sahip depoları; İstanbul, İzmir ve Ankara’daki 100’ün üzerinde
              çalışanın görev yaptığı hizmet ve kalite odaklı ofisleriyle sağlık
              sektörüne katma değer yaratmaktadır.
            </p>
            <p>
              30’dan fazla markaya ait 3000’den fazla ürünü ileri teknolojik
              altyapısı ile yöneten Çapa Medikal, 15 özel donanımlı nakliye
              aracı ile İstanbul’un 150 farklı noktasına 24 saat, diğer
              şehirlere ise 48 saat içinde ürün sevkiyatı gerçekleştiriyor.
            </p>
            <p>
              <strong>Türkiye’den Doğan Bir Marka</strong>
            </p>
            <p>
              Türkiye sağlık sektörünün gelişimine yönelik pek çok yeniliğe imza
              atan Çapa Medikal, farklı uzmanlıklar gerektiren ürünler sunan
              iştirakleri dışında, kendi bünyesindeki Nextech markası altında
              oluşturduğu sarf malzemesi ürün grubuyla da globalleşme yolunda
              önemli adımlar atıyor. Bu şekilde yalnızca Türkiye sağlık
              sektörüne değil, Türkiye ekonomisine de katkı sağlayan Çapa
              Medikal, 25. yılını kutladığı 2017 yılında Türkiye’nin ve dünyanın
              sağlıklı bir geleceğe emin adımlarla yürümesine yardımcı oluyor.
            </p>
          </Container>
        </section>
      </div>
    );
  }
}
