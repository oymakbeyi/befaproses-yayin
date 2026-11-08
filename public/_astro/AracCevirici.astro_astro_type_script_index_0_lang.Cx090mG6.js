import{G as g,s as v,b,a as u,t as z}from"./araclar.RU7I-EHg.js";const d="__DEGER__";function y(a){for(const t of document.querySelectorAll("[data-cagri-dinamik] a[data-sablon]")){const e=t.dataset.sablon;t.href=a?e.replaceAll(d,encodeURIComponent(a)):t.dataset.statik??e.replaceAll(d,"")}}const n=(a,t)=>`Merhaba,

${a}

${t.map(e=>e.endsWith("?")||e.includes(d)?e:`${e}:`).join(`
`)}

Firma:
İl:
Telefon:
`,r=["Akışkan","Hat çapı","Basınç","Ölçüm aralığı"];n("Uygulamamız için uygun ölçüm cihazını seçmek istiyoruz.",["Sektör ve uygulama",...r]);n("Cihazlarımız için sahada kalibrasyon ayarı talep ediyoruz.",["Cihaz tipi","Marka / model","Adet","Kullanıldığı uygulama","Cihazın bulunduğu il"]);n("Uygulamamız için cihaz seçimi konusunda destek istiyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...r]);n("Sahada destek talep ediyoruz.",["İhtiyaç (montaj, devreye alma, servis, bakım, yedek parça, eğitim)","Cihaz tipi ve modeli","Kısa açıklama","Tesisin bulunduğu il"]);n("Uygulamamız için teklif rica ediyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...r]);n("Uygulamamız için uygun ölçüm cihazını seçmek istiyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...r]);for(const a of document.querySelectorAll("[data-arac-cevirici]")){const t=g[a.dataset.grup],e=a.querySelector("[data-deger]"),c=a.querySelector("[data-birim]"),m=a.querySelector("[data-durum]"),k=new Map([...a.querySelectorAll("[data-sonuc]")].map(i=>[i.dataset.sonuc,i.querySelector("[data-sonuc-deger]")])),l=()=>{const i=v(e.value),s=b(t,c.value);if(!Number.isFinite(i)){m.textContent="Sayı okunamadı. Örnek: 2,5 ya da 1500",e.setAttribute("aria-invalid","true");for(const o of k.values())o.textContent="";y("");return}e.removeAttribute("aria-invalid"),m.textContent=`${u(i,10)} ${s.simge} şu değerlere eşittir:`,y(`${u(i,10)} ${s.simge}`);for(const o of z(t,i,s.id))k.get(o.id).textContent=u(o.deger)};e.addEventListener("input",l),c.addEventListener("change",l),l(),addEventListener("pageshow",l)}
