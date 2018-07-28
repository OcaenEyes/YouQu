// pages/discover/discover-more/discover-more.js
var util = require('../../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:{},
    requestUrl:"",
    totalCount :0,
    isEmpty:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var category = options.category;
    console.log(category);

    var dataUrl = "";
    switch (category) {
      case "正在热映":
        dataUrl = app.globalData.doubanBase + "/v2/movie/in_theaters";
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase + "/v2/movie/coming_soon";
        break;
      case "豆瓣TOP250":
        dataUrl = app.globalData.doubanBase + "/v2/movie/top250";
        break;
    }
    util.http(dataUrl, this.processDoubanData);
    wx.showLoading({
      title: '资源加载中',
    })
    this.data.requestUrl=dataUrl;
    this.setData({
      navigatorTitle: category,
    });
  },
  
  processDoubanData: function (moviesDouban) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 5) {
        title = title.substring(0, 5) + "...";
      }
      var temp = {
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id,
      }
      movies.push(temp)
    }
    var totalMovies =[];
    // 如果要绑定新的数据需要与旧的数据绑定在一起
    if(!this.data.isEmpty){
      totalMovies = this.data.movies.concat(movies);
    }
    else{
      totalMovies = movies;
      this.data.isEmpty = false;
    }
    this.setData({
      movies:totalMovies,
    });
    this.data.totalCount += 20; 
    wx.hideLoading();
    // wx.stopPullDownRefresh();
  },
  onScrollOwer: function (event) {
    var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount +"&count=20";
    util.http(nextUrl, this.processDoubanData);
    wx.showLoading({
      title: '资源加载中',
    });
  },
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function (event) {
    // var refreshUrl = this.data.requestUrl + "?start=0&count=20";
    // util.http(refreshUrl, this.processDoubanData);
    // wx.showLoading({
    //   title: '资源加载中',
    // });
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onBackTap: function() {
    wx.switchTab({
      url: '../discover',
    })
  }
})