const cover = (cover: string) =>  `/assets/covers/${cover}`

export interface MyData {
    id: number;
    name: string;
    created_at: string;

    author?: string;
    category_id?: number;
    cover?: string;
    description?: string;
    price?: number;
    sales?: number;
    slug?: string;

}

type Category = Pick<MyData, "id" | "name" | "created_at">
type Product = Omit<MyData, "id" | "created_at"> & {id: number}

export const category: Category[] = [
    {
        id: 1,
        name: "Best Sellers",
        created_at: "2023-01-09T14:37:19.138198"
    },
    {
        id: 2,
        name: "Classics",
        created_at: "2023-01-09T17:18:06.806377"
    },
    {
        id: 3,
        name: "Children",
        created_at: "2023-01-09T17:22:33.650278"
    },
    {
        id: 4,
        name: "Philosophy",
        created_at: "2023-01-09T17:26:18.505812"
    }
]
// Details de kullanılacak data
export const product: Product[] = [
    // Best Sellers : 6
    {
        author: "Frank Herbert",
        category_id: 1,
        cover: cover("dune.png"),
        description: "Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or \"spice\", a drug that...",
        id: 1,
        name: "dune",
        price: 87.75,
        sales: 5,
        slug: "dune"
    },
    {
        author: "George Orwell",
        category_id: 1,
        cover: cover("1984.png"),
        description: "Parti’nin dünya görüşü, onu hiç anlayamayan insanlara çok daha kolay dayatılıyordu. (...) Her şeyi yutuyorlar ve hiçbir zarar görmüyorlardı çünkü tıpkı bir mısır tanesinin bir kuşun bedeninden sindirilmeden geçip gitmesi gibi, yuttuklarından geriye bir şey kalmıyordu.",
        id: 2,
        name: "1984",
        price: 35.75,
        sales: 5,
        slug: "1984"
    },
    {
        author: "Hector Garcia",
        category_id: 1,
        cover: cover("ikigai.png"),
        description: "Uluslararası çok satan bir rehber olan Ikigai’yle her gününüz bir anlam kazansın. Japonlar herkesin bir ikigaisi olduğuna inanır, her sabah yataktan kalkmaları için bir sebepleri vardır. İlham verici ve rahatlatıcı bu kitap sizlere kendi ikigainizi keşfetmeniz için gerekli tüm bilgileri veriyor. Aceleci davranmamanızı, hayat gayenizi keşfetmenizi, ilişkilerinizi canlandırmanızı ve kendinizi tutkularınıza adamanızı sağlıyor.",
        id: 3,
        name: "İkigai",
        price: 36,
        sales: 10,
        slug: "ikigai"
    },
    {
        author: "Jerome David Salinger",
        category_id: 1,
        cover: cover("cavdar-tarlasinda-cocuklar.png"),
        description: "1951 yılında basılan kitap, Salinger’in ilk ve tek romanıdır. Çıktığı andan bu yana ilgi gören roman, ergenlik dönemindeki bir çocuğun dünyayı algılayış biçimini bize anlatırken, yetişkinlerin düzenine karşı olan isyanını da başarılı bir dil ile aktarıyor. Samimi dili ve karakterin içinde bulunduğu duyguların okuyucuya olan yansıması, onu kısa sürede dünya edebiyatı listelerinde ilk sıralara taşıyor.",
        id: 4,
        name: "Çavdar Tarlasında Çocuklar",
        price: 35.75,
        sales: 10,
        slug: "cavdar-tarlasinda-cocuklar"
    },
    {
        author: "Sabahattin Ali",
        category_id: 1,
        cover: cover("kurk-mantolu-madonna.png"),
        description: "İlk baskısı 1943 yılında yapılan Kürk Mantolu Madonna, günümüzde halen en çok ilgi gören ve satılan kitaplar arasında bulunuyor. Basıldığı günden bu yana 1 milyondan fazla satan kitap üzerine, birçok araştırma ve inceleme yapılmış, hakkında tezler yazılmış, fakat bu başarısının sırrı tam olarak çözülememiştir. Onu bu kadar özel kılan ve hala konuşuluyor olmasındaki en büyük pay, tabii ki Sabahattin Ali’nin usta kalemi ve başarılı ruh tahlilleridir.",
        id: 5,
        name: "Kürk Mantolu Madonna",
        price: 55.9,
        sales: 10,
        slug: "kurk-mantolu-madonna"
    },
    {
        author: "Oğuz Atay",
        category_id: 1,
        cover: cover("tutunamayanlar.png"),
        description: "Ülkemizin en değerli yazarlarından biri olan Oğuz Atay’ın yazıldığı dönemde büyük tartışma konusu olmuş eseri Tutunamayanlar, 1972 yılında yayımlanmıştır. Eser, bilinç-akışı tekniğiyle döneme damgasını vurarak Türk Edebiyatı’nda yeni bir çağı başlatmıştır. Pek çok eleştirmen, Tutunamayanlar’ı Türk Dili’nde yazılmış en iyi eser olarak değerlendirmektedir.  Tutunamayanlar Oğuz Atay ismiyle özdeşleşmiş bir roman olarak, büyük yazarımızın hayatından izler taşımasıyla da kısmen otobiyografik bir eser olarak da değerlendirilebilir. Roman, son derece üst düzey diliyle çevirisi en zor romanlar arasında yer alır. Tutunamayanlar, sadece birkaç dile çevrilebilmiştir. “Het leven in stukken” adı altında Flemenkçeye (Hollanda Dili) çevrilen eser, eserin Hollandalı çevirmenine ödül kazandırmıştır.",
        id: 6,
        name: "Tutunamayanlar",
        price: 65.9,
        sales: 8,
        slug: "tutunamayanlar"
    },
    // Classics : 4
    {
        author: "William Shakespeare",
        category_id: 2,
        cover: cover("romeo-ve-juliet.png"),
        description: "Oyunları ve şiirlerinde insanlık durumlarını dile getiriş gücüyle yaklaşık 400 yıldır bütün dünya okur ve seyircilerini etkilemeyi sürdüren efsanevi yazar, Romeo ve Juliet’de birbirinden farklı pek çok toplumda benzerleriyle karşılaşılan trajik bir ilişkiyi, düşman ailelerin çocukları arasında doğan aşkı ele alır. Romeo ile Juliet’in umutsuz aşkını romantik örgüsünün yarı karanlık örtüsüyle sarmalayan eser, buna rağmen insan ilişkilerini gerçekçi bir anlayışla gözler önüne serer.",
        id: 7,
        name: "Romeo ve Juliet ",
        price: 65.9,
        sales: 8,
        slug: "romeo-ve-juliet"
    },
    {
        author: "Stefan Zweig",
        category_id: 2,
        cover: cover("olaganustu-bir-gece.png"),
        description: "Olağanüstü Bir Gece, seçkin bir burjuva olarak rahat ve tasasız varoluşunu sürdürürken giderek duyarsızlaşan bir adamın hayatındaki dönüştürücü deneyimin hikâyesidir. Sıradan bir pazar gününü at yarışlarında geçirirken, belki de ilk kez burjuva ahlakından saparak “suç” işler. Böylece yeniden “hissetmeye” başladığını, kötücül ve ateşli hazları olan gerçek bir insan olduğunu fark eder. İçindeki haz dolu esrime, aynı günün akşamında onu gece âleminin son atıklarının arasına, “hayatın en dibindeki lağımlara” sürükleyecek, varış noktası ise ruhani bir uyanış olacaktır",
        id: 8,
        name: "Olağanüstü Bir Gece",
        price: 40.5,
        sales: 11,
        slug: "olaganustu-bir-gece"
    },
    {
        author: "Goethe",
        category_id: 2,
        cover: cover("genç-werther'in-acıları.png"),
        description: "Genç Werther’in Acıları kitabı, Johann Wolfgang von Goethe (1749-1832) tarafından 1774 yılında iki hafta içerisinde yazılmış, mektup roman türünde bir eserdir. Goethe, bu eseri henüz 25 yaşında iken kaleme almıştır. Genç Werther’in Acıları kitabının yayımlandığı dönemin Almanyası’nda pek çok intihar vakası ile karşılaşılmıştır. Bu intihar vakasına * Werther Sendromu* denmiş, çevrede mavi ceket ve sarı pantolon giyen okurlar ortaya çıkmıştır. Genç Werther’in Acıları kitabı 18. yüzyılın en popüler ve coşkulu eseri olmuştur.",
        id: 9,
        name: "Genç Werther'in Acıları",
        price: 36.00,
        sales: 5,
        slug: "genç-werther'in-acıları"
    },
    {
        author: "H. G. Wells",
        category_id: 2,
        cover: cover("zaman-makinesi.png"),
        description: "H. G. Wells, 1895 yılında yayımlanan bu romanında, bir bilim adamının ışınlanma deneyleri sırasında başına gelenleri anlatıyor. Işınlanma deneyleri sırasında başına gelenler, onu bir canavara dönüştürür. Roman, bilim kurgu edebiyatının önemli eserlerinden biri olarak kabul edilir ve Wells'in en tanınmış eserlerinden biridir.",
        id: 10,
        name: "Zaman Makinesi",
        price: 36.00,
        sales: 2,
        slug: "zaman-makinesi"
    },
    // Children : 4
    {
        author: "Varol Yaşaroğlu",
        category_id: 3,
        cover: cover("mor-bir-fil-gordum-sanki.png"),
        description: "Merhaba arkadaşlar ben Necati yaniii Fil Necati!  Bu kitapta neler mi var? Yemek, dürüm, börek, sarma…  Yok, gene karıştırdım, bunlar değildi.  Tanju sayesinde dinozor çağına zamanda yolculuk yaptık. Büyük büyük büyük babamla karşılaştım. Çok sevdim kendisini, çok duygulandım. Mirket’le yeni bir gezegen keşfettik. Derken Kadriye’nin canavara dönüşen saçıyla aklımız başımızdan gitti. Tam bitti derken denizden çıkan bir lahmacunun peşinde balıkların kasabasına esir düştük.  Eğlence, macera, heyecan ve tabii ki dürüm, lahmacun, börek, sarma ne ararsanız.  Yine muhtişim maceralar sizi bekliyor.  Ay yine acıktım. Kadriye bugün ne pişirdin?",
        id: 10,
        name: "Mor Bir Fil Gördüm Sanki!",
        price: 85.7,
        sales: 2,
        slug: "mor-bir-fil-gordum-sanki"
    },
    {
        author: "Christine Nöstlinger ",
        category_id: 3,
        cover: cover("alev-sacli-cocuk.png"),
        description: "Hiçbir şey göründüğü gibi değildir. Bazen bir kitap tüm yaşantımızı değiştirebilir.  Dünya çocuk ve gençlik edebiyatının çok ödüllü yazarlarından Christine Nöstlinger'in yazarlık kariyerini başlatan kitap, yıllar sonra Türkçe'de, Günışığı Kitaplığı'nda. Kâğıt Uçakla Gizli Gizli Macera'yla genç okurları büyüleyen Nöstlinger, masalsı öyküsüyle bu kez küçüklerin karşısında. Bu kitabında, kızıl saçları yüzünden farklı görünen bir çocuğun alay konusu olarak dışlanmasını ve akranlarıyla ilişkilerinde karşılaştığı zorlukları anlatan yazar, onun yaşamının bir kitap sayesinde nasıl umulmadık bir biçimde değiştiğini anlatıyor. Yazar Suzan Geridönmez'in Türkçe'ye kazandırdığı, sanatçı Huban Korman'ın özgün desenleriyle hayat bulan kitap, topluma, kurumlara ve yönetimlere eleştirel yaklaşırken; aile içi dayanışmayı ve nesiller arası iletişimi yüceltiyor.",
        id: 11,
        name: "Alev Saçlı Çocuk",
        price: 45.5,
        sales: 4,
        slug: "alev-sacli-cocuk"
    },
    {
        author: "Anıl Basılı",
        category_id: 3,
        cover: cover("melodi.png"),
        description: "Dans eden bir kaktüsün fırtınadan sakladığı çocuk…  Melodi’nin öğretmeni tüm sınıfa rengârenk saksı çiçekleri hediye ederken, ona bir kaktüs vermek zorunda kalır. Yani dikenli, çiçeği bile olmayan o garip bitkiyi… Bir kaktüsün nesi güzel olabilir ki?  Sonra bir gün... Fırtınalı bir gece...  Melodi hiç ummadığı bir anda kaktüsüyle yüzleşmek, onunla gerçek anlamda tanışmak durumunda kalır ve her şey değişir.  Melodi, görünenin ötesindeki güzellikleri görebilmemizi sağlayacak sımsıcak bir sevgi hikâyesi.  Biraz sevgi hepimize iyi gelecek!",
        id: 12,
        name: "Melodi",
        price: 25.9,
        sales: 6,
        slug: "melodi"
    },
    {
        author: "Feyza Şahin",
        category_id: 3,
        cover: cover("siber-kahramanlar.png"),
        description: "Ayşe ve Oğuz bilişim ödevlerini yaparken Dünya’nın kaderini etkileyecek bir siber savaşın içine girdiklerinden habersizdir. Bu savaş, dijital ortamda pelerinsiz kahramanlarımız polisler ve Kara Kapşon arasında gerçekleşiyor. Asla yılmayan Kara Kapşon’un planlarını çözecek olan düğümse yine onun için çalışan Turgut olacaktır. Yeteneklerini insanlığın faydasına kullanmayı tercih eden Turgut çocukları düşünmeye teşvik ederek onlara harikulade bir ders verirken pelerinsiz kahramanlarımız Dünya’nın kaderi için savaşmaya başladı bile!",
        id: 13,
        name: "Siber Kahramanlar",
        price: 36.00,
        sales: 5,
        slug: "siber-kahramanlar"
    },
    // Philosophy : 3
    {
        author: " Arthur Schopenhauer",
        category_id: 4,
        cover: cover("mutlu-olma-sanati.png"),
        description: "Mutlu olmak, mutlu yaşamak mümkün müdür?  Schopenhauer’in radikal kötümserliği, onun felsefesini mutluluk düşüncesiyle bağdaştırma girişimlerini daha doğmadan boğar. Schopenhauer’e göre yaratıkların en mutsuzu insandır ve her türlü oluşun kaynağı olan irade, dünyadaki bütün kötülüklerin çıkış noktasıdır. Dünya kötü bir yerdir ve kötülüğünün en belirleyici yönü, acı ve mutsuzluğun her yerde hazır ve nazır oluşudur.  Mutlu Olma Sanatı, iyimser dünya görüşüne karşı çıkan ve yaşadığımız dünyayı olası dünyaların en kötüsü sayan Schopenhauer’den umulmadık bir kılavuz. Adını felsefe tarihine kötümser olarak yazdıran filozofun bu küçük kitabı, mutluluğa ulaşma çabası olarak hayata dair pratik bir felsefeyi de olanaklı kılıyor.",
        id: 13,
        name: "Mutlu Olma Sanatı",
        price: 75.9,
        sales: 2,
        slug: "mutlu-olma-sanatı"
    },
    {
        author: "Bora Ercan",
        category_id: 4,
        cover: cover("meditasyonun-temelleri.png"),
        description: "Meditasyonun Temelleri Kısa Özet Meditasyon nedir? Bilimsel yöntemlerle incelenebilir mi? Kendine özgü teknikleri var mı?  Meditasyon hakkında tarihsel ve güncel bir inceleme sunan Meditasyonun Temelleri Hint, Çin ve Tibet gibi Doğu kaynaklarının yanında Batılı kaynaklardan da yararlanarak günümüz dünyasında meditasyonun kadim öğretilerdeki konumunu araştırıyor. Bu sebeple kimi zaman Anadolu ve Ortadoğu kültürlerinin unsurlarına kimi zamansa yeni bilimsel ve nörolojik bulgulara değiniyor.",
        id: 14,
        name: "Meditasyonun Temelleri",
        price: 25.9,
        sales: 5,
        slug: "meditasyonun-temelleri"
    },
    {
        author: "Aristoteles",
        category_id: 4,
        cover: cover("metafizik.png"),
        description: "Metafizik, felsefe tarihinin en büyük filozoflarından biri olan, hatta kimilerine göre tartışmasız en büyüğü olan Aristoteles’in en önemli, ve hem içeriği hem düzeni hem de edisyonları bakımından en çok tartışılmış metnidir. İlkeler, nedenler, varlık, varolan gibi felsefenin en temel meselelerini araştıran bu eser, klasik dönemden günümüze kadar, filozofların ve diğer araştırmacıların başvuru kaynakları arasında ilk sırada gelir.",
        id: 15,
        name: "Metafizik",
        price: 33.9,
        sales: 5,
        slug: "metafizik"
    }
]