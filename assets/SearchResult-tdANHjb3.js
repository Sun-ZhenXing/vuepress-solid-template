import{u as Y,f as se,g as ae,h as B,i as te,P as le,t as re,j as ue,k as F,l as q,m as ie,n as M,p as a,q as oe,R as j,s as ne,v as ce,x as ve,C as pe,y as de,z as he,A as ye,B as me,D as ge,E as fe,F as He,G as I,H as _,I as Re,J as x,K as ke}from"./app-CYWO8Nis.js";const Qe=["/","/demo/","/demo/page01.html","/demo/page02.html","/404.html"],we="SEARCH_PRO_QUERY_HISTORY",g=Y(we,[]),qe=()=>{const{queryHistoryCount:t}=x,l=t>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=t=>Qe[t.id]+("anchor"in t?`#${t.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,f=Y(xe,[]),Se=()=>{const t=U>0;return{enabled:t,resultHistory:f,addResultHistory:l=>{if(t){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ce=t=>{const l=pe(),r=B(),S=de(),i=F(0),k=q(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:C}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:D=d=>d,splitWord:L,suggestionsFilter:O,...m}=l.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(d=>D(d,R,r.value,S.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},x.searchDelay-x.suggestDelay);M([t,r],([c])=>H(c),{immediate:!0}),ge(()=>{C()})}),{isSearching:k,results:h}};var Le=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),S=B(),i=te(le),{enabled:k,addQueryHistory:h,queryHistory:y,removeQueryHistory:C}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:D}=Se(),L=k||H,O=re(t,"queries"),{results:m,isSearching:d}=Ce(O),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),T=q(()=>L&&(y.value.length>0||c.value.length>0)),b=q(()=>m.value.length>0),A=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=A.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<A.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},E=e=>e.map(s=>ke(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,w=""]=He(s)?s[S.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",E([o,...n,w])))}return e.display.map(s=>a("div",E(s)))},Q=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null,Z=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{Q()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>E(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),D(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(b.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=A.value.contents[p.value];h(t.queries.join(" ")),R(s),r.push(P(s)),Q()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),Q())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!b.value:!T.value}],id:"search-pro-results"},t.queries.length?d.value?a(oe,{hint:i.value.searching}):b.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const w=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const $=w&&p.value===ee;return a(j,{to:P(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{h(t.queries.join(" ")),R(n),Q()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:L?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Le as default};
