<template>
	<view class="container">
		<view class="header">
			<van-search shape="round" field-class="search" :value="value" placeholder="大学毕业生该如何做创业规划" />
			<view class="contactBtn">
				<image src="../../static/icons/contact.png" class="contact"></image>
			</view>
		</view>
		<view class="main">
			<swiper class="banners">
				<swiper-item @click="handleToVideo" class="banner">
					<image class="bannerImg" src="../../static/demo/banner.png"></image>
				</swiper-item>
			</swiper>
			<view class="items">
				<van-row gutter="20">
				  <van-col span="8">
					  <view class="item" @click="handleToPage('business')">
						  <image class="itemImg" src="../../static/icons/business.png"></image>
						  <view class="itemTitle">商业聚焦</view>
					  </view>
				  </van-col>
				  <van-col span="8">
					  <view class="item" @click="handleToPage('skills')">
						  <image class="itemImg" src="../../static/icons/skills.png"></image>
						  <view class="itemTitle">创业技能</view>
					  </view>
				  </van-col>
				  <van-col span="8">
					  <view class="item" @click="handleToPage('software')">
						  <image class="itemImg" src="../../static/icons/software.png"></image>
						  <view class="itemTitle">软件技术</view>
					  </view>
				  </van-col>
				  <van-col span="8">
					  <view class="item" @click="handleToPage('sale')">
						  <image class="itemImg" src="../../static/icons/sale.png"></image>
						  <view class="itemTitle">营销思维</view>
					  </view>
				  </van-col>
				  <van-col span="8">
					  <view class="item" @click="handleToPage('product')">
						  <image class="itemImg" src="../../static/icons/product.png"></image>
						  <view class="itemTitle">产品包装</view>
					  </view>
				  </van-col>
				  <van-col span="8">
					  <view class="item" @click="handleToPage('story')">
						  <image class="itemImg" src="../../static/icons/story.png"></image>
						  <view class="itemTitle">创业故事</view>
					  </view>
				  </van-col>
				</van-row>
			</view>
			<view class="footer">
				<view class="words">
					<view class="content">学会用离开的方式，善待自己。</view>
					<view class="name">———— 《创鱼企服》</view>
				</view>
				<image src="../../static/home_foot.png" class="footBanner"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {getIndexImgList} from '../../utils/apis.js'
	export default {
		data() {
			return {
				title: 'Hello',
				value: '',
				itemList: [
					{url: ''}
				]
			}
		},
		onLoad() {
			getIndexImgList().then(res => {
				console.log(res)
			})
		},
		methods: {
			handleToPage: function(path){
				console.log(path)
				uni.navigateTo({
					url:`../${path}/index`
				})
			},
			handleToVideo: function(){
				uni.navigateTo({
					url:'../shortVideo/index'
				})
			}
		}
	}
</script>

<style>
	.header {
		display: flex;
		align-items: center;
	}
	.search {
		width: 602rpx;
	}
	.contactBtn {
		background: none !important;
		border: none !important;
	}
	.contact {
		width: 51rpx;
		height: 51rpx;
	}
	
	.main {
		padding: 0 30rpx;
	}
	
	swiper {
		width: 690rpx;
		height: 629rpx;
	}
	
	.bannerImg {
		width: 690rpx;
		height: 629rpx;
	}
	
	.items {
		margin-top: 39rpx;
	}
	
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.itemImg {
		width: 80rpx;
		height: 80rpx;
	}
	
	.itemTitle {
		font-size:20rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:#293146;
		margin-top: 14rpx;
		margin-bottom: 14rpx;
	}
	
	.footer {
		position: relative;
		margin-top: 35rpx;
	}
	
	.words {
		color: #fff;
		position: absolute;
		top: 44rpx;
	}
	
	.content {
		margin-left: 150rpx;
		text-align: center;
		font-size: 26rpx;
		font-weight: 500;
	}
	
	.name {
		margin-top: 14rpx;
		margin-left: 411rpx;
		font-size: 20rpx;
	}
	
	.footBanner {
		width: 690rpx;
		height: 182rpx;
	}
</style>
