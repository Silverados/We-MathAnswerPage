// pages/test/test.js
const app = getApp()
var W
var wrongLists
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,
    questionCount: 0,
    optionCount: 0,
    wrong: 0,
    myoption: ["A", "B", "C", "D", "E", "F"],
    isSelected: false,
    questionArrays: [],
    answerArrays1: ["A", "B", "C"],               //三个选项题目乱序前的数组
    answerArrays2: ["A", "B", "C", "D"],           //四个选项题目乱序前的数组
    answerArrays3: ["A", "B", "C", "D", "E", "F"],  //六个选项题目乱序前的数组
    setColor: "green",
    icon: ["circle", "circle", "circle", "circle", "circle", "circle"],  
    wrongList:[],
    count:20 //显示多少道题目
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
  //对三个选项乱序
  setOption1: function () {
     var  newOption1 = this.data.answerArrays1.sort(this.randSort);  
    this.setData({
      answerArrays1: newOption1
    })
  },
  //对四个选项乱序
  setOption2: function () {
    var newOption2 = this.data.answerArrays2.sort(this.randSort);
    this.setData({
      answerArrays2: newOption2
    })
  },
  //对六个选项乱序
  setOption3: function () {
    var newOption3 = this.data.answerArrays3.sort(this.randSort);
    this.setData({
      answerArrays3: newOption3
    })
  },
  //点击选项触发函数
  select: function (event) {

    setTimeout(function () {
    this.setData({
      icon: ["circle", "circle", "circle", "circle", "circle", "circle"]
    })
    }.bind(this), 200);
      var value = event.currentTarget.dataset.value;
      var chooseOption = event.currentTarget.dataset.option;
      var trueOption = app.globalData.questions[this.data.realIndex].true;
      var trueVaule = app.globalData.questions[this.data.realIndex].option[trueOption];
      console.log("选择的选项是：" + chooseOption + " 选择的值：" + value);
      console.log("本题乱序前的选项是：" + trueOption + " 值是:" + trueVaule);

      if (value != trueVaule) {
        var icons = ["circle", "circle", "circle", "circle", "circle", "circle"];
        
        
        var tmp= {"order":"","trueOption":"","wrongOption":""};
        icons[chooseOption] = "cancel";
        tmp.order = this.data.realIndex;
        tmp.trueOption = trueOption;
        tmp.wrongOption = this.data.myoption[chooseOption];
        console.log(tmp);
        wrongLists.push(tmp);
        console.log(wrongLists);
        this.setData({
          icon: icons,
          wrong: this.data.wrong + 1,
          wrongList: wrongLists
        })

        console.log("order---:"+this.data.wrongList[0].order);
        W = JSON.stringify(this.data.wrongList)
      } else {
        var icons = ["circle", "circle", "circle", "circle", "circle", "circle"];
        icons[chooseOption] = "success";
        this.setData({
          icon: icons
        })
      }

      if (this.data.index < this.data.count - 1) {
        this.setData({
          isSelected: false,
          index: this.data.index + 1,
        })
        this.setData({
          realIndex: this.data.questionArrays[this.data.index]
        })
        this.setData({
          //questionDetail: app.globalData.questions[this.data.realIndex].question,
          options: app.globalData.questions[this.data.realIndex].option,
          questionImage: app.globalData.questions[this.data.realIndex].question,
          optionnumber: app.globalData.questions[this.data.realIndex].number
        })
        // console.log("选择后的index:" + this.data.index);
        // console.log("选择后的realIndex:" + this.data.realIndex);
      } else {
        var aw1 = JSON.stringify(this.data.answerArrays1),
          aw2 = JSON.stringify(this.data.answerArrays2),
          aw3 = JSON.stringify(this.data.answerArrays3);
          wx.navigateTo({
            url: '/pages/result/result?wrong=' + this.data.wrong + '&wrongList=' + W + '&answerArrays1=' + aw1 + '&answerArrays2=' + aw2 + '&answerArrays3=' + aw3 
          })
      }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置标题
    wx.setNavigationBarTitle({
      title: "答题区"
    })
    wrongLists = [];
    //在js中初始化一个数组，数组里存储正序的题号。这里题号从1开始
    this.setData({
      questionCount: app.globalData.questions.length
    })
    var questionArray = [];
    for (var i = 0; i < this.data.questionCount; i++) {
      questionArray.push(i);
    }
    this.setData({
      questionArrays: questionArray,
    })
    //乱序题号数组、选项数组
    this.setList();
    console.log("乱序后的题号数组：" + this.data.questionArrays)
    this.setOption1();
    this.setOption2();
    this.setOption3();
    console.log("乱序后的选项数组：" + this.data.answerArrays1 + "\n" + this.data.answerArrays2 + "\n" + this.data.answerArrays3)
    //初始化第一个题目
    this.setData({
      realIndex: this.data.questionArrays[this.data.index]
    })
    console.log("onLoad时的index:" + this.data.index);
    console.log("onLoad时的realIndex:" + this.data.realIndex);
    this.setData({
      //questionDetail: app.globalData.questions[this.data.realIndex].question,
      options: app.globalData.questions[this.data.realIndex].option,
      questionImage: app.globalData.questions[this.data.realIndex].question,
      optionnumber: app.globalData.questions[this.data.realIndex].number
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