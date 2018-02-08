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
  }
});