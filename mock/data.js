import Mock from 'mockjs';
import jwt from 'jsonwebtoken'

const secret = '$^%&&^&*^&^*&'

const getJobs = (page, pageSize = 10) => {
    return Array.from({ length: pageSize }, (_, i) => ({
        id: `${page}-${i}`,
        graduation: `${Mock.Random.pick([
            '本科',
            '硕士',
            '大专',
        ])}`,
        jobTime: `${Mock.Random.pick([
            '4天/周',
            '5天/周',
            '6天/周',
        ])}`,
        jobTimes: `${Mock.Random.pick([
            '2个月',
            '3个月',
            '4个月',
            '5个月',
            '6个月',
        ])}`,
        title: Mock.Random.pick([
            {
                name: '前端开发工程师',
                requirements: Mock.Random.pick([
                    '熟练掌握 HTML、CSS、JavaScript，熟悉 ES6+ 语法；熟悉 Vue 或 React 框架，有实际项目经验',
                    '了解 Webpack、Vite 等构建工具，具备良好的代码风格和团队协作能力',
                    '有移动端适配或性能优化经验者优先'
                ])
            },
            {
                name: 'JavaScript开发工程师',
                requirements: Mock.Random.pick([
                    '精通 JavaScript 语言，深入理解闭包、原型链、事件循环等机制',
                    '熟悉 TypeScript，有 Node.js 或前端工程化开发经验',
                    '具备独立解决复杂问题的能力，有开源项目经验者优先'
                ])
            },
            {
                name: '前端架构师',
                requirements: Mock.Random.pick([
                    '5年以上前端经验，主导过大型项目架构设计',
                    '精通微前端、性能优化、CI/CD 流程，熟悉 React/Vue 生态',
                    '具备跨团队技术规划能力，有中台或高并发项目经验者优先'
                ])
            },
            {
                name: 'UI设计师',
                requirements: Mock.Random.pick([
                    '熟练使用 Figma、Sketch、Photoshop 等设计工具',
                    '具备良好的审美和用户体验意识，能独立完成界面设计',
                    '有移动端或 Web 端设计经验，具备与开发协作对接的能力'
                ])
            },
            {
                name: '后端开发工程师',
                requirements: Mock.Random.pick([
                    '熟悉 Java/Python/Go 等后端语言，掌握常见数据结构与算法',
                    '熟悉 MySQL、Redis 等数据库技术，了解 RESTful API 设计',
                    '有 Linux 环境开发经验者优先'
                ])
            },
            {
                name: 'Java后端开发工程师',
                requirements: Mock.Random.pick([
                    '精通 Java，熟悉 Spring、Spring Boot、MyBatis 框架',
                    '熟悉 MySQL 优化、Redis、消息队列（Kafka/RabbitMQ）',
                    '有微服务（Spring Cloud）或高并发系统经验者优先'
                ])
            },
            {
                name: 'Python开发工程师',
                requirements: Mock.Random.pick([
                    '熟练掌握 Python，熟悉 Django/Flask/FastAPI 框架',
                    '熟悉数据库操作，了解爬虫、自动化脚本或数据分析',
                    '有 AI/机器学习项目经验者优先'
                ])
            },
            {
                name: '运维工程师',
                requirements: Mock.Random.pick([
                    '熟悉 Linux 系统操作与 Shell/Python 脚本编写',
                    '掌握 Docker、Nginx、Jenkins 等部署与 CI/CD 工具',
                    '熟悉监控系统（Prometheus/Zabbix），具备故障排查能力'
                ])
            },
            {
                name: '测试工程师',
                requirements: Mock.Random.pick([
                    '熟悉功能、接口、自动化测试，掌握 Selenium/Postman/JMeter',
                    '能编写测试用例并输出报告，了解 HTTP/TCP/IP 协议',
                    '有持续集成经验者优先'
                ])
            },
            {
                name: '算法工程师',
                requirements: Mock.Random.pick([
                    '熟悉机器学习、深度学习算法（CNN、RNN、Transformer）',
                    '掌握 PyTorch 或 TensorFlow，有图像识别或 NLP 项目经验',
                    '在顶会发表论文者优先'
                ])
            },
            {
                name: '移动端开发工程师',
                requirements: Mock.Random.pick([
                    '熟悉 Android（Kotlin）或 iOS（Swift）开发，有原生 App 经验',
                    '了解主流架构模式，熟悉网络请求与内存管理',
                    '有 React Native 或 Flutter 经验者优先'
                ])
            },
            {
                name: '全栈开发工程师',
                requirements: Mock.Random.pick([
                    '具备前后端开发能力，熟悉 React/Vue + Node.js/Java/Python',
                    '掌握数据库设计与 RESTful API 开发',
                    '有完整项目上线经验者优先'
                ])
            },
            {
                name: 'Node.js开发工程师',
                requirements: Mock.Random.pick([
                    '精通 Node.js，熟悉 Express/Koa/NestJS 框架',
                    '掌握异步编程、API 开发，了解 Docker/Nginx 部署',
                    '有微服务或高并发服务经验者优先'
                ])
            },
            {
                name: 'TypeScript开发工程师',
                requirements: Mock.Random.pick([
                    '熟练掌握 TypeScript，理解类型系统、泛型、装饰器',
                    '有使用 TS 开发大型前端项目的经验',
                    '熟悉 React/Vue + TS 最佳实践'
                ])
            },
            {
                name: '产品经理',
                requirements: Mock.Random.pick([
                    '本科及以上学历，3年以上互联网产品经验，有成功项目案例',
                    '熟悉产品设计流程，能独立完成需求分析、原型设计和文档撰写',
                    '具备良好的用户洞察力和数据分析能力，熟练使用 Axure、Figma、墨刀等工具',
                    '具备跨部门协作能力，能与研发、设计、运营高效沟通',
                    '有ToB、电商、社交或AI类产品经验者优先'
                ])
            },
            {
                name: '产品经理助理',
                requirements: Mock.Random.pick([
                    '协助产品经理整理需求文档、绘制原型图，参与产品讨论',
                    '具备基础的产品思维和逻辑分析能力，学习能力强',
                    '熟练使用 Office、Axure 或 XD 等工具',
                    '对互联网产品有热情，有实习经验者优先',
                    '沟通能力好，工作细致，能承受一定工作压力'
                ])
            },
            {
                name: '数据分析师',
                requirements: Mock.Random.pick([
                    '熟练掌握 SQL，能独立完成数据提取与清洗',
                    '熟悉 Python 或 R，掌握 Pandas、NumPy、Matplotlib 等数据分析库',
                    '具备业务洞察力，能通过数据发现问题并提出优化建议',
                    '熟悉 Excel 高级功能和可视化工具（如 Tableau、Power BI）',
                    '有用户行为分析、运营分析或AB测试经验者优先'
                ])
            },
            {
                name: '运营专员',
                requirements: Mock.Random.pick([
                    '负责日常内容更新、用户维护和活动执行，提升用户活跃与留存',
                    '具备良好的文案能力和执行力，能独立策划小型线上活动',
                    '熟悉微信公众号、微博、小红书等平台运营规则',
                    '有社群运营或增长经验者优先',
                    '工作细致，责任心强，具备较强的数据敏感度'
                ])
            },
            {
                name: '新媒体运营',
                requirements: Mock.Random.pick([
                    '负责抖音、快手、小红书等平台的内容策划与账号运营',
                    '具备短视频脚本撰写、拍摄剪辑（剪映、PR）能力',
                    '熟悉平台算法推荐机制，能通过数据优化内容策略',
                    '网感强，关注热点，有爆款内容经验者优先',
                    '具备一定的数据分析和复盘能力'
                ])
            },
            {
                name: 'UI/UX设计师',
                requirements: Mock.Random.pick([
                    '精通 Figma、Sketch、Adobe XD 等设计工具，能输出高保真原型',
                    '具备用户研究、交互设计、可用性测试等全流程能力',
                    '熟悉设计系统（Design System）和组件化设计',
                    '有移动端或复杂后台系统设计经验者优先',
                    '作品集体现清晰的设计思路和用户体验思维'
                ])
            },
            {
                name: 'DevOps工程师',
                requirements: Mock.Random.pick([
                    '熟悉 CI/CD 流程，掌握 Jenkins、GitLab CI 等工具',
                    '熟练使用 Docker、Kubernetes 进行容器化部署',
                    '熟悉 AWS、阿里云等云服务平台',
                    '掌握 Prometheus、Grafana 等监控系统',
                    '具备自动化运维脚本编写能力（Shell/Python）'
                ])
            },
            {
                name: '网络安全工程师',
                requirements: Mock.Random.pick([
                    '熟悉常见安全漏洞（如 XSS、SQL 注入、CSRF）及防御方案',
                    '掌握渗透测试、安全扫描工具（如 Burp Suite、Nmap）',
                    '了解防火墙、WAF、IDS/IPS 等安全设备配置',
                    '熟悉等保合规要求，有安全审计经验者优先',
                    '具备应急响应和日志分析能力'
                ])
            },
            {
                name: '游戏客户端开发工程师',
                requirements: Mock.Random.pick([
                    '熟悉 C++/C#，掌握 Unity 或 Unreal 引擎开发',
                    '了解游戏客户端架构、渲染、动画、网络同步等模块',
                    '有性能优化和内存管理经验',
                    '热爱游戏，有完整项目或上线游戏经验者优先',
                    '具备良好的团队协作和抗压能力'
                ])
            },
            {
                name: 'AI工程师',
                requirements: Mock.Random.pick([
                    '熟悉深度学习框架（PyTorch/TensorFlow），有模型训练与部署经验',
                    '掌握 NLP、CV 或推荐系统中至少一个方向',
                    '熟悉 Transformer、BERT、YOLO 等主流模型',
                    '具备模型优化（量化、剪枝）和推理加速能力',
                    '有大模型（LLM）微调或应用经验者优先'
                ])
            },
            {
                name: '大模型应用工程师',
                requirements: Mock.Random.pick([
                    '熟悉大语言模型（LLM）原理，掌握 Prompt Engineering 技巧',
                    '有 LangChain、LlamaIndex 等框架使用经验',
                    '能基于大模型开发对话系统、智能客服、知识问答等应用',
                    '熟悉 RAG（检索增强生成）、Agent 架构',
                    '具备 Python 开发能力，了解 FastAPI、Flask 等后端框架'
                ])
            },
            {
                name: '技术主管',
                requirements: Mock.Random.pick([
                    '5年以上开发经验，2年以上团队管理经验',
                    '主导过中大型项目的技术架构与落地，具备技术决策能力',
                    '熟悉敏捷开发流程，能带领团队高效交付',
                    '具备跨团队沟通与资源协调能力',
                    '有高并发、分布式系统经验者优先'
                ])
            },
            {
                name: '技术合伙人',
                requirements: Mock.Random.pick([
                    '具备全栈开发能力，能独立搭建技术团队和系统架构',
                    '有创业经验或从0到1产品上线经验',
                    '技术视野广阔，能把握技术方向与产品结合点',
                    '具备股权分配意识和长期发展承诺',
                    '擅长团队激励与资源整合'
                ])
            },
            {
                name: '实习前端开发',
                requirements: Mock.Random.pick([
                    '计算机相关专业在校生，每周可实习4天以上',
                    '掌握 HTML、CSS、JavaScript，了解 Vue 或 React 框架',
                    '有个人项目或 GitHub 仓库者优先',
                    '学习能力强，工作认真，具备团队协作意识',
                    '有意向毕业后留用者优先'
                ])
            },
            {
                name: '远程自由前端开发者',
                requirements: Mock.Random.pick([
                    '有3年以上前端开发经验，具备独立开发能力',
                    '熟悉 Git 协作流程，能按时交付任务',
                    '具备良好的沟通能力，能理解需求并反馈进度',
                    '有远程协作经验，自备开发环境',
                    '有开源项目或技术博客者优先'
                ])
            }
        ]),
        company: Mock.Random.pick([
            {
                name: '阿里巴巴',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzE4OTBGRiIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '10000人以上',
            },
            {
                name: '腾讯科技',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzAwQTg1NCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '10000人以上',
            },
            {

                name: '字节跳动',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGNkIzNSIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '10000人以上',
            },
            {

                name: '美团',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGRDcwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '10000人以上',
            },
            {

                name: '滴滴出行',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGNDQ1MCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '8000人以上',
            },
            {

                name: '京东',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0U2MDAwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5KPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '8000人以上',
            },
            {
                name: '小米',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGNzUwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5NPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '9000人以上',
            },
            {

                name: '百度',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzQyODVGQSIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '8000人以上',
            },
            {

                name: '哔哩哔哩',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGN0Y5RCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiNGRjQ0NTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkI8L3RleHQ+Cjwvc3ZnPgo=',
                type: '互联网公司',
                size: '10000人以上',
            },
            {

                name: '华为',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0YwMDAwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '10000人以上',
            },
            {

                name: '拼多多',
                logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iI0ZGRDcwMCIvPgo8dGV4dCB4PSIyMCIgeT0iMjYiIGZvbnQtZmFtaWx5PSItYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QPC90ZXh0Pgo8L3N2Zz4K',
                type: '互联网公司',
                size: '10000人以上',
            }
        ]),

        salary: `${Mock.Random.pick([
            '8K-12K·16薪',
            '9K-13K·16薪',
            '10K-15K·13薪',
            '11K-16K·14薪',
            '面议',
            '12K-18K·18薪',
            '13K-19K·15薪',
            '15K-25K·18薪',
            '18K-30K·12薪',
            '19K-35K·18薪',
            '20K-35K·12薪',
            '25K-40K·12薪',
            '30K-50K·13薪'
        ])}`,
        contact: {
            name: Mock.Random.cname(),
            role: '招聘专员',
        },
        benefits: Mock.Random.pick([
            ['五险一金', '股票期权', '年终奖'],
            ['弹性工作时间', '股票期权', '带薪年假'],
            ['健身房', '晋升快', '团队氛围好'],
            ['零食下午茶', '节日福利', '员工旅游'],
            ['地铁周边', '免费班车', '健身房'],
            ['扁平管理', '成长空间大', '员工旅游'],
            ['节日福利'],
            ['成长空间大'],
            ['员工旅游'],
            ['带薪年假'],
            ['股票期权'],
            ['零食下午茶'],
            ['年终奖', '晋升快'],
            ['弹性工作时间', '健身房'],
            ['技能培訓', '大牛很多'],
            ['团队氛围好', '免费班车'],
            ['团队氛围好', '双休'],
        ]),
        location: `${Mock.Random.pick([
            // 北京
            '北京·朝阳区', '北京·海淀区', '北京·丰台区', '北京·西城区', '北京·东城区', '北京·通州区', '北京·昌平区', '北京·大兴区',

            // 上海
            '上海·浦东新区', '上海·徐汇区', '上海·静安区', '上海·黄浦区', '上海·长宁区', '上海·闵行区', '上海·普陀区', '上海·杨浦区',

            // 广州
            '广州·天河区', '广州·越秀区', '广州·海珠区', '广州·白云区', '广州·番禺区', '广州·黄埔区', '广州·南沙区',

            // 深圳
            '深圳·南山区', '深圳·福田区', '深圳·宝安区', '深圳·龙岗区', '深圳·龙华区', '深圳·罗湖区', '深圳·坪山区',

            // 杭州
            '杭州·西湖区', '杭州·上城区', '杭州·拱墅区', '杭州·滨江区', '杭州·余杭区', '杭州·萧山区', '杭州·临平区',

            // 成都
            '成都·武侯区', '成都·锦江区', '成都·青羊区', '成都·成华区', '成都·金牛区', '成都·高新区', '成都·双流区',

            // 重庆
            '重庆·渝北区', '重庆·渝中区', '重庆·九龙坡区', '重庆·南岸区', '重庆·沙坪坝区', '重庆·巴南区', '重庆·江北区',

            // 南京
            '南京·江宁区', '南京·鼓楼区', '南京·玄武区', '南京·浦口区', '南京·栖霞区', '南京·建邺区', '南京·秦淮区',

            // 武汉
            '武汉·江汉区', '武汉·武昌区', '武汉·汉阳区', '武汉·洪山区', '武汉·硚口区', '武汉·青山区', '武汉·东湖高新区',

            // 郑州
            '郑州·金水区', '郑州·中原区', '郑州·二七区', '郑州·管城区', '郑州·郑东新区', '郑州·惠济区', '郑州·高新区'
        ])}`,
        updateTime: `${Mock.Random.date('MM月dd日')}`,
        major: Mock.Random.shuffle([
            '计算机科学与技术',
            '软件工程',
            '电子信息工程',
            '计算机类',
            '电子信息类',
            '计算机工程与技术',
            '数学'
        ]).slice(0, Mock.Random.integer(1, 3)),
        number: Mock.Random.integer(13, 96)
    }));
};

// 生成隨機圖片的函數
const generateRandomImage = () => {
    // 隨機背景顏色（確保文字清晰可見）
    const bgColors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ]
    const bgColor = Mock.Random.pick(bgColors)

    // 根據背景顏色選擇對比度高的文字顏色
    const textColor = bgColor.startsWith('#FF') || bgColor.startsWith('#F7') || bgColor.startsWith('#F8') ? '#333' : '#FFF'

    // 生成 SVG 圖片
    const svg = `
        <svg width="100" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="150" fill="${bgColor}"/>
            <text x="50" y="80" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
                  text-anchor="middle" fill="${textColor}">hello</text>
        </svg>
    `

    return `data:image/svg+xml;base64,${btoa(svg)}`
}

const getSquare = (page, pageSize = 10) => {
    return Array.from({ length: pageSize }, (_, i) => {
        // 隨機生成 1-3 張圖片
        const imageCount = Mock.Random.integer(1, 3)
        const images = Array.from({ length: imageCount }, () => generateRandomImage())

        return {
            id: `${page}+${i}`,
            avator: 'https://resouces.modelscope.cn/cover-images/88aa6906-bc1e-4392-9311-a76aebd0307e.png?x-oss-process=image/format,jpg/quality,Q_50',
            text: `${Mock.Random.pick([
                '已上岸，我来分享一下经验：面试前充分准备，了解公司背景，预习常见问题，自信展现自我...',
                '曾被拒十次，最终成功：失败不可怕，复盘每一次，找出短板并针对性提升...',
                '国企上岸分享：带上简历和作品集，即使对方已有副本，主动提供显示诚意...',
                '面经分享：清晰表达个人经历与成就，强调能为公司带来的价值，并从失败中学习...',
                '面试技巧分享：积极倾听面试官提问，思考后再答，避免急于求成...',
                '一线大厂面试分享：提问环节准备好问题，展示对职位及行业的深刻理解与兴趣...',
                '面试心得：不怕提及过往失败经验，重点在于如何从中学习成长...',
                '来分享一下面试经历：展现团队合作精神，讲述协作完成项目的成功案例，包括面对失败时的应对...',
                '拿到Offer之后我们应该：跟进感谢邮件，简述面试收获，并再次表达加入意愿...',
                '接受失败：保持乐观心态面对结果，无论成败，每次面试都是宝贵经验...',
                '多次尝试终获成功：不要害怕失败，它教会了我更多比成功更重要的东西...',
                '失败乃成功之母：总结失败中的教训，下一次就会做得更好...',
                '从挫折中学到的：每一次失败后重新站起来，让自己变得更加强大...'
            ])}`,
            person: `${Mock.Random.cfirst()}${Mock.Random.pick(['女士', '先生'])}`,
            images: images,
            type: `${Mock.Random.pick(['面经', '经验分享', '面试技巧', '面试心得', '面试经历', '面试分享'])}`,
            comments: Array.from({ length: Mock.Random.integer(1, 3) }, (_, commentIndex) => ({
                id: `${page}+${i}+${commentIndex}`,
                name: `${Mock.Random.cfirst()}${Mock.Random.pick(['女士', '先生'])}`,
                text: Mock.Random.pick([
                    '加油',
                    '这是什么公司',
                    '这是什么工作',
                    '写的不错啊',
                    '有没有内推啊',
                    '你真的太棒了,真的要向你学习,现在的社会找工作... ',
                    '求公司名字，我也想去！',
                    '看完泪目了，最近投了50份简历没回音...',
                    '太真实了，面试官问"你有什么缺点"我直接懵了...',
                    '收藏了，等我上岸也来写面经',
                    '感谢分享！已截图保存，准备明天面试用',
                    '楼主运气好，我面到一半被HR打断说"下一个..."',
                    '同是天涯打工人，抱抱你，也抱抱自己',
                    '建议出个视频版，想听你讲讲当时的场景',
                    '这才是干货！比那些营销号强一百倍',
                    '有没有交流群？想认识更多找工作的小伙伴',
                    '楼主太厉害了，我也要去试试',
                    '这个公司怎么样？工作环境好吗？',
                    '面试官问的问题好刁钻啊',
                    '我也想去试试，有联系方式吗？',
                    '楼主分享得很详细，学到了很多',
                    '这个薪资待遇怎么样？',
                    '面试流程大概多久？',
                    '需要准备什么材料？',
                    '有笔试吗？难度如何？',
                    '公司文化怎么样？',
                    '工作时间是双休吗？',
                    '有年终奖吗？',
                    '技术栈是什么？',
                    '团队氛围怎么样？',
                    '有培训机会吗？',
                    '晋升空间大吗？',
                    '工作压力大吗？',
                    '有期权吗？',
                    '公司发展前景如何？'
                ]),
            }))
        }
    })
}

// 首页招聘信息
export default [
    {
        url: '/api/jobs',
        method: 'get',
        timeout: 500,
        response: ({ query }) => {
            const page = Number(query.page) || 1;
            return {
                code: 0,
                data: getJobs(page)
            };
        },
    },
    // 热门搜索建议
    {
        url: '/api/search',
        method: 'get',
        timeout: 400,
        response: (req, res) => {
            return {
                code: 0,
                data: [
                    {
                        id: 1,
                        name: '前端开发工程师',
                    },
                    {
                        id: 2,
                        name: '网络安全工程师',
                    },
                    {
                        id: 3,
                        name: 'UI/UX设计师',
                    },
                    {
                        id: 4,
                        name: '后端开发工程师',
                    },
                    {
                        id: 5,
                        name: '软件测试工程师',
                    },
                    {
                        id: 6,
                        name: '产品经理',
                    },
                    {
                        id: 7,
                        name: '数据分析师',
                    },
                    {
                        id: 8,
                        name: '运维工程师',
                    },
                ]
            }
        }
    },
    // 搜索建议
    {
        url: '/api/suggestSearch',
        method: 'get',
        response: (req, res) => {
            const keyword = req.query.keyword;

            // 職位名稱庫
            const jobTitles = [
                '前端开发工程师',
                'React开发工程师',
                'Vue开发工程师',
                'JavaScript开发工程师',
                '前端开发',
                '前端牛马工程师',
                '前端架构师',
                '前端讲师',
                'UI设计师',
                'UI设计师讲师',
                '产品经理',
                '数据分析师',
                '后端开发工程师',
                'Java开发工程师',
                'Java后端开发工程师',
                'Java后端架构师',
                'Python开发工程师',
                'Python后端开发工程师',
                'Python讲师',
                '运维工程师',
                '测试工程师',
                '算法工程师',
                '算法讲师',
                '移动端开发工程师',
                '移动端开发讲师',
                '全栈开发工程师',
                '全栈开发讲师',
                'Node.js开发工程师',
                'Node.js讲师',
                'TypeScript开发工程师',
                'TypeScript讲师',
                '小程序开发工程师',
                '小程序开发讲师',
                'H5开发工程师',
                'H5开发讲师',
            ];

            let suggestions = [];

            if (keyword && keyword.trim()) {
                // 根據關鍵詞過濾匹配的職位
                const matchedJobs = jobTitles.filter(title =>
                    title.toLowerCase().includes(keyword.toLowerCase())
                );

                // 隨機選擇3-6個匹配的職位
                const count = Mock.Random.integer(3, 6);
                suggestions = Mock.Random.shuffle(matchedJobs).slice(0, count);
            } else {
                // 無關鍵詞時隨機返回3-5個職位
                const count = Mock.Random.integer(3, 5);
                suggestions = Mock.Random.shuffle(jobTitles).slice(0, count);
            }

            // 轉換為需要的格式
            const result = suggestions.map((name, index) => ({
                id: index + 1,
                name: name
            }));

            return {
                code: 0,
                data: result,
                message: 'success'
            }
        }
    },
    // 登录
    {
        url: '/api/login',
        method: 'post',
        timeout: 1000,
        response: (req, res) => {
            const { username, password } = req.body
            if ((username !== 'job_seeker1' || password !== '123456') && (username !== 'job_seeker2' || password !== '123456')) {
                return {
                    code: 1,
                    message: '用户名或密码错误'
                }
            }
            const token = jwt.sign({
                user: {
                    id: username === 'job_seeker1' ? '001' : '002',
                    username,
                }
            }, secret, {
                expiresIn: 86400,
            })
            return {
                code: 0,
                token,
                data: {
                    id: username === 'job_seeker1' ? '001' : '002',
                    username,
                }
            }
        }
    },
    // 检测token
    {
        url: '/api/user',
        method: 'get',
        response: (req, res) => {
            const token = req.headers['authorization'].split(' ')[1]

            if (token) {
                const decode = jwt.verify(token, secret)
                return {
                    code: 0,
                    user: decode.username
                }
            } else {
                return {
                    code: 1,
                    message: 'Invalid Token'
                }
            }
        }
    },
    // 广场
    {
        url: '/api/square',
        method: 'get',
        timeout: 500,
        response: ({ query }) => {
            const page = Number(query.page) || 1;
            return {
                code: 0,
                data: getSquare(page)
            };
        }
    }
]