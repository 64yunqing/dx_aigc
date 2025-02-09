<template>
  <view class="container">
    <view class="user-info">
      <image class="avatar" src="/static/avatar.png" mode="aspectFill"></image>
      <view class="user-details">
        <text class="username">用户名</text>
        <text class="user-id">ID: 12345</text>
      </view>
    </view>
    
    <view class="stats">
      <view class="stat-item">
        <text class="stat-number">{{todoCount}}</text>
        <text class="stat-label">总待办数</text>
      </view>
      <view class="stat-item">
        <text class="stat-number">{{completedCount}}</text>
        <text class="stat-label">已完成</text>
      </view>
    </view>

    <button class="settings-btn" type="primary" @tap="openSettings">设置</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      todoCount: 0,
      completedCount: 0
    }
  },
  methods: {
    loadTodoStats() {
      const todos = uni.getStorageSync('todos')
      if (todos) {
        const todoList = JSON.parse(todos)
        this.todoCount = todoList.length
        this.completedCount = todoList.filter(todo => todo.completed).length
      }
    },
    openSettings() {
      uni.showToast({
        title: '设置功能开发中',
        icon: 'none'
      })
    }
  },
  onShow() {
    this.loadTodoStats()
  }
}
</script>

<style>
.container {
  padding: 20rpx;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 10rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 2rpx 4rpx rgba(0,0,0,0.1);
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
  margin-right: 30rpx;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.user-id {
  font-size: 24rpx;
  color: #999;
}

.stats {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 30rpx;
  border-radius: 10rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 2rpx 4rpx rgba(0,0,0,0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 36rpx;
  font-weight: bold;
  color: #007AFF;
}

.stat-label {
  font-size: 24rpx;
  color: #999;
  margin-top: 10rpx;
}

.settings-btn {
  margin-top: 30rpx;
  width: 90% !important;
}
</style> 