const{entries:$}=Object,{fromEntries:st}=Object,nt="ENTRIES",D="KEYS",W="VALUES",_="";class S{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=b(this._path);if(b(s)===_)return{done:!1,value:this.result()};const n=t.get(b(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=b(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>b(t)).filter(t=>t!==_).join("")}value(){return b(this._path).node.get(_)}result(){switch(this._type){case W:return this.value();case D:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const b=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(typeof t!="string")return n;const o=t.length+1,r=o+s,i=new Uint8Array(r*o).fill(s+1);for(let c=0;c<o;++c)i[c]=c;for(let c=1;c<r;++c)i[c*o]=c;return q(e,t,s,n,i,1,o,""),n},q=(e,t,s,n,o,r,i,c)=>{const l=r*i;t:for(const u of e.keys())if(u===_){const h=o[l-1];h<=s&&n.set(c,[e.get(u),h])}else{let h=r;for(let f=0;f<u.length;++f,++h){const m=u[f],g=i*h,y=g-i;let d=o[g];const a=Math.max(0,h-s-1),x=Math.min(i-1,h+s);for(let p=a;p<x;++p){const O=m!==t[p],C=o[y+p]+ +O,k=o[y+p+1]+1,z=o[g+p]+1,v=o[g+p+1]=Math.min(C,k,z);v<d&&(d=v)}if(d>s)continue t}q(e.get(u),t,s,n,o,h,i,c+u)}};class w{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=I(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,r]=L(n);for(const i of o.keys())if(i!==_&&i.startsWith(r)){const c=new Map;return c.set(i.slice(r.length),o.get(i)),new w(c,t)}}return new w(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,rt(this._tree,t)}entries(){return new S(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=F(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){return F(this._tree,t)?.has(_)??!1}keys(){return new S(this,D)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,E(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=E(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=E(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new S(this,W)}[Symbol.iterator](){return this.entries()}static from(t){const s=new w;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return w.from(Object.entries(t))}}const I=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),I(e.get(n),t.slice(n.length),s);return s.push([e,t]),I(void 0,"",s)},F=(e,t)=>{if(t.length===0||!e)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return F(e.get(s),t.slice(s.length))},E=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const r of e.keys())if(r!==_&&t[n]===r[0]){const i=Math.min(s-n,r.length);let c=1;for(;c<i&&t[n+c]===r[c];)++c;const l=e.get(r);if(c===r.length)e=l;else{const u=new Map;u.set(r.slice(c),l),e.set(t.slice(n,n+c),u),e.delete(r),e=u}n+=c;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},rt=(e,t)=>{const[s,n]=I(e,t);if(s!==void 0){if(s.delete(_),s.size===0)R(n);else if(s.size===1){const[o,r]=s.entries().next().value;A(n,o,r)}}},R=e=>{if(e.length===0)return;const[t,s]=L(e);if(t.delete(s),t.size===0)R(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&A(e.slice(0,-1),n,o)}},A=(e,t,s)=>{if(e.length===0)return;const[n,o]=L(e);n.set(o+t,s),n.delete(o)},L=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},ct=/[\n\r\p{Z}\p{P}]+/u,j="or",N="and",ut="and_not",ht=(e,t)=>{e.includes(t)||e.push(t)},B=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,M=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,H={[j]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:r,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),B(n.terms,r)}}return e},[N]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:r,terms:i,match:c}=t.get(n);B(o.terms,i),s.set(n,{score:o.score+r,terms:o.terms,match:Object.assign(o.match,c)})}return s},[ut]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,r)=>{const{k:i,b:c,d:l}=r;return Math.log(1+(s-t+.5)/(t+.5))*(l+e*(i+1)/(e+i*(1-c+c*n/o)))},at=e=>(t,s,n)=>({term:t,fuzzy:typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy??!1,prefix:typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0,termBoost:typeof e.boostTerm=="function"?e.boostTerm(t,s,n):1}),J=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){J(e,s,t,n);return}const o=e._index.fetch(n,lt),r=o.get(t),i=r?.get(s);!r||typeof i>"u"?J(e,s,t,n):i<=1?r.size<=1?o.delete(t):r.delete(s):r.set(s,i-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},gt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(ct),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{console?.[e]?.(t)},autoVacuum:!0},Y={combineWith:j,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},pt={combineWith:N,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},K={minDirtFactor:.1,minDirtCount:20},yt={..._t,...K},U=Symbol("*"),xt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,r]of e._documentIds){const i=n.boostDocument?n.boostDocument(r,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},Q=(e,t=j)=>{if(e.length===0)return new Map;const s=t.toLowerCase();if(!(s in H))throw new Error(`Invalid combination operator: ${t}`);return e.reduce(H[s])},T=(e,t,s,n,o,r,i,c,l,u=new Map)=>{if(r==null)return u;for(const h of Object.keys(i)){const f=i[h],m=e._fieldIds[h],g=r.get(m);if(g==null)continue;let y=g.size;const d=e._avgFieldLength[m];for(const a of g.keys()){if(!e._documentIds.has(a)){ft(e,m,a,s),y-=1;continue}const x=c?c(e._documentIds.get(a),s,e._storedFields.get(a)):1;if(!x)continue;const p=g.get(a),O=e._fieldLength.get(a)[m],C=dt(p,y,e._documentCount,O,d,l),k=n*o*f*x*C,z=u.get(a);if(z){z.score+=k,ht(z.terms,t);const v=G(z.match,s);v?v.push(h):z.match[s]=[h]}else u.set(a,{score:k,terms:[t],match:{[s]:[h]}})}}return u},zt=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields??e._options.fields).reduce((d,a)=>({...d,[a]:G(n.boost,a)||1}),{}),{boostDocument:r,weights:i,maxFuzzy:c,bm25:l}=n,{fuzzy:u,prefix:h}={...Y.weights,...i},f=e._index.get(t.term),m=T(e,t.term,t.term,1,t.termBoost,f,o,r,l);let g,y;if(t.prefix&&(g=e._index.atPrefix(t.term)),t.fuzzy){const d=t.fuzzy===!0?.2:t.fuzzy,a=d<1?Math.min(c,Math.round(t.term.length*d)):d;a&&(y=e._index.fuzzyGet(t.term,a))}if(g)for(const[d,a]of g){const x=d.length-t.term.length;if(!x)continue;y?.delete(d);const p=h*d.length/(d.length+.3*x);T(e,t.term,d,p,t.termBoost,a,o,r,l,m)}if(y)for(const d of y.keys()){const[a,x]=y.get(d);if(!x)continue;const p=u*d.length/(d.length+x);T(e,t.term,d,p,t.termBoost,a,o,r,l,m)}return m},X=(e,t,s={})=>{if(t===U)return xt(e,s);if(typeof t!="string"){const h={...s,...t,queries:void 0},f=t.queries.map(m=>X(e,m,h));return Q(f,h.combineWith)}const{tokenize:n,processTerm:o,searchOptions:r}=e._options,i={tokenize:n,processTerm:o,...r,...s},{tokenize:c,processTerm:l}=i,u=c(t).flatMap(h=>l(h)).filter(h=>!!h).map(at(i)).map(h=>zt(e,h,i));return Q(u,i.combineWith)},Z=(e,t,s={})=>{const{searchOptions:n}=e._options,o={...n,...s},r=X(e,t,s),i=[];for(const[c,{score:l,terms:u,match:h}]of r){const f=u.length||1,m={id:e._documentIds.get(c),score:l*f,terms:Object.keys(h),queryTerms:u,match:h};Object.assign(m,e._storedFields.get(c)),(o.filter==null||o.filter(m))&&i.push(m)}return t===U&&o.boostDocument==null||i.sort(P),i},wt=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:r,terms:i}of Z(e,t,s)){const c=i.join(" "),l=n.get(c);l!=null?(l.score+=r,l.count+=1):n.set(c,{score:r,terms:i,count:1})}const o=[];for(const[r,{score:i,terms:c,count:l}]of n)o.push({suggestion:r,terms:c,score:i/l});return o.sort(P),o};class bt{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(!t?.fields)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...gt,...t,autoVacuum:s,searchOptions:{...Y,...t.searchOptions},autoSuggestOptions:{...pt,...t.autoSuggestOptions}},this._index=new w,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=K,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[r,i]of n)o[r]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,version:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const vt=e=>new bt(e),kt=({documentCount:e,nextId:t,fieldIds:s,averageFieldLength:n,dirtCount:o,version:r},i)=>{if(r!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const c=vt(i);return c._documentCount=e,c._nextId=t,c._idToShortId=new Map,c._fieldIds=s,c._avgFieldLength=n,c._dirtCount=o??0,c._index=new w,c},It=(e,t)=>{const{index:s,documentIds:n,fieldLength:o,storedFields:r}=e,i=kt(e,t);i._documentIds=M(n),i._fieldLength=M(o),i._storedFields=M(r);for(const[c,l]of i._documentIds)i._idToShortId.set(l,c);for(const[c,l]of s){const u=new Map;for(const h of Object.keys(l))u.set(parseInt(h,10),M(l[h]));i._index.set(c,u)}return i},V=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let r=0,i=0;const c=(u,h=!1)=>{let f;i===0?f=u.length>20?`… ${u.slice(-20)}`:u:h?f=u.length+i>100?`${u.slice(0,100-i)}… `:u:f=u.length>20?`${u.slice(0,20)} … ${u.slice(-20)}`:u,f&&o.push(f),i+=f.length,h||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let l=s.indexOf(n,r);if(l===-1)return null;for(;l>=0;){const u=l+n.length;if(c(e.slice(r,l)),r=u,i>100)break;l=s.indexOf(n,r)}return i<100&&c(e.slice(r),!0),o},Mt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),Ot=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),tt=(e,t,s={})=>{const n={};return Z(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:r,terms:i,score:c}=o,l=r.includes("@"),u=r.includes("#"),[h,f]=r.split(/[#@]/),m=Number(h),g=i.sort((d,a)=>d.length-a.length).filter((d,a)=>i.slice(a+1).every(x=>!x.includes(d))),{contents:y}=n[m]??={title:"",contents:[]};if(l)y.push([{type:"customField",id:m,index:f,display:g.map(d=>o.c.map(a=>V(a,d))).flat().filter(d=>d!==null)},c]);else{const d=g.map(a=>V(o.h,a)).filter(a=>a!==null);if(d.length&&y.push([{type:u?"heading":"title",id:m,...u&&{anchor:f},display:d},c]),"t"in o&&o.t)for(const a of o.t){const x=g.map(p=>V(a,p)).filter(p=>p!==null);x.length&&y.push([{type:"text",id:m,...u&&{anchor:f},display:x},c])}}}),$(n).sort(([,o],[,r])=>"max"==="total"?Mt(o,r):Ot(o,r)).map(([o,{title:r,contents:i}])=>{if(!r){const c=it(t,o);c&&(r=c.h)}return{title:r,contents:i.map(([c])=>c)}})},et=(e,t,s={})=>{const n=wt(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},Ct=st($(JSON.parse("{\"/\":{\"documentCount\":14,\"nextId\":14,\"documentIds\":{\"0\":\"0\",\"1\":\"1\",\"2\":\"2\",\"3\":\"2#latex\",\"4\":\"2#badge--footnote\",\"5\":\"2#container\",\"6\":\"2#image\",\"7\":\"2#mermaid\",\"8\":\"2#copy-code\",\"9\":\"2#tabs\",\"10\":\"3\",\"11\":\"3#install\",\"12\":\"3#demo-for-container\",\"13\":\"4\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[2],\"1\":[1],\"2\":[4],\"3\":[1,1],\"4\":[2,8],\"5\":[1,6],\"6\":[1,1],\"7\":[1],\"8\":[2,16],\"9\":[1,2],\"10\":[4],\"11\":[1,6],\"12\":[3,44],\"13\":[1,3]},\"averageFieldLength\":[1.7857142857142858,6.636734693877551],\"storedFields\":{\"0\":{\"h\":\"Hello VuePress\"},\"1\":{\"h\":\"Demo\"},\"2\":{\"h\":\"Demo for page-01\"},\"3\":{\"h\":\"LaTeX\",\"t\":[\"LATE​X∭​Σ​\"]},\"4\":{\"h\":\"Badge & Footnote\",\"t\":[\" All of VuePress2 is ready![1]\",\"code is code!\"]},\"5\":{\"h\":\"\",\"t\":[\"Warning\",\"Solid is not Solid.js!\"]},\"6\":{\"h\":\"Image\",\"t\":[\"favicon\"]},\"7\":{\"h\":\"Mermaid\"},\"8\":{\"h\":\"Copy Code\",\"t\":[\"#include <iostream> int main(int argc, char** argv) { std::cout << \\\"Hello World!\\\" << std::endl; return 0; }\"]},\"9\":{\"h\":\"Tabs\",\"t\":[\"footnote! ↩︎\"]},\"10\":{\"h\":\"Demo for page-02\"},\"11\":{\"h\":\"Install\",\"t\":[\"Install VuePress Plugin Markdown Enhance:\"]},\"12\":{\"h\":\"Demo for container\",\"t\":[\"Tips\",\"Get the version of PyTorch:\",\"import logging import torch print(\\\"PyTorch:\\\", torch.__version__) device = None if torch.cuda.is_available(): device = torch.device(\\\"cuda\\\") logging.log(\\\"CUDA:\\\", torch.version.cuda) logging.log(\\\"cuDNN:\\\", torch.backends.cudnn.version()) else: device = torch.device(\\\"cpu\\\") logging.warn( \\\"CUDA is not available, using CPU instead! Check your CUDA installation!\\\" )\",\"Details\",\"Install pnpm:\",\"npm i -g pnpm\",\"or use corepack:\",\"corepack prepare pnpm@latest --activate\"]},\"13\":{\"h\":\"\",\"t\":[\"404 Not Found\"]}},\"dirtCount\":0,\"index\":[[\"404\",{\"1\":{\"13\":1}}],[\"use\",{\"1\":{\"12\":1}}],[\"using\",{\"1\":{\"12\":1}}],[\"or\",{\"1\":{\"12\":1}}],[\"of\",{\"1\":{\"4\":1,\"12\":1}}],[\"g\",{\"1\":{\"12\":1}}],[\"get\",{\"1\":{\"12\":1}}],[\"npm\",{\"1\":{\"12\":1}}],[\"none\",{\"1\":{\"12\":1}}],[\"not\",{\"1\":{\"5\":1,\"12\":1,\"13\":1}}],[\"your\",{\"1\":{\"12\":1}}],[\"else\",{\"1\":{\"12\":1}}],[\"enhance\",{\"1\":{\"11\":1}}],[\"endl\",{\"1\":{\"8\":1}}],[\"backends\",{\"1\":{\"12\":1}}],[\"badge\",{\"0\":{\"4\":1}}],[\"=\",{\"1\":{\"12\":3}}],[\"details\",{\"1\":{\"12\":1}}],[\"device\",{\"1\":{\"12\":5}}],[\"demo\",{\"0\":{\"1\":1,\"2\":1,\"10\":1,\"12\":1}}],[\"log\",{\"1\":{\"12\":2}}],[\"logging\",{\"1\":{\"12\":4}}],[\"latest\",{\"1\":{\"12\":1}}],[\"late​x∭​σ​\",{\"1\":{\"3\":1}}],[\"latex\",{\"0\":{\"3\":1}}],[\"version\",{\"1\":{\"12\":4}}],[\"vuepress2\",{\"1\":{\"4\":1}}],[\"vuepress\",{\"0\":{\"0\":1},\"1\":{\"11\":1}}],[\"torch\",{\"1\":{\"12\":7}}],[\"the\",{\"1\":{\"12\":1}}],[\"tips\",{\"1\":{\"12\":1}}],[\"tabs\",{\"0\":{\"9\":1}}],[\"prepare\",{\"1\":{\"12\":1}}],[\"print\",{\"1\":{\"12\":1}}],[\"pnpm\",{\"1\":{\"12\":3}}],[\"pytorch\",{\"1\":{\"12\":2}}],[\"plugin\",{\"1\":{\"11\":1}}],[\"page\",{\"0\":{\"2\":1,\"10\":1}}],[\"↩︎\",{\"1\":{\"9\":1}}],[\"02\",{\"0\":{\"10\":1}}],[\"0\",{\"1\":{\"8\":1}}],[\"01\",{\"0\":{\"2\":1}}],[\"return\",{\"1\":{\"8\":1}}],[\"ready\",{\"1\":{\"4\":1}}],[\"warn\",{\"1\":{\"12\":1}}],[\"warning\",{\"1\":{\"5\":1}}],[\"world\",{\"1\":{\"8\":1}}],[\"<<\",{\"1\":{\"8\":2}}],[\"<iostream>\",{\"1\":{\"8\":1}}],[\"std\",{\"1\":{\"8\":2}}],[\"solid\",{\"1\":{\"5\":2}}],[\"check\",{\"1\":{\"12\":1}}],[\"char\",{\"1\":{\"8\":1}}],[\"cpu\",{\"1\":{\"12\":2}}],[\"cudnn\",{\"1\":{\"12\":2}}],[\"cuda\",{\"1\":{\"12\":6}}],[\"corepack\",{\"1\":{\"12\":2}}],[\"container\",{\"0\":{\"12\":1}}],[\"cout\",{\"1\":{\"8\":1}}],[\"copy\",{\"0\":{\"8\":1}}],[\"code\",{\"0\":{\"8\":1},\"1\":{\"4\":2}}],[\"activate\",{\"1\":{\"12\":1}}],[\"available\",{\"1\":{\"12\":2}}],[\"argv\",{\"1\":{\"8\":1}}],[\"argc\",{\"1\":{\"8\":1}}],[\"all\",{\"1\":{\"4\":1}}],[\"markdown\",{\"1\":{\"11\":1}}],[\"main\",{\"1\":{\"8\":1}}],[\"mermaid\",{\"0\":{\"7\":1}}],[\"favicon\",{\"1\":{\"6\":1}}],[\"found\",{\"1\":{\"13\":1}}],[\"footnote\",{\"0\":{\"4\":1},\"1\":{\"9\":1}}],[\"for\",{\"0\":{\"2\":1,\"10\":1,\"12\":1}}],[\"i\",{\"1\":{\"12\":1}}],[\"if\",{\"1\":{\"12\":1}}],[\"import\",{\"1\":{\"12\":2}}],[\"image\",{\"0\":{\"6\":1}}],[\"instead\",{\"1\":{\"12\":1}}],[\"installation\",{\"1\":{\"12\":1}}],[\"install\",{\"0\":{\"11\":1},\"1\":{\"11\":1,\"12\":1}}],[\"int\",{\"1\":{\"8\":2}}],[\"include\",{\"1\":{\"8\":1}}],[\"is\",{\"1\":{\"4\":2,\"5\":1,\"12\":2}}],[\"js\",{\"1\":{\"5\":1}}],[\"1\",{\"1\":{\"4\":1}}],[\"hello\",{\"0\":{\"0\":1},\"1\":{\"8\":1}}]],\"version\":2}}")).map(([e,t])=>[e,It(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const r=Ct[s];e==="suggest"?self.postMessage([e,o,et(t,r,n)]):e==="search"?self.postMessage([e,o,tt(t,r,n)]):self.postMessage({suggestions:[e,o,et(t,r,n)],results:[e,o,tt(t,r,n)]})};
//# sourceMappingURL=index.js.map
