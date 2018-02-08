//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    data: []
  },
  onLoad: function async() {
    var that = this
    app.getSeismicData(trust => {
      let data = trust.data;
      data.features.map((item,index)=>{
        item.properties.time = new Date(item.properties.time).toLocaleString();
        if (item.properties.mag <= 3){
          item.properties.bgcolor = '#4574f0';
          item.properties.magDivide = "微震";
        }
        if (item.properties.mag > 3 && item.properties.mag <= 6) {
          item.properties.bgcolor = '#FFAB37';
          item.properties.magDivide = "有感"
        }
        if (item.properties.mag > 6) {
          item.properties.bgcolor = '#F5455B';
          item.properties.magDivide = "强震"
        }
        
      });
      that.setData({ data: data.features});
    });
  },
  bindItemTap: function (detail){
    console.log(detail.currentTarget.dataset.detail.geometry.coordinates);
    let longitude= detail.currentTarget.dataset.detail.geometry.coordinates[0];
    let latitude = detail.currentTarget.dataset.detail.geometry.coordinates[1];
    let place = detail.currentTarget.dataset.detail.properties.place;
    console.log(detail.currentTarget.dataset.detail.properties.place)
    wx.navigateTo({
      url: `../map/map?place=${place}&longitude=${longitude}&latitude=${latitude}`
    })
  }
})
