// pages/content/content.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";
import { MemberApi } from "../../apis/member.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  setPageTitle() {
    wx.setNavigationBarTitle({
      title: '找谁玩',
    });
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    var memberapi=new MemberApi();
   

    memberapi.city({  }, (city) => {
      this.Base.setMyData({ city })
    })
    
    memberapi.video({}, (video) => {
      this.Base.setMyData({ video })
    })
     
     instapi.info({},(info)=>{
       this.Base.setMyData({info})
     })
}

  clickbtn(e) {
    var type = e.currentTarget.id;
    console.log(e, '节点值', type, '获取节点值');
    this.Base.setMyData({
    show: false
     })
 
}
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.clickbtn=content.clickbtn;
Page(body)