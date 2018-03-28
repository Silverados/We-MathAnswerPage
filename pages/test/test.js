// pages/test/test.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,
    questionCount: 0,
    optionCount: 4,
    wrong: 0,
    isSelected: false,
    questionArrays: [],
    answerArrays: ["A", "B", "C", "D"],
    setColor: "green",
    icon: ["circle", "circle", "circle", "circle"]
  },
  //乱序算法
  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  //对数组乱序
  setList: function () {
    var newList = this.data.questionArrays.sort(this.randSort);
    this.setData({
      list: newList,
    });
  },
  //对选项乱序
  setOption: function () {
    var newOption = this.data.answerArrays.sort(this.randSort);
    this.setData({
      answerArrays: newOption
    })
  },
  //点击选项触发函数
  select: function (event) {

    setTimeout(function () {
    this.setData({
      icon: ["circle", "circle", "circle", "circle"]
    })
    }.bind(this), 400);
      var value = event.currentTarget.dataset.value;
      var chooseOption = event.currentTarget.dataset.option;
      var trueOption = app.globalData.questions[this.data.realIndex].true;
      var trueVaule = app.globalData.questions[this.data.realIndex].option[trueOption];
      console.log("选择的选项是：" + chooseOption + " 选择的值：" + value);
      console.log("本题乱序前的选项是：" + trueOption + " 值是:" + trueVaule);

      if (value != trueVaule) {
        var icons = ["circle", "circle", "circle", "circle"];
        icons[chooseOption] = "cancel";
        this.setData({
          icon: icons,
          wrong: this.data.wrong + 1
        })
      } else {
        var icons = ["circle", "circle", "circle", "circle"];
        icons[chooseOption] = "success";
        this.setData({
          icon: icons
        })
      }

      if (this.data.index < this.data.questionArrays.length - 1) {
        this.setData({
          isSelected: false,
          index: this.data.index + 1,
        })
        this.setData({
          realIndex: this.data.questionArrays[this.data.index]
        })
        this.setData({
          questionDetail: app.globalData.questions[this.data.realIndex].question,
          options: app.globalData.questions[this.data.realIndex].option
        })
        // console.log("选择后的index:" + this.data.index);
        // console.log("选择后的realIndex:" + this.data.realIndex);
      } else {

        wx.navigateTo({
          url: '/pages/result/result?wrong=' + this.data.wrong
        })

      }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在js中初始化一个数组，数组里存储正序的题号。这里题号从1开始
    this.setData({
      questionCount: app.globalData.questions.length
    })
    var questionArray = [];
    for (var i = 0; i < this.data.questionCount; i++) {
      questionArray.push(i);
    }
    this.setData({
      questionArrays: questionArray
    })
    //乱序题号数组、选项数组
    this.setList();
    console.log("乱序后的题号数组：" + this.data.questionArrays)
    this.setOption();
    console.log("乱序后的选项数组：" + this.data.answerArrays)
    //初始化第一个题目
    this.setData({
      realIndex: this.data.questionArrays[this.data.index]
    })
    console.log("onLoad时的index:" + this.data.index);
    console.log("onLoad时的realIndex:" + this.data.realIndex);
    this.setData({
      questionDetail: app.globalData.questions[this.data.realIndex].question,
      options: app.globalData.questions[this.data.realIndex].option
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