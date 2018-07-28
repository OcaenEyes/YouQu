function convertToStarsArray(stars) {
  var num = stars.toString().substring(0, 1);
  var array = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    } else {
      array.push(0);
    }
  }
  return array;
}

function http(url, callBack) {
  wx.request({
    url: url,
    data: {},
    header: {
      "Content-Type": "application/xml"
    },
    method: 'GET',
    success: function(res) {
      callBack(res.data);
    },
    fail: function() {
      console.log('failed');
      console.log(Error);
    }
  })
}

module.exports = {
  convertToStarsArray: convertToStarsArray,
  http: http,
}