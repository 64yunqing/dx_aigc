<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.todo-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		margin-bottom: 20rpx;
		background-color: #f8f8f8;
		border-radius: 10rpx;
	}

	.delete-btn {
		background-color: #ff4d4f;
		color: white;
		font-size: 24rpx;
		padding: 10rpx 20rpx;
		border-radius: 6rpx;
	}

	button {
		background-color: #007AFF;
		color: white;
		border: none;
		padding: 10rpx 30rpx;
		border-radius: 6rpx;
	}
</style>
