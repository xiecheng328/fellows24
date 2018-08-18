// pages/filmdetail/filmdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieId: -1,
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      movieId: options.moveid
    });
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.moveid,
      data: {
      },
      header: {
        'content-type': 'json'
      },
      success: res => {
       console.log(res.data);
       this.setData({
         detail: res.data
       });
        wx.hideLoading();
      }
    })

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
  
  }
})