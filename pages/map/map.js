//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  onLoad: function (option) {
    console.log(option)
    this.setData({
      longitude: option.longitude, 
      latitude: option.latitude, 
      place: option.place,
      markers: [
        {
          id: 0, 
          iconPath: "../../imgs/ic_position.png", 
          longitude: option.longitude, 
          latitude: option.latitude, 
          width: 30, 
          height: 30,
          title: option.place
        }
      ]
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: `${this.state.place}发生地震`,
      path: `pages/map/map?place=${this.state.place}&longitude=${this.state.longitude}&latitude=${this.state.latitude}`,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
});