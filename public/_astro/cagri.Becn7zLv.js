const s="__DEGER__";function o(l){for(const i of document.querySelectorAll("[data-cagri-dinamik] a[data-sablon]")){const a=i.dataset.sablon;i.href=l?a.replaceAll(s,encodeURIComponent(l)):i.dataset.statik??a.replaceAll(s,"")}}const e=(l,i)=>`Merhaba,

${l}

${i.map(a=>a.endsWith("?")||a.includes(s)?a:`${a}:`).join(`
`)}

Firma:
İl:
Telefon:
`,n=["Akışkan","Hat çapı","Basınç","Ölçüm aralığı"];e("Uygulamamız için uygun ölçüm cihazını seçmek istiyoruz.",["Sektör ve uygulama",...n]);e("Cihazlarımız için sahada kalibrasyon ayarı talep ediyoruz.",["Cihaz tipi","Marka / model","Adet","Kullanıldığı uygulama","Cihazın bulunduğu il"]);e("Uygulamamız için cihaz seçimi konusunda destek istiyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...n]);e("Sahada destek talep ediyoruz.",["İhtiyaç (montaj, devreye alma, servis, bakım, yedek parça, eğitim)","Cihaz tipi ve modeli","Kısa açıklama","Tesisin bulunduğu il"]);e("Uygulamamız için teklif rica ediyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...n]);e("Uygulamamız için uygun ölçüm cihazını seçmek istiyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...n]);export{s as D,o as c};
