window.onload = function() {
    // 确定第一行能放几 n 张图
      // 1. 获取屏幕宽度
      // 2. 获取图片的宽度
    // 操作第 n+1 张 摆放它的位置  放在高度最小的那一列
      // 1. 获取每一列的高度
      // 2. 更新这一列的高度
  
    imgLocation('container', 'box')
  
    function imgLocation(parent, child) {
      var cParent = document.getElementById(parent)
      //  获取所有的图片
      var cChild = cParent.getElementsByClassName(child)
      //  获取图片的宽度
      var screenWidth = window.innerWidth
      var imgWidth = cChild[0].offsetWidth
      //  获取屏幕宽度
      var num = Math.floor(screenWidth / imgWidth)
      // 确定第一行能放几 n 张图
    
      cParent.style.width = `${imgWidth * num}px`
  
      // 操作第 num+1 张
      var boxHeightArr = []
      for (var i = 0; i < cChild.length; i++) {
        if (i < num) {  // 第一行
          boxHeightArr.push(cChild[i].offsetHeight)
        } else {
          // 找数组最小值
          var minHeight = Math.min(...boxHeightArr)
          var minIndex = boxHeightArr.indexOf(minHeight)
  
          // 摆放图片
          cChild[i].style.position = 'absolute'
          cChild[i].style.top = minHeight + 'px'
          cChild[i].style.left = cChild[minIndex].offsetLeft + 'px'
  
          // 更新这一列的高度
          
          boxHeightArr[minIndex] = boxHeightArr[minIndex] + cChild[i].offsetHeight
        }
      }
  
  
  
    }
  
  
    
  }