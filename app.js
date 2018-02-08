//app.js
App({
  getSeismicData: (call) => {
    wx.request({
      url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
      success: data => {
        call(data);
      },
      fail: error => {
        console.log(error);
      }

    });
  }
})