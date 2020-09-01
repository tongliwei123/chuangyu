<template>
	<view class="container">
		<view class="logo">
			<view class="one">
				<image class="logoImg" src="../../static/hi.png"></image>
				 欢迎来到这里，快来     
			</view>
			<view>咨询小鱼吧~</view>
		</view>
		<view class="btns">
			<image class="btnImg" src="../../static/phone.png"></image>
			<image class="btnImg" src="../../static/weixin.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo {
		margin-top: 373rpx;
		width: 553rpx;
		font-size:42rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(88,88,88,1);
		line-height:59rpx;
		letter-spacing:8rpx;
	}
	
	.one {
		display: flex;
		align-items: flex-end;
	}
	
	.logoImg {
		width: 88rpx;
		height: 88rpx;
		flex-shrink: 0;
	}
	
	.btns {
		margin-top: 400rpx;
		width: 553rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.btnImg {
		width: 98rpx;
		height: 98rpx;
	}
</style>
