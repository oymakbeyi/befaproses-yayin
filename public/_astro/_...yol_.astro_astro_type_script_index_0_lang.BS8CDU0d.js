import{D as $}from"./cagri.Becn7zLv.js";const E="__KONU__",a=document.querySelector("[data-uygulama-formu]");if(a){const r=[...a.querySelectorAll('input[name="grup"]')],v=[...a.querySelectorAll("[data-grup-alanlari]")],l=(e,t)=>{const n=a.querySelector(`[data-hata="${e}"]`);n&&(n.hidden=!t)},c=()=>r.find(e=>e.checked)??null,u=()=>{const e=c()?.value;for(const t of v)t.hidden=t.dataset.grupAlanlari!==e;e&&l("grup",!1)};r.forEach(e=>e.addEventListener("change",u));const d=new URLSearchParams(location.search),m=r.find(e=>e.value===d.get("grup"));m&&(m.checked=!0);const y=d.get("kaynak")??"",g=/^[a-z0-9-]{1,80}$/.test(y)?y:"";u();const f=e=>e.value.trim(),i=e=>[...e.querySelectorAll("[data-etiket]")].filter(t=>!t.closest("[hidden]")&&f(t)).map(t=>`${t.dataset.etiket}${t.dataset.etiket.endsWith("?")?"":":"} ${f(t)}`),q=a.querySelector("[data-yedek]"),s=a.querySelector("[data-mesaj]");a.querySelector("[data-kopyala]")?.addEventListener("click",async()=>{const e=a.querySelector("[data-kopyalandi]");try{await navigator.clipboard.writeText(s.value),e.textContent="Kopyalandı."}catch{s.select(),e.textContent="Mesaj seçildi; kopyalamak için Ctrl+C (telefonda uzun basın)."}}),a.addEventListener("submit",e=>{e.preventDefault();const t=e.submitter,n=c();l("grup",!n);const k=i(a).filter(o=>!/^(Sektör|Adet|Firma|İl|Telefon):/.test(o));if(l("bilgi",!!n&&k.length===0),!n){r[0]?.focus();return}if(!k.length){a.querySelector("#fm-anlatim")?.focus();return}const U=[`Cihaz grubu: ${n.nextElementSibling?.textContent??n.value}`,...i(a.querySelector(`[data-grup-alanlari="${n.value}"]`))],C=i(a).filter(o=>/^(Sektör|Adet|Uygulama):/.test(o)),z=i(a).filter(o=>/^(Firma|İl|Telefon):/.test(o)),p=`(Uygulama formu${g?`, kaynak: ${g}`:""})`,h=[U.join(`
`),C.join(`
`),z.join(`
`)].filter(Boolean).join(`

`),S=t?.dataset.sablon??"";if(t?.dataset.kanal==="whatsapp"){const o=`Uygulamamız için cihaz seçimi konusunda bilgi almak istiyorum.

${h}

${p}`;window.open(S.replace($,encodeURIComponent(o)),"_blank","noopener");return}const j=`Cihaz seçimi: ${n.dataset.konu} (Uygulama formu)`,b=`Merhaba,

Uygulamamız için uygun ölçüm cihazını seçmek istiyoruz.

${h}

${p}
`;s.value=b,q.hidden=!1,location.href=S.replace(E,encodeURIComponent(j)).replace($,encodeURIComponent(b))})}
