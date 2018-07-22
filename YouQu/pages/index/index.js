var indexsData = require('../../data/index-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    imgDescribes: [
      'Just Spring I Love You',
      'Yooo oooooY I Love You',
      'Just Summer I Love You',
      'Yooo oooooY I Love You'
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      index_key: indexsData.indexList
    });

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
  onIndexTap: function(event) {
    var indexId = event.currentTarget.dataset.indexid;
    wx.navigateTo({
      url: 'indexDetial/indexDetial?id=' + indexId ,
    })
  },
  onBannerTap:function(event){
    var bannerId = event.currentTarget.dataset.id ;
    console.log(bannerId);
    wx.navigateTo({
      url: 'indexDetial/indexDetial?id=' + bannerId,
    })

  }
})