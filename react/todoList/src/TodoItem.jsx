import { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            editText:this.props.todo.text
        }
    }
    handleEditChange = (e) => {
        this.setState({
            editText: e.target.value
        })
    }

    handleEditSave = (e) => {
        this.props.editTodo(this.props.index, this.state.editText)
        this.setState({
            isEditing: false
        })
    }

    render() {
        const { 
            todo,
            index,
            toggleTodo,
            deleteTodo,
        } =  this.props
        const{ isEditing, editText } = this.state
        const { text, complete } = todo
        // JS 运行区域
        return (
            <li className={`todo-item ${complete?'todo-item__completed':''}`} >
                {isEditing?(
                    <div>
                        <input type="text"
                            value={editText}
                            onChange={this.handleEditChange}
                            className='todo-item__edit-input'
                        />
                        <button 
                        onClick={this.handleEditSave}
                        className='todo-item__save-btn'
                        >Save</button>
                    </div>
                    
                ):<div>
                    <span className='todo-item__text'
                     onClick={() => toggleTodo(index)}>
                    {text}
                    </span>
                    <button className='todo-item__edit'
                    onClick={() => this.setState({isEditing:true})}>编辑</button>
                    <button className='todo-item__delete'
                     onClick={() => deleteTodo(index)}>删除</button>
                </div>}
            </li>
        )
    }
}

export default TodoItem