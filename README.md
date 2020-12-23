### 项目参考文档地址：https://www.wenjiangs.com/doc/umijs-api-api
### 路由的两种使用方式
 ## 动态路由
    
 ## URL跳转
### umi生成动态的路由，前提是不进行配置
### umi中使用sass 
### 修改了配置文件，一定要重启服务
 umi中使用sass  npm install --save @umijs/plugin-sass  npm i --save-dev node-sass sass-loader
### 
 umi-request文档地址：https://github.com/umijs/umi-request/blob/master/README_zh-CN.md
### 组件的生命周期
getDefaultProps(获取初始化props)  ===> getInitialState(初始化state) ===> componentWillMount ===>(组件将要挂载，即组件刚经历了constructor()初始化数据之后，但是还没有渲染的过程，经常用于服务端渲染)===>componentDidMount(组件第一次渲染完毕，此时能够获取到dom节点)===>componentWillUnmount(组件卸载，一般用于清除定时器，或者移除监听removeEventListener)===>