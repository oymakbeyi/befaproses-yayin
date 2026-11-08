#!/bin/bash
# Yayından kalkan dosyaları sunucudan siler (Burak onayı 2026-11-08).
# Sebep: cPanel yayını `cp -R` ile yalnız üstüne yazar; derlemeden çıkan sayfa sunucuda kalıyordu (ör. kaldırılan
# uzatma diyaframlı ürün sayfası test sitesinde 200 vermeye devam etti).
# Yöntem: her yayında derlemedeki dosyaların listesi web kökünün DIŞINDA saklanır; sonraki yayında önceki listede olup
# yeni listede olmayan dosyalar silinir. Yalnız bizim yayınladığımız dosyalara dokunur: canlı kökteki eski WordPress
# dosyaları ve sunucunun kendi dosyaları hiçbir listede olmadığı için silinmez.
#
# Kullanım: bash yayin-temizle.sh <web kökü> <önceki liste> <yeni liste>
# Korumalar: önceki liste yoksa hiçbir şey silinmez (ilk yayın); yeni liste 20 satırdan kısaysa ya da önceki listenin
# yarısından fazlası silinecekse durur (bozuk liste siteyi silmesin); boş satır, mutlak yol ve '..' içeren yol atlanır.
# Tekrar koşmak zararsız: silinmiş dosya bir daha bulunmaz.
# Sabotaj testi: bash scripts/yayin-temizle-test.sh
set -euo pipefail
KOK="${1:?web kökü}"
ESKI="${2:?önceki liste}"
YENI="${3:?yeni liste}"

[ -d "$KOK" ] || { echo "yayin-temizle: web kökü yok: $KOK"; exit 1; }
[ -f "$YENI" ] || { echo "yayin-temizle: yeni liste yok: $YENI"; exit 1; }
if [ ! -f "$ESKI" ]; then
  echo "yayin-temizle: önceki liste yok, silme yok (ilk yayın)"
  exit 0
fi

yeni_n=$(grep -c . "$YENI" || true)
eski_n=$(grep -c . "$ESKI" || true)
if [ "$yeni_n" -lt 20 ]; then
  echo "yayin-temizle: yeni liste çok kısa ($yeni_n satır), DURDU"
  exit 1
fi

GECICI=$(mktemp -d)
trap 'rm -rf "$GECICI"' EXIT
LC_ALL=C sort -u "$ESKI" > "$GECICI/eski"
LC_ALL=C sort -u "$YENI" > "$GECICI/yeni"
LC_ALL=C comm -23 "$GECICI/eski" "$GECICI/yeni" > "$GECICI/sil"

sil_n=$(grep -c . "$GECICI/sil" || true)
if [ "$sil_n" -gt $((eski_n / 2)) ]; then
  echo "yayin-temizle: $sil_n / $eski_n dosya silinecekti (yarıdan fazla), DURDU"
  exit 1
fi

silinen=0
while IFS= read -r f; do
  case "$f" in
    "" | /* | .. | ../* | */../* | */..)
      echo "atlandı (güvensiz yol): $f"
      continue ;;
  esac
  if [ -f "$KOK/$f" ] || [ -L "$KOK/$f" ]; then
    rm -f -- "$KOK/$f"
    echo "silindi: $f"
    silinen=$((silinen + 1))
    # Boş kalan klasörler (yalnız silinen dosyanın kendi göreli yolu boyunca) da kalkar; dolu klasöre dokunulmaz.
    ( cd "$KOK" && rmdir -p --ignore-fail-on-non-empty -- "$(dirname -- "$f")" 2>/dev/null || true )
  fi
done < "$GECICI/sil"
echo "yayin-temizle: $silinen dosya silindi"
