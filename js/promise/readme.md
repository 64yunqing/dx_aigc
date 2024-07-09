# event loop

- JavaScript 是单线程语言
- JS代码的执行顺序和编写顺序可能不一样
- Event Loop 是JS的执行机制 
    - script 脚本是第一个宏任务
    - 让同步任务快速执行掉
    - 异步任务先会放到event Table 登记
        click () => {}
        setTimeout()
    - 系统进入idle  状态
    - 检测event table 是否有任务 要执行
    - 任务放入Event Queue
    - 执行
    - 循环检测 Event Loop
    - Event Table 为空
    - idle 状态

- promise 控制执行流程
