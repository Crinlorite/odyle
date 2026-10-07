import re,html,sys,json
sys.path.insert(0,'/tmp/claude-0/-root/d5b9db23-0a1a-439d-ae9f-07998eeb8989/scratchpad/mb')
import mbpair as M
def nodes(t):
    t=re.sub(r'<(script|style|svg|noscript)\b.*?</\1>',' ',t,flags=re.S)
    b=re.search(r'<body.*?>(.*)</body>',t,re.S); t=b.group(1) if b else t
    out=[]
    for x in re.split(r'<[^>]+>',t):
        x=html.unescape(x); x=re.sub(r'\s+',' ',x).strip()
        if x: out.append(x)
    return out
def pos_pairs(path):
    a=nodes(M.get('en',path)); b=nodes(M.get('es_ES',path))
    return a,b
if __name__=='__main__':
    for path in sys.argv[1:]:
        a,b=pos_pairs(path); print(path,len(a),len(b))
