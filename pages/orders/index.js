import {rootUrl,rootUrl2} from '../../utils/params';
import {proLst} from '../../utils/public';
Page( {
  data: {
        imgUrls: [1],
        truePrice:'',
        title:'',
        info:'',
        onePrice: '',
        morePrice:'',
        specLst:[1], //规格参数
        id:'',
        attr:'',
        num:1,
        infoImgs:[1],
        address:{
            name:'',
            telNo:'',
            info:''
        }
  },
  onLoad(options){
      wx.setNavigationBarTitle({title: '填写订单'}); //标题
      this.setData({  id:options.id,    //获取参数并赋值
                      num:options.num,
                      attr:options.attr,
                      onePrice: options.onePrice,
                      morePrice:options.morePrice,
                      });
      this.setData(proLst(options.id));     
  }
})