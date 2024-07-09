// 一个文件一个类
/**
 * @func    就地编辑
 * @param {ele} container  挂载点
 * @author yunyi
 * @data 2024/6/25
 */
// es6 2015 简洁优雅 好读
// es6 默认值
function EditInPlace(storageKey,container,value='这个家伙很懒，什么都没有留下'){
    // console.log('-----');
    this.storageKey = storageKey;
    this.container=container;
    this.value = value;
    // 将动态创建文本和编辑input的dom 封装，代码管理好
    this.createElement();
    // console.log(this.value);
    this.attachEvents();
}

EditInPlace.prototype={
    //就地编辑的动态dom
    createElement:function(){
        // DOM树
        // 创建一个div
        this.editElement = document.createElement('div');
        // 添加一个子元素
        this.container.appendChild(this.editElement);

        // signature 文本值
        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this.value;
        this.editElement.appendChild(this.staticElement);

        // input
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.editElement.appendChild(this.fieldElement);
        
        // 确定按钮
        this.saveButton = document.createElement('input');
        this.saveButton.type = 'button';
        this.saveButton.value = '保存';
        this.editElement.appendChild(this.saveButton);

        // 取消按钮
        this.cancleButton = document.createElement('input');
        this.cancleButton.type = 'button';
        this.cancleButton.value = '取消';
        this.editElement.appendChild(this.cancleButton);

        // 初始文本状态
        this.converToText()
    },
    // 文本状态
    converToText:function(){
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancleButton.style.display = 'none';
    },
    // 编辑状态 
    converToEdit:function(){
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancleButton.style.display = 'inline';
    },
    // 事件监听
    attachEvents:function(){
        // // this
        // let that = this;
        // that.staticElement.addEventListener('mousemove',()=>{
        // // this 指向元素
        // // this 丢失了
        //     this.converToEdit();
        // // 对象？
        // })
        this.staticElement.addEventListener('mousemove',()=>{
            this.converToEdit();
        })
        this.saveButton.addEventListener('click', () => {
            this.save()
        })
        this.cancleButton.addEventListener('click', () => {
            this.converToText()
        })
    },
    save:function(){
        this.value = this.fieldElement.value;
        this.staticElement.innerHTML = this.value;
        this.converToText();
        // html5 localStorage 本地存储
        localStorage.setItem(this.storageKey,this.value)
        this.saveData()
    },
    saveData:function(){
        let value = this.value
        // restful = url 定义方式 + Method
        // GET  读  POSt 创建  PUT 更新 PATCH 局部更新 DELETE 删除
        // 看到这个url 就知道啥资源？
        // 修改资源 GET 
        fetch('http://localhost:3000/users/1',{
            method:'PATCH',
            //请求头，发送的内容 格式是JSON
            headers:{
                'Content-Type':'application/json'
            },
            // 请求体
            body:JSON.stringify({
                signature:value
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data,'保存成功');
        })

    },
}