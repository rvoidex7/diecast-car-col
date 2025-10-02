Proje Dökümanı: Diecast Car Collection Platformu
1. Projeye Genel Bakış
Proje Adı: Diecast Car Collection Platform (Kod Adı: diecast-car-col)

Vizyon: Model araba (diecast) koleksiyonerleri için, koleksiyonlarını yönetebilecekleri, sergileyebilecekleri ve diğer koleksiyonerlerle güvenli bir ortamda alım-satım-takas yapabilecekleri bir sosyal ticaret platformu oluşturmak.

Temel Amaç: Koleksiyonerlerin en büyük sıkıntılarından olan eksik parçaları bulma sürecini otomatize etmek, karaborsanın önüne geçmek ve koleksiyon tutkusunu paylaşabilecekleri bir topluluk merkezi yaratmak.

2. Teknik Altyapı ve Kurallar
Platform: React Native & Expo Go

Stil/UI: NativeWind (React Native için Tailwind CSS). Tüm stil işlemleri className prop'u üzerinden yapılacak.

Navigasyon: Expo Router (Dosya tabanlı yönlendirme).

Kısıtlama: Sadece ön yüz (frontend) geliştirilecektir. Tüm veriler sahte (mock data) objelerle sağlanacaktır. Expo Go ile %100 uyumlu olmayan kütüphanelerden kaçınılacaktır.

Dil: TypeScript (.tsx ve .ts uzantıları kullanılacaktır).

3. Ana Özellikler ve Modüller
3.1. Koleksiyon Yönetimi (Dijital Vitrin)
Fonksiyon: Kullanıcıların sahip oldukları model arabaları kişisel profillerine eklemesini sağlar.

Arayüz: Kullanıcının koleksiyonundaki araçlar, 2 sütunlu bir grid (ızgara) yapısında, aracın fotoğrafı ve modeli görünecek şekilde listelenir.

İşlevsellik:

Kullanıcı koleksiyonuna yeni bir araç ekleyebilmeli (ileride).

Koleksiyondaki bir araca tıklandığında detayları görülebilmeli.

Koleksiyondaki bir aracı tek tuşla "Satılık" veya "Takaslık" olarak işaretleyip Pazaryeri'ne gönderebilmeli.

3.2. Pazaryeri (Marketplace)
Fonksiyon: Kullanıcıların satışa veya takasa çıkardığı tüm araçların listelendiği ana bölüm.

Arayüz:

En üstte bir SearchBar component'i bulunur.

İlanlar, ListingCard adı verilen component'ler kullanılarak alt alta listelenir.

Her ListingCard, aracın fotoğrafını, model adını, serisini, fiyatını ve satıcının kullanıcı adını gösterir.

İşlevsellik:

Kullanıcılar model adına, serisine veya satıcı adına göre arama yapabilmelidir.

Bir ilana tıklandığında, o ilanın detay sayfasına yönlendirme yapılmalıdır.

3.3. "Arananlar" Listesi ve Alarm Sistemi (Uygulamanın Kilit Özelliği)
Fonksiyon: Kullanıcıların koleksiyonlarında eksik olan veya aradıkları modelleri kaydettikleri kişisel bir liste.

Arayüz: Arananlar sekmesinde, kullanıcının eklediği araçların bir listesi bulunur.

İşlevsellik:

Kullanıcı bu listeye yeni "aranan ilanları" ekleyebilmelidir.

Kritik İşlev: Pazaryeri'ne "Arananlar" listesindeki bir modelle eşleşen yeni bir ilan eklendiği anda, o modeli arayan kullanıcıya anında bir bildirim (push notification) gönderilir. Bu, kullanıcıların sürekli manuel arama yapma ihtiyacını ortadan kaldırır.

3.4. Kullanıcı Profili ve Sosyal Etkileşim
Fonksiyon: Kullanıcıların kişisel bilgilerini, koleksiyonlarını ve satış/takas ilanlarını bir arada gördüğü bölüm.

Arayüz:

Kullanıcının profil fotoğrafı, kullanıcı adı ve kısa bir biyografi alanı.

Kullanıcının "Koleksiyonum" (vitrini) ve "Satıştaki Ürünleri" arasında geçiş yapabilen sekmeler.

İşlevsellik:

Kullanıcılar arası özel mesajlaşma (pazarlık ve iletişim için).

Kullanıcı puanlama ve yorum sistemi (güvenli ticaret ortamı için).

4. Uygulama Mimarisi
4.1. Navigasyon Yapısı (app/(tabs)/_layout.tsx)
Uygulama, 4 ana sekmeden oluşan bir tab navigasyonuna sahip olacaktır:

Pazaryeri (marketplace.tsx): Ana alım-satım ekranı.

Koleksiyonum (mycollection.tsx): Kullanıcının kişisel araç koleksiyonu.

Arananlar (wanted.tsx): Kullanıcının aradığı araçların listesi.

Profil (profile.tsx): Kullanıcı profili ve ayarlar.

4.2. Klasör Yapısı
app/: Ekranları ve navigasyon yapısını içerir.

(tabs)/: Ana tab navigasyonuna ait ekranları barındırır.

components/: Yeniden kullanılabilir UI bileşenlerini içerir (ListingCard, SearchBar vb.).

constants/: Sabit değerleri (renkler, boyutlar) içerir.

assets/: Resimler, ikonlar ve font dosyalarını içerir.

5. Component Kütüphanesi
ListingCard.js: Pazaryeri'nde her bir ilanı temsil eden kart.

Görünüm: Solda araç fotoğrafı, sağda model adı, seri, satıcı ve fiyat bilgileri.

Props: listing (bir ilan objesi) alır.

SearchBar.js: Arama çubuğu.

Görünüm: Metin giriş alanı, arama ikonu ve filtre ikonu içerir.

Props: placeholder (gösterilecek metin) alır.

6. Veri Modelleri (Mock Data Yapısı)
Car Objesi: Bir model arabanın temel bilgilerini içerir.

JSON

{
  "id": "string",
  "name": "string",
  "series": "string",
  "year": "string",
  "photoUrl": "string"
}
Listing (İlan) Objesi: Pazaryeri'ndeki bir ilanın tüm detaylarını içerir.

JSON

{
  "listingId": "string",
  "sellerUsername": "string",
  "car": "Car Object",
  "type": "'sale' | 'trade'",
  "price": "number | string",
  "condition": "'Sıfır' | 'Kutulu' | 'İkinci El'",
  "description": "string"
}
7. Tema ve Stil Rehberi (constants/theme.js)
Tüm renkler ve standart boyutlar bu dosyadan çekilerek NativeWind'in tema yapılandırmasında kullanılacaktır.

Ana Renkler:

primary: '#FF6347' (Turuncu-Kırmızı)

secondary: '#444262' (Koyu Gri)

white: '#F3F4F8'

lightWhite: '#FAFAFC'

Yazı Tipi Boyutları (SIZES): small, medium, large, xLarge gibi standart boyutlar tanımlanmıştır.