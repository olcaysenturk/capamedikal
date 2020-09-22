import React, { Component } from "react";
import { Container } from "reactstrap";
import BackgroundTitle from "./BackgroundTitle";
import BackgroundImage from "../../assets/images/about-2.jpg";

export default class Vision extends Component {
  render() {
    document.title = "Çapa Medikal - Vizyon ve Misyon";
    return (
      <div>
        <section>
          <BackgroundTitle
            Title={"VİZYON VE MİSYON"}
            Background={BackgroundImage}
          ></BackgroundTitle>
        </section>
        <section className={"about-us-text"}>
          <Container>
            <strong>VİZYON</strong>

            <p>
              Türkiye’de ve yakın coğrafyada sağlık sektörü için arz ve
              lojistikte lider bir şirket olmak.
            </p>

            <strong>MİSYON</strong>

            <p>
              Sağlık sektörünün önde gelen tedarik zinciri yönetimi şirketi
              olarak, yüksek kalite standartlarından ödün vermeden paydaşlar
              arasında üst düzey memnuniyet sağlamak.
            </p>

            <strong>DEĞERLERİMİZ</strong>

            <p>
              Kalite, çalışanlara değer verme, iş etiği, müşteri odaklılığı,
              saygınlık ve hız.
            </p>

            <strong>KALİTE YAKLAŞIMIMIZ</strong>

            <p>
              Çapa Medikal olarak her geçen gün yükselttiğimiz kalite
              anlayışımız ve yaklaşımımız kapsamında siz değerli müşterilerimize
              aşağıdaki prensipler doğrultusunda hizmet vermekteyiz;
            </p>
            <p>
              Koşulsuz müşteri memnuniyetini sağlamak<br></br>
              Satılan ürün kalitesini ve müşterilerimize yönelik süreçleri
              sürekli iyileştirmek<br></br>
              Uygun fiyat politikası ile tüm halkımızın sağlık hizmetlerinden
              daha etkin şekilde yararlanmasını sağlamak<br></br>
              Geniş ürün yelpazesi ile müşterilerimizin farklı ihtiyaçlarına
              çözüm getirmek<br></br>
              Hızlı servis ağı ve kalifiye personelimiz ile pazar payımızı
              sürekli yükseltmek<br></br>
              Personelimizin eğitimi ve bireysel gelişimi için gerekli altyapı
              ve çalışma ortamını sağlamak<br></br>
              Eşitlik esasının hiç bozulmaması için uygun ortamı sağlamak,
              çeşitliliğe önem vermek<br></br>
              Müşterilerimizin ve sektörümüzün talepleri doğrultusunda “yarın
              değil, bugün” felsefesini uygulamak<br></br>
              Karşılaşacağımız tüm zorlukların asla mazeret olmayacağı
              bilinciyle hareket etmek
            </p>
          </Container>
        </section>
      </div>
    );
  }
}
