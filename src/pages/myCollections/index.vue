<template>
	<view class="container">
		<van-tabs :active="active" bind:change="onChange">
		  <van-tab title="干货">
			  <scroll-view scroll-y>
				  <view class="contentWrap" v-for="item in list">
					  <image class="contentImg" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1037526968,3554917254&fm=26&gp=0.jpg"></image>
					  <view class="tags">
						  <van-tag type="primary">热门</van-tag>
						  <van-tag type="success">关联</van-tag>
					  </view>
					  <view class="van-multi-ellipsis--l2 words">
					    创鱼企服小编细谈：企业注册企业注册企业注册企业注册企业注册企业注册企业注册企业注册…
					  </view>
					  <view class="date">创鱼企服|2020-7-24 18:20</view>
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
			  </scroll-view>
		  </van-tab>
		  <van-tab title="精选">
			  <scroll-view class="dataList">
			  	<view class="itemWrap" v-for="(item, index) in [0,1,2,3,4]">
			  		<view class="bage">
			  			<text>{{index+1}}</text>
			  		</view>
			  		<view class="content">
			  			<view class="van-multi-ellipsis--l3 newDataWords">给准备创业的人推荐几本书——打算创业的人适合看哪些书？</view>
			  			<view class="newData">
			  			  <view class="newDataItem">
			  				  <image class="newDataImg" src="../../static/icons/love.png"></image>
			  				  <view class="newDataNum">123</view>
			  			  </view>
			  			  <view class="newDataItem">
			  				  <image class="newDataImg" src="../../static/icons/comments.png"></image>
			  				  <view class="newDataNum">123</view>
			  			  </view>
			  			  <view class="newDataItem">
			  				  <image class="newDataImg" src="../../static/icons/see.png"></image>
			  				  <view class="newDataNum">123</view>
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
		data() {
			return {
				active: 0,
				list: [1,2,3,4]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
	
	.van-tabs__line {
		background-color: #5F60E0 !important;
	}
	
	.contentWrap {
		border-top: 20rpx solid #F2F2F2;
		padding: 20rpx 30rpx;
	}
	
	.contentImg {
		width: 690rpx;
		height: 366rpx;
		border-radius: 8rpx;
	}
	
	.words {
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:#3D3D3D;
		line-height:46rpx;
		letter-spacing:2rpx;
	}
	
	.date {
		font-size:27rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:#4646A8;
		line-height:38rpx;
		letter-spacing:1rpx;
	}
	
	.data {
		margin-top: 20rpx;
		display: flex;
		flex-direction: row-reverse;
	}
	
	.dataItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 27rpx;
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
	
	.newDataWords {
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
	
	.newData {
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
	}
	
	.newDataItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 27rpx;
	}
	
	.newDataImg {
		width: 35rpx;
		height: 29rpx;
	}
	
	.newDataNum {
		font-size:17rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:#6a6a6a;
		line-height:24rpx;
		letter-spacing:1rpx;
	}
	
</style>
