<template>
	<view class="container">
		<view class="content"></view>
		<view class="buttons">
			<view class="share">分享</view>
			<view class="save">保存</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.content {
		width:632rpx;
		height:1052rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 0rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:20rpx;
		margin: 0 auto;
		margin-top: 20rpx;
	}
	
	.buttons {
		padding: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.share, .save {
		width:334rpx;
		height:92rpx;
		background:rgba(95,96,224,1);
		border-radius:10rpx;
		line-height: 92rpx;
		text-align: center;
		color: #fff;
		font-size: 28rpx;
	}
</style>
