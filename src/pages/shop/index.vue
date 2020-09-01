<template>
	<view class="container">
		<scroll-view>
			<view class="items">
				<view class="item">
					<view class="itemTop">
						<image src="../../static/demo/itemImg.png" class="itemImg"></image>
						<view class="name">工商注册</view>
					</view>
					<view class="use" @click="showModal">立即预约</view>
				</view>
				<view class="item">
					<view class="itemTop">
						<image src="../../static/demo/itemImg.png" class="itemImg"></image>
						<view class="name">工商注册</view>
					</view>
					<view class="use" @click="showModal">立即预约</view>
				</view>
				<view class="item">
					<view class="itemTop">
						<image src="../../static/demo/itemImg.png" class="itemImg"></image>
						<view class="name">工商注册</view>
					</view>
					<view class="use" @click="showModal">立即预约</view>
				</view>
			</view>
		</scroll-view>
		<van-popup
		  :show="show"
		  round
		  position="bottom"
		  @close="onClose"
		>
			<view class="fields">
				<view class="title">个人信息</view>
				<van-field
					:value="name"
					label="姓名"
					@change="onChange"
				/>
				<van-field
					:value="phone"
					label="联系方式"
					@change="onChange"
				/>
				<button class="submit" @click="submit">提交</button>
			</view>
		</van-popup>
		<van-overlay :show="success" @click="onClickHide">
		  <view class="wrapper">
			  <view class="block">
				<image src="../../static/success.png" class="success"></image>
				<view class="message">预约提交成功</view>
			  </view>
		  </view>
		</van-overlay>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				success: false
			}
		},
		methods:{
			showModal: function(){
				this.show = true
			},
			
			onClose: function(){
				this.show = false
			},
			submit: function(){
				this.show = false
				this.success = true
			}
		}
	}
</script>

<style>
	.container {
		padding: 30rpx 20rpx 0 20rpx;
	}
	
	.items {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.itemImg {
		width:315rpx;
		height:267rpx;
	}
	
	.itemTop {
		position: relative;
	}
	
	.name {
		width:315rpx;
		height:66rpx;
		text-align: center;
		line-height: 66rpx;
		background:rgba(0,0,0,0.42);
		font-size:28rpx;
		font-family:STSongti-SC-Regular,STSongti-SC;
		font-weight:400;
		color: #fff;
		bottom: 0;
		position: absolute;
	}
	
	.item {
		width:315rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 0rpx 6rpx 0rpx rgba(180,183,227,1);
		border-radius:10rpx;
		padding-bottom: 29rpx;
		margin-bottom: 20rpx;
	}
	
	.use {
		margin: 0 auto;
		margin-top: 33rpx;
		width:170rpx;
		height:58rpx;
		background:rgba(95,96,224,1);
		border-radius:10rpx;
		color: #fff;
		text-align: center;
		line-height: 58rpx;
	}
	
	.title {
		font-size:28rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color: #4d4d4d;
		margin-bottom: 43rpx;
	}
	
	.fields {
		padding: 25rpx 31rpx;
		padding-bottom: 60rpx;
	}
	
	.submit {
		margin-top: 38rpx;
		width:170rpx;
		height:58rpx;
		background:rgba(95,96,224,1);
		border-radius:10rpx;
		color: #fff;
		font-size: 26rpx;
		text-align: center;
		line-height: 58rpx;
	}
	
	.block {
		width:539rpx;
		height:420rpx;
		background:rgba(255,255,255,1);
		box-shadow:0px -1rpx 10rpx 0rpx rgba(187,187,205,1);
		border-radius:20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.wrapper {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 100%;
	}
	
	.success {
		width: 221rpx;
		height: 184rpx;
		margin-top: 50rpx;
	}
	
	.message {
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color: #2d2d2d;
		margin-top: 52rpx;
		text-align: center;
	}
</style>
