Page({
  data: {
    todoText: '',
    imageUrl: '',
    date: '',
    time: ''
  },

  onLoad() {
    const now = new Date()
    this.setData({
      date: this.formatDate(now),
      time: this.formatTime(now)
    })
  },

  formatDate(date) {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  },

  formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  chooseImage() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imageUrl: res.tempFilePaths[0]
        })
      }
    })
  },

  deleteImage() {
    this.setData({
      imageUrl: ''
    })
  },

  cancel() {
    wx.navigateBack()
  },

  confirm() {
    if (!this.data.todoText.trim()) {
      wx.showToast({
        title: '请输入待办事项内容',
        icon: 'none'
      })
      return
    }

    const todos = wx.getStorageSync('todos') || '[]'
    const todoList = JSON.parse(todos)
    
    todoList.push({
      text: this.data.todoText,
      image: this.data.imageUrl,
      time: `${this.data.date} ${this.data.time}`,
      completed: false
    })

    wx.setStorageSync('todos', JSON.stringify(todoList))
    wx.navigateBack()
  }
}) 