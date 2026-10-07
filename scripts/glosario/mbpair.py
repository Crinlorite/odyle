import re,html,sys,subprocess,os,json
D='/tmp/odyle-glosario/'
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36'
def get(lang,path):
    f=D+lang+'_'+re.sub(r'[^a-z0-9]+','_',path)+'.html'
    if not os.path.exists(f) or os.path.getsize(f)<2000:
        subprocess.run(['curl','-4','-sS','-L','-m','40','-A',UA,f'https://metabot.gg/{lang}/aion-2/{path}','-o',f],check=False)
    return open(f,encoding='utf-8',errors='replace').read()
def links(lang,path,cat):
    t=get(lang,path); out={}
    for m in re.finditer(r'<a[^>]+href="/%s/aion-2/%s/([^"#?]+)"[^>]*>(.*?)</a>'%(lang,cat),t,re.S):
        txt=html.unescape(re.sub(r'<[^>]+>','\n',m.group(2)))
        parts=[re.sub(r'\s+',' ',x).strip() for x in txt.split('\n')]
        parts=[x for x in parts if x and not re.fullmatch(r'(Lv\.|Nv\.)? ?\d+%?|\d+ ?%|Lv\. ?\d+|Nv\. ?\d+',x)]
        if parts: out.setdefault(m.group(1),[]).extend(parts)
    return {k:max(set(v),key=v.count) for k,v in out.items()}
if __name__=='__main__':
    path,cat=sys.argv[1],sys.argv[2]
    en=links('en',path,cat); es=links('es_ES',path,cat)
    print(f'# {path} [{cat}]: en={len(en)} es={len(es)}')
    for k in en: print(f'{k}\t{en[k]}\t{es.get(k,"—")}')
