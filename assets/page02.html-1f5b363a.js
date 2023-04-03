import{_ as c,M as t,p as i,q as r,N as d,V as n,R as s,t as a,a1 as D}from"./framework-8980b429.js";const y={},u=s("h1",{id:"demo-for-page-02",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#demo-for-page-02","aria-hidden":"true"},"#"),a(" Demo for page-02")],-1),h=s("h2",{id:"install",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),a(" Install")],-1),v=s("p",null,"Install VuePress Plugin Markdown Enhance:",-1),m=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"pnpm "),s("span",{style:{color:"#CE9178"}},"add"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-plugin-md-enhance@next")]),a(`
`),s("span",{class:"line"})])])],-1),C=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"yarn "),s("span",{style:{color:"#CE9178"}},"add"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-plugin-md-enhance@next")]),a(`
`),s("span",{class:"line"})])])],-1),b=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"npm "),s("span",{style:{color:"#CE9178"}},"i"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"-D"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#CE9178"}},"vuepress-plugin-md-enhance@next")]),a(`
`),s("span",{class:"line"})])])],-1),E=D(`<h2 id="demo-for-container" tabindex="-1"><a class="header-anchor" href="#demo-for-container" aria-hidden="true">#</a> Demo for container</h2><div class="hint-container info"><p class="hint-container-title">Info</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">pip3 </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">torch</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">torchvision</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">torchaudio</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">--extra-index-url</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">https://download.pytorch.org/whl/cu116</span></span>
<span class="line"></span></code></pre></div><p>Get the version of PyTorch:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> logging</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> torch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">print</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;PyTorch:&#39;</span><span style="color:#D4D4D4;">, torch.</span><span style="color:#9CDCFE;">__version__</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">device = </span><span style="color:#569CD6;">None</span></span>
<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> torch.cuda.is_available():</span></span>
<span class="line"><span style="color:#D4D4D4;">    device = torch.device(</span><span style="color:#CE9178;">&#39;cuda&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    logging.log(</span><span style="color:#CE9178;">&#39;CUDA:&#39;</span><span style="color:#D4D4D4;">, torch.version.cuda)</span></span>
<span class="line"><span style="color:#D4D4D4;">    logging.log(</span><span style="color:#CE9178;">&#39;cuDNN:&#39;</span><span style="color:#D4D4D4;">, torch.backends.cudnn.version())</span></span>
<span class="line"><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    device = torch.device(</span><span style="color:#CE9178;">&#39;cpu&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    logging.warn(</span><span style="color:#CE9178;">&#39;CUDA is not available, using CPU instead! Check your CUDA installation!&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><details class="hint-container details"><summary>Details</summary><p>Install Pnpm:</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">-g</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">pnpm</span></span>
<span class="line"></span></code></pre></div></details>`,3);function g(_,x){const p=t("CodeTabs");return i(),r("div",null,[u,h,v,d(p,{id:"9",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2,"tab-id":"shell"},{tab0:n(({title:l,value:e,isActive:o})=>[m]),tab1:n(({title:l,value:e,isActive:o})=>[C]),tab2:n(({title:l,value:e,isActive:o})=>[b]),_:1}),E])}const f=c(y,[["render",g],["__file","page02.html.vue"]]);export{f as default};