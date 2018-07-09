// pages/index/indexDetial/indexDetial.js
var indexsData = require('../../../data/index-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var indexDetialId = options.id;
    var indexDetialData = indexsData.indexList[indexDetialId];
    // console.log(indexDetialData);
    this.setData({
      indexDetialData: indexDetialData
    });
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onBackTap:function(){
    wx.switchTab({
      url: '../index',
    })
  },
  onMusicPlay:function(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://rm.sina.com.cn/wm/VZ200908211010598473VK/music/MUSIC0908211041411747.mp3'
  }
})