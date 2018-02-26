//app.js
App({
  getSeismicData: (call) => {
    wx.request({
      url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
      success: data => {
        data.request = true;
        call(data);
      },
      fail: error => {
        let request = { "request": false}
        call(request);
        console.log(error);
      }

    });
  }
})