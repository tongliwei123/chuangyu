<template>
	<view class="container">
		<view class="buttons">
			<view class="change">更换背景</view>
			<view class="change">更换LOGO</view>
		</view>
		<view class="content">
			
		</view>
		<view class="styles">
			<!-- https://ftp.bmp.ovh/imgs/2020/08/0149dd951b245be6.png
			https://ftp.bmp.ovh/imgs/2020/08/5de05c847b0bf7a9.png
			https://ftp.bmp.ovh/imgs/2020/08/1b454c4ce0d6d46e.png
			https://ftp.bmp.ovh/imgs/2020/08/47044a8cc43f3835.png -->
			<image class="modeImg" mode="aspectFit" src="https://ftp.bmp.ovh/imgs/2020/08/0149dd951b245be6.png"></image>
			<image class="modeImg" mode="aspectFit" src="https://ftp.bmp.ovh/imgs/2020/08/5de05c847b0bf7a9.png"></image>
			<image class="modeImg" mode="aspectFit" src="https://ftp.bmp.ovh/imgs/2020/08/1b454c4ce0d6d46e.png"></image>
			<image class="modeImg" mode="aspectFit" src="https://ftp.bmp.ovh/imgs/2020/08/47044a8cc43f3835.png"></image>
		</view>
		<button @click="handleToShare" class="create">一键生成</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			handleToShare(){
				uni.navigateTo({
					url:'../shareCard/index'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 65rpx;
	}
	.buttons {
		display: flex;
		flex-direction: row-reverse;
	}
	
	.change {
		width:180rpx;
		height:58rpx;
		background:rgba(229,229,231,1);
		border-radius:10rpx;
		color: #2D2D2D;
		font-size: 26rpx;
		line-height: 58rpx;
		text-align: center;
		margin-right: 34rpx;
		margin-top: 16rpx;
	}
	
	.content {
		width:526rpx;
		height:876rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 0rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:20rpx;
		margin: 0 auto;
		margin-top: 32rpx;
	}
	
	.create {
		width:646rpx;
		height:92rpx;
		background:rgba(95,96,224,1);
		border-radius:10rpx;
		line-height: 92rpx;
		color: #fff;
		font-size: 28rpx;
		margin: 65rpx auto;
	}
	
	.styles {
		padding: 13rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.modeImg {
		width: 113rpx;
		height: 113rpx;
	}
</style>
