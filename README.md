# Michal Dengusiak portfolio

Project-focused personal website at https://mdengusiak.github.io, served directly by GitHub Pages. Plain HTML, CSS and minimal JavaScript; no package installation or build step.

## Structure

- `index.html`: biography, six selected project entries, building-project examples, selected research and contact links.
- `assets/site.css`: responsive studio-style layout, dark/ivory/lime palette and accessible focus states.
- `assets/site.js`: manual three-scene hero gallery with arrow-key navigation and optional entrance animations. No autoplay; reduced-motion preferences are respected. Core content and the first scene remain visible without JavaScript.
- `assets/manrope-*.ttf`: locally served Manrope fonts (400, 600, 800), with the SIL Open Font License in `assets/Manrope-OFL.txt`.
- `assets/engineering-hero-*.webp`: generated concept artwork (responsive WebP), clearly labelled as illustrative. `assets/tasmaniandevil-art.webp` is a web-sized copy of the original TasmanianDevil graphic. Asset sources and the generation prompt are recorded in `assets/ASSET_SOURCES.md`.
- `WebContent/`: retained photographs, logos, original demonstrations and player URLs. Earlier pages remain available at their existing paths.
- `PROJECT_PROGRESS.md`: implementation decisions, validation, known limits and next step.

## Preview

From this repository, run `python -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000. Stop the server with Ctrl+C after review.

## Maintaining content

Keep the portfolio aligned with the general LinkedIn profile rather than job-specific CVs. Source material for the October 2026 refresh was the updated general CV, supplied LinkedIn profile printouts and explicit corrections recorded in the CV folder's `HANDOVER.md`.

Keep Sustainable Analytical Model distinct from the earlier Single Analysis Model at Buro Happold. Describe individual contributions and commercial/voluntary relationships accurately. Check https://sambim.xyz before updating capability or research status; development and roadmap work must stay clearly identified.

Two retained GIF paths (`WebContent/gbXMLTextve01.gif` and `WebContent/complexRoofb.gif`) currently contain Git LFS pointers. The new homepage does not embed them. The intact local roof video is used instead; no historical assets or URLs were removed.

The October 2026 refresh, including the supplied portrait and awards photograph, was reviewed locally and approved for publication to `master`. Publication checks and release status are recorded in `PROJECT_PROGRESS.md`.
