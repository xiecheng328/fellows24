// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: []
  
  },
  gotoDetail(e){
    wx.navigateTo({
      url: '../../pages/filmdetail/filmdetail?moveid=' + e.currentTarget.dataset.movieid
    });
  },
  getData(){
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      data: {
        start: this.data.movieList.length,
        count: 5
      },
      header: {
        'content-type': 'json'
      },
      success: res => {
        console.log(res.data.subjects)
        this.setData({
          movieList: this.data.movieList.concat(res.data.subjects)
        });
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    this.getData();
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
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    this.getData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
