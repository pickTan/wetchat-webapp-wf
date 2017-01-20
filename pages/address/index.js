// pages/address/index.js
Page({
  data:{
    addressInfoUrl:'/pages/addressInfo/index',
    addressLst:[
      {name:'彭峰',telNo:'139****0747',info:'广东广州市天河区保利克洛维中景A座1306',choice:true},
      {name:'彭峰',telNo:'139****0747',info:'广东广州市天河区保利克洛维中景A座1306'}
    ]
  },
  goInfo(){
    wx.navigateTo({
      url: this.data.addressInfoUrl
    })
  },
  onLoad(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  // onReady(){
  //   // 页面渲染完成
  // },
  // onShow(){
  //   // 页面显示
  // },
  // onHide(){
  //   // 页面隐藏
  // },
  // onUnload(){
  //   // 页面关闭
  // }
})