<template>
	<view class="container">
		<view class="title">优惠券</view>
		<view class="coupon">
			<view class="left">
				<view class="price">
					<image src="../../static/icons/coupon.png" class="couponImg"></image>
					<view class="couponPrice">￥666</view>
				</view>
				<view class="content">
					<view class="name">工商注册专享优惠</view>
					<view class="date">到期时间：2020-9-26</view>
				</view>
			</view>
			<view class="use">立即使用</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.container {
		padding: 26rpx 30rpx 0 30rpx;
	}
	
	.title {
		font-size:28rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(45,45,45,1);
		margin-bottom: 10rpx;
	}
	
	.coupon {
		margin-top: 20rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px 0rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:10rpx;
		padding: 32rpx 14rpx 37rpx 41rpx;
		display: flex;
		flex: 1;
		justify-content: space-between;
	}
	
	.left {
		display: flex;
		align-items: flex-end;
	}
	
	.couponImg {
		width: 90rpx;
		height: 82rpx;
	}
	
	.price {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 61rpx;
	}
	
	.couponPrice {
		font-size:36rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color: #FF7D7D;
	}
	
	.name {
		font-size:30rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color: #4d4d4d;
	}
	
	.date {
		font-size:22rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color: #676767;
		margin-top: 19rpx;
	}
	
	.use {
		width:151rpx;
		height:53rpx;
		background:linear-gradient(154deg,rgba(189,146,255,1) 0%,rgba(95,96,224,1) 100%);
		border-radius:26rpx;
		text-align: center;
		line-height: 53rpx;
		font-size:24rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color: #fff;
		align-self: center;
	}
</style>
