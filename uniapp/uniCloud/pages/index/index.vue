<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view>
                <video id="myVideo" src="http://1500000632.vod2.myqcloud.com/6c978ab3vodcq1500000632/10bb1c995285890806817597732/q1TseeUJtA4A.mp4"
                    @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls ></video>
            </view>
            <!-- #ifndef MP-ALIPAY -->
            <view class="uni-list uni-common-mt">
                <view class="uni-list-cell">
                    <view>
                        <view class="uni-label">弹幕内容</view>
                    </view>
                    <view class="uni-list-cell-db">
                        <input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
                    </view>
                </view>
            </view>
            <view class="uni-btn-v">
                <button @click="sendDanmu" class="page-body-button">发送弹幕</button>
            </view>
            <!-- #endif -->
        </view>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            src: '',
	            danmuList: [{
	                    text: '第 1s 出现的弹幕',
	                    color: '#ff0000',
	                    time: 1
	                },
	                {
	                    text: '第 3s 出现的弹幕',
	                    color: '#ff00ff',
	                    time: 3
	                }
	            ],
	            danmuValue: ''
	        }
	    },
	    onReady: function(res) {
	        // #ifndef MP-ALIPAY
	        this.videoContext = uni.createVideoContext('myVideo')
	        // #endif
	    },
			onLoad() {
				// 保存当前页
				let currentPage = this.page
				// 
				
				uniCloud.callFunction({
					name:"article",
					data:{
						page:1,
						limit:10
					},
					success: (res) => {
						let list = res.result.data;
						
						if(currentPage ===1){
							this.listData = list
						}else{
							this.listData = [...this.listData,list]
						}
						// 是否有下一页
						this.status = list.length<8? 'nomore':'more' 
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
	    // 上拉加载更多
			onReachBottom() {
				if(this.status !=='more'){
					return 
				}
				this.page = this.page+1
				this.status = 'loading';
				this.getList()
			},
			// 下拉刷新
			onPullDownRefresh() {
				this.page = 1;
				this.getList()
			},
			
			
			methods: {
	        sendDanmu: function() {
	            this.videoContext.sendDanmu({
	                text: this.danmuValue,
	                color: this.getRandomColor()
	            });
	            this.danmuValue = '';
	        },
	        videoErrorCallback: function(e) {
	            uni.showModal({
	                content: e.target.errMsg,
	                showCancel: false
	            })
	        },
	        getRandomColor: function() {
	            const rgb = []
	            for (let i = 0; i < 3; ++i) {
	                let color = Math.floor(Math.random() * 256).toString(16)
	                color = color.length == 1 ? '0' + color : color
	                rgb.push(color)
	            }
	            return '#' + rgb.join('')
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
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
