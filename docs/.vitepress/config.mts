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
  title: "赵建辉的知识库",
  description: "包含DBA、运维操、测试、网络相关工作知识点的总结与积累",

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
                text: "PostgreSQL",
                link: "/markdown/data/pgsql/",
            },
            {
                text: "SQLServer",
                link: "/markdown/data/sqlServer/",
            },
            {
                text: "Redis(需要完成)",
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
        text: "运维相关",
        items: [
            {
                text: "操作系统",
                items:[
                  {
                    text: "Linux",
                    link: "/markdown/operations/system/linux/",
                  },
                  {
                      text: "Windows",
                      link: "/markdown/operations/system/windows/",
                  },
                ],
            },
            {
                text: "虚拟机",
                items:[
                    {
                      text: "VMware虚拟机",
                      link: "/markdown/operations/simulate/vmware/",
                    },
                    {
                      text: "virtualbox虚拟机",
                      link: "/markdown/operations/simulate/virtualbox/",
                    },
                    {
                      text: "cygwin模拟linux",
                      link: "/markdown/operations/simulate/cygwin/",
                    }, 
                    {
                      text:"云平台",
                      link: "/markdown/operations/simulate/cloud/",
                    }
                ]
            },
            {
              text: "容器化",
                items:[
                  {
                    text: "docker",
                    link: "/markdown/operations/container/docker/",
                  },
                  {
                    text: "Kubermetes",
                    link: "/markdown/operations/container/k8s/",
                  },
                ]
            },
            {
              text: "web服务器",
                items:[
                  {
                    text: "nginx",
                    link: "/markdown/operations/server/nginx/",
                  },
                ]
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
        text: "网络相关",
        items: [
            {
                text: "网络工程师",
                link: "/markdown/network/base/",
            },
            {
                text: "进入外网",
                link: "/markdown/network/external/",
            },
            {
                text: "网络其他相关",
                link: "/markdown/network/other/",
            },
        ],
      },
      {
        text: "AI工具",
        items: [
            {
            text: "AI画图工具",
            items:[
              {text:'sd-webui', link: "/markdown/aitool/picture/sd-webui/"},
              {text:'sd-ComfyUI', link: "/markdown/aitool/picture/ComfyUI/"},
            ]
          },
          {
            text: "AI声音工具",
            link: "/markdown/aitool/sound/",
          },
          {
            text: "AI视频",
            link: "/markdown/aitool/vedio/",
          },
          {
            text: "模型网站",
            link: "/markdown/aitool/website/",
          },
          {
            text: "AI编辑器",
            link: "/markdown/aitool/tool/",
          },
        ],
      },
      {
        text: "工作必备",
        items: [
            {
                text: "面试八股文",
                link: "/markdown/work/interview/",
            },
            {
                text: "office办公",
                link: "/markdown/work/office/",
            },
            {
                text: "Adoube系列",
                link: "/markdown/work/adobe/",
            },
            {
                text: "英语学习",
                link: "/markdown/work/english/",
            },
            {
                text: "数学学习",
                link: "/markdown/work/math/",
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
              text: "表达式相关",
              link: "/markdown/other/expression/",
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
                  {text:'客户端安装',link:'/markdown/data/redis/install/03'},
                ],
            }, 
            {
              text: 'redis基础',
              items: [
                {text:'一、基础篇',link:'/markdown/data/redis/base/01'},
                {text:'二、实战篇',link:'/markdown/data/redis/base/02'},
                {text:'三、高级篇',link:'/markdown/data/redis/base/03'},
                {text:'四、原理篇',link:'/markdown/data/redis/base/04'},
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




        //============================ 运维相关 ==============================
        '/markdown/operations/system/linux/':[
            {
                text: 'Linux使用',
                items: [
                  {text:'一、基础入门',link:'/markdown/operations/system/linux/base/01'},
                  {text:'二、系统原理',link:'/markdown/operations/system/linux/base/02'},
                  {text:'三、网络与服务',link:'/markdown/operations/system/linux/base/03'},
                  {text:'四、脚本自动化与运维',link:'/markdown/operations/system/linux/base/04'},
                ],
            },
            {
              text: '日常使用',
              items: [
                {text:'软件安装记录',link:'/markdown/operations/system/linux/records/01'},
              ],
           },
        ],

        '/markdown/operations/simulate/vmware/':[
            {
                text: '安装操作系统',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、安装window10',link:'/markdown/operations/simulate/vmware/system/01'},
                  {text:'二、安装window server2022',link:'/markdown/operations/simulate/vmware/system/02'},
                  {text:'三、安装Linux CentOS',link:'/markdown/operations/simulate/vmware/system/03'},
                  {text:'四、安装Linux debian',link:'/markdown/operations/simulate/vmware/system/04'},
                  {text:'五、安装Linux ubuntu',link:'/markdown/operations/simulate/vmware/system/05'},
                  {text:'六、安装Mac',link:'/markdown/operations/simulate/vmware/system/06'},
                  {text:'七、安装andriod',link:'/markdown/operations/simulate/vmware/system/07'},
                  {text:'八、安装Rocky Linux',link:'/markdown/operations/simulate/vmware/system/08'},
                  {text:'九、安装CentOS-Stream',link:'/markdown/operations/simulate/vmware/system/09'},
                ],
            },
            {
              text: 'VMware配置与操作',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'VMware安装软件的两种方式',link:'/markdown/operations/simulate/vmware/tool/01'},
                {text:'三种网络模式',link:'/markdown/operations/simulate/vmware/tool/02'},
                {text:'远程连接工具',link:'/markdown/operations/simulate/vmware/tool/03'},
                {text:'ubuntu的编辑器nano',link:'/markdown/operations/simulate/vmware/tool/04'},
                {text:'vim编辑器',link:'/markdown/operations/simulate/vmware/tool/05'},
                {text:'错误指南',link:'/markdown/operations/simulate/vmware/tool/06'},
                {text:'日常记录',link:'/markdown/operations/simulate/vmware/tool/07'},
              ],
          },
        ],
        '/markdown/operations/simulate/virtualbox/':[
            {
              text: 'virtualbox快速入门',
              items: [
                {text:'一、认识与下载安装',link:'/markdown/operations/simulate/virtualbox/01'},
                {text:'二、安装CentOS7',link:'/markdown/operations/simulate/virtualbox/02'},
                {text:'三、双网卡配置',link:'/markdown/operations/simulate/virtualbox/03'},
                {text:'四、常见问题',link:'/markdown/operations/simulate/virtualbox/04'},
              ],
            }
         ],
        '/markdown/operations/simulate/cygwin/':[
            {
                text: 'cygwin安装与使用',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、安装cygwin',link:'/markdown/operations/simulate/cygwin/base/01'},
                  {text:'二、使用cygwin',link:'/markdown/operations/simulate/cygwin/base/02'},
                ],
            },
            {
              text: '模拟其他软件',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'redis',link:'/markdown/operations/simulate/cygwin/soft/01'},
              ],
           },
        ],
        '/markdown/operations/simulate/cloud/':[
          {
            text: '云平台使用',
            items: [
              {text:'一、认识云平台与购买服务器',link:'/markdown/operations/simulate/cloud/01'}, 
              {text:'二、云平台网络',link:'/markdown/operations/simulate/cloud/02'}, 
              {text:'三、云平台存储对象',link:'/markdown/operations/simulate/cloud/03'}, 
            ],
          }
        ],
        '/markdown/operations/container/docker/':[
              {
                text: 'docker速通',
                items: [
                  {text:'一、基础使用',link:'/markdown/operations/container/docker/sutong/01'},
                  {text:'二、进阶',link:'/markdown/operations/container/docker/sutong/02'},
                ],
            },
            {
              text: 'docker使用记录',
              items: [
                {text:'日常记录',link:'/markdown/operations/container/docker/other/01'},
                {text:'使用docker注意事项',link:'/markdown/operations/container/docker/other/02'},
              ],
           },
        ],
        '/markdown/operations/container/kubernetes/':[
          {
            text: 'kubernetes速通',
            items: [
              {text:'一、基础使用',link:'/markdown/operations/container/kubernetes/sutong/01'},
              {text:'二、进阶',link:'/markdown/operations/container/kubernetes/sutong/02'},
            ],
          },
          {
            text: 'k8s使用记录',
            items: [
              {text:'使用docker注意事项',link:'/markdown/operations/container/kubernetes/other/01'},
            ],
          },
        ],
        "/markdown/operations/server/nginx/":[
            {
            text: 'nginx使用',
            items: [
              {text:'一、安装nginx',link:'/markdown/operations/server/nginx/01'},
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

        //============================ 网络技术 ==============================
        
        '/markdown/network/external/': [
          {
              text: 'shadowsocks小飞机',
              // 相对路径会自动追加子路径前缀
              items: [
                {text:'Shadowsocks 服务端安装',link:'/markdown/network/external/shadowsocks/01.md'},
                {text:'Shadowsocks 客户端安装',link:'/markdown/network/external/shadowsocks/02.md'},
                {text:'Shadowsocks 新版Linux安装',link:'/markdown/network/external/shadowsocks/03.md'},
              ],
          },
          {
            text: '内网穿透',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、快速使用',link:'/markdown/network/external/frp/01.md'},
              {text:'二、本机虚拟机使用',link:'/markdown/network/external/frp/02.md'},
            ],
          },
          {
            text: '其他网络问题',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'CDN插件安装',link:'/markdown/network/external/cdn/01.md'},
            ],
          },
       ],
        
        //============================ AI工具 ==============================
        '/markdown/aitool/picture/sd-webui/': [
            {
                text: 'sd-webui 课程学习',
                items: [
                  {text:'第一章：认识',link:'/markdown/aitool/picture/sd-webui/study/01'},
                  {text:'第二章：提示词与参数',link:'/markdown/aitool/picture/sd-webui/study/02'},
                  {text:'第三章：图生图',link:'/markdown/aitool/picture/sd-webui/study/03'},
                  {text:'第四章：绘画模型',link:'/markdown/aitool/picture/sd-webui/study/04'},
                  {text:'第五章：高清修复与放大',link:'/markdown/aitool/picture/sd-webui/study/05'},
                  {text:'第六章: Embeddings、LoRa、Hypernetwork模型原理解析',link:'/markdown/aitool/picture/sd-webui/study/06'},
                  {text:'第七章：局部重绘',link:'/markdown/aitool/picture/sd-webui/study/07'},
                  {text:'第八章：插件安装',link:'/markdown/aitool/picture/sd-webui/study/08'},
                  {text:'第九章: lora',link:'/markdown/aitool/picture/sd-webui/study/09'},
                  {text:'第十章: ControlNet',link:'/markdown/aitool/picture/sd-webui/study/10'},
                  {text:'第十一章：超高清放大',link:'/markdown/aitool/picture/sd-webui/study/11'},
                  {text:'第十二章: AI文字与二维码',link:'/markdown/aitool/picture/sd-webui/study/12'},
                ],
            },
            {
              text: 'sd-webui 其他功能',
              items: [
                {text:'动画AnimateDiff',link:'/markdown/aitool/picture/sd-webui/other/01'},
                {text:'透明图rembg',link:'/markdown/aitool/picture/sd-webui/other/02'},
                {text:'换脸sd-webui-reactor',link:'/markdown/aitool/picture/sd-webui/other/03'},
                {text:'敏感词过滤',link:'/markdown/aitool/picture/sd-webui/other/04'},
                {text:'本地翻译部署',link:'/markdown/aitool/picture/sd-webui/other/05'},
                {text:'老照片修复',link:'/markdown/aitool/picture/sd-webui/other/06'},
              ],
            },
            {
              text: 'sd-webui 接口使用',
              items: [
                {text:'一、查询接口的方式',link:'/markdown/aitool/picture/sd-webui/api/01'},
                {text:'二、webui接口使用',link:'/markdown/aitool/picture/sd-webui/api/02'},
                {text:'三、插件接口使用',link:'/markdown/aitool/picture/sd-webui/api/03'},
              ],
            },
        ],
        '/markdown/aitool/picture/ComfyUI/': [
            {
                text: '',
                // 相对路径会自动追加子路径前缀
                items: [
               
                ],
            },
        ],
        '/markdown/aitool/sound/': [
            {
                text: 'ChatTTS',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、安装（初始版本-已作废）',link:'/markdown/aitool/sound/chatTTS/01'},
                  {text:'二、安装（20240628版本）',link:'/markdown/aitool/sound/chatTTS/02'},
                  {text:'三、chatTTS学习笔记',link:'/markdown/aitool/sound/chatTTS/03'},
                  {text:'四、resemble-enhance音频降噪',link:'/markdown/aitool/sound/chatTTS/04'},
                ],
            },
        ],

      
        "/markdown/aitool/tool/": [
          {
            text: 'Cursor',
            items: [
              {text:'一、快速上手',link:'/markdown/aitool/tool/cursor/01'},
              {text:'二、cursor三大核心功能',link:'/markdown/aitool/tool/cursor/02'},
              {text:'三、cursor上下文指定',link:'/markdown/aitool/tool/cursor/03'},
              {text:'四、cursor智能插件开发',link:'/markdown/aitool/tool/cursor/04'},
            ],
          },
          {
            text: 'Claude Code',
            items: [
              {text:'一、初始化Claude Code',link:'/markdown/aitool/tool/claude/01'},
              {text:'二、Claude Code应用',link:'/markdown/aitool/tool/claude/02'},
            ],
          },
          {
            text: 'Github Copilot',
            items: [
              {text:'一、快速入门',link:'/markdown/aitool/tool/copilot/01'},
            ],
          },
        ],

        '/markdown/aitool/website/': [
          {
            text: 'Huggingface(抱脸)',
            items: [
              {text:'一、注册用户与token',link:'/markdown/aitool/website/huggingface/01.md'},
              {text:'二、huggingface网站使用',link:'/markdown/aitool/website/huggingface/02.md'},
              {text:'三、镜像与下载',link:'/markdown/aitool/website/huggingface/03.md'},
            ],
          },
          {
            text: 'modelscope(魔塔)',
            items: [
              {text:'一、快速入门',link:'/markdown/aitool/website/modelscope/01.md'},
            ],
          },
        ],
        //============================ 工作必备 ==============================
        '/markdown/work/interview/': [
          {
            text: '前端面试题',
            items: [
              {text:'一、javascript篇',link:'/markdown/work/interview/front/01.md'},
              {text:'二、ES6+篇',link:'/markdown/work/interview/front/02.md'},
              {text:'三、typeScript篇',link:'/markdown/work/interview/front/03.md'},
              {text:'四、CSS篇',link:'/markdown/work/interview/front/04.md'},
              {text:'五、HTML篇',link:'/markdown/work/interview/front/05.md'},
              {text:'六、Vue篇',link:'/markdown/work/interview/front/06.md'},
              {text:'七、React篇',link:'/markdown/work/interview/front/07.md'},
              {text:'八、前端工程化',link:'/markdown/work/interview/front/08.md'},
              {text:'九、设计模式',link:'/markdown/work/interview/front/09.md'},
              {text:'十、场景题',link:'/markdown/work/interview/front/10.md'},
              {text:'十一、自己总结',link:'/markdown/work/interview/front/11.md'},
              {text:'十二、jquery',link:'/markdown/work/interview/front/12.md'},
              {text:'十三、JSP',link:'/markdown/work/interview/front/13.md'},
            ],
          },
          {
            text: 'Java面试题',
            items: [
              {text:'一、Redis篇',link:'/markdown/work/interview/java/01.md'},
              {text:'二、数据库篇',link:'/markdown/work/interview/java/02.md'},
              {text:'三、框架篇',link:'/markdown/work/interview/java/03.md'},
              {text:'四、微服务篇',link:'/markdown/work/interview/java/04.md'},
              {text:'五、消息中间件篇',link:'/markdown/work/interview/java/05.md'},
              {text:'六、常见集合篇',link:'/markdown/work/interview/java/06.md'},
              {text:'七、并发编程篇',link:'/markdown/work/interview/java/07.md'},
              {text:'八、JVM虚拟机篇',link:'/markdown/work/interview/java/08.md'},
              {text:'九、企业场景篇',link:'/markdown/work/interview/java/09.md'},
            ],
          },
          {
            text: '面试题记录',
            items: [
              {text:'记录的面试题',link:'/markdown/work/interview/self/01.md'},
            ],
          },
        ],
        //============================ 其他技术 ==============================
        '/markdown/other/install/': [
            {
                text: 'Jenkins',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、jenkins基础构建',link:'/markdown/other/install/Jenkins/01.md'},
                  {text:'二、jenkins更多配置',link:'/markdown/other/install/Jenkins/02.md'},
                  {text:'三、jenkins高级使用',link:'/markdown/other/install/Jenkins/03.md'},
                  {text:'四、jenkins+k8s',link:'/markdown/other/install/Jenkins/04.md'},
                  {text:'五、构建各类项目',link:'/markdown/other/install/Jenkins/05.md'},
                ],
            },
            {
                text: 'Cloudflare',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、Cloudflare的介绍',link:'/markdown/other/install/cloudflare/01.md'},
                  {text:'二、Cloudflare部署nuxt',link:'/markdown/other/install/cloudflare/02.md'},
                ],
            },
             {
                text: 'Vercel',
                // 相对路径会自动追加子路径前缀
                items: [
                  {text:'一、Vercel基础介绍',link:'/markdown/other/install/vercel/01.md'},
                  {text:'二、Vercel部署Next.js',link:'/markdown/other/install/vercel/02.md'},
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
                  {text:'五、github多账户配置公钥',link:'/markdown/other/version/github/05.md'},
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
            items: [
              {text:'一、快速上手',link:'/markdown/other/document/hugo/01.md'},
            ],
          },
          {
            text: 'Docusaurus静态站点',
            items: [
              {text:'待补充',link:'/markdown/other/document/Docusaurus/01.md'},
            ],
          },
        ],
        
        "/markdown/other/expression/":[
          {
            text: 'cron表达式',
            items: [
              {text:'一、cron表达式详解',link:'/markdown/other/expression/cron/01.md'},
              {text:'二、后台语言中的cron表达式',link:'/markdown/other/expression/cron/02.md'},
              {text:'三、linux中crontab',link:'/markdown/other/expression/cron/03.md'},
            ],
          },
          {
            text: '正则表达式',
            items: [
              {text:'一、正则表达式',link:'/markdown/other/expression/regular/01.md'},
              {text:'二、语言中的表达式',link:'/markdown/other/expression/regular/02.md'},
            ],
          },
          {
            text: 'URL处理',
            items: [
              {text:'一、认识URL',link:'/markdown/other/expression/url/01.md'},
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
