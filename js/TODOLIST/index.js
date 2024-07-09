// 用户每次创建一个todo，就存进数组
// 循环数组，生成数组长度相同的li结构

var todoDate=[]
var addTodo=document.querySelector('.btn')
var todoList = document.querySelector('.list')

//新增按钮点击
function addNewTodo(){
    // input是否有值
    if(document.getElementById('newTodo').value !==''){
        todoDate.push({
            id:Date.now(),
            content:document.getElementById('newTodo').value,
            completed:false
        })

        //渲染列表
        render()
        document.getElementById('newTodo').value=''
    }
} 

function render(){
    var str=''

    for(var i=0;i<todoDate.length;i++){
        var item = todoDate[i]

        str +=`
            <li class="list-item">
                <input type="checkbox" class="itme-check" id="">
                <p class="itme-content">${item.content}</p>
                <span class="close" data-id="${item.id}" data-action="remove">×</span>
            </li>
            `
    }
    //往ul中植入str
    todoList.innerHTML = str
}

function removeTodo(e){
    console.log(e.target);
    if(e.target.dataset.action == "remove"){
        //拿到当前这个span上的id值,找到数组中哪个对象中的id和这个span的id相等
        //找出它的下标,按照下标移除数组中的元素splice

        render()
    }
}
addTodo.addEventListener('click',addNewTodo)
todoList.addEventListener('click',removeTodo)