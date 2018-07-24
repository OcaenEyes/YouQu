// pages/discover/discover.js
var app = getApp();
Page({
  data:{
    top250: {},
    inTheaters:{},
    comingSoon:{}
    
  },

  // restful api json
  // soap xml


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var inTheatersUrl = app.globalData.doubanBase + "/v2/movie/in_theaters"+"?start=0&count=3";
    var comingSoonUrl = app.globalData.doubanBase + "/v2/movie/coming_soon" + "?start=0&count=3";
    var top250Url = app.globalData.doubanBase + "/v2/movie/top250" + "?start=0&count=3";   
    this.getMovieListData(top250Url,"top250");
    this.getMovieListData(comingSoonUrl, "comingSoon");
    this.getMovieListData(inTheatersUrl, "inTheaters");
  },
  getMovieListData: function(url,settedKey) {
    var that =this;
    wx.request({
      url: url,
      data: {},
      header: {
        "Content-Type": "application/xml"
      },
      method: 'GET',
      success: function(res) {
        console.log(res);
        that.processDoubanData(res.data,settedKey);

      },
      fail: function() {
        console.log('failed');
        console.log(Error);
      }
    })
  },
  processDoubanData:function(moviesDouban,settedKey){
    var movies =[];
    for(var idx in moviesDouban.subjects){
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 5){
        title = title.substring(0,5) + "...";
      }
      var temp ={
        title:title,
        average:subject.rating.average,
        coverageUrl:subject.images.large,
        movieId:subject.id,        
      }
      movies.push(temp)
    }
    var readyData ={};
    readyData[settedKey] = {
      movies:movies
      };

    this.setData(readyData);

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

  }
})