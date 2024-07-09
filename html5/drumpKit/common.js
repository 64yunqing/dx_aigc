const keys = document.querySelectorAll('.key');


// 监听键盘按键事件
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);

function playSound(event) {
    // 如果事件是由键盘按键触发，则获取按键码
    const keyCode = event ? event.keyCode : null;

    // 找到与按键码匹配的元素
    const ele = keyCode !== null ? 
        document.querySelector(`.key[data-key="${keyCode}"]`) :
        event.currentTarget; // 如果事件由鼠标触发，直接使用当前目标

    // 如果找到了匹配的元素
    if (ele) {
        ele.classList.add('playing');

        // 播放音效
        const soundName = ele.querySelector('.sound').textContent;
        const audio = new Audio(`./sound/${soundName}.mp3`);
        audio.play();

        // 使用计时器移除'playing'类，以停止CSS过渡
        setTimeout(() => {
            removeTransition.call(ele);
        }, 800);
    }
}

function removeTransition() {
    this.classList.remove('playing');
}