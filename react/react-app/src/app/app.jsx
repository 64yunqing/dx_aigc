// 根组件
// react 使用函数创建组件， 一定返回JSX 
// 组件不同于html，一堆的html + css + js 幻灯片组件
// 页面有组件组成(复用)
import AppHeader from './components/app-header';

const App = () =>{
    const element = (
    <div className='container'>
        <AppHeader name='wyz'/>
        <AppHeader name='zyf'/>

    </div>
    )
    return element
}
// module 输出 
export default App