import{c as B}from"./chunk-4KE642ED-B_-N6-wZ.js";import{p as C}from"./treemap-KMMF4GRG-DK74C3S3-DuB5yN42.js";import{m as f,L as u,a6 as P,R as z,p as w,N as F,H as S,$ as W,j as D,G as E,U as T,h as R,k as L,P as A}from"./mermaid.esm.min-CXuFUijc.js";import"./chunk-5ZJXQJOJ-nmS8e6MP.js";import"./app-B92QwiNG.js";var H=L.packet,m,$=(m=class{constructor(){this.packet=[],this.setAccTitle=F,this.getAccTitle=S,this.setDiagramTitle=W,this.getDiagramTitle=D,this.getAccDescription=E,this.setAccDescription=T}getConfig(){let t=u({...H,...R().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){A(),this.packet=[]}},f(m,"PacketDB"),m),M=1e4,N=f((e,t)=>{B(e,t);let i=-1,r=[],l=1,{bitsPerRow:n}=t.getConfig();for(let{start:a,end:s,bits:c,label:d}of e.blocks){if(a!==void 0&&s!==void 0&&s<a)throw new Error(`Packet block ${a} - ${s} is invalid. End must be greater than start.`);if(a??(a=i+1),a!==i+1)throw new Error(`Packet block ${a} - ${s??a} is not contiguous. It should start from ${i+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(s??(s=a+(c??1)-1),c??(c=s-a+1),i=s,w.debug(`Packet block ${a} - ${i} with label ${d}`);r.length<=n+1&&t.getPacket().length<M;){let[p,o]=j({start:a,end:s,bits:c,label:d},l,n);if(r.push(p),p.end+1===l*n&&(t.pushWord(r),r=[],l++),!o)break;({start:a,end:s,bits:c,label:d}=o)}}t.pushWord(r)},"populate"),j=f((e,t,i)=>{if(e.start===void 0)throw new Error("start should have been set during first phase");if(e.end===void 0)throw new Error("end should have been set during first phase");if(e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*i)return[e,void 0];let r=t*i-1,l=t*i;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:l,end:e.end,label:e.label,bits:e.end-l}]},"getNextFittingBlock"),y={parser:{yy:void 0},parse:f(async e=>{var r;let t=await C("packet",e),i=(r=y.parser)==null?void 0:r.yy;if(!(i instanceof $))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");w.debug(t),N(t,i)},"parse")},G=f((e,t,i,r)=>{let l=r.db,n=l.getConfig(),{rowHeight:a,paddingY:s,bitWidth:c,bitsPerRow:d}=n,p=l.getPacket(),o=l.getDiagramTitle(),h=a+s,b=h*(p.length+1)-(o?0:a),k=c*d+2,g=P(t);g.attr("viewbox",`0 0 ${k} ${b}`),z(g,b,k,n.useMaxWidth);for(let[x,v]of p.entries())Y(g,v,x,n);g.append("text").text(o).attr("x",k/2).attr("y",b-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),Y=f((e,t,i,{rowHeight:r,paddingX:l,paddingY:n,bitWidth:a,bitsPerRow:s,showBits:c})=>{let d=e.append("g"),p=i*(r+n)+n;for(let o of t){let h=o.start%s*a+1,b=(o.end-o.start+1)*a-l;if(d.append("rect").attr("x",h).attr("y",p).attr("width",b).attr("height",r).attr("class","packetBlock"),d.append("text").attr("x",h+b/2).attr("y",p+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(o.label),!c)continue;let k=o.end===o.start,g=p-2;d.append("text").attr("x",h+(k?b/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(o.start),k||d.append("text").attr("x",h+b).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(o.end)}},"drawWord"),U={draw:G},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},I=f(({packet:e}={})=>{let t=u(q,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles"),K={parser:y,get db(){return new $},renderer:U,styles:I};export{K as diagram};
