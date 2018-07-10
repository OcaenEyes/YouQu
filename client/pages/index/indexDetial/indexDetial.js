// pages/index/indexDetial/indexDetial.js
var indexsData = require('../../../data/index-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var indexDetialId = options.id;
    var currentIndexId = indexDetialId;
    this.setData({
      currentIndexId: currentIndexId
    });
    var indexDetialData = indexsData.indexList[indexDetialId];
    // console.log(indexDetialData);
    this.setData({
      indexDetialData: indexDetialData
    });
    // console.log(currentIndexId);

    // // shared内容
    // var indexsShared = wx.getStorageSync('indexs_Shared');

    // if (indexsShared) {
    //   var indexDetialShared = indexsShared[indexDetialId];
    //   this.setData({
    //     shared: indexDetialShared
    //   })
    // } else {
    //   var indexsShared = {};
    //   indexsShared[indexDetialId] = false;
    //   wx.setStorageSync('indexs_Shared', indexsShared)
    // };

    // collected内容
    var indexsCollected = wx.getStorageSync('indexs_Collected');

    if (indexsCollected) {
      var indexDetialCollected = indexsCollected[indexDetialId];
      this.setData({
        collected: indexDetialCollected
      })
    } else {
      var indexsCollected = {};
      indexsCollected[indexDetialId] = false;
      wx.setStorageSync('indexs_Collected', indexsCollected)
    };



  },

  onCollectTap: function(event) {
    var currentIndexId = this.data.currentIndexId;

    var indexsCollected = wx.getStorageSync('indexs_Collected');

    var indexDetialCollected = indexsCollected[currentIndexId];

    indexDetialCollected = !indexDetialCollected;

    indexsCollected[currentIndexId] = indexDetialCollected;
    console.log(indexsCollected[currentIndexId]);
    console.log(indexsCollected);
    wx.setStorageSync('indexs_Collected', indexsCollected);

    this.setData({
      collected: indexDetialCollected
    });
    wx.showToast({
      // 三元表达式，true 收， false取
      title: indexDetialCollected ? '收藏成功' : '取消成功',
      duration: 800,
      icon: 'success'
    });

  },



  onShareTap: function(event) {
    // var currentIndexId = this.data.currentIndexId;

    // var indexsShared = wx.getStorageSync('indexs_Shared');

    // var indexDetialShared = indexsShared[currentIndexId];

    // indexDetialShared = !indexDetialShared;

    // indexsShared[currentIndexId] = indexDetialShared;
    // console.log(indexsShared[currentIndexId]);
    // console.log(indexsShared);
    // wx.setStorageSync('indexs_Shared', indexsShared);

    // this.setData({
    //   shared: indexDetialShared
    // });

    var itemList = [
      '分享给微信好友',
      '分享到朋友圈',
      '分享到QQ',
      '分享到QQ空间',
      '分享到微博',
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#689845',
      success: function(res) {
        // res.cancel             用户是不是点击了取消按钮
        // res.tapIndex           数组元素的序号， 从0开始
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '暂时不支持分享功能,小哥哥正在努力开发中',
        })

      },

    })


  },

  onBackTap: function() {
    wx.switchTab({
      url: '../index',
    })
  },

  onMusicTap: function() {
    var isPlayingMusic = this.data.isPlayingMusic;
    var currentIndexId = this.data.currentIndexId;
    var indexData = indexsData.indexList[currentIndexId];
    // console.log(indexData);
    // console.log(isPlayingMusic)

    // const backgroundAudioManager = wx.getBackgroundAudioManager();
    // backgroundAudioManager.title = 'The Saltwater Room';
    // backgroundAudioManager.epname = 'Maybe I Am Dreaming';
    // backgroundAudioManager.singer = 'OWL CITY';
    // backgroundAudioManager.coverImgUrl = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1537610685,3035632971&fm=27&gp=0.jpg';
    // backgroundAudioManager.src = 'http://rm.sina.com.cn/wm/VZ200908211010598473VK/music/MUSIC0908211041411747.mp3';
    // if (isPlayingMusic){
    //   backgroundAudioManager.onPlay();
    //   this.data.isPlayingMusic =false;
    // }
    // else{
    //   backgroundAudioManager.onPause();
    //   this.data.isPlayingMusic = true;
    // };

    if (isPlayingMusic) {    
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      });
    } else {
      wx.playBackgroundAudio({
        dataUrl: indexData.music.dataUrl,
        title: indexData.music.title,
        coverImgUrl: indexData.music.coverImgUrl
      });
      this.setData({
        isPlayingMusic: true
      });
    };
    // console.log(indexData.music.dataUrl);
  },











  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
})