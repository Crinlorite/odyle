# Emparejar nombres del juego en inglés y en español

Sirve para ampliar `src/data/glosario.ts` o el `glossary` de un apunte sin traducir nada a mano.

- `mbpair.py <página> <categoría>`: empareja por el identificador de la ficha. Ejemplo: `python3 mbpair.py classes/gladiator skills`. Es lo fiable.
- `postext.py <página>…`: dice si la página tiene la misma estructura en los dos idiomas; `pos_pairs()` empareja texto por posición. Da falsos emparejamientos (salió «Verteron → Altgard»), así que cada par se revisa a mano.

Lee páginas públicas de metabot.gg, pocas y de una en una. No toca el juego ni sus archivos. Antes de usarlos: `mkdir -p /tmp/odyle-glosario`.
