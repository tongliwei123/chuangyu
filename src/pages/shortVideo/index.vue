<template>
	<view class="container">
		<view class="content">
			<view class="header">
				<image src="../../static/demo/avatar.png" class="avatar"></image>
				<text class="name">我是一只小鸟</text>
			</view>
			<view :class="['words', {'van-multi-ellipsis--l2':!isShow}]">
				 未来商业即精益商业精益商业思维，其实应该成为一个商业常识，要先追求效益，再追求规模，要先小范围、小规模地进行验证后，再进行扩张。而在最近几年的资本热潮下，很多项目都忽略了这一点，盲目地快速扩张，盲目地放大未经验证的商业模式，最终导致了最后的失败。
				精益创业，在我看来其实就是有点像在做实验，当你有一个想法了，就通过一个小小的实验来做测试，看看每个实验会出什么结果，然后再不断地调配方和过程。也就是书中所说的，通过不断地尝试来不断逼近最有效最完美的解决方案。
				精益的七字精髓就是：低成本快速试错。没钱所以要学会低成本，团队小所以要快速响应。未来商业即精益商业精益商业思维，其实应该成为一个商业常识，要先追求效益，再追求规模，要先小范围、小规模地进行验证后，再进行扩张。而在最近几年的资本热潮下，很多项目都忽略了这一点，盲目地快速扩张，盲目地放大未经验证的商业模式，最终导致了最后的失败。
				精益创业，在我看来其实就是有点像在做实验，当你有一个想法了，就通过一个小小的实验来做测试，看看每个实验会出什么结果，然后再不断地调配方和过程。也就是书中所说的，通过不断地尝试来不断逼近最有效最完美的解决方案。
				精益的七字精髓就是：低成本快速试错。没钱所以要学会低成本，团队小所以要快速响应。
			</view>
			<view v-if="!isShow" class="action" @click="handleToShow">展开</view>
			<view v-if="isShow" class="action" @click="handleToHide">收起</view>
			<view class="tags">
				<view class="tag">
					<view class="bage">#</view>
					<view class="tagName">创业小知识</view>
				</view>
			</view>
		</view>
		<video auto-pause-if-open-native :controls="false" :enable-play-gesture="true" autoplay class="video" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				isShow: false
			}
		},
		methods:{
			handleToShow: function(){
				this.isShow = true
			},
			handleToHide: function(){
				this.isShow = false
			}
		}
	}
</script>

<style>
	.container {
		position: relative;
		width: 100vw;
		height: 100vh;
	}
	
	.video {
		width: 100vw;
		height: 100vh;
	}
	
	.content {
		position: absolute;
		width: 100vw;
		bottom: 0;
		background:rgba(0,0,0,0.78);
		padding: 30rpx;
		box-sizing: border-box;
		z-index: 100;
	}
	
	.header {
		display: flex;
		align-items: center;
	}
	
	.avatar {
		width:72rpx;
		height:72rpx;
		border-radius: 50%;
		margin-right: 16rpx;
	}
	
	.name {
		font-size: 28rpx;
		color: #fff;
	}
	
	.words {
		padding-left: 88rpx;
		font-size: 24rpx;
		color: #fff;
	}
	
	.action {
		font-size: 24rpx;
		color: #fff;
		text-align: right;
		margin-top: 10rpx;
	}
	
	.tags {
		margin-top: 17rpx;
		margin-left: 88rpx;
	}
	
	.tag {
		width: 160rpx;
		height:42rpx;
		background:rgba(232,232,232,0.6);
		border-radius:21rpx;
		display: flex;
		align-items: center;
	}
	
	.bage {
		margin: 0 8rpx;
		width:27rpx;
		height:27rpx;
		background:rgba(75,109,230,1);
		border-radius: 50%;
		text-align: center;
		line-height: 27rpx;
		color: #fff;
		font-size: 21rpx;
		font-weight: 500;
	}
	
	.tagName {
		color: #fff;
		font-size: 18rpx;
	}
</style>
