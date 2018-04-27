// pages/result/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrong: 0,
    wrongList: [],
    accuracy:0,
    mytrue:0,
    grade:0,
    answerArrays1:[],
    answerArrays2:[],
    answerArrays3:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.wrongList);
    // console.log(JSON.parse(options.wrongList));
    // console.log(typeof JSON.parse(options.wrongList));
    // console.log(options.answerArrays2);
    // console.log(options.answerArrays2.length);
    // console.log(typeof options.answerArrays2);
    //设置标题
    wx.setNavigationBarTitle({
      title: "测试结果"
    })
    this.setData({
      wrong: options.wrong - 0,
      wrongList: options.wrongList,
      answerArrays1: options.answerArrays1,
      answerArrays2: options.answerArrays2,
      answerArrays3: options.answerArrays3
    })
    this.setData({
      mytrue: 20 - this.data.wrong,
    })
    this.setData({
      accuracy: 5*this.data.mytrue,
    })
    this.setData({
      grade: this.data.mytrue*5
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

  },
  reset: function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  wrongAnswer:function(){

    wx.redirectTo({
      url: '../wrongAnswer/wrongAnswer?wrongList=' + this.data.wrongList + '&answerArrays1=' + this.data.answerArrays1 + '&answerArrays2=' + this.data.answerArrays2 + '&answerArrays3=' + this.data.answerArrays3 
    })
  }

})