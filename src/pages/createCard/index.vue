<template>
	<view class="container">
		<view class="title">喜好选择</view>
		<view class="tags">
			<view class="tag" v-for="item in [1,2,3,4,5,6,7,8]" v-key="item">知识产权</view>
		</view>
		<view class="title">个人信息</view>
		<view class="info">
			<van-cell-group>
			  <van-field
			    placeholder-style="margin-left:4rpx;color:font-size:28rpx;color:#2d2d2d"
				left-icon="https://wx1.sbimg.cn/2020/08/19/3YLPa.png"
			    placeholder="名片姓名"
			    bind:change="onChange"
			  />
			  <van-field
			    placeholder-style="margin-left:4rpx;color:font-size:28rpx;color:#2d2d2d"
				left-icon="https://wx1.sbimg.cn/2020/08/19/3Yj1R.png"
			    placeholder="公司名称"
			    bind:change="onChange"
			  />
			  <van-field
				placeholder-style="margin-left:4rpx;color:font-size:28rpx;color:#2d2d2d"
				left-icon="https://wx1.sbimg.cn/2020/08/19/3YgQn.png"
			    placeholder="联系电话"
			    bind:change="onChange"
			  />
			  <van-field
				placeholder-style="margin-left:4rpx;color:font-size:28rpx;color:#2d2d2d"
				left-icon="https://wx1.sbimg.cn/2020/08/19/3YsSM.png"
			    placeholder="企业地址"
			    bind:change="onChange"
			  />
			  <van-field
			    placeholder-style="margin-left:4rpx;color:font-size:28rpx;color:#2d2d2d"
				left-icon="https://wx2.sbimg.cn/2020/08/19/3YaEJ.png"
			    placeholder="职务"
			    bind:change="onChange"
			  />
			  <van-field
			    placeholder-style="margin-left:4rpx;color:font-size:28rpx;color:#2d2d2d"
				left-icon="https://wx1.sbimg.cn/2020/08/19/3Yh7h.png"
			    placeholder="邮箱"
			    bind:change="onChange"
			  />
			</van-cell-group>
		</view>
		<button @click="handleToSave" class="create">生成名片</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods: {
			handleToSave(){
				uni.navigateTo({
					url:'../saveCard/index'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 0 30rpx;
	}
	
	.title {
		font-size:28rpx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color: #2d2d2d;
		margin-top: 17rpx;
		margin-bottom: 20rpx;
	}
	
	.van-icon__image {
		margin-bottom: 6rpx;
	}
	
	.tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		background:rgba(255,255,255,1);
		box-shadow:0rpx 0rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:20rpx;
	}
	
	.tag {
		width:147rpx;
		height:56rpx;
		background:rgba(165,143,255,1);
		border-radius:28rpx;
		text-align: center;
		line-height: 56rpx;
		color: #fff;
		font-size:24rpx;
		margin-bottom: 20rpx;
	}
	
	.info {
		background:rgba(255,255,255,1);
		box-shadow:0rpx 2rpx 6rpx 0rpx rgba(100,102,157,0.38);
		border-radius:20rpx;
	}
	
	.create {
		width:646rpx;
		height:92rpx;
		background:rgba(95,96,224,1);
		border-radius:10rpx;
		line-height: 92rpx;
		color: #fff;
		font-size: 28rpx;
		margin: 65rpx auto;
	}
</style>
