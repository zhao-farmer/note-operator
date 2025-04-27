import { defineConfig } from 'vitepress'

// import mdItCustomAttrs  from 'markdown-it-custom-attrs'

import fancyboxSet from './theme/fancybox-set.mjs'



export default defineConfig({

  // markdown 设置
  markdown: {
      // 开启数学公式
      math: true,
      // 图片点击可以放大
      config: (md) => {
        md.use(fancyboxSet)
      }

  },


  // 应用配置信息
  lang:'zh-cn',
  title: "软件操作相关",
  description: "包含数据库、操作系统、中间件以及一些课外知识的文档",

  // markdown所在目录
  // srcDir: './src',
  base:'/note-operator',

  // 主题配置
  themeConfig: {
    // 标题栏
    nav: [
      {
        text: "数据库",
        items: [
            {
                text: "Mysql",
                link: "/markdown/data/mysql/",
            },
            {
                text: "Oracle",
                link: "/markdown/data/oracle/",
            },
            {
                text: "PgSQL",
                link: "/markdown/data/pgsql/",
            },
            {
                text: "SQLServer",
                link: "/markdown/data/sqlServer/",
            },
            {
                text: "Redis",
                link: "/markdown/data/redis/",
            },
            {
                text: "MongoDB",
                link: "/markdown/data/mongodb/",
            },
            {
              text: "Elasticsearch",
              link: "/markdown/data/es/",
            },
            {
              text: "InflexDB",
              link: "/markdown/data/inflexDB/",
            },
        ],
        
      },
      {
        text: "操作系统",
        items: [
            {
                text: "Linux",
                link: "/markdown/system/linux/",
            },
            {
                text: "Windows",
                link: "/markdown/system/windows/",
            },
            {
                text: "Andriod",
                link: "/markdown/system/andriod/",
            },
        ],
      },
      {
        text: "中间件",
        items: [
            {
                text: "Nginx",
                link: "/markdown/middle/nginx/",
            },
            {
                text: "MQ系列",
                link: "/markdown/middle/mq/",
            },
            {
                text: "Zookeeper",
                link: "/markdown/middle/zookeeper/",
            },
            {
              text: "Kubernetes",
              link: "/markdown/middle/k8s/",
            },
        ],
      },
      {
        text: "模拟环境",
        items: [
            {
                text: "VMware虚拟机",
                link: "/markdown/simulate/vmware/",
            },
            {
              text: "virtualbox虚拟机",
              link: "/markdown/simulate/virtualbox/",
            },
            {
                text: "docker",
                link: "/markdown/simulate/docker/",
            },
            {
              text: "conda",
              link: "/markdown/simulate/docker/",
            },
            {
              text: "maven",
              link: "/markdown/simulate/docker/",
            },
            {
              text: "npm",
              link: "/markdown/simulate/docker/",
            },
            
        ],
      },
      {
        text: "测试相关",
        items: [
            {
                text: "功能测试",
                link: "/markdown/test/functional/",
            },
            {
                text: "压力测试",
                link: "/markdown/test/stress/",
            },
            {
                text: "自动化测试",
                link: "/markdown/test/automation/",
            },
        ],
      },
      {
        text: "AI技术",
        items: [
            {
                text: "AI图画",
                items:[
                  {text:'sd-webui', link: "/markdown/AI/picture/sd-webui/"},
                  {text:'sd-ComfyUI', link: "/markdown/AI/picture/ComfyUI/"},
                ]
            },
            {
                text: "AI声音",
                link: "/markdown/AI/sound/",
            },
            {
                text: "AI视频",
                link: "/markdown/AI/vedio/",
            },
            {
                text: "AI问答",
                link: "/markdown/AI/chat/",
            },
            {
                text: "AI学习",
                link: "/markdown/AI/study/",
            },
        ],
      },
      {
        text: "其他技术",
        items: [
            {
                text: "集成持续部署",
                link: "/markdown/other/install/",
            },
            {
              text: "版本控制工具",
              link: "/markdown/other/version/",
            },
            {
              text: "构建静态网站",
              link: "/markdown/other/document/",
            },
            {
              text: "外部网站访问",
              link: "/markdown/other/network/",
            },
        ],
      },
    ],
    // 侧边栏
    sidebar: {
        //============================ 数据库 ==============================
       

        //============================ 操作系统 ==============================

        '/markdown/simulate/vmware/':[
            {
                text: '安装操作系统',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、安装window10',link:'/markdown/simulate/vmware/system/01'},
                  {text:'二、安装window server2022',link:'/markdown/simulate/vmware/system/02'},
                  {text:'三、安装Linux CentOS',link:'/markdown/simulate/vmware/system/03'},
                  {text:'四、安装Linux debian',link:'/markdown/simulate/vmware/system/04'},
                  {text:'五、安装Linux ubuntu',link:'/markdown/simulate/vmware/system/05'},
                  {text:'六、安装Mac',link:'/markdown/simulate/vmware/system/06'},
                  {text:'七、安装andriod',link:'/markdown/simulate/vmware/system/07'},
                ],
            },
            {
              text: 'VMware配置与操作',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'VMware操作',link:'/markdown/simulate/vmware/tool/01'},
                {text:'三种网络模式',link:'/markdown/simulate/vmware/tool/02'},
                {text:'远程连接工具',link:'/markdown/simulate/vmware/tool/03'},
                {text:'ubuntu的编辑器nano',link:'/markdown/simulate/vmware/tool/04'},
                {text:'vim编辑器',link:'/markdown/simulate/vmware/tool/05'},
              ],
          },
        ],

        //============================ 中间件 ==============================


        //============================ 测试相关 ==============================
        
        '/markdown/test/functional/': [
        ],
        '/markdown/test/stress/': [
          {
              text: 'Jmeter压力测试',
              // 相对路径会自动追加子路径前缀
              items: [
                 {text:'一、Jmeter安装',link:'/markdown/test/stress/Jmeter/01'},
                 {text:'二、Jmeter启动',link:'/markdown/test/stress/Jmeter/02'},
                 {text:'三、Jmeter语言设置',link:'/markdown/test/stress/Jmeter/03'},
                 {text:'四、Jmeter使用',link:'/markdown/test/stress/Jmeter/04'},
                 {text:'五、Jmeter插件',link:'/markdown/test/stress/Jmeter/05'},
                 {text:'六、Jmeter安装离线包',link:'/markdown/test/stress/Jmeter/06'},
              ],
          },
          {
              text: '其他工具',
              // 相对路径会自动追加子路径前缀
              items: [
               
              ],
          },
        ],
        '/markdown/test/automation/': [
        ],

        //============================ AI技术 ==============================
        '/markdown/AI/picture/sd-webui/': [
            {
                text: 'sd-webui 课程学习',
                items: [
                  {text:'第一章：认识',link:'/markdown/AI/picture/sd-webui/study/01'},
                  {text:'第二章：提示词与参数',link:'/markdown/AI/picture/sd-webui/study/02'},
                  {text:'第三章：图生图',link:'/markdown/AI/picture/sd-webui/study/03'},
                  {text:'第四章：绘画模型',link:'/markdown/AI/picture/sd-webui/study/04'},
                  {text:'第五章：高清修复与放大',link:'/markdown/AI/picture/sd-webui/study/05'},
                  {text:'第六章：Embeddings、LoRa、Hypernetwork模型原理解析',link:'/markdown/AI/picture/sd-webui/study/06'},
                  {text:'第七章：局部重绘',link:'/markdown/AI/picture/sd-webui/study/07'},
                  {text:'第八章：插件安装',link:'/markdown/AI/picture/sd-webui/study/08'},
                  {text:'第九章：lora',link:'/markdown/AI/picture/sd-webui/study/09'},
                  {text:'第十章：ControlNet',link:'/markdown/AI/picture/sd-webui/study/10'},
                  {text:'第十一章：超高清放大',link:'/markdown/AI/picture/sd-webui/study/11'},
                  {text:'第十二章：AI文字与二维码',link:'/markdown/AI/picture/sd-webui/study/12'},
                ],
            },
            {
              text: 'sd-webui 其他功能',
              items: [
                {text:'动画AnimateDiff',link:'/markdown/AI/picture/sd-webui/other/01'},
                {text:'透明图rembg',link:'/markdown/AI/picture/sd-webui/other/02'},
                {text:'换脸sd-webui-reactor',link:'/markdown/AI/picture/sd-webui/other/03'},
                {text:'敏感词过滤',link:'/markdown/AI/picture/sd-webui/other/04'},
                {text:'本地翻译部署',link:'/markdown/AI/picture/sd-webui/other/05'},
                {text:'老照片修复',link:'/markdown/AI/picture/sd-webui/other/06'},
              ],
            },
            {
              text: 'sd-webui 接口使用',
              items: [
                {text:'一、查询接口的方式',link:'/markdown/AI/picture/sd-webui/api/01'},
                {text:'二、webui接口使用',link:'/markdown/AI/picture/sd-webui/api/02'},
                {text:'三、插件接口使用',link:'/markdown/AI/picture/sd-webui/api/03'},
              ],
            },
        ],
        '/markdown/AI/picture/ComfyUI/': [
            {
                text: '',
                // 相对路径会自动追加子路径前缀
                items: [
               
                ],
            },
        ],
        '/markdown/AI/sound/': [
            {
                text: 'ChatTTS',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、安装（初始版本-已作废）',link:'/markdown/AI/sound/chatTTS/01'},
                  {text:'二、安装（20240628版本）',link:'/markdown/AI/sound/chatTTS/02'},
                  {text:'三、chatTTS学习笔记',link:'/markdown/AI/sound/chatTTS/03'},
                  {text:'四、resemble-enhance音频降噪',link:'/markdown/AI/sound/chatTTS/04'},
                ],
            },
             
        ],



        //============================ 其他技术 ==============================
        '/markdown/other/install/': [
            {
                text: 'Jenkins',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、快速入门',link:'/markdown/other/install/Jenkins/01.md'},
                ],
            },
            {
              text: '其他',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'github Actions',link:'/markdown/other/install/other/01.md'},
              ],
          },
        ],
        '/markdown/other/version/': [
            {
                text: 'git工具',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、概述',link:'/markdown/other/version/git/01.md'},
                  {text:'二、安装软件',link:'/markdown/other/version/git/02.md'},
                  {text:'三、使用githubDestop',link:'/markdown/other/version/git/03.md'},
                  {text:'四、Git之版本号',link:'/markdown/other/version/git/04.md'},
                  {text:'五、git命令',link:'/markdown/other/version/git/05.md'},
                  {text:'六、gitlab',link:'/markdown/other/version/git/06.md'},
                ],
            },
            {
                text: 'github网站',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、基础使用',link:'/markdown/other/version/github/01.md'},
                  {text:'二、github Actions',link:'/markdown/other/version/github/02.md'},
                  {text:'三、github Pages',link:'/markdown/other/version/github/03.md'},
                  {text:'四、vuePress项目部署github',link:'/markdown/other/version/github/04.md'},
                ],
            },
            {
                text: 'svn工具',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、VisualSVN(svn服务端)',link:'/markdown/other/version/svn/01.md'},
                  {text:'二、TortoiseSVN(svn客户端)',link:'/markdown/other/version/svn/02.md'},
                  {text:'三、开发工具安装svn',link:'/markdown/other/version/svn/03.md'},
                ],
            },
        ],
        '/markdown/other/document/': [
          {
            
              text: 'vuePress静态站点',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'一、快速上手',link:'/markdown/other/document/vuepress/01.md'},
                {text:'二、配置文件修改',link:'/markdown/other/document/vuepress/02.md'},
                {text:'三、页面',link:'/markdown/other/document/vuepress/03.md'},
                {text:'四、makdown语法扩展',link:'/markdown/other/document/vuepress/04.md'},
                {text:'五、静态资源',link:'/markdown/other/document/vuepress/05.md'},
                {text:'六、github部署',link:'/markdown/other/document/vuepress/06.md'},
                {text:'七、其他设置记录',link:'/markdown/other/document/vuepress/07.md'},
              ],
          },
          {
            text: 'vitePress静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、快速上手',link:'/markdown/other/document/vitepress/01.md'},
              {text:'二、配置文件',link:'/markdown/other/document/vitepress/02.md'},
              {text:'三、开启数学方程',link:'/markdown/other/document/vitepress/03.md'},
              {text:'四、其他配置',link:'/markdown/other/document/vitepress/04.md'},
              {text:'五、问题与解决方案',link:'/markdown/other/document/vitepress/05.md'},
            ],
          },
          {
            text: 'Jekyll静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、Jekyll介绍',link:'/markdown/other/document/Jekyll/01.md'},
              {text:'二、安装与测试',link:'/markdown/other/document/Jekyll/02.md'},
              {text:'三、命令与配置',link:'/markdown/other/document/Jekyll/03.md'},
              {text:'四、目录结构',link:'/markdown/other/document/Jekyll/04.md'},
              {text:'五、配置信息',link:'/markdown/other/document/Jekyll/05.md'},
              {text:'六、minima默认主题',link:'/markdown/other/document/Jekyll/06.md'},
              {text:'七、Jekyll 主题 Chirpy 使用教程',link:'/markdown/other/document/Jekyll/07.md'},
            ],
          },
          {
            text: 'hugo静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、快速上手',link:'/markdown/other/document/hugo/01.md'},
            ],
          },
          {
            text: 'Docusaurus静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'待补充',link:'/markdown/other/document/Docusaurus/01.md'},
            ],
          },
        ],
        '/markdown/other/network/': [
          {
              text: 'shadowsocks小飞机',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'Shadowsocks 服务端安装',link:'/markdown/other/network/shadowsocks/01.md'},
                {text:'Shadowsocks 客户端安装',link:'/markdown/other/network/shadowsocks/02.md'},
              ],
          },
          {
            text: 'Huggingface',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、注册用户与token',link:'/markdown/other/network/huggingface/01.md'},
              {text:'二、huggingface网站使用',link:'/markdown/other/network/huggingface/02.md'},
              {text:'三、镜像与下载',link:'/markdown/other/network/huggingface/03.md'},
            ],
          },
          {
            text: '其他网络问题',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'CDN插件安装',link:'/markdown/other/network/cdn/01.md'},
            ],
          },
       ],
    },

    // 右边目录是否关闭
    aside:true,
    // 右边目录配置
    outline:{
      level:[2,4],
      label:'目录'
    },
    


  }
})
