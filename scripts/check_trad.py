#!/usr/bin/env python3
"""Revisa traducciones de odyle: longitudes, apartados obligatorios, enlaces /es/ y que exista el original."""
import pathlib, re, sys

HEADS = {'en': ['What people say', 'What happens', ('What to do', 'How it will be verified')],
         'ko': ['알려진 내용', '실제로 일어나는 일', ('할 일', '확인 방법')]}
bad = 0
for arg in sys.argv[1:]:
    p = pathlib.Path(arg); txt = p.read_text(encoding='utf8')
    col, lang = p.parts[-3], p.parts[-2]
    errs = []
    if lang not in HEADS: errs.append('carpeta de idioma desconocida')
    orig = p.parent.parent / 'es' / p.name
    if not orig.exists(): errs.append(f'no existe el original {orig}')
    m = re.match(r'^---\n(.*?)\n---\n(.*)$', txt, re.S)
    if not m: errs.append('sin frontmatter'); front, body = '', txt
    else: front, body = m.groups()
    def field(k):
        r = re.search(rf'^{k}:\s*(.+)$', front, re.M)
        return r.group(1).strip().strip('\'"') if r else None
    t, d = field('title'), field('description')
    if t and len(t) > 110: errs.append(f'title con {len(t)} caracteres (máx. 110)')
    if d and len(d) > 170: errs.append(f'description con {len(d)} caracteres (máx. 170)')
    if col == 'entries' and lang in HEADS:
        a, b, c = HEADS[lang]
        for h in (a, b):
            if not re.search(rf'^## {re.escape(h)}\s*$', body, re.M): errs.append(f'falta «## {h}»')
        if not any(re.search(rf'^## {re.escape(h)}\s*$', body, re.M) for h in c): errs.append(f'falta «## {c[0]}» o «## {c[1]}»')
    if re.search(r'\]\(/es/|href:\s*[\'"]?/es/', txt): errs.append('enlace interno a /es/')
    if orig.exists():
        of = re.match(r'^---\n(.*?)\n---', orig.read_text(encoding='utf8'), re.S).group(1)
        keys = lambda f: [k for k in re.findall(r'^([a-zA-Z]+):', f, re.M)]
        if keys(of) != keys(front): errs.append(f'claves distintas del original: {keys(of)} ≠ {keys(front)}')
    print(('OK   ' if not errs else 'MAL  ') + str(p) + ('' if not errs else '\n     ' + '\n     '.join(errs)))
    bad += bool(errs)
sys.exit(1 if bad else 0)
