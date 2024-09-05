<template>
	<view>
		car
	</view>
</template>

<script>
	import { onMounted } from 'vue';
	onMounted(()=>{
		uni.request({
			url:'https://mock.mengxuegu.com/mock/65a91543c4cd67421b34c898/movie/movieList',
			data:{
				id:1
			}
		})
		.then(res => {
			console.log(res);
			uni.setStorage({
				key:'movie',
				data:'受欢迎的电影'
			})
			
		})
	})
</script>

<style lang="scss">

</style>
