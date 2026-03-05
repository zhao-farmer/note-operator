import{_ as a,c as i,o as n,a0 as e}from"./chunks/framework.zS86-xgI.js";const c=JSON.parse('{"title":"docker日常记录","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/operations/container/docker/other/01.md","filePath":"markdown/operations/container/docker/other/01.md"}'),l={name:"markdown/operations/container/docker/other/01.md"};function t(p,s,h,o,k,r){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="docker日常记录" tabindex="-1">docker日常记录 <a class="header-anchor" href="#docker日常记录" aria-label="Permalink to &quot;docker日常记录&quot;">​</a></h1><h2 id="_1-docker的映射顺序" tabindex="-1">1. docker的映射顺序 <a class="header-anchor" href="#_1-docker的映射顺序" aria-label="Permalink to &quot;1. docker的映射顺序&quot;">​</a></h2><ol><li><p><strong>端口映射 <code>-p</code>或 <code>--publish</code></strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 语法: -p &lt;宿主机端口&gt;:&lt;容器端口&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 含义: 将宿主机的端口映射到容器的端口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例1: 将宿主机的80端口映射到容器的80端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 80:80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例2: 将宿主机的8080端口映射到容器的80端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:80</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例3: 将宿主机的随机端口映射到容器的80端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 自动分配宿主机端口</span></span></code></pre></div></li><li><p><strong>磁盘映射 <code>-v</code>或 <code>--volume</code></strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 语法: -v &lt;宿主机路径&gt;:&lt;容器路径&gt;[:选项]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 含义: 将宿主机的目录/文件映射到容器的目录/文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例1: 将宿主机的/home/data映射到容器的/data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/data:/data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例2: 将宿主机的目录映射到容器，只读权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/data:/data:ro</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例3: 使用SELinux标签</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/data:/data:z</span></span></code></pre></div></li><li><p><strong>Docker 映射的顺序永远是：</strong></p><ol><li><p><strong>端口映射</strong>：<code>宿主机端口:容器端口</code></p></li><li><p><strong>磁盘映射</strong>：<code>宿主机路径:容器路径</code></p></li></ol></li></ol>`,3)]))}const g=a(l,[["render",t]]);export{c as __pageData,g as default};
