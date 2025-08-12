# react bubu智聘 招聘移动端App

## 项目介绍
- 移动端App
- 模仿 各大智聘App
    - 优点改变
    - 将各个招聘App融汇一体
    - 取其精华去其糟粕

## 技术栈
- React全家桶
    React 组件开发
    第三方组件库  react-vant
    路由守卫
    懒加载
    受控和非受控组件
    hooks编程  自定义hooks
    React-Router-Dom
        SPA 单页应用
        路由守卫
        懒加载
    Zustand
- mock  接口模拟
- axios 请求拦截和代理
- jwt 登录
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo ......
- css 预处理器
    flex transition transform 不需要做重复的计算
- LLM
    - chat 已完成
    - 生图 分析简历  这个还待完善
- 移动端适配
    rem 
- 订阅发布者模式 设计模式的理解
- git 提交等编程风格

## 项目的架构
- components
- pages
- store
- hooks
- api
- mock

## 安装的包
    react-router-dom zustand axios
    react-vant （第三方UI组件库）  lib-flexible  适配移动端
    开发期间的依赖
    jwt  vite-plugin-mock 
    postcss postcss-pxtorem  
- vite 配置
    - alias
    - mock
    - .env.local
        配置 llm apiKey
    - user-scalable=no  禁止用户缩放
    - css 预处理
        index.css   reset
        box-sizing  font-family:-apply-system
        App.css     全局通用样式
        module.css  模块化样式
    - 移动端适配 rem
        不能用px，使用相对单位rem html
        不同设备上体验要一致
        不同尺寸手机 等比例缩放
        flexible.js 阿里适配方案
- lib-flexible
    阿里开源
    设置html fontSize=window.innerWidth / 10

## 项目亮点
- 移动端适配
    - lib-flexible  1rem = 屏幕宽度/10
    - 设计稿 尺寸是iPhone 标准尺寸 750px

- 自动化？ 
    - postcss + postcss-pxtorem
    - postcss 是css 预编译器，很强大
    - vite 会自动读取postcss.config.js 将css文件 内容编译
    - px 转 rem

- 懒加载 封装了ImaCard组件实现懒加载  组件卸载时，直接使用disconnect  释放资源，防止内存泄露

- 路由守卫  也是在jwt登录鉴权实现的

- Search
    - 防抖 实现性能优化
    - api 
        GoogleSuggest
    - localStorage 缓存搜索历史

- 瀑布流
    - 小红书等主流App的内容浏览用户体验产品
        滚动加载更多，图片懒加载
    - 接口
        /api/images?page=${n}  支持翻页
        唯一id  page  -  index
        随机图片，高度随机

- 详情页 
    根据不同的招聘信息ID 展示详情
    AI简历分析  调用llm 接口   这个还待完善

- 通用组件开发
    - Loading
    - 当用户在浏览广场界面点击喜欢，喜欢列表会弹出微标提示用户，并且加入到喜欢列表
        - toast 组件封装
        - 需要自定义，UI组件库不满足需求
        - UI props
        - JS 显示出来 跨层级通信
        观察者
        - mitt eventBus 事件总线 
            - 实例化
            - on(自定义事件的名字, callback) 
            - emit(自定义事件的名字, 参数)
            组件通过监听一个自定义事件，实现基于事件的组件通信
    - Icon 组件
        封装了一个阿里图标库
        可以更方便的使用一些react-vant中没有的图标
    - ImgCard 组件
        封装了图片懒加载，组件卸载时，直接使用disconnect  释放资源，防止内存泄露
    - 主页招聘信息的卡片组件
        封装了招聘信息卡片组件，可以复用
    - 广场界面 瀑布流组件
        方便运用在别的广场文章界面

## 项目亮点难点
- 前端智能
    - AnytChat 封装了调用大模型函数 可以根据不同的token切换不同的Chat大模型
    - chat 函数  当然流式输出还待完善
    - 对各家模型比较感兴趣，升级为kimiChat，doubaoChat...灵活
        主要参考 性能、能力、性价比
        随意切换大模型，通过参数抽象
    在该项目中选用的是经济实惠的Deepseek

- 原子css
    - App.css 里面添加通用样式 比如弹性布局 盒子模型等等
    - 各自模块里面module.css 不影响别的组件
    - lib-flexible  适配移动端
    - postcss pxtorem  插件 快速还原设计稿
    - 原子类css，
        一个元素按功能逻辑拆分成多个类，和原子一样
        元素的样式就可以由这些原子类组合而成
        样式可以复用的更好，以后几乎可以不用写样式

     - 智能分析简历
        coze 工作流 智能编排AI 流程 编程一种
        - api调用
        在详情页埋下伏笔，当用户点击AI简历分析图片时会跳转到AI简历分析页面  这个当然还待完善

- 用户体验优化
    前端当然少不了用户体验优化
    - 搜索建议， 防抖+useMemo  性能优化
    - 组件粒度划分  
        React.memo  +  useCallback
    - 懒加载
    - 热门推荐 + 相关商品 （产品）
    - SPA
    - 骨架屏  不用让用户等待了
    - 文件上传的preview  html5 FileReader
        
## 项目遇到过什么问题，怎么解决的
- chat messages 遇到messages 覆盖问题
- 闭包陷阱
    一次事件里面，两次setMessages() 导致闭包陷阱  setMessages(prev => [...prev, message])
- 升级瀑布流
    - 刚进入页面时一片空白，显得很突兀，用户体验不好
        骨架屏 使用了react-vant的骨架屏组件
    瀑布流随机数据生成
    - Array.from({length:pageSize},(_,i)=>({

    }))
    - intersectionObserver 用的两次，重复了，dry原则 封装了ImgCard组件

- 网页的名字很突兀
    自定义hooks  useTitle 网页的名字根据不同的页面动态变化

- 当刷新页面会自动跳转到第一个页面很不友好
    es6 特性使用
    tabbar 高亮
    arr.findIndex + str.startsWith
- coze 工作流返回的数据是嵌套的JSON字符串，需要扁平化处理，
    需要扁平化处理，
    导致一直没有渲染，
    之后成功发现解决了这个问题
## 项目迭代
    - 功能由潜入深
    - chatbot  deepseek 简单chat
    - deepseek-r1  推理模型
    - 流式输出
    - 上下文
    - coze 工作流接口调用   完成简历分析这个重要功能