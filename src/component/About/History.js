import React, { Component } from "react";
import { Container } from "reactstrap";
import BackgroundTitle from "./BackgroundTitle";
import BackgroundImage from "../../assets/images/about-3.jpg";

export default class History extends Component {
  document.title = "Çapa Medikal - Tarihçe";
  render() {
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"TARİHÇE"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"about-us-text"}>
          <Container>
            <p>
              1987’de başladığı yolculuğunda 30. yaşını kutlayan Çapa Medikal,
              sektörde pek çok ilki gerçekleştirerek önümüzdeki yıllarda da
              adından söz ettirmeye hazırlanıyor. Kurucusu Zekeriya Avşar’ın
              belirlediği vizyon doğrultusunda istikrarlı büyümesini sürdüren
              Çapa Medikal, medikal sarf malzemesi ve sağlık lojistiğinde
              uluslararası bir marka olma yolunda hızla ilerliyor.
            </p>
            <p>
              Kurduğu teknolojik ve güçlü altyapı ile İstanbul içinde 24,
              İstanbul dışına ise 48 saat içinde teslimat yaparak müşterilerinin
              taleplerini zamanında yerine getiren Çapa Medikal; iştirakleri ve
              markaları ile sektörün bayraktarlığını yapmayı sürdürüyor.
            </p>
            <strong>KİLOMETRE TAŞLARI</strong>
            <p>1987 – Çapa Medikal’in temelleri atıldı.</p>
            <p>
              1992 – İstanbul, Çapa’da açılan ofisle medikal sarf malzemeleri
              sektörünün geleceğini etkileyecek rota çizildi.
            </p>
            <p>1995 – İlk özel hastaneyle çalışılmaya başlandı.</p>
            <p>
              2002 – Hizmet verilen A+ özel hastane sayısı 20’ye ulaştı. Aynı
              yıl üniversite hastaneleri ile özel sektördeki çeşitli kurumlara
              da ürün sunulur hale gelindi.
            </p>
            <p>
              2009 – Sektörün ihtiyaç duyduğu uzman personel talebini karşılamak
              üzere tüm yılı kapsayan geniş bir eğitim seferberliği başlatıldı.
            </p>
            <p>2010 – Portföydeki ürün sayısı 7000’e ulaştı.</p>
            <p>
              2013 – Nextech markası oluşturularak yerli medikal sarf malzemesi
              üretimine başlandı.
            </p>
            <p>
              2015 – 1000 metrekarelik yeni ve modern merkez binası devreye
              alındı. Yine aynı yıl portföyde bulunan ürünler 10 bin metrekare
              kullanım alanlı iki depo ile dağıtılmaya başlandı.
            </p>
            <p>
              2017 – Çalışan sayısı 100’e ulaştı. Bu, medikal sarf malzemesinde
              en fazla istihdam yaratan firmalardan biri olunmasının yolunu
              açtı.
            </p>
            <br></br>
          </Container>
        </section>
      </div>
    );
  }
}
