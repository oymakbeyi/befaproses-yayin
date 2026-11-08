import{G as g,s as v,b,a as s,t as z}from"./araclar.RU7I-EHg.js";const u="__DEGER__";function y(a){for(const t of document.querySelectorAll("[data-cagri-dinamik] a[data-sablon]")){const e=t.dataset.sablon;t.href=a?e.replaceAll(u,encodeURIComponent(a)):t.dataset.statik??e.replaceAll(u,"")}}const n=(a,t)=>`Merhaba,

${a}

${t.map(e=>e.endsWith("?")||e.includes(u)?e:`${e}:`).join(`
`)}

Firma:
İl:
Telefon:
`,d=["Akışkan","Hat çapı","Basınç","Ölçüm aralığı"];n("Uygulamamız için uygun ölçüm cihazını seçmek istiyoruz.",["Sektör ve uygulama",...d]);n("Cihazlarımız için sahada kalibrasyon ayarı talep ediyoruz.",["Cihaz tipi","Marka / model","Adet","Kullanıldığı uygulama","Cihazın bulunduğu il"]);n("Uygulamamız için cihaz seçimi konusunda destek istiyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...d]);n("Sahada destek talep ediyoruz.",["İhtiyaç (montaj, devreye alma, servis, bakım, yedek parça, eğitim)","Cihaz tipi ve modeli","Kısa açıklama","Tesisin bulunduğu il"]);n("Uygulamamız için uygun ölçüm cihazını seçmek istiyoruz.",["Ölçülecek büyüklük (akış, seviye, basınç, sıcaklık, analiz)",...d]);for(const a of document.querySelectorAll("[data-arac-cevirici]")){const t=g[a.dataset.grup],e=a.querySelector("[data-deger]"),c=a.querySelector("[data-birim]"),m=a.querySelector("[data-durum]"),k=new Map([...a.querySelectorAll("[data-sonuc]")].map(i=>[i.dataset.sonuc,i.querySelector("[data-sonuc-deger]")])),o=()=>{const i=v(e.value),l=b(t,c.value);if(!Number.isFinite(i)){m.textContent="Sayı okunamadı. Örnek: 2,5 ya da 1500",e.setAttribute("aria-invalid","true");for(const r of k.values())r.textContent="";y("");return}e.removeAttribute("aria-invalid"),m.textContent=`${s(i,10)} ${l.simge} şu değerlere eşittir:`,y(`${s(i,10)} ${l.simge}`);for(const r of z(t,i,l.id))k.get(r.id).textContent=s(r.deger)};e.addEventListener("input",o),c.addEventListener("change",o),o(),addEventListener("pageshow",o)}
