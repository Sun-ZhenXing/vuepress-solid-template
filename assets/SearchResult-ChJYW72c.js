import{u as B,f as Z,g as ee,h as M,i as se,j as ae,t as te,k as le,l as P,m as E,n as re,p as Y,q as a,s as ue,R as _,v as ie,x as oe,y as ne,z as I,A as U,B as ce,C as ve,D as pe,E as de,O as he,F as ye,G as me,P as ge,H as fe,I as He,J as q}from"./app-CSnij9rT.js";const Re=["/","/demo/","/demo/page01.html","/demo/page02.html","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",h=B(Qe,[]),ke=()=>{const{queryHistoryCount:t}=q,l=t>0;return{enabled:l,queryHistory:h,addQueryHistory:r=>{l&&(h.value.length<t?h.value=Array.from(new Set([r,...h.value])):h.value=Array.from(new Set([r,...h.value.slice(0,t-1)])))},removeQueryHistory:r=>{h.value=[...h.value.slice(0,r),...h.value.slice(r+1)]}}},T=t=>Re[t.id]+("anchor"in t?`#${t.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:F}=q,y=B(we,[]),xe=()=>{const t=F>0;return{enabled:t,resultHistory:y,addResultHistory:l=>{if(t){const r={link:T(l),display:l.display};"header"in l&&(r.header=l.header),y.value.length<F?y.value=[r,...y.value]:y.value=[r,...y.value.slice(0,F-1)]}},removeResultHistory:l=>{y.value=[...y.value.slice(0,l),...y.value.slice(l+1)]}}},qe=t=>{const l=ce(),r=M(),C=ve(),i=P(!1),f=pe([]);return de(()=>{const{search:Q,terminate:m}=he(),k=()=>{f.value=[],i.value=!1},H=He(c=>{const R=c.join(" "),{searchFilter:S=d=>d,splitWord:D,suggestionsFilter:$,...g}=l.value;i.value=!0,R?Q(c.join(" "),r.value,g).then(d=>S(d,R,r.value,C.value)).then(d=>{f.value=d,i.value=!1}).catch(d=>{console.error(d),k()}):k()},q.searchDelay-q.suggestDelay);Y([t,r],([c])=>H(c),{immediate:!0}),ye(()=>{m()})}),{searching:i,results:f}};var Se=Z({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ee(),C=M(),i=se(ae),{enabled:f,addQueryHistory:Q,queryHistory:m,removeQueryHistory:k}=ke(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:S}=xe(),D=f||H,$=te(t,"queries"),{results:g,searching:d}=qe($),u=le({isQuery:!0,index:0}),v=P(0),p=P(0),j=E(()=>D&&(m.value.length>0||c.value.length>0)),A=E(()=>g.value.length>0),L=E(()=>g.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:m.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?m.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:g.value.length-1,p.value=L.value.contents.length-1},V=()=>{v.value=v.value<g.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<L.value.contents.length-1?p.value+=1:V()},N=()=>{p.value>0?p.value-=1:J()},b=e=>e.map(s=>me(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[o,x=""]=fe(s)?s[C.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",b([o,...n,x])))}return e.display.map(s=>a("div",b(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(t.isFocusing){if(A.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=L.value.contents[p.value];Q(t.queries.join(" ")),R(s),r.push(T(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",m.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!A.value:!j.value}],id:"search-pro-results"},t.queries.length?d.value?a(ue,{hint:i.value.searching}):A.value?a("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:s},o)=>{const x=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:x}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,X)=>{const O=x&&p.value===X;return a(_,{to:T(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{Q(t.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:a(n.type==="title"?ie:n.type==="heading"?oe:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:D?j.value?[f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),m.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),k(s)}})]))])):null,H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a(_,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>b(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:U,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null]:i.value.emptyHistory:i.value.emptyResult)}});export{Se as default};
