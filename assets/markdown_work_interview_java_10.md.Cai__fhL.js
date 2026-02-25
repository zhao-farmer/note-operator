import{_ as n,c as s,o as p,a0 as e}from"./chunks/framework.zS86-xgI.js";const u=JSON.parse('{"title":"十、快速答题","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/work/interview/java/10.md","filePath":"markdown/work/interview/java/10.md"}'),l={name:"markdown/work/interview/java/10.md"};function i(t,a,o,r,c,d){return p(),s("div",null,a[0]||(a[0]=[e(`<h1 id="十、快速答题" tabindex="-1">十、快速答题 <a class="header-anchor" href="#十、快速答题" aria-label="Permalink to &quot;十、快速答题&quot;">​</a></h1><ol><li><p>java 集合扩容 ArrayList底层是Object[]数组，扩容机制有三点关键：</p><ol><li>默认初始容量是10</li><li>扩容因子是1.5倍（newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1)）</li><li>扩容时通过Arrays.copyOf创建新数组，复制原数据 时间复杂度O(n)，涉及数组复制&quot;</li></ol></li><li><p>异常处理</p><p>Java异常分为两大类、三小类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🔴 Error（系统级，不可恢复）</span></span>
<span class="line"><span>├─ OutOfMemoryError</span></span>
<span class="line"><span>├─ StackOverflowError</span></span>
<span class="line"><span>└─ VirtualMachineError</span></span>
<span class="line"><span>🟡 Exception（应用级）</span></span>
<span class="line"><span>├─ 受检异常（Checked，必须处理）</span></span>
<span class="line"><span>│   ├─ IOException</span></span>
<span class="line"><span>│   ├─ SQLException</span></span>
<span class="line"><span>│   └─ ClassNotFoundException</span></span>
<span class="line"><span>└─ 运行时异常（Unchecked，可处理）</span></span>
<span class="line"><span>    ├─ NullPointerException</span></span>
<span class="line"><span>    ├─ IllegalArgumentException</span></span>
<span class="line"><span>    ├─ IndexOutOfBoundsException</span></span>
<span class="line"><span>    └─ 业务自定义异常</span></span></code></pre></div></li></ol>`,2)]))}const h=n(l,[["render",i]]);export{u as __pageData,h as default};
