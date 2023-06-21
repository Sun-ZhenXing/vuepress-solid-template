const nt="ENTRIES",T="KEYS",V="VALUES",F="";class D{constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case V:return this.value();case T:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ot=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return W(e,t,s,n,i,1,o,""),n},W=(e,t,s,n,o,u,i,r)=>{const h=u*i;t:for(const c of e.keys())if(c===F){const a=o[h-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let l=0;l<c.length;++l,++a){const p=c[l],f=i*a,g=f-i;let d=o[f];const m=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let _=m;_<y;++_){const b=p!==t[_],z=o[g+_]+ +b,A=o[g+_+1]+1,w=o[f+_]+1,L=o[f+_+1]=Math.min(z,A,w);L<d&&(d=L)}if(d>s)continue t}W(e.get(c),t,s,n,o,a,i,r+c)}};class C{constructor(t=new Map,s=""){this._size=void 0,this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=I(n);for(const i of o.keys())if(i!==F&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ut(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ot(this._tree,t,s)}get(t){const s=O(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=O(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,T)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,M(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=M(this._tree,t);let o=n.get(F);return o===void 0&&n.set(F,o=s()),o}values(){return new D(this,V)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},O=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return O(e.get(s),t.slice(s.length))},M=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==F&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const h=e.get(u);if(r===u.length)e=h;else{const c=new Map;c.set(u.slice(r),h),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ut=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)R(n);else if(s.size===1){const[o,u]=s.entries().next().value;$(n,o,u)}}},R=e=>{if(e.length===0)return;const[t,s]=I(e);if(t.delete(s),t.size===0)R(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==F&&$(e.slice(0,-1),n,o)}},$=(e,t,s)=>{if(e.length===0)return;const[n,o]=I(e);n.set(o+t,s),n.delete(o)},I=e=>e[e.length-1],it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",P="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},q=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},G=({score:e},{score:t})=>t-e,lt=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},N=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),q(n.terms,u)}}return e},[P]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);q(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,o,u)=>{const{k:i,b:r,d:h}=u;return Math.log(1+(s-t+.5)/(t+.5))*(h+e*(i+1)/(e+i*(1-r+r*n/o)))},dt=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},ft={k:1.2,b:.7,d:.5},gt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof(console==null?void 0:console[e])=="function"&&console[e](t)},autoVacuum:!0},H={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:ft},mt={combineWith:P,prefix:(e,t,s)=>t===s.length-1},pt={batchSize:1e3,batchWait:10},J={minDirtFactor:.1,minDirtCount:20},Ft={...pt,...J};class _t{constructor(t){if((t==null?void 0:t.fields)==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?Ft:t.autoVacuum;this._options={...gt,...t,autoVacuum:s,searchOptions:{...H,...t.searchOptions||{}},autoSuggestOptions:{...mt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=J,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const yt=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},U=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},At=(e,t,s,n)=>{if(!e._index.has(n)){U(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?U(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(ht[s])||new Map},B=(e,t,s,n,o,u,i,r,h=new Map)=>{if(o==null)return h;for(const c of Object.keys(u)){const a=u[c],l=e._fieldIds[c],p=o.get(l);if(p==null)continue;let f=p.size;const g=e._avgFieldLength[l];for(const d of p.keys()){if(!e._documentIds.has(d)){At(e,l,d,s),f-=1;continue}const m=i?i(e._documentIds.get(d),s,e._storedFields.get(d)):1;if(!m)continue;const y=p.get(d),_=e._fieldLength.get(d)[l],b=at(y,f,e._documentCount,_,g,r),z=n*a*m*b,A=h.get(d);if(A){A.score+=z,ct(A.terms,t);const w=N(A.match,s);w?w.push(c):A.match[s]=[c]}else h.set(d,{score:z,terms:[t],match:{[s]:[c]}})}}return h},Ct=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((d,m)=>({...d,[m]:N(n.boost,m)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:h}=n,{fuzzy:c,prefix:a}={...H.weights,...i},l=e._index.get(t.term),p=B(e,t.term,t.term,1,l,o,u,h);let f,g;if(t.prefix&&(f=e._index.atPrefix(t.term)),t.fuzzy){const d=t.fuzzy===!0?.2:t.fuzzy,m=d<1?Math.min(r,Math.round(t.term.length*d)):d;m&&(g=e._index.fuzzyGet(t.term,m))}if(f)for(const[d,m]of f){const y=d.length-t.term.length;if(!y)continue;g==null||g.delete(d);const _=a*d.length/(d.length+.3*y);B(e,t.term,d,_,m,o,u,h,p)}if(g)for(const d of g.keys()){const[m,y]=g.get(d);if(!y)continue;const _=c*d.length/(d.length+y);B(e,t.term,d,_,m,o,u,h,p)}return p},K=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},l=t.queries.map(p=>K(e,p,a));return Y(l,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:h}=i,c=r(t).flatMap(a=>h(a)).filter(a=>!!a).map(dt(i)).map(a=>Ct(e,a,i));return Y(c,i.combineWith)},X=(e,t,s={})=>{const n=K(e,t,s),o=[];for(const[u,{score:i,terms:r,match:h}]of n){const c=r.length,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(h),match:h};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return o.sort(G),o},Et=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of X(e,t,s)){const r=i.join(" "),h=n.get(r);h!=null?(h.score+=u,h.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:h}]of n)o.push({suggestion:u,terms:r,score:i/h});return o.sort(G),o},zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:h,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const l=new _t(a);l._documentCount=t,l._nextId=s,l._documentIds=k(n),l._idToShortId=new Map,l._fieldIds=o,l._fieldLength=k(u),l._avgFieldLength=i,l._storedFields=k(r),l._dirtCount=h||0,l._index=new C;for(const[p,f]of l._documentIds)l._idToShortId.set(f,p);for(const[p,f]of e){const g=new Map;for(const d of Object.keys(f)){let m=f[d];c===1&&(m=m.ds),g.set(parseInt(d,10),k(m))}l._index.set(p,g)}return l},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let l="";i===0?l=c.length>20?`… ${c.slice(-20)}`:c:a?l=c.length+i>100?`${c.slice(0,100-i)}… `:c:l=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,l&&o.push(l),i+=l.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let h=s.indexOf(n,u);if(h===-1)return null;for(;h>=0;){const c=h+n.length;if(r(e.slice(u,h)),u=c,i>100)break;h=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return X(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(o=>{const{id:u,terms:i,score:r}=o,h=u.includes("@"),c=u.includes("#"),[a,l]=u.split(/[#@]/),{contents:p}=n[a]??={title:"",contents:[]};if(h)p.push([{type:"customField",key:a,index:l,display:i.map(f=>o.c.map(g=>j(g,f))).flat().filter(f=>f!==null)},r]);else{const f=i.map(g=>j(o.h,g)).filter(g=>g!==null);if(f.length&&p.push([{type:c?"heading":"title",key:a,...c&&{anchor:l},display:f},r]),"t"in o)for(const g of o.t){const d=i.map(m=>j(g,m)).filter(m=>m!==null);d.length&&p.push([{type:"text",key:a,...c&&{anchor:l},display:d},r])}}}),Q(n).sort(([,o],[,u])=>"max"==="total"?xt(o,u):kt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=yt(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Et(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":12,\"nextId\":12,\"documentIds\":{\"0\":\"v-8daa1a0e\",\"1\":\"v-1473bf53\",\"2\":\"v-576ac0d6\",\"3\":\"v-576ac0d6#latex\",\"4\":\"v-576ac0d6#badge-footnote\",\"5\":\"v-576ac0d6#container\",\"6\":\"v-576ac0d6#image\",\"7\":\"v-576ac0d6#mermaid\",\"8\":\"v-576ac0d6#copy-code\",\"9\":\"v-591f9975\",\"10\":\"v-591f9975#install\",\"11\":\"v-591f9975#demo-for-container\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[2],\"1\":[1],\"2\":[2],\"3\":[1],\"4\":[2],\"5\":[1],\"6\":[1],\"7\":[1],\"8\":[2],\"9\":[2],\"10\":[1],\"11\":[3]},\"averageFieldLength\":[1.5833333333333333],\"storedFields\":{\"0\":{\"h\":\"Hello VuePress\"},\"1\":{\"h\":\"Demo\"},\"2\":{\"h\":\"Page-01\"},\"3\":{\"h\":\"LaTeX\"},\"4\":{\"h\":\"Badge & Footnote\"},\"5\":{\"h\":\"Container\"},\"6\":{\"h\":\"Image\"},\"7\":{\"h\":\"Mermaid\"},\"8\":{\"h\":\"Copy Code\"},\"9\":{\"h\":\"Page-02\"},\"10\":{\"h\":\"Install\"},\"11\":{\"h\":\"Demo for container\"}},\"dirtCount\":0,\"index\":[[\"for\",{\"0\":{\"11\":1}}],[\"footnote\",{\"0\":{\"4\":1}}],[\"install\",{\"0\":{\"10\":1}}],[\"image\",{\"0\":{\"6\":1}}],[\"02\",{\"0\":{\"9\":1}}],[\"01\",{\"0\":{\"2\":1}}],[\"code\",{\"0\":{\"8\":1}}],[\"copy\",{\"0\":{\"8\":1}}],[\"container\",{\"0\":{\"5\":1,\"11\":1}}],[\"mermaid\",{\"0\":{\"7\":1}}],[\"badge\",{\"0\":{\"4\":1}}],[\"latex\",{\"0\":{\"3\":1}}],[\"page\",{\"0\":{\"2\":1,\"9\":1}}],[\"demo\",{\"0\":{\"1\":1,\"11\":1}}],[\"vuepress\",{\"0\":{\"0\":1}}],[\"hello\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
