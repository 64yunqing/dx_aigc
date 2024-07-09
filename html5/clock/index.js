var secondHand =document.querySelector('.second-hand')
var minHand =document.querySelector('.min-hand')
var hourHand =document.querySelector('.hour-hand')
function setDate(){
    //拿到当前时间
    var now =new Date()

    //读秒
    var seconds=now.getSeconds()

    //计算旋转角
    var secondsDeg=((seconds/60)*360)+90
    //设置秒针角度
    secondHand.style.transform=`rotate(${secondsDeg}deg)`

    //读分
    var mins=now.getMinutes()
    //计算旋转角
    var minsDeg=((mins/60)*360)+((seconds/60/60)*360)+90
    //设置分针角度
    minHand.style.transform=`rotate(${minsDeg}deg)`

    //读时
    var hours=now.getHours()
    var hoursDeg =((hours/12)*360)+((mins/12/60)*360)+((seconds/12/60/60)*360)+90
    hourHand.style.transform=`rotate(${hoursDeg}deg)`
}

setInterval(setDate,1000);