<template>
  <view class="container">
    <view class="todo-list">
      <view class="todo-item" v-for="(item, index) in todos" :key="index">
        <view class="todo-content">
          <checkbox-group @change="toggleTodo(index)">
            <checkbox :checked="item.completed" />
          </checkbox-group>
          <view class="todo-info">
            <text :class="{'completed': item.completed}">{{item.text}}</text>
            <view class="todo-details">
              <image v-if="item.image" :src="item.image" mode="aspectFill" class="todo-image"></image>
              <text class="todo-time">{{item.time}}</text>
            </view>
          </view>
        </view>
        <button class="delete-btn" size="mini" @tap="deleteTodo(index)">删除</button>
      </view>
    </view>

    <!-- 添加悬浮的"+"按钮 -->
    <view class="add-button" @tap="goToEdit">
      <text class="plus">+</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      todos: []
    }
  },
  methods: {
    goToEdit() {
      uni.navigateTo({
        url: '/pages/edit/edit'
      })
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed
      this.saveTodos()
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
      this.saveTodos()
    },
    saveTodos() {
      uni.setStorageSync('todos', JSON.stringify(this.todos))
    },
    loadTodos() {
      const todos = uni.getStorageSync('todos')
      if (todos) {
        this.todos = JSON.parse(todos)
      }
    }
  },
  onShow() {
    // 每次显示页面时重新加载待办事项
    this.loadTodos()
  }
}
</script>

<style>
.container {
  padding: 20rpx;
  padding-bottom: 120rpx; /* 为悬浮按钮留出空间 */
}

.todo-list {
  margin-top: 20rpx;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  margin-bottom: 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 2rpx 4rpx rgba(0,0,0,0.1);
}

.todo-content {
  display: flex;
  align-items: flex-start;
  flex: 1;
}

.todo-info {
  margin-left: 20rpx;
}

.todo-details {
  margin-top: 10rpx;
}

.todo-image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 8rpx;
  margin-top: 10rpx;
}

.todo-time {
  font-size: 24rpx;
  color: #999;
  margin-top: 8rpx;
  display: block;
}

.completed {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  margin-left: 20rpx;
  background-color: #ff4d4f !important;
  color: #fff !important;
}

.add-button {
  position: fixed;
  right: 40rpx;
  bottom: 40rpx;
  width: 100rpx;
  height: 100rpx;
  background-color: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 8rpx rgba(0,0,0,0.2);
}

.plus {
  color: white;
  font-size: 60rpx;
  font-weight: bold;
}
</style> 