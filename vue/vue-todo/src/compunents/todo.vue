<template>

    <div id="app" class="todo">
        <div class="title">todos</div>

        <div class="input-group">

            <div class="label">待办事项</div>

            <input type="text" class="content" id="newTodo">
            
            <button class="btn" @click="newtodo">新增</button>
        </div>

        <ul class="list">
            
        </ul>
    </div>
    

</template>

<script setup>
const todoDate = []
const newtodo = ()=>{
    
        todoDate.push({
            id:Date.now(),
            content:document.getElementById('newTodo').value,
            completed:false
        })
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
    document.getElementById('newTodo').value=''
}
</script>

<style lang="css" scoped>

*{
    margin: 0;
    padding: 0;

}
body{
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 5%;
}
.todo{
    text-align: center;
    width: 500px;
    height: 500px;
    border: 1px solid #00000000;
}
.title{
    font-size: 50px;
    color: #cf0c0c;
    text-align: center;
}
.input-group{
    display: flex;
    font-size: 30px;
}
.label{
padding: 10px;
}
.content{
    flex: 1;
    font-size: 20px;
}
.btn{
    width: 80px;
    font-size: 30px;
    margin-left: 10px;
}
.list-item{
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #313030e8;
    font-size: 26px;
    align-items: center;
}
.itme-check{
    width: 30px;
    height: 30px;
}
.itme-content{
    flex: 1;
    margin: 0 10px;
}
.span-close{
    display: none;
}
.list-item:hover .span-close{
    display: block;
}
</style>