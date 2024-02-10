import{_ as i,r as c,o as p,c as t,a as r,w as n,b as s,e as d,d as a}from"./app-nk6Y8Q49.js";const D={},v=s("h1",{id:"demo-for-page-02",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#demo-for-page-02"},[s("span",null,"Demo for page-02")])],-1),u=s("h2",{id:"install",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install"},[s("span",null,"Install")])],-1),y=s("p",null,"Install VuePress Plugin Markdown Enhance:",-1),h=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"pnpm"),s("span",{style:{color:"#CE9178"}}," add -D vuepress-plugin-md-enhance@next")]),a(`
`),s("span",{class:"line"})])])],-1),m=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"yarn"),s("span",{style:{color:"#CE9178"}}," add -D vuepress-plugin-md-enhance@next")]),a(`
`),s("span",{class:"line"})])])],-1),b=s("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[s("pre",{class:"shiki dark-plus",style:{"background-color":"#1E1E1E",color:"#D4D4D4"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DCDCAA"}},"npm"),s("span",{style:{color:"#CE9178"}}," i -D vuepress-plugin-md-enhance@next")]),a(`
`),s("span",{class:"line"})])])],-1),g=d(`<h2 id="demo-for-container" tabindex="-1"><a class="header-anchor" href="#demo-for-container"><span>Demo for container</span></a></h2><div class="hint-container info"><p class="hint-container-title">Info</p><p>Get the version of PyTorch:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> logging</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> torch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">print</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;PyTorch:&quot;</span><span style="color:#D4D4D4;">, torch.</span><span style="color:#9CDCFE;">__version__</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">device = </span><span style="color:#569CD6;">None</span></span>
<span class="line"><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> torch.cuda.is_available():</span></span>
<span class="line"><span style="color:#D4D4D4;">    device = torch.device(</span><span style="color:#CE9178;">&quot;cuda&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    logging.log(</span><span style="color:#CE9178;">&quot;CUDA:&quot;</span><span style="color:#D4D4D4;">, torch.version.cuda)</span></span>
<span class="line"><span style="color:#D4D4D4;">    logging.log(</span><span style="color:#CE9178;">&quot;cuDNN:&quot;</span><span style="color:#D4D4D4;">, torch.backends.cudnn.version())</span></span>
<span class="line"><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    device = torch.device(</span><span style="color:#CE9178;">&quot;cpu&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    logging.warn(</span></span>
<span class="line"><span style="color:#CE9178;">        &quot;CUDA is not available, using CPU instead! Check your CUDA installation!&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    )</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><details class="hint-container details"><summary>Details</summary><p>Install <code>pnpm</code>:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i -g pnpm</span></span>
<span class="line"></span></code></pre></div><p>or use <code>corepack</code>:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">corepack</span><span style="color:#CE9178;"> prepare pnpm@latest --activate</span></span>
<span class="line"></span></code></pre></div></details>`,3);function C(E,_){const o=c("CodeTabs");return p(),t("div",null,[v,u,y,r(o,{id:"9",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:n(({value:l,isActive:e})=>[a("pnpm")]),title1:n(({value:l,isActive:e})=>[a("yarn")]),title2:n(({value:l,isActive:e})=>[a("npm")]),tab0:n(({value:l,isActive:e})=>[h]),tab1:n(({value:l,isActive:e})=>[m]),tab2:n(({value:l,isActive:e})=>[b]),_:1}),g])}const f=i(D,[["render",C],["__file","page02.html.vue"]]),x=JSON.parse('{"path":"/demo/page02.html","title":"Demo for page-02","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"Demo for container","slug":"demo-for-container","link":"#demo-for-container","children":[]}],"git":{"updatedTime":1699599526000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":5}]},"filePathRelative":"demo/page02.md","excerpt":"\\n<h2>Install</h2>\\n<p>Install VuePress Plugin Markdown Enhance:</p>\\n\\n<h2>Demo for container</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Info</p>\\n<p>Get the version of PyTorch:</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"shiki dark-plus\\" style=\\"background-color:#1E1E1E;color:#D4D4D4\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#C586C0\\">import</span><span style=\\"color:#D4D4D4\\"> logging</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#C586C0\\">import</span><span style=\\"color:#D4D4D4\\"> torch</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#DCDCAA\\">print</span><span style=\\"color:#D4D4D4\\">(</span><span style=\\"color:#CE9178\\">\\"PyTorch:\\"</span><span style=\\"color:#D4D4D4\\">, torch.</span><span style=\\"color:#9CDCFE\\">__version__</span><span style=\\"color:#D4D4D4\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#D4D4D4\\">device = </span><span style=\\"color:#569CD6\\">None</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C586C0\\">if</span><span style=\\"color:#D4D4D4\\"> torch.cuda.is_available():</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D4D4D4\\">    device = torch.device(</span><span style=\\"color:#CE9178\\">\\"cuda\\"</span><span style=\\"color:#D4D4D4\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D4D4D4\\">    logging.log(</span><span style=\\"color:#CE9178\\">\\"CUDA:\\"</span><span style=\\"color:#D4D4D4\\">, torch.version.cuda)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D4D4D4\\">    logging.log(</span><span style=\\"color:#CE9178\\">\\"cuDNN:\\"</span><span style=\\"color:#D4D4D4\\">, torch.backends.cudnn.version())</span></span>\\n<span class=\\"line\\"><span style=\\"color:#C586C0\\">else</span><span style=\\"color:#D4D4D4\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D4D4D4\\">    device = torch.device(</span><span style=\\"color:#CE9178\\">\\"cpu\\"</span><span style=\\"color:#D4D4D4\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D4D4D4\\">    logging.warn(</span></span>\\n<span class=\\"line\\"><span style=\\"color:#CE9178\\">        \\"CUDA is not available, using CPU instead! Check your CUDA installation!\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color:#D4D4D4\\">    )</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></div>"}');export{f as comp,x as data};
