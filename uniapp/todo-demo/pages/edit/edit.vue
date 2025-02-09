<template>
  <view class="container">
    <view class="form-item">
      <textarea 
        v-model="todoText" 
        placeholder="请输入待办事项内容" 
        class="todo-input"
      />
    </view>

    <view class="form-item">
      <view class="image-upload" @tap="chooseImage" v-if="!imageUrl">
        <text class="upload-text">点击添加图片</text>
      </view>
      <view class="image-preview" v-else>
        <image :src="imageUrl" mode="aspectFill" class="preview-image"></image>
        <view class="delete-image" @tap="deleteImage">×</view>
      </view>
    </view>

    <view class="form-item">
      <picker 
        mode="date" 
        :value="date" 
        @change="bindDateChange"
      >
        <view class="picker">
          日期：{{date}}
        </view>
      </picker>
      <picker 
        mode="time" 
        :value="time" 
        @change="bindTimeChange"
      >
        <view class="picker">
          时间：{{time}}
        </view>
      </picker>
    </view>

    <view class="button-group">
      <button class="btn cancel" @tap="cancel">取消</button>
      <button class="btn confirm" @tap="confirm">完成</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      todoText: '',
      imageUrl: '',
      date: this.formatDate(new Date()),
      time: this.formatTime(new Date())
    }
  },
  methods: {
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
      this.date = e.detail.value
    },
    bindTimeChange(e) {
      this.time = e.detail.value
    },
    chooseImage() {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          this.imageUrl = res.tempFilePaths[0]
        }
      })
    },
    deleteImage() {
      this.imageUrl = ''
    },
    cancel() {
      uni.navigateBack()
    },
    confirm() {
      if (!this.todoText.trim()) {
        uni.showToast({
          title: '请输入待办事项内容',
          icon: 'none'
        })
        return
      }

      const todos = uni.getStorageSync('todos') || '[]'
      const todoList = JSON.parse(todos)
      
      todoList.push({
        text: this.todoText,
        image: this.imageUrl,
        time: `${this.date} ${this.time}`,
        completed: false
      })

      uni.setStorageSync('todos', JSON.stringify(todoList))
      uni.navigateBack()
    }
  }
}
</script>

<style>
.container {
  padding: 30rpx;
}

.form-item {
  margin-bottom: 30rpx;
}

.todo-input {
  width: 100%;
  height: 200rpx;
  background: #fff;
  border-radius: 10rpx;
  padding: 20rpx;
  box-sizing: border-box;
}

.image-upload {
  width: 100%;
  height: 300rpx;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rpx;
}

.upload-text {
  color: #999;
  font-size: 28rpx;
}

.image-preview {
  position: relative;
  width: 100%;
  height: 300rpx;
}

.preview-image {
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}

.delete-image {
  position: absolute;
  right: 10rpx;
  top: 10rpx;
  width: 40rpx;
  height: 40rpx;
  background: rgba(0,0,0,0.5);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.picker {
  background: #fff;
  padding: 20rpx;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 40rpx;
}

.btn {
  width: 45%;
}

.cancel {
  background: #f5f5f5;
  color: #666;
}

.confirm {
  background: #4CAF50;
  color: #fff;
}
</style> 