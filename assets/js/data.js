/* ============================================================
   HÜNERLİ ELLER — Menü Verisi
   Menü sık değiştiği için TÜM içerik bu dosyada toplanmıştır.
   Güncellemek için sadece bu dosyayı düzenlemeniz yeterli.
   ============================================================ */

/* --- Alerjen tanımları (yasal bilgilendirme lejantı) --- */
const ALLERGENS = {
  gluten:   { label: "Gluten",        short: "G" },
  yumurta:  { label: "Yumurta",       short: "Y" },
  sut:      { label: "Süt Ürünleri",  short: "S" },
  kuruyemis:{ label: "Sert Kabuklu",  short: "K" },
  hardal:   { label: "Hardal",        short: "H" },
  susam:    { label: "Susam",         short: "Su" }
};

/* --- Kategoriler (sıra korunur) --- */
const CATEGORIES = [
  { id: "corba",   name: "Çorba Çeşitleri", icon: "soup",    grad: "linear-gradient(135deg,#E8A982,#C0552E)", tag: "Sıcacık başlangıçlar" },
  { id: "sulu",    name: "Sulu Yemekler",   icon: "stew",    grad: "linear-gradient(135deg,#CE6B3F,#9B3F1F)", tag: "Bol sulu, ev usulü" },
  { id: "pilav",   name: "Pilav Çeşitleri", icon: "rice",    grad: "linear-gradient(135deg,#D8B987,#B5894B)", tag: "Tane tane pilavlar" },
  { id: "izgara",  name: "Izgara & Fırın",  icon: "grill",   grad: "linear-gradient(135deg,#B5894B,#7E5A2E)", tag: "Fırın & mangal lezzeti" },
  { id: "gozleme", name: "Gözleme Çeşitleri", icon: "dough", grad: "linear-gradient(135deg,#8FA05E,#5E6B43)", tag: "İncecik el açması" },
  { id: "tost",    name: "Tostlar",         icon: "toast",   grad: "linear-gradient(135deg,#D89A5E,#B5894B)", tag: "Pratik aralar" },
  { id: "tatli",   name: "Tatlılar",        icon: "dessert", grad: "linear-gradient(135deg,#E0A6A0,#C0552E)", tag: "Tatlı bir son" },
  { id: "icecek",  name: "İçecekler",       icon: "drink",   grad: "linear-gradient(135deg,#8FA05E,#5E6B43)", tag: "Serinleten içecekler" }
];

/* --- Yemekler ---
   id, ad, kategori, malzemeler[], alerjenler[], kısa açıklama (desc),
   hikaye (blog), tarif {sure, kisi, adimlar[], ipucu}  (opsiyonel)        */
const DISHES = [
  /* ======================= ÇORBALAR ======================= */
  {
    id: "arabasi-corbasi", name: "Arabaşı Çorbası", cat: "corba",
    ingredients: ["Kavrulmuş un", "Tavuk", "Biber salçası", "Domates salçası", "Baharat"],
    allergens: ["gluten"],
    desc: "Yöremizin köklü çorbası; kıvamlı, baharatlı ve doyurucu.",
    story: "Arabaşı, Anadolu'nun en eski kış çorbalarından biridir. Kavrulmuş unun salça ile buluşmasından doğan o yoğun kırmızı renk ve baharatlı kokusu, soğuk günlerin sofralarını ısıtır. Geleneksel olarak yanında un hamurundan kesilen lokmalarla servis edilir; bizde de tavuğun suyuyla uzun uzun pişirilerek o tarifsiz kıvamına ulaşır.",
    recipe: { sure: "60 dk", kisi: "4-5 kişilik", adimlar: ["Tavuğu haşlayıp didikleyin, suyunu ayırın.", "Tencerede unu yağda kokusu çıkana dek kavurun.", "Biber ve domates salçasını ekleyip kısa kavurun.", "Tavuk suyunu yavaşça ekleyip topaklanmadan çırpın.", "Baharatları katıp kıvam alana kadar kısık ateşte pişirin."], ipucu: "Unu sabırla kavurmak çorbanın rengini ve lezzetini belirler." }
  },
  {
    id: "mercimek-corbasi", name: "Mercimek Çorbası", cat: "corba",
    ingredients: ["Kırmızı mercimek", "Patates", "Kuru soğan", "Baharat"],
    allergens: [],
    desc: "Pürüzsüz, kadifemsi kıvamda klasik mercimek çorbası.",
    story: "Sofraların değişmez başlangıcı mercimek çorbası, bizde patatesin de katkısıyla daha kadifemsi bir kıvam kazanır. Sade malzemelerle, doğru pişirme ve son dokunuş limonla en sevilen lezzetlerden biridir.",
    recipe: { sure: "40 dk", kisi: "4 kişilik", adimlar: ["Soğanı yağda pembeleştirin.", "Yıkanmış mercimek ve doğranmış patatesi ekleyin.", "Sıcak su ilave edip mercimekler dağılana dek pişirin.", "Blenderdan geçirip baharatlandırın.", "Kızgın tereyağı–pul biber sosuyla servis edin."], ipucu: "Limon ve nane ile servis edildiğinde tadı katlanır." }
  },
  {
    id: "yayla-corbasi", name: "Yayla Çorbası", cat: "corba",
    ingredients: ["Yarma", "Yoğurt", "Un", "Yumurta", "Nane"],
    allergens: ["sut", "gluten", "yumurta"],
    desc: "Yoğurtlu, naneli; ferah ve besleyici yayla çorbası.",
    story: "Yaylaların serin sabahlarını andıran bu çorba, yoğurdun ekşimsi tazeliği ile yarmanın tokluğunu birleştirir. Üzerine gezdirilen naneli tereyağı, her kaşıkta o bilindik yayla kokusunu taşır.",
    recipe: { sure: "45 dk", kisi: "4 kişilik", adimlar: ["Yarmayı suda yumuşayana kadar haşlayın.", "Yoğurt, un ve yumurtayı çırpıp terbiye hazırlayın.", "Terbiyeyi azar azar sıcak suyla açıp tencereye ekleyin.", "Sürekli karıştırarak kaynayana dek pişirin.", "Naneli kızgın tereyağı gezdirerek servis edin."], ipucu: "Terbiye kesilmesin diye ateşi kısık tutup durmadan karıştırın." }
  },
  {
    id: "koylum-corbasi", name: "Köylüm Çorbası", cat: "corba",
    ingredients: ["Şehriye", "Yeşil mercimek", "Salça", "Yağ", "Tuz", "Baharat", "Su"],
    allergens: ["gluten"],
    desc: "Yeşil mercimek ve şehriyenin buluştuğu köy usulü çorba.",
    story: "Adı gibi sade ve içten bir köy çorbası. Yeşil mercimeğin toprak tadı, şehriyenin tokluğu ve salçanın sıcaklığıyla mütevazı ama doyurucu bir başlangıç sunar.",
    recipe: { sure: "45 dk", kisi: "4 kişilik", adimlar: ["Yeşil mercimeği haşlayın.", "Yağda salçayı kavurun.", "Şehriyeyi ekleyip çevirin.", "Su ve mercimeği ilave edip pişirin.", "Baharatlayıp dinlendirerek servis edin."], ipucu: "Şehriyeyi yağda kavurmak çorbaya hoş bir koku verir." }
  },
  {
    id: "sehriye-corbasi", name: "Şehriye Çorbası", cat: "corba",
    ingredients: ["Arpa şehriye", "Su", "Tuz", "Yağ", "Salça", "Baharat"],
    allergens: ["gluten"],
    desc: "Çocukların da sevdiği hafif, salçalı arpa şehriye çorbası.",
    story: "Hafif ve sade arpa şehriye çorbası, hem büyüklerin hem çocukların gönlünü kazanır. Salçanın verdiği o tatlı kırmızılık ve şehriyenin yumuşacık dokusuyla her yaşa hitap eder.",
    recipe: { sure: "30 dk", kisi: "4 kişilik", adimlar: ["Yağda salçayı kavurun.", "Şehriyeyi ekleyip hafif çevirin.", "Sıcak su ilave edin.", "Şehriyeler yumuşayana kadar pişirin.", "Baharatlayıp servis edin."], ipucu: "Az şehriye ile başlayın, pişerken şişerek kıvamı yakalar." }
  },
  {
    id: "ezogelin-corbasi", name: "Ezo Gelin Çorbası", cat: "corba",
    ingredients: ["Kırmızı mercimek", "Bulgur", "Pirinç", "Salça", "Nane", "Su", "Baharat"],
    allergens: ["gluten"],
    desc: "Mercimek, bulgur ve pirinçle zenginleşen naneli çorba.",
    story: "Adını efsanevi gelin Ezo'dan alan bu çorba, mercimek–bulgur–pirinç üçlüsünün uyumuyla tok tutan, naneli ve baharatlı bir Anadolu klasiğidir.",
    recipe: { sure: "45 dk", kisi: "4-5 kişilik", adimlar: ["Salçayı yağda kavurun.", "Mercimek, bulgur ve pirinci ekleyin.", "Sıcak su ilave edip pişirin.", "Nane ve baharatları katın.", "Kıvam alınca servis edin."], ipucu: "Üzerine naneli, pul biberli tereyağı çok yakışır." }
  },
  {
    id: "sebzeli-corba", name: "Sebzeli Çorba", cat: "corba",
    ingredients: ["Tavuk", "Havuç", "Su", "Baharat"],
    allergens: [],
    desc: "Tavuk ve havuçla hazırlanan hafif, besleyici çorba.",
    story: "Hafif ama besleyici bu çorba, tavuğun zengin suyu ve havucun tatlılığıyla hem hastaya şifa hem sofraya neşe katar.",
    recipe: { sure: "50 dk", kisi: "4 kişilik", adimlar: ["Tavuğu haşlayıp suyunu süzün.", "Havuçları küçük doğrayıp tavuk suyunda pişirin.", "Didiklenmiş tavuğu ekleyin.", "Baharatlayıp birkaç dakika kaynatın.", "Sıcak servis edin."], ipucu: "İsteğe göre az şehriye ekleyebilirsiniz." }
  },
  {
    id: "anadolu-corbasi", name: "Anadolu Çorbası", cat: "corba",
    ingredients: ["Yeşil mercimek", "Nohut", "Yarma", "Baharat", "Su"],
    allergens: [],
    desc: "Bakliyatın bereketi; yarma, nohut ve mercimekle dolu dolu.",
    story: "Anadolu'nun bereketli toprağını sofraya taşıyan bu çorba; yeşil mercimek, nohut ve yarmanın buluşmasıyla hem tok tutan hem de besin değeri yüksek bir lezzettir.",
    recipe: { sure: "70 dk", kisi: "5 kişilik", adimlar: ["Nohutu önceden ıslatın.", "Yeşil mercimek, nohut ve yarmayı birlikte haşlayın.", "Yumuşayınca baharatları ekleyin.", "Kıvam alana dek pişirin.", "Dinlendirip servis edin."], ipucu: "Bir gece önce ıslatılan nohut çok daha hızlı pişer." }
  },

  /* ======================= SULU YEMEKLER ======================= */
  { id: "tas-kebap", name: "Tas Kebap", cat: "sulu", ingredients: ["Kuşbaşı dana eti", "Soğan", "Domates", "Biber", "Salça", "Baharat"], allergens: [], desc: "Yumuşacık et parçaları, koyu ve aromatik sosuyla.", story: "Tas kebap, etin sabırla, kendi suyunda ağır ağır pişirilmesiyle elde edilen bir hünerdir. Kaşıkla dağılan etler ve koyu sosu, pilavla mükemmel bir uyum yakalar.", recipe: { sure: "90 dk", kisi: "4 kişilik", adimlar: ["Eti kendi suyunu çekene kadar kavurun.", "Soğanı ekleyip pembeleştirin.", "Salça ve baharatı katın.", "Sıcak su ilave edip kısık ateşte uzun süre pişirin.", "Et yumuşayınca servis edin."], ipucu: "Düşük ısıda uzun pişirmek etin lokum gibi olmasını sağlar." } },
  { id: "sulu-kofte", name: "Sulu Köfte", cat: "sulu", ingredients: ["Kıyma", "Pirinç", "Soğan", "Salça", "Baharat", "Su"], allergens: ["gluten"], desc: "İçi pirinçli minik köfteler, salçalı sıcacık sosta.", story: "Minik yuvarlanan köftelerin salçalı sosta pişmesiyle hazırlanan bu ev klasiği, hem çocukların hem büyüklerin gönlünde ayrı bir yere sahiptir.", recipe: { sure: "60 dk", kisi: "4 kişilik", adimlar: ["Kıyma, pirinç, soğan ve baharatı yoğurun.", "Küçük köfteler yuvarlayın.", "Salçalı sosu kaynatın.", "Köfteleri sosa ekleyip pişirin.", "Pirinçler yumuşayınca servis edin."], ipucu: "Köfteleri una bulamak dağılmadan pişmesini sağlar." } },
  { id: "karniyarik", name: "Karnıyarık", cat: "sulu", ingredients: ["Patlıcan", "Kıyma", "Soğan", "Biber", "Domates", "Salça"], allergens: [], desc: "Kıymalı harçla doldurulmuş, fırında pişen patlıcan.", story: "Karnı yarılıp bol kıymalı harçla doldurulan patlıcanlar, fırında pişerek o ev sofrası kokusunu yayar. Üzerindeki biber ve domates onu görsel bir şölene dönüştürür.", recipe: { sure: "75 dk", kisi: "4 kişilik", adimlar: ["Patlıcanları alacalı soyup kızartın.", "Kıymalı harcı kavurun.", "Patlıcanların karnını yarıp harçla doldurun.", "Üzerine domates–biber yerleştirin.", "Salçalı suyla fırında pişirin."], ipucu: "Patlıcanları tuzlu suda bekletmek acılığını alır." } },
  { id: "guvec", name: "Güveç", cat: "sulu", ingredients: ["Et", "Patlıcan", "Patates", "Biber", "Domates", "Sarımsak"], allergens: [], desc: "Sebze ve etin toprak kapta harmanlandığı fırın yemeği.", story: "Güveç, mevsim sebzelerinin ve etin toprak kapta buluşup fırında usul usul pişmesiyle ortaya çıkan, paylaşmalık bir lezzettir.", recipe: { sure: "90 dk", kisi: "4-5 kişilik", adimlar: ["Eti hafif kavurun.", "Sebzeleri iri doğrayın.", "Güveç kabında katmanlayın.", "Salçalı su gezdirin.", "Fırında yavaşça pişirin."], ipucu: "Toprak güveç ısıyı dengeli tutarak lezzeti yoğunlaştırır." } },
  { id: "patlican-oturtma", name: "Patlıcan Oturtma", cat: "sulu", ingredients: ["Patlıcan", "Kıyma", "Domates", "Biber", "Soğan", "Salça"], allergens: [], desc: "Dizilmiş patlıcan ve kıymanın salçalı buluşması.", story: "Kızarmış patlıcan dilimlerinin üzerine kıymalı harç ve domates oturtulup pişirilir; sade görünür ama her lokmada zengin bir tat sunar.", recipe: { sure: "70 dk", kisi: "4 kişilik", adimlar: ["Patlıcanları dilimleyip kızartın.", "Kıymayı soğanla kavurun.", "Tepside patlıcan–kıyma dizin.", "Domates ve biber yerleştirin.", "Salçalı suyla fırınlayın."], ipucu: "Patlıcanları fırında kızartmak daha hafif bir sonuç verir." } },
  { id: "mantar-sote", name: "Mantar Sote", cat: "sulu", ingredients: ["Mantar", "Tereyağı", "Sarımsak", "Kekik", "Karabiber"], allergens: ["sut"], desc: "Tereyağında soteleneon mantar; sarımsaklı ve kekikli.", story: "Taze mantarların tereyağında sarımsak ve kekikle sotelenmesiyle hazırlanan hafif ama lezzet dolu bir tabak.", recipe: { sure: "20 dk", kisi: "2-3 kişilik", adimlar: ["Mantarları dilimleyin.", "Tereyağında sarımsağı ısıtın.", "Mantarları ekleyip suyunu salıp çekene dek sote edin.", "Kekik ve karabiberle baharatlayın.", "Sıcak servis edin."], ipucu: "Mantarı yıkamak yerine nemli bezle silmek dokusunu korur." } },
  { id: "tavuk-sote", name: "Tavuk Sote", cat: "sulu", ingredients: ["Tavuk", "Biber", "Domates", "Soğan", "Salça", "Baharat"], allergens: [], desc: "Renkli biberlerle sotelenmiş sulu tavuk.", story: "Renkli biberler ve domatesle sotelenen tavuk, hem hafif hem doyurucu bir seçenek olarak pilavın yanında parlar.", recipe: { sure: "40 dk", kisi: "4 kişilik", adimlar: ["Tavukları kuşbaşı doğrayın.", "Soğan ve biberi kavurun.", "Tavukları ekleyip mühürleyin.", "Salça ve domatesi katın.", "Kısık ateşte sote edin."], ipucu: "Tavuğu yüksek ateşte mühürlemek suyunu içinde tutar." } },
  { id: "et-haslama", name: "Et Haşlama", cat: "sulu", ingredients: ["Kuşbaşı et", "Havuç", "Patates", "Soğan", "Baharat"], allergens: [], desc: "Sebzeleriyle berrak suda pişmiş yumuşacık et.", story: "Etin sebzelerle birlikte berrak suda usulca haşlanmasıyla ortaya çıkan, mideyi yormayan, besleyici bir yemek.", recipe: { sure: "100 dk", kisi: "4 kişilik", adimlar: ["Eti suda haşlamaya başlayın.", "Köpüğünü alın.", "Yumuşayınca sebzeleri ekleyin.", "Baharatlayın.", "Sebzeler de pişince servis edin."], ipucu: "Köpüğü almak suyu berrak ve temiz tutar." } },
  { id: "et-kavurma", name: "Et Kavurma", cat: "sulu", ingredients: ["Kuşbaşı et", "Soğan", "Biber", "Karabiber", "Tuz"], allergens: [], desc: "Kendi suyunda kavrulmuş yoğun lezzetli et.", story: "Etin kendi yağında, sabırla kavrulmasıyla elde edilen yoğun, katıksız bir lezzet. Sade malzemeyle gerçek et tadı.", recipe: { sure: "70 dk", kisi: "4 kişilik", adimlar: ["Eti tencerede suyunu salana dek pişirin.", "Suyunu çekip yağında kavurun.", "Soğan ve biberi ekleyin.", "Baharatlayın.", "Hafif kızarınca servis edin."], ipucu: "Yağını eklemeden önce etin suyunu tamamen çekmesini bekleyin." } },
  { id: "manti", name: "Mantı", cat: "sulu", ingredients: ["Un", "Yumurta", "Kıyma", "Soğan", "Yoğurt", "Sarımsak", "Tereyağı"], allergens: ["gluten", "yumurta", "sut"], desc: "El açması minik mantı, sarımsaklı yoğurt ve sosla.", story: "İncecik açılan hamurun minik karelere bölünüp tek tek kıymayla kapatılmasıyla yapılan el emeği mantı; sarımsaklı yoğurt ve naneli tereyağı sosuyla taçlanır.", recipe: { sure: "120 dk", kisi: "4 kişilik", adimlar: ["Hamuru yoğurup ince açın.", "Karelere bölüp kıymayla doldurun.", "Minik mantılar kapatın.", "Kaynar tuzlu suda haşlayın.", "Yoğurt ve naneli–biberli tereyağıyla servis edin."], ipucu: "Mantı ne kadar küçükse el emeği o kadar makbuldür." } },
  { id: "tavuk-haslama", name: "Tavuk Haşlama", cat: "sulu", ingredients: ["Tavuk", "Havuç", "Soğan", "Baharat", "Su"], allergens: [], desc: "Sebzeleriyle hafif haşlanan tavuk.", story: "Tavuğun sebzelerle berrak suda hafifçe haşlanmasıyla hazırlanan, sindirimi kolay ve besleyici bir tabak.", recipe: { sure: "60 dk", kisi: "4 kişilik", adimlar: ["Tavuğu suda haşlayın.", "Köpüğünü alın.", "Havuç ve soğanı ekleyin.", "Baharatlayın.", "Pişince sıcak servis edin."], ipucu: "Suyu çorbaya da temel olabilir, atmayın." } },
  { id: "etli-kuru-fasulye", name: "Etli Kuru Fasulye", cat: "sulu", ingredients: ["Kuru fasulye", "Kuşbaşı et", "Soğan", "Salça", "Baharat"], allergens: [], desc: "Türk sofrasının vazgeçilmezi; etli, salçalı fasulye.", story: "Pilavın can yoldaşı kuru fasulye, etin lezzetiyle birleşince Türk sofrasının en sevilen klasiklerinden birine dönüşür.", recipe: { sure: "100 dk", kisi: "4-5 kişilik", adimlar: ["Fasulyeyi bir gece ıslatın.", "Eti kavurun.", "Soğan ve salçayı ekleyin.", "Fasulye ve sıcak suyu katın.", "Fasulyeler yumuşayana dek pişirin."], ipucu: "Tuzu pişmenin sonuna doğru eklemek fasulyeyi dağıtmaz." } },
  { id: "etli-nohut", name: "Etli Nohut", cat: "sulu", ingredients: ["Nohut", "Kuşbaşı et", "Soğan", "Salça", "Baharat"], allergens: [], desc: "Yumuşacık nohut ve et, salçalı sosuyla.", story: "Nohutun yumuşacık dokusu ve etin lezzeti salçalı sosta buluşur; pilavla servis edildiğinde tam bir ana yemek olur.", recipe: { sure: "100 dk", kisi: "4 kişilik", adimlar: ["Nohutu ıslatın.", "Eti kavurun.", "Soğan ve salçayı ekleyin.", "Nohut ve suyu katın.", "Kısık ateşte uzun pişirin."], ipucu: "Nohudun kabuğu rahat soyulsun diye ılık suda bekletin." } },
  { id: "etli-patates", name: "Etli Patates", cat: "sulu", ingredients: ["Patates", "Kuşbaşı et", "Soğan", "Biber", "Salça"], allergens: [], desc: "Salçalı sosta pişen et ve patates.", story: "Patatesin tokluğu ve etin lezzeti salçalı sosta birleşir; ekonomik, doyurucu ve herkesin sevdiği bir ev yemeği.", recipe: { sure: "60 dk", kisi: "4 kişilik", adimlar: ["Eti kavurun.", "Soğan ve biberi ekleyin.", "Salçayı katın.", "Doğranmış patates ve su ilave edin.", "Patatesler yumuşayınca servis edin."], ipucu: "Patatesleri eşit doğramak hepsinin aynı anda pişmesini sağlar." } },
  { id: "turlu", name: "Türlü", cat: "sulu", ingredients: ["Mevsim sebzeleri", "Patlıcan", "Kabak", "Biber", "Patates", "Domates", "Salça"], allergens: [], desc: "Mevsim sebzelerinin renkli ve sağlıklı buluşması.", story: "Mevsimin tüm sebzelerini bir araya getiren türlü; renkli, sağlıklı ve bereketli bir tencere yemeğidir. Etli ya da zeytinyağlı, her hâliyle sofranın gözdesi.", recipe: { sure: "75 dk", kisi: "5 kişilik", adimlar: ["Sebzeleri iri doğrayın.", "Soğan ve salçayı kavurun.", "Sebzeleri katmanlayın.", "Su gezdirin.", "Sebzeler yumuşayana dek pişirin."], ipucu: "Sebzeleri çok karıştırmamak dağılmalarını önler." } },

  /* ======================= PİLAVLAR ======================= */
  { id: "bulgur-pilavi", name: "Bulgur Pilavı", cat: "pilav", ingredients: ["Bulgur", "Soğan", "Biber", "Salça", "Tereyağı/Yağ"], allergens: ["gluten", "sut"], desc: "Tane tane, salçalı, doyurucu bulgur pilavı.", story: "Anadolu'nun bereket tanesi bulgur, soğan ve biberle kavrulup demlendiğinde tane tane, doyurucu bir pilava dönüşür.", recipe: { sure: "35 dk", kisi: "4 kişilik", adimlar: ["Soğan ve biberi yağda kavurun.", "Salçayı ekleyin.", "Bulguru katıp çevirin.", "Sıcak su ilave edin.", "Suyunu çekince demlendirin."], ipucu: "Demlenirken kapağa bez sarmak pilavı tane tane yapar." } },
  { id: "pirinc-pilavi", name: "Pirinç Pilavı", cat: "pilav", ingredients: ["Pirinç", "Tereyağı", "Şehriye", "Tuz", "Su"], allergens: ["gluten", "sut"], desc: "Tereyağlı, şehriyeli klasik pirinç pilavı.", story: "Sofraların incisi pirinç pilavı; tereyağında kavrulan şehriye ve doğru demleme ile tane tane, parlak ve nefis olur.", recipe: { sure: "30 dk", kisi: "4 kişilik", adimlar: ["Pirinci yıkayıp bekletin.", "Tereyağında şehriyeyi kavurun.", "Pirinci ekleyip çevirin.", "Sıcak su ve tuz katın.", "Suyunu çekince demlendirin."], ipucu: "Pirinci ılık tuzlu suda bekletmek pilavı tane tane yapar." } },
  { id: "sehriye-pilavi", name: "Şehriye Pilavı", cat: "pilav", ingredients: ["Arpa şehriye", "Tereyağı", "Salça", "Tuz", "Su"], allergens: ["gluten", "sut"], desc: "Yağda kavrulmuş, altın renkli arpa şehriye.", story: "Altın renginde kavrulan arpa şehriyenin demlenmesiyle hazırlanan pratik, çocukların bayıldığı bir pilav.", recipe: { sure: "25 dk", kisi: "4 kişilik", adimlar: ["Tereyağında şehriyeyi kavurun.", "İsteğe göre salça ekleyin.", "Sıcak su ve tuz katın.", "Suyunu çekene dek pişirin.", "Demlendirip servis edin."], ipucu: "Şehriyeyi altın rengine kadar kavurmak lezzetin sırrıdır." } },
  { id: "meyhane-pilavi", name: "Meyhane Pilavı", cat: "pilav", ingredients: ["Pirinç", "Nohut", "Soğan", "Baharat", "Tereyağı"], allergens: ["sut"], desc: "Nohutlu, baharatlı, iddialı bir pilav.", story: "Adının aksine sofranın en gösterişli pilavlarından; nohut ve baharatlarla zenginleşen, et yemeklerinin yanında parlayan bir lezzet.", recipe: { sure: "40 dk", kisi: "4 kişilik", adimlar: ["Nohutu haşlayın.", "Soğanı tereyağında kavurun.", "Pirinci ekleyip çevirin.", "Nohut, baharat ve su katın.", "Demlendirip servis edin."], ipucu: "Bol soğanlı kavurma pilava karakterini verir." } },

  /* ======================= IZGARA & FIRIN ======================= */
  { id: "izgara-kofte", name: "Izgara Köfte", cat: "izgara", ingredients: ["Kıyma", "Soğan", "Sarımsak", "Ekmek içi", "Baharat"], allergens: ["gluten"], desc: "Közde pişen, baharatlı, sulu ızgara köfte.", story: "Baharatlarla yoğrulup dinlendirilen köfteler, ızgarada közlenerek dışı hafif çıtır, içi sulu kalacak şekilde pişirilir.", recipe: { sure: "40 dk", kisi: "4 kişilik", adimlar: ["Kıyma, soğan, sarımsak ve baharatı yoğurun.", "Köfte harcını dinlendirin.", "Şekil verin.", "Kızgın ızgarada her iki yüzü pişirin.", "Soğanlı salata ile servis edin."], ipucu: "Harcı buzdolabında dinlendirmek köftenin lezzetini artırır." } },
  { id: "firinda-tavuk", name: "Fırında Tavuk", cat: "izgara", ingredients: ["Tavuk", "Patates", "Tereyağı", "Sarımsak", "Baharat"], allergens: ["sut"], desc: "Patatesiyle fırında kızarmış baharatlı tavuk.", story: "Baharatlarla marine edilen tavuk, patatesleriyle birlikte fırında altın rengini alana dek pişer; dışı çıtır, içi yumuşacık.", recipe: { sure: "80 dk", kisi: "4 kişilik", adimlar: ["Tavuğu baharatlarla marine edin.", "Patatesleri doğrayın.", "Tepside dizin.", "Tereyağı ve sarımsak gezdirin.", "Fırında kızarana dek pişirin."], ipucu: "Marine süresini uzatmak baharatın ete işlemesini sağlar." } },
  { id: "firinda-kofte", name: "Fırında Köfte", cat: "izgara", ingredients: ["Kıyma", "Patates", "Biber", "Domates", "Salça"], allergens: ["gluten"], desc: "Patates ve sebzeleriyle fırınlanan köfte.", story: "Köfte ve sebzelerin tepside buluşup salçalı suyla fırınlanmasıyla hazırlanan, tek tabakta doyuran pratik bir lezzet.", recipe: { sure: "70 dk", kisi: "4 kişilik", adimlar: ["Köfte harcını yoğurun.", "Köfteleri şekillendirin.", "Patates, biber, domatesle tepside dizin.", "Salçalı su gezdirin.", "Fırında pişirin."], ipucu: "Köfteleri önceden hafif mühürlemek dağılmalarını önler." } },
  { id: "firinda-pirzola", name: "Fırında Pirzola", cat: "izgara", ingredients: ["Kuzu pirzola", "Kekik", "Sarımsak", "Karabiber", "Tuz"], allergens: [], desc: "Kekikli, sarımsaklı; fırında mühürlenmiş pirzola.", story: "Kekik ve sarımsakla marine edilen pirzolalar fırında mühürlenir; dışı kızarmış, içi pembe ve sulu kalır.", recipe: { sure: "50 dk", kisi: "3-4 kişilik", adimlar: ["Pirzolaları baharatlarla marine edin.", "Yüksek ısıda mühürleyin.", "Fırına alın.", "İstenen pişme derecesine getirin.", "Birkaç dakika dinlendirip servis edin."], ipucu: "Pişirdikten sonra dinlendirmek etin suyunu korur." } },

  /* ======================= GÖZLEMELER ======================= */
  { id: "ispanakli-gozleme", name: "Ispanaklı Gözleme", cat: "gozleme", ingredients: ["El açması hamur", "Ispanak", "Soğan", "Baharat"], allergens: ["gluten"], desc: "İncecik hamurda ıspanaklı, sağlıklı gözleme.", story: "Saç üzerinde incecik açılan hamurun ıspanaklı harçla buluşması; hem sağlıklı hem geleneksel bir lezzet.", recipe: { sure: "40 dk", kisi: "3-4 adet", adimlar: ["Hamuru yoğurup dinlendirin.", "Ispanağı soğanla kavurun.", "Hamuru ince açın.", "Harcı yerleştirip katlayın.", "Sacda her iki yüzü pişirin."], ipucu: "Hamuru ne kadar ince açarsanız gözleme o kadar nefis olur." } },
  { id: "domatesli-gozleme", name: "Domatesli Gözleme", cat: "gozleme", ingredients: ["El açması hamur", "Domates", "Biber", "Baharat"], allergens: ["gluten"], desc: "Sulu domates harçlı, yaz tadında gözleme.", story: "Olgun domateslerin biberle harmanlanıp ince hamura sarılmasıyla yapılan, yaz kokan bir gözleme.", recipe: { sure: "40 dk", kisi: "3-4 adet", adimlar: ["Hamuru hazırlayıp dinlendirin.", "Domates ve biberi doğrayıp baharatlayın.", "Hamuru ince açın.", "Harcı koyup katlayın.", "Sacda pişirin."], ipucu: "Domatesin suyunu hafif süzmek hamurun ıslanmasını önler." } },
  { id: "kasarli-gozleme", name: "Kaşarlı Gözleme", cat: "gozleme", ingredients: ["El açması hamur", "Kaşar peyniri"], allergens: ["gluten", "sut"], desc: "Bol kaşarlı, çekilen incecik gözleme.", story: "İçi bol kaşarla dolan gözleme, sacda kızarınca peyniriyle uzayan keyifli bir lezzet sunar.", recipe: { sure: "35 dk", kisi: "3-4 adet", adimlar: ["Hamuru dinlendirin.", "İnce açın.", "Bol rendelenmiş kaşar serpin.", "Katlayıp sacda pişirin.", "Sıcak servis edin."], ipucu: "Kaşarı pişme anında eklemek uzamasını sağlar." } },
  { id: "kasarli-yumurtali-gozleme", name: "Kaşarlı Yumurtalı Gözleme", cat: "gozleme", ingredients: ["El açması hamur", "Kaşar peyniri", "Yumurta"], allergens: ["gluten", "sut", "yumurta"], desc: "Kaşar ve yumurtayla zenginleşen doyurucu gözleme.", story: "Kaşarın yanına yumurtanın da eklenmesiyle daha doyurucu hale gelen, kahvaltıların gözdesi bir gözleme.", recipe: { sure: "35 dk", kisi: "3-4 adet", adimlar: ["Hamuru açın.", "Kaşar ve kırılmış yumurtayı yerleştirin.", "Hafif baharatlayın.", "Katlayın.", "Sacda pişirin."], ipucu: "Yumurtayı dağıtmadan eklemek pişme dengesini korur." } },
  { id: "patatesli-gozleme", name: "Patatesli Gözleme", cat: "gozleme", ingredients: ["El açması hamur", "Patates", "Soğan", "Baharat"], allergens: ["gluten"], desc: "Baharatlı patates püresiyle yumuşacık gözleme.", story: "Haşlanıp ezilen patatesin soğan ve baharatla harmanlanıp ince hamura sarılmasıyla yapılan, herkesin sevdiği bir gözleme.", recipe: { sure: "45 dk", kisi: "3-4 adet", adimlar: ["Patatesi haşlayıp ezin.", "Soğan ve baharatla karıştırın.", "Hamuru açın.", "Harcı koyup katlayın.", "Sacda pişirin."], ipucu: "Patatesi iyice ezmek harcın pürüzsüz olmasını sağlar." } },

  /* ======================= TOSTLAR ======================= */
  { id: "kasarli-tost", name: "Kaşarlı Tost", cat: "tost", ingredients: ["Tost ekmeği", "Kaşar peyniri", "Tereyağı"], allergens: ["gluten", "sut"], desc: "Çıtır ekmek, bol eriyen kaşar.", story: "Klasik kaşarlı tost; çıtır kızaran ekmeğin arasında eriyen bol kaşarıyla her zaman iyi gelen bir ara öğün.", recipe: { sure: "10 dk", kisi: "1 adet", adimlar: ["Ekmeğin arasına bol kaşar koyun.", "Dışını tereyağıyla yağlayın.", "Tost makinesinde kızartın.", "Kaşar eriyince çıkarın.", "Sıcak servis edin."], ipucu: "Düşük ısıda kızartmak kaşarın iyice erimesini sağlar." } },
  { id: "karisik-tost", name: "Karışık Tost", cat: "tost", ingredients: ["Tost ekmeği", "Kaşar peyniri", "Sucuk", "Domates", "Biber"], allergens: ["gluten", "sut"], desc: "Sucuk, kaşar ve sebzeyle dolu dolu tost.", story: "Sucuk, kaşar ve sebzelerin buluştuğu karışık tost; tek başına bir öğünü karşılayacak kadar doyurucudur.", recipe: { sure: "12 dk", kisi: "1 adet", adimlar: ["Ekmeğin arasına kaşar, sucuk ve sebzeleri dizin.", "Dışını yağlayın.", "Tost makinesinde kızartın.", "İçi ısınıp kaşar eriyince çıkarın.", "Servis edin."], ipucu: "Sucuğu ince dilimlemek dengeli pişme sağlar." } },
  { id: "sucuklu-tost", name: "Sucuklu Tost", cat: "tost", ingredients: ["Tost ekmeği", "Sucuk", "Kaşar peyniri"], allergens: ["gluten", "sut"], desc: "Baharatlı sucuk ve kaşarın buluşması.", story: "Baharatlı sucuğun kaşarla buluştuğu doyurucu tost; sucuk severlerin vazgeçilmezi.", recipe: { sure: "10 dk", kisi: "1 adet", adimlar: ["Sucukları dizin.", "Üzerine kaşar ekleyin.", "Ekmeği kapatıp yağlayın.", "Tostta kızartın.", "Sıcak servis edin."], ipucu: "Sucuğu önce hafif kızartmak yağını dengeler." } },

  /* ======================= TATLILAR ======================= */
  { id: "sutlac", name: "Sütlaç", cat: "tatli", ingredients: ["Süt", "Pirinç", "Şeker", "Pirinç unu", "Vanilya"], allergens: ["sut"], desc: "Fırında üzeri kızarmış, kremamsı sütlaç.", story: "Sütün pirinçle uzun uzun pişmesinden doğan sütlaç, fırında üzeri kızartılınca hem görsel hem damak şöleni olur.", recipe: { sure: "70 dk", kisi: "6 kişilik", adimlar: ["Pirinci yumuşayana dek haşlayın.", "Sütü ekleyip kaynatın.", "Şeker ve pirinç ununu katın.", "Kâselere paylaştırın.", "Fırında üzerini kızartın."], ipucu: "Fırında üst ızgara modu güzel bir kızarma verir." } },
  { id: "helva", name: "Helva", cat: "tatli", ingredients: ["Un", "Tereyağı", "Şeker", "Süt/Su", "Çam fıstığı"], allergens: ["gluten", "sut", "kuruyemis"], desc: "Kavrulmuş unla yapılan klasik un helvası.", story: "Unun tereyağında sabırla kavrulup şerbetle buluşmasıyla yapılan un helvası; ikram kültürümüzün en sıcak simgelerinden.", recipe: { sure: "40 dk", kisi: "6 kişilik", adimlar: ["Tereyağında unu kavurun.", "İsteğe göre çam fıstığı ekleyin.", "Şekerli süt/suyu hazırlayın.", "Sıcak şerbeti une ekleyin.", "Kıvam alınca dinlendirip servis edin."], ipucu: "Unu kısık ateşte sabırla kavurmak helvanın rengini belirler." } },
  { id: "irmik-helvasi", name: "İrmik (İrmik Helvası)", cat: "tatli", ingredients: ["İrmik", "Tereyağı", "Şeker", "Süt", "Çam fıstığı"], allergens: ["gluten", "sut", "kuruyemis"], desc: "Tane tane, fıstıklı sıcak irmik helvası.", story: "İrmiğin tereyağında çam fıstığıyla kavrulup şerbetle buluşmasıyla hazırlanan, tane tane ve hafif tatlı.", recipe: { sure: "35 dk", kisi: "6 kişilik", adimlar: ["Tereyağında çam fıstığını kavurun.", "İrmiği ekleyip kavurun.", "Şekerli sütü ısıtın.", "Sıcak şerbeti irmiğe ekleyin.", "Demlendirip servis edin."], ipucu: "Demlenme aşaması helvanın tane tane olmasını sağlar." } },
  { id: "kemalpasa-tatlisi", name: "Kemalpaşa Tatlısı", cat: "tatli", ingredients: ["Un", "İrmik", "Yumurta", "Peynir", "Şeker (şerbet)"], allergens: ["gluten", "yumurta", "sut"], desc: "Şerbetli, lokum kıvamında peynir tatlısı.", story: "Peynirli hamurdan yapılan minik topların şerbette ıslanmasıyla hazırlanan, ağızda dağılan ünlü bir şerbet tatlısı.", recipe: { sure: "60 dk", kisi: "6 kişilik", adimlar: ["Peynirli hamuru yoğurun.", "Minik toplar şekillendirin.", "Fırında pişirin.", "Şerbeti kaynatın.", "Sıcak tatlıyı şerbette bekletin."], ipucu: "Sıcak tatlıya soğuk şerbet dökmek emilimi artırır." } },

  /* ======================= İÇECEKLER ======================= */
  { id: "kola", name: "Kola", cat: "icecek", ingredients: ["Soğuk kola"], allergens: [], desc: "Buz gibi servis edilen klasik kola.", story: "Yemeğin yanında ferahlatan, buz gibi servis edilen klasik gazlı içecek." },
  { id: "fanta", name: "Fanta", cat: "icecek", ingredients: ["Soğuk meyveli gazoz"], allergens: [], desc: "Portakal aromalı, ferahlatıcı gazoz.", story: "Portakal aromasıyla ferahlatan, özellikle çocukların sevdiği gazlı içecek." },
  { id: "ayran", name: "Ayran", cat: "icecek", ingredients: ["Yoğurt", "Su", "Tuz"], allergens: ["sut"], desc: "Köpüklü, ev yapımı geleneksel ayran.", story: "Yoğurttan çırpılan köpüklü ayran; yemeklerin en doğal ve geleneksel eşlikçisi." },
  { id: "su", name: "Su", cat: "icecek", ingredients: ["İçme suyu"], allergens: [], desc: "Soğuk içme suyu.", story: "Sofranın vazgeçilmezi, buz gibi içme suyu." },
  { id: "maden-suyu", name: "Maden Suyu", cat: "icecek", ingredients: ["Doğal maden suyu"], allergens: [], desc: "Doğal mineralli, gazlı maden suyu.", story: "Doğal mineralleriyle sindirime yardımcı, gazlı maden suyu." }
];

/* --- Yemek görselleri (Türk mutfağı temalı, aydınlık) ---
   Tek yerden güncellenir. Gerçek fotoğraflarınız olunca buradaki
   bağlantıları kendi görsellerinizle değiştirmeniz yeterli.            */
/* GERÇEK YEMEK FOTOĞRAFLARI BURAYA EKLENİR
   Stok görseller her ev yemeğini doğru göstermediği için, yemekler şu an
   şık marka kartlarıyla (renk + ikon) gösteriliyor. Bir yemeğin GERÇEK
   fotoğrafı olduğunda, ilgili satıra fotoğraf bağlantısını yazmanız yeterli;
   o yemekte otomatik olarak görünür. Örnek:
     "tas-kebap": "https://.../tas-kebap.jpg",
   Boş bırakılan ("") yemekler marka kartında kalır.                        */
const DISH_IMAGES = {
  /* ======================  ÇORBALAR  ====================== */
  /* Gerçek fotoğraf varsa: dish-id ile aynı adlı .jpg dosyasını assets/img/dishes/ içine koyun */
  "arabasi-corbasi":   "assets/img/dishes/arabasi-corbasi.jpg",   /* 800×600 px */
  "mercimek-corbasi":  "assets/img/dishes/mercimek-corbasi.jpg",  /* 800×600 px */
  "yayla-corbasi":     "assets/img/dishes/yayla-corbasi.jpg",     /* → yayla-corbasi.jpg bekleniyor */
  "koylum-corbasi":    "assets/img/dishes/koylum-corbasi.jpg",    /* → koylum-corbasi.jpg bekleniyor */
  "sehriye-corbasi":   "assets/img/dishes/sehriye-corbasi.jpg",   /* → sehriye-corbasi.jpg bekleniyor */
  "ezogelin-corbasi":  "assets/img/dishes/ezogelin-corbasi.jpg",  /* → ezogelin-corbasi.jpg bekleniyor */
  "sebzeli-corba":     "assets/img/dishes/sebzeli-corba.jpg",     /* → sebzeli-corba.jpg bekleniyor */
  "anadolu-corbasi":   "assets/img/dishes/anadolu-corbasi.jpg",   /* → anadolu-corbasi.jpg bekleniyor */
  /* =====================  SULU YEMEKLER  =================== */
  "tas-kebap":         "assets/img/dishes/tas-kebap.jpg",         /* → tas-kebap.jpg bekleniyor */
  "sulu-kofte":        "assets/img/dishes/sulu-kofte.jpg",        /* → sulu-kofte.jpg bekleniyor */
  "karniyarik":        "assets/img/dishes/karniyarik.jpg",        /* → karniyarik.jpg bekleniyor */
  "guvec":             "assets/img/dishes/guvec.jpg",             /* → guvec.jpg bekleniyor */
  "patlican-oturtma":  "assets/img/dishes/patlican-oturtma.jpg",  /* → patlican-oturtma.jpg bekleniyor */
  "mantar-sote":       "assets/img/dishes/mantar-sote.jpg",       /* → mantar-sote.jpg bekleniyor */
  "tavuk-sote":        "assets/img/dishes/tavuk-sote.jpg",        /* → tavuk-sote.jpg bekleniyor */
  "et-haslama":        "assets/img/dishes/et-haslama.jpg",        /* → et-haslama.jpg bekleniyor */
  "et-kavurma":        "assets/img/dishes/et-kavurma.jpg",        /* → et-kavurma.jpg bekleniyor */
  "manti":             "assets/img/dishes/manti.jpg",             /* → manti.jpg bekleniyor */
  "tavuk-haslama":     "assets/img/dishes/tavuk-haslama.jpg",     /* → tavuk-haslama.jpg bekleniyor */
  "etli-kuru-fasulye": "assets/img/dishes/etli-kuru-fasulye.jpg", /* → etli-kuru-fasulye.jpg bekleniyor */
  "etli-nohut":        "assets/img/dishes/etli-nohut.jpg",        /* → etli-nohut.jpg bekleniyor */
  "etli-patates":      "assets/img/dishes/etli-patates.jpg",      /* → etli-patates.jpg bekleniyor */
  "turlu":             "assets/img/dishes/turlu.jpg",             /* → turlu.jpg bekleniyor */
  /* ======================  PİLAVLAR  ====================== */
  "bulgur-pilavi":     "assets/img/dishes/bulgur-pilavi.jpg",     /* → bulgur-pilavi.jpg bekleniyor */
  "pirinc-pilavi":     "assets/img/dishes/pirinc-pilavi.jpg",     /* → pirinc-pilavi.jpg bekleniyor */
  "sehriye-pilavi":    "assets/img/dishes/sehriye-pilavi.jpg",    /* → sehriye-pilavi.jpg bekleniyor */
  "meyhane-pilavi":    "assets/img/dishes/meyhane-pilavi.jpg",    /* → meyhane-pilavi.jpg bekleniyor */
  /* =================  IZGARA & FIRIN  ==================== */
  "izgara-kofte":      "assets/img/dishes/izgara-kofte.jpg",      /* → izgara-kofte.jpg bekleniyor */
  "firinda-tavuk":     "assets/img/dishes/firinda-tavuk.jpg",     /* → firinda-tavuk.jpg bekleniyor */
  "firinda-kofte":     "assets/img/dishes/firinda-kofte.jpg",     /* → firinda-kofte.jpg bekleniyor */
  "firinda-pirzola":   "assets/img/dishes/firinda-pirzola.jpg",   /* → firinda-pirzola.jpg bekleniyor */
  /* ===================  GÖZLEMELER  ====================== */
  "ispanakli-gozleme":        "assets/img/dishes/ispanakli-gozleme.jpg",
  "domatesli-gozleme":        "assets/img/dishes/domatesli-gozleme.jpg",
  "kasarli-gozleme":          "assets/img/dishes/kasarli-gozleme.jpg",
  "kasarli-yumurtali-gozleme":"assets/img/dishes/kasarli-yumurtali-gozleme.jpg",
  "patatesli-gozleme":        "assets/img/dishes/patatesli-gozleme.jpg",
  /* ======================  TOSTLAR  ====================== */
  "kasarli-tost":      "assets/img/dishes/kasarli-tost.jpg",
  "karisik-tost":      "assets/img/dishes/karisik-tost.jpg",
  "sucuklu-tost":      "assets/img/dishes/sucuklu-tost.jpg",
  /* ======================  TATLILAR  ===================== */
  "sutlac":            "assets/img/dishes/sutlac.jpg",
  "helva":             "assets/img/dishes/helva.jpg",
  "irmik-helvasi":     "assets/img/dishes/irmik-helvasi.jpg",
  "kemalpasa-tatlisi": "assets/img/dishes/kemalpasa-tatlisi.jpg",
  /* ======================  İÇECEKLER  ==================== */
  "kola":              "assets/img/dishes/kola.jpg",
  "fanta":             "assets/img/dishes/fanta.jpg",
  "ayran":             "assets/img/dishes/ayran.jpg",
  "su":                "assets/img/dishes/su.jpg",
  "maden-suyu":        "assets/img/dishes/maden-suyu.jpg"
};
DISHES.forEach(d => { if (DISH_IMAGES[d.id]) d.img = DISH_IMAGES[d.id]; });

/* --- Yardımcılar --- */
function dishesByCat(catId){ return DISHES.filter(d => d.cat === catId); }
function getDish(id){ return DISHES.find(d => d.id === id); }
function dishesWithRecipe(){ return DISHES.filter(d => d.recipe); }

if (typeof window !== "undefined") {
  window.HE = { ALLERGENS, CATEGORIES, DISHES, dishesByCat, getDish, dishesWithRecipe };
}
