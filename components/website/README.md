# Website UI Kit — I Domain Industrial

A high-fidelity, interactive **corporate / marketing website** for 壹東實業 (I Domain Industrial), built entirely from the brand foundations (logo, color, type, layout rules) in the identity manual.

> **Brand application, not a recreation.** The identity source is print-only — no website exists. This kit applies the system to the most natural digital surface for a B2B architectural-metal manufacturer. Imagery is represented with on-brand placeholders (mullion-grid blue / brushed-steel fields); drop in real façade photography to finish.

## Run
Open `index.html`. React + Babel are loaded from CDN; no build step.

## Files
- `index.html` — page shell, script/style loading.
- `styles.css` — kit styles (imports `colors_and_type.css` tokens).
- `components.jsx` — `Header`, `Hero`, `Stats`, plus `Icon` / `useReveal` helpers.
- `sections.jsx` — `Products` (tabbed), `Process`, `Projects`, `Contact`, `Footer`.
- `app.jsx` — `App` assembly + `About`; scroll-spy nav; renders to `#root`.
- `assets/` — logo SVGs. `colors_and_type.css` — design tokens (copy of root).

## Interactions
- **Language toggle** 中 / EN — every string is bilingual.
- **Product tabs** — switch between Sandwich Panel / Curtain Wall / Coating.
- **Scroll-spy nav** — active section underlines as you scroll.
- **Contact form** — submits to an inline confirmation state.
- Hover states on buttons, project cards, nav.

## Components covered
Sticky header w/ nav + language switch · dark hero w/ mullion-grid field · stat strip · tabbed product showcase · dark end-to-end process steps (Lucide icons) · project gallery cards · contact form + info · multi-column footer.

## Notes
- Icons: **Lucide** via CDN (flagged substitution — no icon set exists in the source). Thin geometric stroke chosen to match the brand's hairline rules.
- Entrance animation is transform-only so content is never hidden if the document is backgrounded or motion is reduced.
