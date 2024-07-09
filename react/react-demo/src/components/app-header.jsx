import { Component } from 'react';
// 类组件
// es6 Component基类 继承
class AppHeader extends Component {
    
    constructor(props){
        // super 父类构造函数
        super(props)
        // 数据 props之外，还有state 自由状态
        // state 状态
        this.state = {
            // 状态
            emoji:'😊',
            count:0
        }

        // setInterval(() => this.changeEmoji(), 3000)
        console.log('11111');
    }
    // onload
    // 生命周期函数 组件挂载到页面后
    componentDidMount(){
        console.log('22222');
        // 组件已挂载
        setInterval(() => this.changeEmoji(), 1000)
    }
    componentDidUpdate(){
        console.log('update',this.state.emoji,this.state.count);
    }
    changeEmoji = () => {
        // Component 内置方法
        this.setState({
            emoji:this.state.emoji === '😊'?'😔':'😊',
            count:this.state.count + 1
        })
    }
    // 类里的abstract 方法，必须实现的
    // 没有render 哪里有html呢
    render(){
        const {name} = this.props
        const {emoji} = this.state
        const {count} = this.state
        return(
        <div className="app-header">
            <h1 className="title">{name} - {emoji} +{count}</h1>
        </div>
        )
    }


}

export default AppHeader