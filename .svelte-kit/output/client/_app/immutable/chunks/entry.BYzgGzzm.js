import{n as se,s as it,t as st}from"./scheduler.Ce_0Mfso.js";import{H as te,S as pe,R as De}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function ct(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function lt(e){return e.split("%25").map(decodeURI).join("%25")}function ft(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const ut=["href","pathname","search","toString","toJSON"];function dt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of ut)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const ht="/__data.json",pt=".html__data.json";function gt(e){return e.endsWith(".html")?e.replace(/\.html$/,pt):e.replace(/\/$/,"")+ht}function mt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function _t(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const $e=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&F.delete(ge(e)),$e(e,n));const F=new Map;function yt(e,n){const t=ge(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&F.set(t,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=_t(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function wt(e,n,t){if(F.size>0){const r=ge(e,t),a=F.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);F.delete(r)}}return window.fetch(n,t)}function ge(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${mt(...a)}"]`}return r}const vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${kt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=vt.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function Et(e){return!/^\([^)]+\)$/.test(e)}function kt(e){return e.slice(1).split("/").filter(Et)}function St(e,n,t){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let l=a[i-s];if(c.chained&&c.rest&&s&&(l=a.slice(i-s,i+1).filter(u=>u).join("/"),s=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const u=n[i+1],h=a[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function At({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([i,[c,l,u]])=>{const{pattern:h,params:g}=bt(i),d={id:i,exec:m=>{const f=h.exec(m);if(f)return St(f,g,r)},errors:[1,...u||[]].map(m=>e[m]),layouts:[0,...l||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function Ce(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const N=[];function me(e,n=se){let t;const r=new Set;function a(i){if(it(e,i)&&(e=i,t)){const c=!N.length;for(const l of r)l[1](),N.push(l,e);if(c){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function o(i){a(i(e))}function s(i,c=se){const l=[i,c];return r.add(l),r.size===1&&(t=n(a,o)||se),i(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:s}}var Oe;const I=((Oe=globalThis.__sveltekit_1b7wm38)==null?void 0:Oe.base)??"";var je;const Rt=((je=globalThis.__sveltekit_1b7wm38)==null?void 0:je.assets)??I,It="1708653487037",Ve="sveltekit:snapshot",Fe="sveltekit:scroll",qe="sveltekit:states",Lt="sveltekit:pageurl",D="sveltekit:history",q="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},B=location.origin;function Ge(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function _e(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Le={...z,"":z.hover};function He(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Me(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=He(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||ne(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===B&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function Y(e){let n=null,t=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=O(i,"preload-code")),a===null&&(a=O(i,"preload-data")),n===null&&(n=O(i,"keepfocus")),t===null&&(t=O(i,"noscroll")),o===null&&(o=O(i,"reload")),s===null&&(s=O(i,"replacestate")),i=He(i);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[r??"off"],preload_data:Le[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Pe(e){const n=me(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function Pt(){const{set:e,subscribe:n}=me(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Rt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==It;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:r}}function ne(e,n){return e.origin!==B||!e.pathname.startsWith(n)}const Tt=-1,Ut=-2,xt=-3,Nt=-4,Ot=-5,jt=-6;function Dt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,s=!1){if(o===Tt)return;if(o===xt)return NaN;if(o===Nt)return 1/0;if(o===Ot)return-1/0;if(o===jt)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=t[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<i.length;d+=1)u.add(a(i[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<i.length;d+=2)h.set(a(i[d]),a(i[d+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=a(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let l=0;l<i.length;l+=1){const u=i[l];u!==Ut&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in i){const u=i[l];c[l]=a(u)}}return r[o]}return a(0)}const Be=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Be];const $t=new Set([...Be]);[...$t];function Ct(e){return e.filter(n=>n!=null)}const Vt="x-sveltekit-invalidated",Ft="x-sveltekit-trailing-slash";function W(e){return e instanceof te||e instanceof pe?e.status:500}function qt(e){return e instanceof pe?e.text:"Internal Error"}const x=Ce(Fe)??{},G=Ce(Ve)??{},T={url:Pe({}),page:Pe({}),navigating:me(null),updated:Pt()};function ye(e){x[e]=_e()}function Gt(e,n){let t=e+1;for(;x[t];)delete x[t],t+=1;for(t=n+1;G[t];)delete G[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}function Te(){}let ae,de,J,L,he,C;const Ke=[],X=[];let P=null;const ze=[],Ht=[];let j=[],w={branch:[],error:null,url:null},we=!1,Z=!1,Ue=!0,H=!1,V=!1,Ye=!1,ve=!1,be,k,A,R,Q;async function tn(e,n,t){var a,o;document.URL!==location.href&&(location.href=location.href),C=e,ae=At(e),L=document.documentElement,he=n,de=e.nodes[0],J=e.nodes[1],de(),J(),k=(a=history.state)==null?void 0:a[D],A=(o=history.state)==null?void 0:o[q],k||(k=A=Date.now(),history.replaceState({...history.state,[D]:k,[q]:A},""));const r=x[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await Xt(he,t):Wt(location.href,{replaceState:!0}),Jt()}function Mt(){Ke.length=0,ve=!1}function We(e){X.some(n=>n==null?void 0:n.snapshot)&&(G[e]=X.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Je(e){var n;(n=G[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=X[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function xe(){ye(k),Ie(Fe,x),We(A),Ie(Ve,G)}async function Xe(e,n,t,r){return K({type:"goto",url:Ge(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function Bt(e){return P={id:e.id,promise:Qe(e).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function fe(e){const n=ae.find(t=>t.exec(et(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function Ze(e,n){var a;w=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),R=e.props.page,be=new C.root({target:n,props:{...e.props,stores:T,components:X},hydrate:!0}),Je(A);const r={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(r)),Z=!0}async function ee({url:e,params:n,branch:t,status:r,error:a,route:o,form:s}){let i="never";if(I&&(e.pathname===I||e.pathname===I+"/"))i="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);e.pathname=ct(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Ct(t).map(d=>d.node.component),page:R}};s!==void 0&&(c.props.form=s);let l={},u=!R,h=0;for(let d=0;d<Math.max(t.length,w.branch.length);d+=1){const m=t[d],f=w.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||s!==void 0&&s!==R.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:u?l:R.data}),c}async function Ee({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,t);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(i&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(i&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:dt(t,()=>{i&&(c.url=!0)},f=>{i&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const S=new URL(v,t);return i&&d(S.href),S.origin===t.origin&&(v=S.href.slice(t.origin.length)),Z?wt(v,S.href,_):yt(v,_)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(f){i=!1;try{return f()}finally{i=!0}}};s=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,r,a,o){if(ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==w.params[s])return!0;for(const s of a.dependencies)if(Ke.some(i=>i(new URL(s))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Kt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&t.delete(r)}return t}async function Qe({id:e,invalidating:n,url:t,params:r,route:a}){if((P==null?void 0:P.id)===e)return P.promise;const{errors:o,layouts:s,leaf:i}=a,c=[...s,i];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=w.url?e!==w.url.pathname+w.url.search:!1,h=w.route?a.id!==w.route.id:!1,g=Kt(w.url,t);let d=!1;const m=c.map((p,y)=>{var U;const b=w.branch[y],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Ne(d,h,u,g,(U=b.server)==null?void 0:U.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await at(t,m)}catch(p){return re({status:W(p),error:await M(p,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,y)=>{var oe;if(!p)return;const b=w.branch[y],E=f==null?void 0:f[y];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Ne(_,h,u,g,(oe=b.universal)==null?void 0:oe.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Ee({loader:p[1],url:t,params:r,route:a,parent:async()=>{var Re;const Ae={};for(let ie=0;ie<y;ie+=1)Object.assign(Ae,(Re=await v[ie])==null?void 0:Re.data);return Ae},server_data_node:ke(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(y){if(y instanceof De)return{type:"redirect",location:y.location};let b=W(y),E;if(f!=null&&f.includes(y))b=y.status??b,E=y.error;else if(y instanceof te)E=y.body;else{if(await T.updated.check())return await $(t);E=await M(y,{params:r,url:t,route:{id:a.id}})}const U=await zt(p,S,o);return U?await ee({url:t,params:r,branch:S.slice(0,U.idx).concat(U.node),status:b,error:E,route:a}):await nt(t,{id:a.id},E,b)}else S.push(void 0);return await ee({url:t,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function zt(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:e,error:n,url:t,route:r}){const a={};let o=null;if(C.server_loads[0]===0)try{const l=await at(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==B||t.pathname!==location.pathname||we)&&await $(t)}const i=await Ee({loader:de,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await J(),loader:J,universal:null,server:null,data:null};return await ee({url:t,params:a,branch:[i,c],status:e,error:n,route:null})}function Se(e,n){if(!e||ne(e,I))return;let t;try{t=C.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=et(t);for(const a of ae){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:ft(o),url:e}}}function et(e){return lt(e.slice(I.length)||"/")}function tt({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ot(w,t,e,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return H||ze.forEach(i=>i(s)),a?null:o}async function K({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:l=Te,block:u=Te}){const h=Se(n,!1),g=tt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){u();return}const d=k,m=A;l(),H=!0,Z&&T.navigating.set(g.navigation),Q=c;let f=h&&await Qe(h);if(!f){if(ne(n,I))return await $(n);f=await nt(n,{id:null},await M(new pe(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,Q!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(i>=20)f=await re({status:500,error:await M(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Xe(new URL(f.location,n).href,{},i+1,c),!1;else f.props.page.status>=400&&await T.updated.check()&&await $(n);if(Mt(),ye(d),We(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),s=t?t.state:s,!t){const p=o?0:1,y={[D]:k+=p,[q]:A+=p,[qe]:s};(o?history.replaceState:history.pushState).call(history,y,"",n),o||Gt(k,A)}if(P=null,f.props.page.state=s,Z){w=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(Ht.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){j=j.filter(b=>!p.includes(b))};p.push(y),j.push(...p)}be.$set(f.props),Ye=!0}else Ze(f,he);const{activeElement:_}=document;await st();const v=t?t.scroll:a?_e():null;if(Ue){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&Zt(),Ue=!0,f.props.page&&(R=f.props.page),H=!1,e==="popstate"&&Je(A),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),T.navigating.set(null)}async function nt(e,n,t,r){return e.origin===B&&e.pathname===location.pathname&&!we?await re({status:r,error:t,url:e,route:n}):await $(e)}function Yt(){let e;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(fe(s.target.href),t.unobserve(s.target))},{threshold:0});function r(o,s){const i=Me(o,L);if(!i)return;const{url:c,external:l,download:u}=ue(i,I);if(l||u)return;const h=Y(i);if(!h.reload)if(s<=h.preload_data){const g=Se(c,!1);g&&Bt(g)}else s<=h.preload_code&&fe(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=ue(o,I);if(i||c)continue;const l=Y(o);l.reload||(l.preload_code===z.viewport&&t.observe(o),l.preload_code===z.eager&&fe(s.pathname))}}j.push(a),a()}function M(e,n){if(e instanceof te)return e.body;const t=W(e),r=qt(e);return C.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function Wt(e,n={}){return e=Ge(e),e.origin!==B?Promise.reject(new Error("goto: invalid URL")):Xe(e,n,0)}function Jt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(xe(),!H){const a=ot(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};ze.forEach(s=>s(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),(n=navigator.connection)!=null&&n.saveData||Yt(),L.addEventListener("click",t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Me(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:s,download:i}=ue(r,I);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=Y(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){tt({url:a,type:"link"})?H=!0:t.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ce(location)){const[,d]=w.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(V=!0,ye(k),e(a),!c.replace_state)return;V=!1}t.preventDefault(),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ne(s,I))return;const i=t.target,c=Y(i);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(i),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(l).toString(),K({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(Q={},a===k)return;const o=x[a],s=t.state[qe]??{},i=new URL(t.state[Lt]??location.href),c=t.state[q],l=ce(location)===ce(w.url);if(c===A&&(Ye||l)){e(i),x[k]=_e(),o&&scrollTo(o.x,o.y),s!==R.state&&(R={...R,state:s},be.$set({page:R})),k=a;return}const h=a-k;await K({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{k=a,A=c},block:()=>{history.go(-h)},nav_token:Q})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[D]:++k,[q]:A},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&T.navigating.set(null)});function e(t){w.url=t,T.page.set({...R,url:t}),T.page.notify()}}async function Xt(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:s,form:i}){we=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Se(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=s[m];return f!=null&&f.uses&&(f.uses=rt(f.uses)),Ee({loader:C.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:ke(f)})}),h=await Promise.all(u),g=ae.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await ee({url:c,params:a,branch:h,status:n,error:t,form:i,route:g??null})}catch(u){if(u instanceof De){await $(new URL(u.location,location.href));return}l=await re({status:W(u),error:await M(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),Ze(l,e)}async function at(e,n){var a;const t=new URL(e);t.pathname=gt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Ft,"1"),t.searchParams.append(Vt,n.map(o=>o?"1":"0").join(""));const r=await $e(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new te(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function l(g){return Dt(g,{Promise:d=>new Promise((m,f)=>{s.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=rt(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:S}=f,p=s.get(_);s.delete(_),S?p.reject(l(S)):p.fulfil(l(v))}}}})}function rt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Zt(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function ot(e,n,t,r){var c,l;let a,o;const s=new Promise((u,h)=>{a=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{tn as a,T as s};
