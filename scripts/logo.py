# Redessine le médaillon ROI DES ROIS en tracés SVG (aucune police nécessaire à l'affichage),
# d'après le logo Instagram : couronne dorée à pointes et pierres (émeraude, bleu canard),
# « ROI DES ROIS » en capitales à empattements, « DÉCORATION ÉVÉNEMENTIELLE & MARIAGES »
# et « تزيين الحفلات والأعراس ».
#
#   pip install fonttools uharfbuzz
#   python scripts/logo.py <dossier des polices>
#     Cinzel.ttf (variable), Amiri-Regular.ttf – Google Fonts, licence OFL
#
# Écrit data/logo.json (tracés utilisés par components/Logo.tsx et l'ouverture),
# public/logo.svg (sur noir), public/logo-light.svg (sur crème), public/logo-mark.svg et app/icon.svg.
import json
import os
import sys

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

FONTS = sys.argv[1]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLACK, GOLD, GOLD_LIGHT, GOLD_INK, CREAM, EMERALD, TEAL, BORDEAUX = (
    "#0E0C0A", "#C9A24A", "#E3C77A", "#7A5A1E", "#F6EFE2", "#1F5A4C", "#1D5E6B", "#6E1423")


def shape(path, text, size, wght=None, tracking=0.0, features=None):
    """Tracé SVG d'une ligne de texte (mise en forme HarfBuzz : arabe lié, crénage)."""
    blob = hb.Blob.from_file_path(path)
    face = hb.Face(blob)
    font = hb.Font(face)
    tt = TTFont(path)
    if wght is not None:
        font.set_variations({"wght": wght})
        from fontTools.varLib.instancer import instantiateVariableFont
        tt = instantiateVariableFont(tt, {"wght": wght})
    upem = tt["head"].unitsPerEm
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(font, buf, features or {"kern": True, "liga": True})
    gs = tt.getGlyphSet()
    order = tt.getGlyphOrder()
    s = size / upem
    x = 0.0
    parts = []
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        name = order[info.codepoint]
        pen = SVGPathPen(gs, lambda v: f"{v:.1f}".rstrip("0").rstrip("."))
        gx = x + pos.x_offset * s
        gy = pos.y_offset * s
        gs[name].draw(TransformPen(pen, (s, 0, 0, -s, gx, -gy)))
        d = pen.getCommands()
        if d:
            parts.append(d)
        x += pos.x_advance * s + tracking * size
    width = x - tracking * size
    return " ".join(parts), round(width, 1)


cinzel = os.path.join(FONTS, "Cinzel.ttf")
amiri = os.path.join(FONTS, "Amiri-Regular.ttf")

# Couronne au trait (viewBox 0 -16 200 152) : cinq pointes, losange au sommet, bandeau à pierres.
CROWN = {
    "viewBox": "0 -16 200 152",
    "body": "M34 112 L14 42 L47 80 L58 28 L81 66 L100 6 L119 66 L142 28 L153 80 L186 42 L166 112 Z",
    "inner": "M100 34 L111 58 L100 82 L89 58 Z M58 52 L64 64 L58 76 L52 64 Z M142 52 L148 64 L142 76 L136 64 Z",
    "band": "M30 112 Q100 103 170 112 L166 134 Q100 125 34 134 Z",
    "top": "M100 -14 L108 -2 L100 10 L92 -2 Z",
    "pearls": [[14, 42], [58, 28], [142, 28], [186, 42]],
    "gems": [[52, 122, "e"], [76, 120, "t"], [100, 119, "e"], [124, 120, "t"], [148, 122, "e"]],
}

word, word_w = shape(cinzel, "ROI DES ROIS", 100, wght=600, tracking=0.06)
roi, roi_w = shape(cinzel, "ROI", 100, wght=600, tracking=0.04)
des, des_w = shape(cinzel, "DES", 40, wght=500, tracking=0.3)
rois, rois_w = shape(cinzel, "ROIS", 100, wght=600, tracking=0.04)
sub, sub_w = shape(cinzel, "DÉCORATION ÉVÉNEMENTIELLE & MARIAGES", 20, wght=500, tracking=0.14)
ar, ar_w = shape(amiri, "تزيين الحفلات والأعراس", 34)
rdr, rdr_w = shape(cinzel, "RDR", 100, wght=600, tracking=0.08)

logo = {"crown": CROWN, "word": {"d": word, "w": word_w}, "roi": {"d": roi, "w": roi_w}, "des": {"d": des, "w": des_w},
        "rois": {"d": rois, "w": rois_w}, "sub": {"d": sub, "w": sub_w}, "ar": {"d": ar, "w": ar_w}, "rdr": {"d": rdr, "w": rdr_w}}
with open(os.path.join(ROOT, "data/logo.json"), "w", encoding="utf8") as f:
    json.dump(logo, f, ensure_ascii=False)


def crown_svg(stroke, gem_e, gem_t, sw=3.2):
    c = CROWN
    pearls = "".join(f'<circle cx="{x}" cy="{y}" r="5" fill="{stroke}"/>' for x, y in c["pearls"])
    gems = "".join(
        f'<path d="M{x} {y-6} L{x+6} {y} L{x} {y+6} L{x-6} {y} Z" fill="{gem_e if k == "e" else gem_t}"/>' for x, y, k in c["gems"])
    return (f'<g fill="none" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round" stroke-linecap="round">'
            f'<path d="{c["body"]}"/><path d="{c["inner"]}" stroke-width="{sw*0.6}"/><path d="{c["band"]}"/>'
            f'<path d="{c["top"]}" fill="{gem_t}"/></g>{pearls}{gems}')


def full(bg, gold, ink_sub, gem_e, gem_t):
    # Médaillon complet 600×600 : couronne, ROI / DES / ROIS, filets, sous-titre, arabe
    W = 600
    cx = W / 2
    roi_x, rois_x = cx - roi_w / 2, cx - rois_w / 2
    des_x = cx - des_w / 2
    sub_s = 380 / sub_w
    ar_s = 250 / ar_w
    ring = (f'<circle cx="300" cy="300" r="288" fill="{bg}" stroke="{gold}" stroke-width="3"/>'
            f'<circle cx="300" cy="300" r="276" fill="none" stroke="{gold}" stroke-width="1" opacity=".7"/>') if bg else ""
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {W}" role="img" aria-label="Roi des Rois – Décoration événementielle &amp; mariages">
{ring}
<g transform="translate(225 70) scale(.75)">{crown_svg(gold, gem_e, gem_t)}</g>
<g fill="{gold}">
<path transform="translate({roi_x:.1f} 270)" d="{roi}"/>
<path transform="translate({des_x:.1f} 312)" d="{des}"/>
<path transform="translate({rois_x:.1f} 400)" d="{rois}"/>
</g>
<g stroke="{gold}" stroke-width="1.2"><path d="M150 300 H{des_x - 14:.1f} M{des_x + des_w + 14:.1f} 300 H450"/></g>
<path d="M120 428 H480" stroke="{gold}" stroke-width="1" opacity=".8"/>
<path fill="{ink_sub}" transform="translate({cx - 190:.1f} 458) scale({sub_s:.4f})" d="{sub}"/>
<path fill="{ink_sub}" transform="translate({cx - 125:.1f} 508) scale({ar_s:.4f})" d="{ar}"/>
</svg>
'''


with open(os.path.join(ROOT, "public/logo.svg"), "w", encoding="utf8") as f:
    f.write(full(BLACK, GOLD, GOLD_LIGHT, EMERALD, TEAL))
with open(os.path.join(ROOT, "public/logo-light.svg"), "w", encoding="utf8") as f:
    f.write(full(CREAM, GOLD_INK, GOLD_INK, EMERALD, TEAL))

mark = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -16 200 152" role="img" aria-label="Roi des Rois">{crown_svg(GOLD, EMERALD, TEAL)}</svg>
'''
with open(os.path.join(ROOT, "public/logo-mark.svg"), "w", encoding="utf8") as f:
    f.write(mark)

icon = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="{BLACK}"/><g transform="translate(6 14) scale(.26)">{crown_svg(GOLD, EMERALD, TEAL, sw=6)}</g></svg>
'''
with open(os.path.join(ROOT, "app/icon.svg"), "w", encoding="utf8") as f:
    f.write(icon)
print("logo ok", word_w, sub_w, ar_w)
