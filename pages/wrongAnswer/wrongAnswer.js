var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
    data:{
      wrongList:[],
      answerArrays1: [],
      answerArrays2: [],
      answerArrays3: [],
      indexs:0,
      myoption: ["A", "B", "C", "D", "E", "F"],
      trueoption:[]
    },
    //判断正确选项乱序后的位置
    TrueOptionFunction:function(){
      var trueoptions = [];
      for(var i = 0;i < this.data.wrongList.length;i++){
        if (app.globalData.questions[this.data.wrongList[i].order].number == '3'){
            for(var j = 0;j < 3;j++){
              if(this.data.wrongList[i].trueOption == this.data.answerArrays1[j])
              {
                trueoptions.push(j);
              }
            }
        }
        else if (app.globalData.questions[this.data.wrongList[i].order].number == '4') {
          for (var j = 0; j < 4; j++) {
            if (this.data.wrongList[i].trueOption == this.data.answerArrays2[j]) {
              trueoptions.push(j);
            }
          }
        }
        else {
          for (var j = 0; j < 6; j++) {
            if (this.data.wrongList[i].trueOption == this.data.answerArrays3[j]) {
              trueoptions.push(j);
            }
          }
        }
        this.setData({
          trueoption: trueoptions
        })
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(JSON.parse(options.wrongList));
    // console.log(typeof JSON.parse(options.wrongList));
    //设置标题
    wx.setNavigationBarTitle({
      title: "错题集"
    })
      this.setData({
        wrongList:JSON.parse(options.wrongList),
        answerArrays1: JSON.parse(options.answerArrays1),
          answerArrays2: JSON.parse(options.answerArrays2),
            answerArrays3: JSON.parse(options.answerArrays3)
      })
      this.setData({
        wrongquestionImage: app.globalData.questions[this.data.wrongList[this.data.indexs].order].question,
        //wrongquestionDetail: app.globalData.questions[this.data.wrongList[this.data.indexs].order].question,
        wrongoptionnumber: app.globalData.questions[this.data.wrongList[this.data.indexs].order].number,
        wrongoptions: app.globalData.questions[this.data.wrongList[this.data.indexs].order].option
      })
      this.TrueOptionFunction();
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
  next:function(){
    if(this.data.indexs < this.data.wrongList.length - 1){
      this.setData({
        indexs:this.data.indexs+1
      })
      this.setData({
        wrongquestionImage: app.globalData.questions[this.data.wrongList[this.data.indexs].order].question,
        //wrongquestionDetail: app.globalData.questions[this.data.wrongList[this.data.indexs].order].question,
        wrongoptionnumber: app.globalData.questions[this.data.wrongList[this.data.indexs].order].number,
        wrongoptions: app.globalData.questions[this.data.wrongList[this.data.indexs].order].option
      })
    }
  },
  goFirst:function(){
    wx.redirectTo({
      url: '../index/index'
    })
  }
})