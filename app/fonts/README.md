`amiri-subset.woff2` : Amiri Regular (Google Fonts, licence OFL) réduite aux caractères des textes arabes
(`locales/ar.json` + `data/location.json`), pour alléger la version arabe (48 Ko au lieu de 106 Ko).
Après avoir ajouté de nouveaux mots arabes, régénérer :

    python -m fontTools.subset Amiri-Regular.ttf --text-file=<caractères de ar.json + location.json> \
      --unicodes="U+0020-007E,U+200C-200F" \
      --layout-features='init,medi,fina,isol,rlig,liga,ccmp,mark,mkmk,kern,curs,calt' \
      --flavor=woff2 --output-file=app/fonts/amiri-subset.woff2

(Un caractère absent du sous-ensemble s'affiche simplement dans la police de repli Noto Naskh Arabic.)
