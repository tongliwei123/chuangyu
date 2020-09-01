<template>
	<scroll-view scroll-y="true" class="container">
		<view class="service" v-for="item in list" v-key="item" @click="handleToDetail">
			<image class="serviceImg" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1037526968,3554917254&fm=26&gp=0.jpg"></image>
			<view class="content">
				<view class="title">
					<view class="titleName">工商注册<image class="status" src="../../static/icons/pay.png"/></view>
					<image src="../../static/icons/record.png" class="bage"></image>
				</view>
				<view class="dateAndPrice">
					<text class="date">订购时间：2020-7-26</text>
					<text class="price">￥12000</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				list: [1,2,3,4]
			}
		},
		onLoad() {

		},
		methods: {
			handleToDetail: function(){
				uni.navigateTo({
					url:'../serviceDetail/index'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F2F2F2;
	}
	
	.service {
		margin-bottom: 20rpx;
		padding: 20rpx 30rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
	}
	
	.serviceImg {
		width: 245rpx;
		height: 160rpx;
		flex-shrink: 0;
		margin-right: 52rpx;
	}
	
	.content {
		flex: 1;
	}
	
	.bage {
		width: 22rpx;
		height: 25rpx;
	}
	
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.titleName {
		display: flex;
		align-items: center;
		font-size:30rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(77,77,77,1);
		letter-spacing:1rpx;
	}
	
	.dateAndPrice {
		margin-top: 9rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.date {
		font-size:22rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(103,103,103,1);
		line-height:30rpx;
		letter-spacing:1rpx;
	}
	
	.price {
		font-size:26rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(255,118,99,1);
		line-height:37rpx;
	}
	
	.status {
		width: 60rpx;
		height: 23rpx;
		margin-left: 8rpx;
	}
</style>
