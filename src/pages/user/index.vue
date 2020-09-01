<template>
	<view class="container">
		<block v-if="userInfo">
			<view class="header">
				<view class="avatarWrap">
					<image class="avatar" src="../../static/demo/avatar.png"></image>
				</view>
				<view class="name">一只小小小鱼儿</view>
				<view class="userId">LXY541516</view>
			</view>
		</block>
		<block v-if="!userInfo">
			<view>
				<button class="login" open-type="getUserInfo" @getuserinfo="handleLogin">登录</button>
			</view>
		</block>
		<view class="main">
			<view class="items">
				<view class="item" @click="handleToPage('myCollections')">
					<image class="itemImg" src="../../static/icons/collection.png"></image>
					<view class="itemTitle">我的收藏</view>
				</view>
				<view class="item" @click="handleToPage('myServices')">
					<image class="itemImg" src="../../static/icons/service.png"></image>
					<view class="itemTitle">我的服务</view>
				</view>
				<view class="item" @click="handleToPage('myComments')">
					<image class="itemImg" src="../../static/icons/mind.png"></image>
					<view class="itemTitle">我的感想</view>
				</view>
			</view>
			<view class="list">
				<van-cell-group :border="false">
					<van-cell :is-link="true" url="/pages/createCard/index">
					  <view slot="title">
						<view class="titleLeft">
						  <image class="cellIcon" src="../../static/icons/cell1.png" />
						  <view class="cellTitle">创建名片</view>
						</view>
					  </view>
					</van-cell>
					<van-cell :is-link="true" url="/pages/myShares/index">
					  <view slot="title">
						<view class="titleLeft">
						  <image class="cellIcon" src="../../static/icons/cell2.png" />
						  <view class="cellTitle">我的分享</view>
						</view>
					  </view>
					</van-cell>
					<van-cell :is-link="true" url="/pages/coupons/index">
					  <view slot="title">
						 <view class="titleLeft">
						  <image class="cellIcon" src="../../static/icons/cell3.png" />
						  <view class="cellTitle">优惠券</view>
						</view>
					  </view>
					</van-cell>
					<van-cell :is-link="true" :border="false" url="/pages/myComments/index">
					  <view slot="title">
						 <view class="titleLeft">
						  <image class="cellIcon" src="../../static/icons/cell4.png" />
						  <view class="cellTitle">我的评论</view>
						</view>
					  </view>
					</van-cell>
				 </van-cell-group>
			</view>
			<view class="list">
				<van-cell-group :border="false">
					<van-cell :is-link="true" url="/pages/about/index">
					  <view slot="title">
						<view class="titleLeft">
						  <image class="cellIcon" src="../../static/icons/cell5.png" />
						  <view class="cellTitle">关于我们</view>
						</view>
					  </view>
					</van-cell>
					<van-cell :is-link="true" url="/pages/contact/index">
					  <view slot="title">
						<view class="titleLeft">
						  <image class="cellIcon" src="../../static/icons/cell6.png" />
						  <view class="cellTitle">联系我们</view>
						</view>
					  </view>
					</van-cell>
				 </van-cell-group>
			</view>
			<view class="list">
				<van-cell-group :border="false">
					<van-cell :is-link="true" url="/pages/shop/index">
					  <view slot="title">
						<view class="titleLeft">
						  <image class="cellIcon" src="../../static/icons/cell7.png" />
						  <view class="cellTitle">创鱼服务商城</view>
						</view>
					  </view>
					</van-cell>
				 </van-cell-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'user',
				userInfo: null
			}
		},
		onShow(){
			const userInfo = uni.getStorageSync('userinfo')
			if(userInfo) {
				this.data.userInfo = JSON.parse(userInfo)
			}
		},
		onLoad() {

		},
		computed:{
			getClass(index){
				return `tui-dot tui-dot-${index+1}`
			}
		},
		methods: {
			handleToPage: function(path){
				uni.navigateTo({
					url:`/pages/${path}/index`
				})
			},
			handleLogin(e){
				const {detail} = e
				if(detail.errMsg === "getUserInfo:ok"){
					uni.login({
						success(data) {
							console.log(data)
						}
					})
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}
	
	.login {
		margin-top: 50px;
		width: 70px;
		text-align: center;
		font-size: 16px;
		color: #232323;
		background-color: #fff;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.header {
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		height:360rpx;
		background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597676982572&di=0fda4cc7ae07da623a8eec700e21f86b&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F00%2F09%2F47%2F77562eea631a31c.jpg');
	}
	
	.avatarWrap {
		margin-top: 48rpx;
		width:137rpx;
		height:137rpx;
		border-radius: 50%;
		background:rgba(255,255,255,1);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.avatar {
		width:109rpx;
		height:109rpx;
		border-radius: 50%;
	}
	
	.name {
		font-size:34rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height:48rpx;
		letter-spacing:2rpx;
		margin-top: 21rpx;
	}
	
	.userId {
		font-size:24rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(255,255,255,1);
		line-height:33rpx;
		letter-spacing:1rpx;
		margin-top: 8rpx;
	}
	
	.main {
		padding: 30rpx;
	}
	
	.list {
		margin-top: 20rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 2rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:20rpx;
	}
	
	.titleLeft {
		display: flex;
		align-items: center;
	}
	
	.cellTitle {
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(45,45,45,1);
		line-height:40rpx;
		letter-spacing:1rpx;
	}
	
	.cellIcon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 19rpx;
	}
	
	.items {
		flex: 1;
		background:rgba(255,255,255,1);
		box-shadow:0px 2rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:20rpx;
		height:148rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.itemImg {
		width: 46rpx;
		height: 40rpx;
	}
	
	.itemTitle {
		font-size:24rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(41,49,70,1);
		line-height:33rpx;
		letter-spacing:1rpx;
		margin-top: 9rpx;
	}
</style>
