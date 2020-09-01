<template>
	<view class="container">
		<view class="title">工商注册</view>
		<view class="main">
			业务合同/报价单
		</view>
		<view class="steps">
			<view class="stepTitle">
				<view class="bage"></view>
				业务进度展示
			</view>
			<view class="stepContainer">
				<view class="step">
					<image src="../../static/icons/one.png" class="num"></image>
					一期付款，需求确认、原型设计阶段；
				</view>
				<view class="line"></view>
				<view class="step">
					<image src="../../static/icons/two.png" class="num"></image>
					UI设计、业务逻辑梳理、风格确认；
				</view>
				<view class="line"></view>
				<view class="step">
					<image src="../../static/icons/three.png" class="num"></image>
					业务开发阶段；
				</view>
				<view class="line"></view>
				<view class="step">
					<image src="../../static/icons/four.png" class="num"></image>
					产品交付、客户确认。
				</view>
			</view>
		</view>
		<view style="padding: 0  29rpx;">
			<van-divider />
		</view>
		<view class="services">
			<view class="stepTitle">
				<view class="bage"></view>
				付款明细
			</view>
		</view>
		<view class="servicItem">
			<view class="left">
				<image src="../../static/demo/banner.png" class="serviceImg"></image>
				<view>
					<view class="serviceName">工商注册</view>
					<view class="servicePrice">￥1000</view>
				</view>
			</view>
			<view class="right">去注册</view>
		</view>
		<view class="servicItem">
			<view class="left">
				<image src="../../static/demo/banner.png" class="serviceImg"></image>
				<view>
					<view class="serviceName">工商注册</view>
					<view class="servicePrice">￥1000</view>
				</view>
			</view>
			<view class="right gray">已完成</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.container {
		padding-top: 20px;
	}
	
	.title {
		font-size:30rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color: #4d4d4d;
		text-align: center;
		margin-bottom: 19rpx;
	}
	
	.main {
		margin: 0 auto;
		width:691rpx;
		height:1052rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 0rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:10rpx;
		line-height: 1052rpx;
		text-align: center;
		font-size:30rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		color: #575757;
	}
	
	.steps {
		margin: 0 auto;
		width:691rpx;
	}
	
	.stepTitle {
		display: flex;
		align-items: center;
		font-size:28rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(48,48,48,1);
		line-height:41rpx;
		letter-spacing:2rpx;
		margin: 19rpx 0;
	}
	
	.bage {
		width: 7rpx;
		height: 35rpx;
		background-color: #5F60E0;
		margin-right: 6rpx;
	}
	
	.stepContainer {
		margin-left: 69rpx;
	}
	
	.stepContainer {
		display: flex;
		flex-direction: column;
	}
	
	.line {
		width: 1rpx;
		height: 93rpx;
		border-left: 0.5rpx dashed #7862F1;
		margin: 7rpx 0;
		margin-left: 32rpx;
	}
	
	.num {
		width: 54rpx;
		height: 61rpx;
		margin-right: 26rpx;
	}
	
	.step {
		display: flex;
		align-items: center;
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(48,48,48,1);
		line-height:42rpx;
		letter-spacing:2rpx;
	}
	
	.services {
		margin: 0 auto;
		width:691rpx;
	}
	
	.servicItem {
		padding: 20rpx 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background:rgba(255,255,255,1);
		border:1px solid rgba(225,225,225,1);
		margin-bottom: 20rpx;
	}
	
	.left {
		display: flex;
		align-items: center;
	}
	
	.serviceImg {
		width:245rpx;
		height:160rpx;
		flex-shrink: 0;
		margin-right: 52rpx;
	}
	
	.serviceName {
		font-size:30rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(77,77,77,1);
		line-height:42rpx;
		letter-spacing:1rpx;
	}
	
	.servicePrice {
		font-size:26rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(255,118,99,1);
		line-height:37rpx;
	}
	
	.right {
		width: 120rpx;
		height: 46rpx;
		color: #fff;
		text-align: center;
		border-radius: 8rpx;
		font-size: 24rpx;
		line-height: 46rpx;
		background-color: #FF6565;
	}
	
	.gray {
		background-color: #BEBEBE;
	}
</style>
