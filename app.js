//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    
  },
  globalData: {
    userInfo: null,
    questions: [
      { "question": "1+1=", "option": { "A": "1", "B": "2", "C": "3", "D": "4" }, "true": "B" },
      { "question": "1+2=", "option": { "A": "6", "B": "2", "C": "3", "D": "5" }, "true": "C" },
      { "question": "2+3=", "option": { "A": "1", "B": "3", "C": "5", "D": "7" }, "true": "C" },
      { "question": "3+4=", "option": { "A": "6", "B": "7", "C": "3", "D": "9" }, "true": "B" },
    ]
  }
})