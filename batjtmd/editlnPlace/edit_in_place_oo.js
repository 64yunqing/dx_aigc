// 为了让js 更好的适合大型企业级开发，原型式的面向对象 升级为传统的面向对象
// 拥抱更多其他语言程序员
// class extend implement oo 能力用出来
// 虽是es5没有的class，本质仍是原型式的，只是语法糖

class EditInPlace { 
    constructor(storageKey,container,value='这个家伙很懒，什么都没有留下'){
        // console.log('-----');
        this.storageKey = storageKey;
        this.container=container;
        this.value = value;
        // 将动态创建文本和编辑input的dom 封装，代码管理好
        this.createElement();
        // console.log(this.value);
        this.attachEvents();
    }
    createElement(){
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
    }
    attachEvents(){
        this.staticElement.addEventListener('mousemove',()=>{
            this.converToEdit();
        })
        this.saveButton.addEventListener('click', () => {
            this.save()
        })
        this.cancleButton.addEventListener('click', () => {
            this.converToText()
        })
    }
    converToText(){
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
        this.saveButton.style.display = 'none';
        this.cancleButton.style.display = 'none';
    }
    converToEdit(){
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.saveButton.style.display = 'inline';
        this.cancleButton.style.display = 'inline';
    }
    save(){
        this.value = this.fieldElement.value;

    }
    get value(){
        console.log('--------');
        return this.value
    }
    set value(value){
        console.log('++++++++++++');
        this.value = value;
        this.staticElement.innerHTML = this.value;
        this.converToText();
        // html5 localStorage 本地存储
        localStorage.setItem(this.storageKey,this.value)
    }
}