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
            <h2>HAKKIMIZDA</h2>
           


          <p>
            Her şeyin her işin başı sağlık. 1987 yılında medikal sektöre adım atan ve 1992 yılından bu yana Çapa Medikal olarak istikrarlı büyümesini sürdüren şirketimiz, sektörde yaşanan teknolojik dönüşümde geniş medikal sarf malzemesi portföyüyle sağlıkta hizmet sunucu firmaların en büyük destek unsurlarından biri olmayı sürdürüyor.

            </p>
            <p>
            Hastanelerin ve diğer sağlık işletmelerinin temel gereksinimi olan pek çok ürünü ilk kez Türkiye ile buluşturan Çapa Medikal, bugün özel odaklanma ve deneyim isteyen sağlık sektörüne yönelik lojistik hizmetlerde yalnızca ülkemizde değil, bölge ülkeleri arasında da ön sıralarda yer alıyor.

            </p>
            <p>
            “Önce İnsan” ve “İstikrarlı Fiyat” ilkelerinden ödün vermeyen Çapa Medikal, başta özel hastaneler olmak üzere kamu ve üniversite hastanelerinin, , eczanelerin ve ilgili dağıtım firmalarının medikal sarf malzemesi ihtiyacını büyük bir titizlik ve hız ile karşılayarak “Sağlık Lojistiği” alanında uzman bir paydaş olarak konumlanıyor.

            </p>
            <p>
            2003 yılında aldığı ISO 9001:2000 kalite belgesi ile uluslararası standartlarda hizmet verdiğini kanıtlayan Çapa Medikal, bu kapsamda Ar-Ge birimi, yüksek teknolojiyle işleyen depoları ve ürün bazındaki deneyimiyle sektörün en başarılı tedarikçileri arasında yerini almış durumda.
  
            </p>
            <h2>VİZYON MİSYON</h2>
            <p>
              <strong>Vizyon</strong>
            </p>
            <p>
            Türkiye’de ve yakın coğrafyada sağlık sektörü için arz ve lojistikte lider bir şirket olmak.
            </p>
            <p>
              <strong>Misyon</strong>
            </p>
            <p>
            Sağlık sektörünün önde gelen tedarik zinciri yönetimi şirketi olarak, yüksek kalite standartlarından ödün vermeden paydaşlar arasında üst düzey memnuniyet sağlamak.
            </p>
            <p>
              <strong>Değerlerimiz</strong>
            </p>
            <p>
            Kalite, çalışanlara değer verme, iş etiği, müşteri odaklılığı, saygınlık ve hız.
                        </p>
                        <p>
              <strong>Kalite Yaklaşımımız</strong>
            </p>
            <p>
            Çapa Medikal olarak her geçen gün yükselttiğimiz kalite anlayışımız ve yaklaşımımız kapsamında siz değerli müşterilerimize aşağıdaki prensipler doğrultusunda hizmet vermekteyiz;
<br></br><br></br>
Koşulsuz müşteri memnuniyetini sağlamak
Satılan ürün kalitesini ve müşterilerimize yönelik süreçleri sürekli iyileştirmek
Uygun fiyat politikası ile tüm halkımızın sağlık hizmetlerinden daha etkin şekilde yararlanmasını sağlamak
Geniş ürün yelpazesi ile müşterilerimizin farklı ihtiyaçlarına çözüm getirmek
Hızlı servis ağı ve kalifiye personelimiz ile pazar payımızı sürekli yükseltmek
Personelimizin eğitimi ve bireysel gelişimi için gerekli altyapı ve çalışma ortamını sağlamak
Eşitlik esasının hiç bozulmaması için uygun ortamı sağlamak, çeşitliliğe önem vermek
Müşterilerimizin ve sektörümüzün talepleri doğrultusunda “yarın değil, bugün” felsefesini uygulamak
Karşılaşacağımız tüm zorlukların asla mazeret olmayacağı bilinciyle hareket etmek
                        </p>
          </Container>
        </section>
      </div>
    );
  }
}
