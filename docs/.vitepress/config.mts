import { defineConfig } from 'vitepress'

import fancyboxSet from './theme/fancybox-set.mjs'

import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({

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
  title: "赵建辉的运维测试知识库",
  description: "包含数据库、操作系统、中间件、测试、部署等的文档",

  // markdown所在目录
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
              text: "cygwin",
              link: "/markdown/simulate/cygwin/",
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
        '/markdown/data/mysql/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/mysql/install/01'},
                  {text:'linux安装',link:'/markdown/data/mysql/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/mysql/install/01'},
                {text:'linux安装',link:'/markdown/data/mysql/install/02'},
              ],
          },  
        ],
        '/markdown/data/oracle/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/oracle/install/01'},
                  {text:'linux安装',link:'/markdown/data/oracle/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/oracle/install/01'},
                {text:'linux安装',link:'/markdown/data/oracle/install/02'},
              ],
          },  
        ],
        '/markdown/data/sqlserver/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/sqlserver/install/01'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/oracle/install/01'},
                {text:'linux安装',link:'/markdown/data/oracle/install/02'},
              ],
          },  
        ],
        '/markdown/data/pgsql/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/pgsql/install/01'},
                  {text:'linux安装',link:'/markdown/data/pgsql/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/oracle/install/01'},
                {text:'linux安装',link:'/markdown/data/oracle/install/02'},
              ],
          },  
        ],
        '/markdown/data/redis/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/redis/install/01'},
                  {text:'linux安装',link:'/markdown/data/redis/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/redis/install/01'},
                {text:'linux安装',link:'/markdown/data/redis/install/02'},
              ],
          },  
        ],
        '/markdown/data/mongodb/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/mongodb/install/01'},
                  {text:'linux安装',link:'/markdown/data/mongodb/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/mongodb/install/01'},
                {text:'linux安装',link:'/markdown/data/mongodb/install/02'},
              ],
          },  
        ],
        '/markdown/data/elasticsearch/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/elasticsearch/install/01'},
                  {text:'linux安装',link:'/markdown/data/elasticsearch/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/elasticsearch/install/01'},
                {text:'linux安装',link:'/markdown/data/elasticsearch/install/02'},
              ],
          },  
        ],
        '/markdown/data/inflexDB/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/inflexDB/install/01'},
                  {text:'linux安装',link:'/markdown/data/inflexDB/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/inflexDB/install/01'},
                {text:'linux安装',link:'/markdown/data/inflexDB/install/02'},
              ],
          },  
        ],
        '/markdown/data/sqllite/':[
            {
                text: '安装软件',
                items: [
                  {text:'windows安装',link:'/markdown/data/sqllite/install/01'},
                  {text:'linux安装',link:'/markdown/data/sqllite/install/02'},
                ],
            }, 
            {
              text: '教程',
              items: [
                {text:'windows安装',link:'/markdown/data/sqllite/install/01'},
                {text:'linux安装',link:'/markdown/data/sqllite/install/02'},
              ],
          },  
        ],




        //============================ 操作系统 ==============================

        //============================  中间件  ==============================

        //============================ 模拟环境 ==============================
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
                  {text:'八、安装Rocky Linux',link:'/markdown/simulate/vmware/system/08'},
                  {text:'九、安装CentOS-Stream',link:'/markdown/simulate/vmware/system/09'},
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
                {text:'错误指南',link:'/markdown/simulate/vmware/tool/06'},
              ],
          },
        ],
        '/markdown/simulate/cygwin/':[
          {
              text: 'cygwin安装与使用',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'一、安装cygwin',link:'/markdown/simulate/cygwin/base/01'},
                {text:'二、使用cygwin',link:'/markdown/simulate/cygwin/base/02'},
              ],
          },
          {
            text: '模拟其他软件',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'redis',link:'/markdown/simulate/cygwin/soft/01'},
            ],
        },
      ],

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
                {text:'七、样式相关配置',link:'/markdown/other/document/vuepress/07.md'},
                {text:'八、插件配置',link:'/markdown/other/document/vuepress/08.md'},
              ],
          },
          {
            text: 'vitePress静态站点',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、快速上手',link:'/markdown/other/document/vitepress/01.md'},
              {text:'二、配置文件',link:'/markdown/other/document/vitepress/02.md'},
              {text:'三、插件配置',link:'/markdown/other/document/vitepress/03.md'},
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
