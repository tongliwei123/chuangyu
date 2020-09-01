<template>
	<view class="container">
		<view class="comment">
			<view class="top">
				<view class="header">
					<image src="../../static/demo/avatar.png" class="avatar"></image>
					<view>
						<view class="name">我是小鸟啊</view>
						<view class="date">2020-07-06 15：28：15</view>
					</view>
				</view>
				<view class="content">
					回复<text class="subName">小红薯111K00：</text>当然可以呀…嘻
				</view>
			</view>
			<view class="ask">
				<text class="subName">小红薯111K00：</text>你觉得健康行业如何、可以一起交流交流吗？
			</view>
			<view class="words">
				<image class="contentImg" src="../../static/demo/banner.png"></image>
				<view>
					<view class="wordsContent van-multi-ellipsis--l2">创鱼企服小编细谈：企业注册千万不要踩这些坑…</view>
					<view>
						<van-tag style="margin-right: 10rpx;" type="primary">热门</van-tag>
						<van-tag type="success">关联</van-tag>
					</view>
					<view class="author">创鱼企服 | 2020-7-24  18:20</view>
				</view>
			</view>
		</view>
		<view class="comment">
			<view class="top">
				<view class="header">
					<image src="../../static/demo/avatar.png" class="avatar"></image>
					<view>
						<view class="name">我是小鸟啊</view>
						<view class="date">2020-07-06 15：28：15</view>
					</view>
				</view>
				<view class="content">
					回复<text class="subName">小红薯111K00：</text>当然可以呀…嘻
				</view>
			</view>
			<view class="ask">
				<text class="subName">小红薯111K00：</text>你觉得健康行业如何、可以一起交流交流吗？
			</view>
			<view class="words">
				<image class="contentImg" src="../../static/demo/banner.png"></image>
				<view>
					<view class="wordsContent van-multi-ellipsis--l2">创鱼企服小编细谈：企业注册千万不要踩这些坑…</view>
					<view>
						<van-tag style="margin-right: 10rpx;" type="primary">热门</van-tag>
						<van-tag type="success">关联</van-tag>
					</view>
					<view class="author">创鱼企服 | 2020-7-24  18:20</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.top {
		padding: 23rpx 30rpx;
	}
	
	.header {
		display: flex;
		align-items:center ;
	}
	
	.name {
		font-size:24rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		color:rgba(64,64,64,1);
	}
	
	.date {
		font-size:20rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		color:rgba(116,116,116,1);
	}
	
	.avatar {
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		margin-right: 10rpx;
	}
	
	.content {
		margin-top: 24rpx;
		font-size:24rpx;
		color: #404040;
	}
	
	.subName {
		color: #5F60E0;
	}
	
	.ask {
		padding: 21rpx 20rpx 13rpx 39rpx;
		background-color: #F6F6F6;
		font-size:24rpx;
		color: #404040;
	}
	
	.words {
		padding: 19rpx 43rpx 30rpx 43rpx;
		display: flex;
	}
	
	.contentImg {
		width:194rpx;
		height:137rpx;
		flex-shrink: 0;
		margin-right: 17rpx;
	}
	
	.wordsContent {
		font-size:26rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(61,61,61,1);
		line-height:37rpx;
	}
	
	.author {
		font-size:22rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(70,70,168,1);
		line-height:30rpx;
		letter-spacing:1rpx;
	}
	
	.comment {
		border-bottom: 30rpx solid #F6F6F6;
	}
</style>
