<template>
	<view>
		<van-tabs :active="active">
			<van-tab title="短视频制作">
				<scroll-view class="dataList">
					<view class="itemWrap" v-for="(item, index) in [0,1,2,3,4]">
						<view class="bage">
							<image v-if="index === 0" class="bageImg" src="../../static/icons/first.png"></image>
							<image v-if="index === 1" class="bageImg" src="../../static/icons/second.png"></image>
							<image v-if="index === 2" class="bageImg" src="../../static/icons/third.png"></image>
							<text v-if="index > 2">{{index+1}}</text>
						</view>
						<view class="content">
							<view class="van-multi-ellipsis--l3 words">给准备创业的人推荐几本书——打算创业的人适合看哪些书？</view>
							<view class="data">
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/love.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/comments.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/see.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							</view>
						</view>
						<image class="itemImg" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1037526968,3554917254&fm=26&gp=0.jpg"></image>
					</view>
				</scroll-view>
			</van-tab>
			<van-tab title="UED设计">
				<scroll-view class="dataList">
					<view class="itemWrap" v-for="(item, index) in [0,1,2,3,4]">
						<view class="bage">
							<image v-if="index === 0" class="bageImg" src="../../static/icons/first.png"></image>
							<image v-if="index === 1" class="bageImg" src="../../static/icons/second.png"></image>
							<image v-if="index === 2" class="bageImg" src="../../static/icons/third.png"></image>
							<text v-if="index > 2">{{index+1}}</text>
						</view>
						<view class="content">
							<view class="van-multi-ellipsis--l3 words">给准备创业的人推荐几本书——打算创业的人适合看哪些书？</view>
							<view class="data">
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/love.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/comments.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/see.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							</view>
						</view>
						<image class="itemImg" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1037526968,3554917254&fm=26&gp=0.jpg"></image>
					</view>
				</scroll-view>
			</van-tab>
			<van-tab title="工业设计">
				<scroll-view class="dataList">
					<view class="itemWrap" v-for="(item, index) in [0,1,2,3,4]">
						<view class="bage">
							<image v-if="index === 0" class="bageImg" src="../../static/icons/first.png"></image>
							<image v-if="index === 1" class="bageImg" src="../../static/icons/second.png"></image>
							<image v-if="index === 2" class="bageImg" src="../../static/icons/third.png"></image>
							<text v-if="index > 2">{{index+1}}</text>
						</view>
						<view class="content">
							<view class="van-multi-ellipsis--l3 words">给准备创业的人推荐几本书——打算创业的人适合看哪些书？</view>
							<view class="data">
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/love.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/comments.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/see.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							</view>
						</view>
						<image class="itemImg" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1037526968,3554917254&fm=26&gp=0.jpg"></image>
					</view>
				</scroll-view>
			</van-tab>
			<van-tab title="服务产品">
				<scroll-view class="dataList">
					<view class="itemWrap" v-for="(item, index) in [0,1,2,3,4]">
						<view class="bage">
							<image v-if="index === 0" class="bageImg" src="../../static/icons/first.png"></image>
							<image v-if="index === 1" class="bageImg" src="../../static/icons/second.png"></image>
							<image v-if="index === 2" class="bageImg" src="../../static/icons/third.png"></image>
							<text v-if="index > 2">{{index+1}}</text>
						</view>
						<view class="content">
							<view class="van-multi-ellipsis--l3 words">给准备创业的人推荐几本书——打算创业的人适合看哪些书？</view>
							<view class="data">
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/love.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/comments.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							  <view class="dataItem">
								  <image class="dataImg" src="../../static/icons/see.png"></image>
								  <view class="dataNum">123</view>
							  </view>
							</view>
						</view>
						<image class="itemImg" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1037526968,3554917254&fm=26&gp=0.jpg"></image>
					</view>
				</scroll-view>
			</van-tab>
		</van-tabs>
	</view>
</template>

<script>
	export default {
		data: function(){
			return {
				active: 0
			}
		}
	}
</script>

<style>
	.van-tabs__line {
		background-color: #5F60E0 !important;
	}
	
	.dataList {
		padding: 0 30rpx
	}
	
	.itemWrap {
		margin-top: 25rpx;
		display: flex;
		padding-bottom: 17rpx;
		border-bottom: 1rpx solid #DCDCDC;
	}
	
	.content {
		
	}
	
	.bage {
		width: 28rpx;
		height: 35rpx;
		line-height: 35rpx;
		text-align: center;
		margin-right: 27rpx;
		font-size:26rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(147,147,147,1);
	}
	
	.bageImg {
		width: 28rpx;
		height: 35rpx;
	}
	
	.words {
		width: 359rpx;
		font-size:30rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:#4D4D4d;
		line-height:42rpx;
		letter-spacing:1rpx;
	}
	
	.itemImg {
		flex-shrink: 0;
		width:276rpx;
		height:176rpx;
		border-radius: 4rpx;
	}
	
	.data {
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
	}
	
	.dataItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 27rpx;
	}
	
	.dataImg {
		width: 35rpx;
		height: 29rpx;
	}
	
	.dataNum {
		font-size:17rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:#6a6a6a;
		line-height:24rpx;
		letter-spacing:1rpx;
	}
</style>
