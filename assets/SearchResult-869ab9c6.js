import{u as te,a as F,k as ae,b as oe,P as b,B as le,c as ne}from"./app-4ac8d320.js";import{r as L,h as M,c as se,u as re,L as ie,aa as ce,o as ue,n as de,j as o,ab as K,z as ve,K as he,i as pe}from"./framework-d3922052.js";function fe(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}else return Array.from(t)}var R=!1;if(typeof window<"u"){var P={get passive(){R=!0}};window.addEventListener("testPassive",null,P),window.removeEventListener("testPassive",null,P)}var N=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],T=!1,z=-1,S=void 0,H=void 0,Y=function(e){return w.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(e))})},O=function(e){var a=e||window.event;return Y(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},me=function(e){if(H===void 0){var a=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;a&&l>0&&(H=document.body.style.paddingRight,document.body.style.paddingRight=l+"px")}S===void 0&&(S=document.body.style.overflow,document.body.style.overflow="hidden")},ye=function(){H!==void 0&&(document.body.style.paddingRight=H,H=void 0),S!==void 0&&(document.body.style.overflow=S,S=void 0)},ge=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},we=function(e,a){var l=e.targetTouches[0].clientY-z;return Y(e.target)?!1:a&&a.scrollTop===0&&l>0||ge(a)&&l<0?O(e):(e.stopPropagation(),!0)},Le=function(e,a){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(n){return n.targetElement===e})){var l={targetElement:e,options:a||{}};w=[].concat(fe(w),[l]),N?(e.ontouchstart=function(n){n.targetTouches.length===1&&(z=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&we(n,e)},T||(document.addEventListener("touchmove",O,R?{passive:!1}:void 0),T=!0)):me(a)}},Se=function(){N?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),T&&(document.removeEventListener("touchmove",O,R?{passive:!1}:void 0),T=!1),z=-1):ye(),w=[]};const He="eJx1kM0KgkAUhV9F7qKV5s/SZUUUFLiICKLFlDcV5iecKwTiuzdCOWrMZpg553xz4LQQQvo9qCKOkMIOOVfeucGsRq3Bh4eShJI0pNdb50OYo1ATYmMEV+7FCoziZUmCj5HMyEEUT6kWSmQ51sY/sBNejKt5U5gnZ4Tvv4pRfsXyAr2Ft1WKpCK06L13gqfVnX+sjcEqae4D3Gd/kpM7Yi1YlVtKDMKEmY2SOEZJnKPspSbGuS2qBmFW1HUfvRmdBQ==";const j=()=>o(b,{name:"close"},()=>o("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));j.displayName="CloseIcon";const q=()=>o(b,{name:"heading"},()=>o("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));q.displayName="HeadingIcon";const Q=()=>o(b,{name:"heart"},()=>o("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));Q.displayName="HeartIcon";const W=()=>o(b,{name:"history"},()=>o("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));W.displayName="HistoryIcon";const Z=()=>o(b,{name:"title"},()=>o("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Z.displayName="TitleIcon";const be={},Ce=300,U=5,ke={"/":{cancel:"Cancel",placeholder:"Search",search:"Search",select:"to select",navigate:"to navigate",exit:"to exit",history:"Search History",emptyHistory:"Empty Search History",emptyResult:"No results found",loading:"Loading search indexes..."}},Me="search-pro-history-results",y=te(Me,[]),Te=()=>({history:y,addHistory:t=>{y.value.length<U?y.value=[t,...y.value]:y.value=[t,...y.value.slice(0,U-1)]},removeHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}),Oe=L(He),Ae=M(()=>JSON.parse(le(Oe.value))),k=(t,e)=>{const a=t.toLowerCase(),l=e.toLowerCase(),n=[];let r=0,v=0;const h=(s,p=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:p?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&n.push(i),v+=i.length,p||(n.push(["strong",e]),v+=e.length,v>=100&&n.push(" …"))};let f=a.indexOf(l,r);if(f===-1)return null;for(;f>=0;){const s=f+l.length;if(h(t.slice(r,f)),r=s,v>100)break;f=a.indexOf(l,r)}return v<100&&h(t.slice(r),!0),n},V=t=>t.reduce((e,{type:a})=>e+(a==="title"?50:a==="heading"?20:a==="custom"?10:1),0),Be=(t,e)=>{var a;const l={};for(const[n,r]of Object.entries(e)){const v=((a=e[n.replace(/\/[^\\]*$/,"")])==null?void 0:a.title)||"",h=`${v?`${v} > `:""}${r.title}`,f=k(r.title,t);f&&(l[h]=[...l[h]||[],{type:"title",path:n,display:f}]),r.customFields&&Object.entries(r.customFields).forEach(([s,p])=>{p.forEach(i=>{const c=k(i,t);c&&(l[h]=[...l[h]||[],{type:"custom",path:n,index:s,display:c}])})});for(const s of r.contents){const p=k(s.header,t);p&&(l[h]=[...l[h]||[],{type:"heading",path:n+(s.slug?`#${s.slug}`:""),display:p}]);for(const i of s.contents){const c=k(i,t);c&&(l[h]=[...l[h]||[],{type:"content",header:s.header,path:n+(s.slug?`#${s.slug}`:""),display:c}])}}}return Object.keys(l).sort((n,r)=>V(l[n])-V(l[r])).map(n=>({title:n,contents:l[n]}))},Ee=t=>{const e=F(),a=L([]),l=M(()=>Ae.value[e.value]),n=ne(r=>{a.value=r?Be(r,l.value):[]},Ce);return ve([t,e],()=>{n(t.value)}),a};var $e=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const a=re(),l=ie(),n=F(),r=ae(ke),{history:v,addHistory:h,removeHistory:f}=Te(),s=ce(t,"query"),p=Ee(s),i=L(0),c=L(0),$=L(),A=M(()=>p.value.length>0),B=M(()=>p.value[i.value]||null),G=()=>{i.value=i.value>0?i.value-1:p.value.length-1,c.value=B.value.contents.length-1},J=()=>{i.value=i.value<p.value.length-1?i.value+1:0,c.value=0},X=()=>{c.value<B.value.contents.length-1?c.value=c.value+1:J()},_=()=>{c.value>0?c.value=c.value-1:G()},x=u=>u.map(d=>pe(d)?d:o(d[0],d[1])),D=u=>{if(u.type==="custom"){const d=be[u.index]||"$content",[g,C=""]=he(d)?d[n.value].split("$content"):d.split("$content");return x([g,...u.display,C])}return x(u.display)},E=()=>{i.value=0,c.value=0,e("updateQuery",""),e("close")};return ue(()=>{oe("keydown",u=>{if(A.value){if(u.key==="ArrowUp")_();else if(u.key==="ArrowDown")X();else if(u.key==="Enter"){const d=B.value.contents[c.value];l.path!==d.path&&(h(d),a.push(d.path),E())}}}),Le($.value,{reserveScrollBarGap:!0})}),de(()=>{Se()}),()=>o("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!A.value}],ref:$},s.value===""?v.value.length?o("ul",{class:"search-pro-result-list"},o("li",{class:"search-pro-result-list-item"},[o("div",{class:"search-pro-result-title"},r.value.history),v.value.map((u,d)=>o(K,{to:u.path,class:["search-pro-result-item",{active:c.value===d}],onClick:()=>{console.log("click"),E()}},()=>[o(W,{class:"search-pro-result-type"}),o("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?o("div",{class:"content-header"},u.header):null,o("div",D(u))]),o("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),f(d)}},o(j))]))])):r.value.emptyHistory:A.value?o("ul",{class:"search-pro-result-list"},p.value.map(({title:u,contents:d},g)=>{const C=i.value===g;return o("li",{class:["search-pro-result-list-item",{active:C}]},[o("div",{class:"search-pro-result-title"},u||"Documentation"),d.map((m,ee)=>{const I=C&&c.value===ee;return o(K,{to:m.path,class:["search-pro-result-item",{active:I,"aria-selected":I}],onClick:()=>{h(m),E()}},()=>[m.type==="content"?null:o(m.type==="title"?Z:m.type==="heading"?q:Q,{class:"search-pro-result-type"}),o("div",{class:"search-pro-result-content"},[m.type==="content"&&m.header?o("div",{class:"content-header"},m.header):null,o("div",D(m))])])})])})):r.value.emptyResult)}});export{$e as default};