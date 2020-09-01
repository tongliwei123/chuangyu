<template>
	<view class="container">
		<view class="top">
			<swiper class="banners">
				<swiper-item class="banner">
					<image class="bannerImg" src="../../static/demo/banner.png"></image>
				</swiper-item>
			</swiper>
			<view class="title">
				给准备创业的人推荐几本书——打算创业的人适合看哪些书？
			</view>
			<view class="tags">
				<view class="tag">
					<view class="bage">#</view>
					<view class="tagName">创业小知识</view>
				</view>
			</view>
			<view class="words">
				     未来商业即精益商业精益商业思维，其实应该成为一个商业常识，要先追求效益，再追求规模，要先小范围、小规模地进行验证后，再进行扩张。而在最近几年的资本热潮下，很多项目都忽略了这一点，盲目地快速扩张，盲目地放大未经验证的商业模式，最终导致了最后的失败。
				精益创业，在我看来其实就是有点像在做实验，当你有一个想法了，就通过一个小小的实验来做测试，看看每个实验会出什么结果，然后再不断地调配方和过程。也就是书中所说的，通过不断地尝试来不断逼近最有效最完美的解决方案。
				精益的七字精髓就是：低成本快速试错。没钱所以要学会低成本，团队小所以要快速响应。
			</view>
			<view class="tip">全文结束</view>
			<view class="tip">参与评论，赢商城2折减免优惠~</view>
		</view>
		<van-divider />
		<view class="bottom">
			<view class="headers">
				<view class="roles">
					<view class="all" style="margin-right: 50rpx;">全部回复</view>
					<view class="stars">只看大咖</view>
				</view>
				<view>
					<van-dropdown-menu>
					  <van-dropdown-item :value="value1" :options="option1" />
					</van-dropdown-menu>
				</view>
			</view>
			<view class="counts">共369条评论</view>
			<view class="fieldWrap">
				<image class="avatar" src="../../static/demo/avatar.png"></image>
				<input class="field" placeholder="说点什么吧，让小鱼帮你创业" />
			</view>
			<view class="comments">
				<view class="comment">
					<view class="first">
						<image class="avatar" src="../../static/demo/avatar.png"></image>
						<view class="content">
							<view class="firstName">
								<text>我是一只小小鸟</text>
								<image src="../../static/icons/star.png" class="startIcon"></image>
							</view>
							<view class="firstWord">你觉得健康行业如何、可以一起交流交流吗？</view>
							<view class="date">07-22</view>
						</view>
					</view>
					<view class="subComment">
						<view class="subHeader">
							<image src="../../static/demo/avatar.png" class="subAvatar"></image>
							<text class="subName">我是另一只鸟~</text>
						</view>
						<view class="secondWord">
							回复 <text class="subName">小红薯111K00</text>你觉得健康行业如
						</view>
						<view class="secondDate">07-22</view>
					</view>
					<view class="subComment">
						<view class="subHeader">
							<image src="../../static/demo/avatar.png" class="subAvatar"></image>
							<text class="subName">我是另一只鸟~</text>
						</view>
						<view class="secondWord">
							回复 <text class="subName">小红薯111K00</text>你觉得健康行业如
						</view>
						<view class="secondDate">07-22</view>
					</view>
					<view class="subComment">
						<view class="subHeader">
							<image src="../../static/demo/avatar.png" class="subAvatar"></image>
							<text class="subName">我是另一只鸟~</text>
						</view>
						<view class="secondWord">
							回复 <text class="subName">小红薯111K00</text>你觉得健康行业如
						</view>
						<view class="secondDate">07-22</view>
					</view>
				</view>
				<view class="more">展开更多回复</view>
			</view>
		</view>
		<view class="footer">
			<input placeholder="说点什么…" class="footerField" />
			<view class="footItem">
				<image class="iconImg" src="../../static/icons/love.png"></image>
				<text>喜欢23</text>
			</view>
			<view class="footItem">
				<image class="iconImg" src="../../static/icons/comments.png"></image>
				<text>评论123</text>
			</view>
			<view class="footItem">
				<image class="iconImg" src="../../static/icons/share.png"></image>
				<text>分享</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				option1: [
				      { text: '时间正序', value: 0 },
				      { text: '时间倒序', value: 1 },
				],
				value1: 0
			}
		}
	}
</script>

<style>
	
	.top {
		margin: 0 auto;
		width: 690rpx;
	}
	.bottom {
		margin: 0 auto;
		width: 690rpx;
	}
	swiper {
		margin: 0 auto;
		width: 690rpx;
		height: 838rpx;
	}
	
	.bannerImg {
		width: 690rpx;
		height: 838rpx;
	}
	
	.title {
		margin-top: 48rpx;
		color: #4D4D4D;
		font-size: 32rpx;
		font-weight: 500;
	}
	
	.tags {
		margin-top: 17rpx;
	}
	
	.tag {
		width:228rpx;
		height:61rpx;
		background:rgba(232,232,232,1);
		border-radius:32rpx;
		display: flex;
		align-items: center;
	}
	
	.bage {
		margin: 0 8rpx;
		width:42rpx;
		height:42rpx;
		background:rgba(75,109,230,1);
		border-radius: 50%;
		text-align: center;
		line-height: 42rpx;
		color: #fff;
		font-size: 30rpx;
		font-weight: 500;
	}
	
	.tagName {
		color: rgba(75,109,230,1);
		font-size: 28rpx;
	}
	
	.words {
		color: #5F5F5F;
		font-size: 28rpx;
		margin-top: 22rpx;
		line-height:40rpx;
		margin-bottom: 64rpx;
	}
	
	.tip {
		text-align: center;
		color: #8C9EFF;
		font-size: 20rpx;
		line-height:28rpx
	}
	
	.headers {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.roles {
		display: flex;
		align-items: center;
	}
	
	.all, .stars {
		font-weight: 500;
		color: #575757;
		font-size: 26rpx;
	}
	
	.counts {
		color: #5F5F5F;
		font-size: 22rpx;
	}
	
	.fieldWrap {
		display: flex;
		align-items: center;
		margin-top: 14rpx;
	}
	
	.avatar {
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	
	.field {
		width: 598rpx;
		height: 59rpx;
		border-radius: 30rpx;
		background-color: #EBEBEB;
		padding-left: 10rpx;
	}
	
	.comments {
		margin-top: 40rpx;
		padding-bottom: 162rpx;
	}
	
	.first {
		display: flex;
	}
	
	.firstName {
		margin-top: 6rpx;
		display: flex;
		align-items: center;
		color: #828282;
		font-size: 22rpx;
	}
	
	.startIcon {
		width: 54rpx;
		height: 23rpx;
		margin-left: 11rpx;
	}
	
	.firstWord {
		color: #404040;
		font-size: 24rpx;
		line-height: 33rpx;
	}
	
	.date {
		color: #5f5f5f;
		font-size: 18rpx;
		margin-top: 10rpx;
	}
	
	.subComment {
		margin-top: 15rpx;
		margin-left: 109rpx;
	}
	
	.subHeader {
		display: flex;
		align-items: center;
	}
	
	.subAvatar {
		width: 52rpx;
		height: 52rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	
	.subName {
		color: #828282;
		font-size: 21rpx;
	}
	
	.secondWord {
		color: #404040;
		font-size: 24rpx;
		line-height: 33rpx;
		margin-left: 68rpx;
	}
	
	.secondDate {
		margin-left: 68rpx;
		color: #5f5f5f;
		font-size: 18rpx;
		margin-top: 10rpx;
	}
	
	.more {
		margin-left: 177rpx;
		font-size:26rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(75,109,230,1);
		margin-top: 12rpx;
	}
	
	.footer {
		position: fixed;
		bottom: 0;
		padding: 30rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 0rpx 8rpx 0rpx rgba(118,118,118,0.5);
		display: flex;
		box-sizing: border-box;
		width: 100%;
		align-items: center;
		justify-content: space-between;
	}
	
	.footerField {
		width: 374rpx;
		height: 64rpx;
		border-radius: 32rpx;
		background-color: #EBEBEB;
		padding-left: 20rpx;
	}
	
	.iconImg {
		width: 39rpx;
		height: 34rpx;
	}
	
	.footItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size:19rpx;
		color: #6a6a6a;
	}
</style>
