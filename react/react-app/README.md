- #root 挂载点， react 接管
- react/vue 开启了前端开发的新篇章
    - say goodbye to dom coding
    - mvvm 的世界
- React.createElement('div', {className: 'box'}, children)
- JSX 语法 <div>{name}</div>html 也是一种xml xml in js 界面表现力
    src/ index.js JSX -> 编译以下(stylus)-> react 支持JSX
- ReactDOM.render()

## create-react-app 生产工艺流程的理解

## react 不同的环境
    - /src 开发目录 development
    - npm run build 打包 上线   production
    - test  
    - 外网没法访问

    - 开发流程
        - 当你拿到B站offer
        - 领导了开发任务 登录功能
        - src/ 相应的功能开发
        - localhost:3000 测试
        - npm run build 打包上线的代码包 ./build
        - serve -s ./  本地模拟线上环境
        - PC 局域网 移动设备测一测
        - deply 真正的push 上线

    - vercel 
        - 云开发
        - 本地一键上云
            vercel login
            vercel deploy
        - 免费的二级域名 指向你上传的build目录
        http://localhost:3000/  development
        http://localhost:65211/ build
        https://react-milkr907c-yunqings-projects.vercel.app/ production

- JSX 拥有强大的表现力，
    React.createElement() 太繁琐了
    写html一样  


模块化，职责分离
- index.js 就负责根节点的接洽
- App.jsx 根组件 
