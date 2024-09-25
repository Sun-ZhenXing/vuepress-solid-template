import{c as j}from"./chunk-4KE642ED-Ck8zBgZQ.js";import{p as G}from"./gitGraph-YCYPL57B-QPBUOVDP-efOoyyML.js";import{i as I,m as r,v as K,J as y,a7 as V,Q as X,j as Y,a5 as q,a8 as H,a9 as L,aa as U,k as Z,L as _,A as ee,w as te,B as ae,F as ie,M as re}from"./mermaid.esm.min-Cwlv6sFc.js";import"./chunk-BKDDFIKN-DaqMBTpS.js";import"./app-CYWO8Nis.js";var O=I.pie,D={sections:new Map,showData:!1,config:O},u=D.sections,v=D.showData,le=structuredClone(O),se=r(()=>structuredClone(le),"getConfig"),oe=r(()=>{u=new Map,v=D.showData,K()},"clear"),ne=r(({label:e,value:a})=>{u.has(e)||(u.set(e,a),y.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),pe=r(()=>u,"getSections"),de=r(e=>{v=e},"setShowData"),ce=r(()=>v,"getShowData"),R={getConfig:se,clear:oe,setDiagramTitle:_,getDiagramTitle:ee,setAccTitle:te,getAccTitle:ae,setAccDescription:ie,getAccDescription:re,addSection:ne,getSections:pe,setShowData:de,getShowData:ce},fe=r((e,a)=>{j(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ge={parse:r(async e=>{let a=await G("pie",e);y.debug(a),fe(a,R)},"parse")},me=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ue=me,he=r(e=>{let a=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return V().value(l=>l.value)(a)},"createPieArcs"),xe=r((e,a,l,h)=>{y.debug(`rendering pie chart
`+e);let d=h.db,T=X(),C=Y(d.getConfig(),T.pie),k=40,s=18,c=4,o=450,x=o,S=q(a),n=S.append("g");n.attr("transform","translate("+x/2+","+o/2+")");let{themeVariables:i}=T,[b]=H(i.pieOuterStrokeWidth);b??(b=2);let A=C.textPosition,f=Math.min(x,o)/2-k,B=L().innerRadius(0).outerRadius(f),W=L().innerRadius(f*A).outerRadius(f*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",f+b/2).attr("class","pieOuterCircle");let M=d.getSections(),w=he(M),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],p=U(P);n.selectAll("mySlices").data(w).enter().append("path").attr("d",B).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let z=0;M.forEach(t=>{z+=t}),n.selectAll("mySlices").data(w).enter().append("text").text(t=>(t.data.value/z*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-(o-50)/2).attr("class","pieTitleText");let $=n.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,g)=>{let m=s+c,E=m*p.domain().length/2,J=12*s,N=g*m-E;return"translate("+J+","+N+")"});$.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),$.data(w).append("text").attr("x",s+c).attr("y",s-c).text(t=>{let{label:g,value:m}=t.data;return d.getShowData()?`${g} [${m}]`:g});let Q=Math.max(...$.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),F=x+k+s+c+Q;S.attr("viewBox",`0 0 ${F} ${o}`),Z(S,o,F,C.useMaxWidth)},"draw"),Se={draw:xe},Te={parser:ge,db:R,renderer:Se,styles:ue};export{Te as diagram};
