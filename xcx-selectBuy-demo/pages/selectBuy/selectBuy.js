// pages/selectBuy/selectBuy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //套餐
    items: [
      {
        'id':'000',
        'money':'166.00',
        'text':'麦当劳',
        'checked':false
      },
      {
        'id': '001',
        'money': '288.00',
        'text': '肯德基',
        'checked': false
      },
      {
        'id': '002',
        'money': '355.00',
        'text': '麻辣香锅',
        'checked': false
      },
      {
        'id': '003',
        'money': '499.00',
        'text': '海底捞',
        'checked': false
      },
    ],
    //计算
    num: 1,           //初始 数量为1
    totalPrice: 0,    // 总价，初始为0
  },


  /*点击加号*/
  bindAdd: function (e) {
    var that = this,
      num = that.data.num;
    num++;
    that.setData({
      num: num
    })

    //统计：
    let items = that.data.items,
      totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) {
        totalPrice += num * items[i].money;
      }
    }
    totalPrice = totalPrice.toFixed(2);
    that.setData({
      totalPrice: totalPrice
    });

  },

  /*点击减号*/
  bindReduce: function () {
    var that = this,
      num = that.data.num;
    if (num > 1) {
      num--;
    }
    that.setData({
      num: num
    })

    //统计：
    let items = that.data.items,
      totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) {
        totalPrice += num * items[i].money;
      }
    }
    totalPrice = totalPrice.toFixed(2);
    that.setData({
      totalPrice: totalPrice
    });

  },

  /*输入框事件*/
  bindManual: function (e) {
    var that = this,
      num = e.detail.value;
    that.setData({
      num: num
    })

    //计算方法：
    let items = that.data.items,
      totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) {
        totalPrice += num * items[i].money;     //选中的计算总价
      }
    }
    that.setData({
      totalPrice: totalPrice
    });
  },

  //单选-选中
  radioChange: function (e) {
    var index = e.detail.value,
      items = this.data.items;
    for (var i in items) {
      items[i]['checked'] = false;
    }
    items[index]['checked'] = true;
    var money = items[index]['money'],
      id = items[index]['id'],
      num = this.data.num;
    //切换后重置数据状态
    this.setData({
      num: 1,
      items: items,
      totalPrice: money,
      id: id,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置默认选中价格
    var that = this,
      items = that.data.items,
      money = items[0].money;
      items[0].checked = true;
      that.setData({
        items: items,
        totalPrice: money
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