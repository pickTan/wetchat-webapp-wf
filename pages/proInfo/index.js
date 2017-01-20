import {rootUrl,rootUrl2} from '../../utils/params';
import {proLst} from '../../utils/public';
Page({
    data: {
        imgUrls: [],
        truePrice:'',
        title:'',
        info:'',
        specLst:[], //规格参数
        id:'',
        attr:'',
        num:1,
        onePrice: '',
        morePrice:'',
        infoImgs:[],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        
    },
     onShareAppMessage() {
        return {
        title: this.data.title,
        desc: this.data.info,
        path: `/pages/proInfo/index?id=${this.data.id}`
        }
    },
    querySpec(e){
       const attr = e.currentTaget.dataset.value;
       this.queryInfo({attr:attr})
    },
    inputVl(e){
        const num = e.detail.value;
        this.howMorePri(num)
    },
    add(){
        const num = this.data.num+1;
      this.howMorePri(num)
        // this.queryInfo({monParam:'morePrice'})
    },
    cut(){
        if (this.data.num < 2) return;
         const num = this.data.num-1;
        this.howMorePri(num)
    },
    goOrder(){
        // http://www.360blj.com/mobile/api/dbCart_action.php?act=addToCart&goods_id=93
        // wx.request({
        //             url: `${rootUrl}/api/dbCart_action.php?act=addToCart&goods_id=${this.data.id}`,
        //             method: 'GET',
        //             data: {},
        //             header: {
        //                 'Accept': 'application/json'
        //             },
        //             success: (res)=> {
        //                 console.log(res)
        //             }
        //         })
        wx.navigateTo({
          url: `/pages/orders/index?num=${this.data.num}&id=${this.data.id}&attr=${this.data.attr}&onePrice=${this.data.onePrice}&morePrice=${this.data.morePrice}`
        })
    },
    howMorePri(num){
        this.setData({
                num:num,
                morePrice:num*this.data.onePrice
            });
    },
    queryInfo({id=false,monParam,num=false,attr=false}={}){
        const setDa = (money)=>{
            const json = {};
            json[monParam] = money
            return json;
        };
        wx.request({
                    url: `${rootUrl}/goods.php?act=price&id=${id?id:this.data.id}&attr=${attr?attr:this.data.attr}&number=${num?num:this.data.num}`,
                    method: 'GET',
                    data: {},
                    header: {
                        'Accept': 'application/json'
                    },
                    success:(res)=> {
                        this.setData(setDa(res.data.result));
                    }
                })
    },
    onLoad(options) {
        this.setData({
            id:options.id
        })
        const params = proLst(options.id);
        this.setData(params) 
        wx.setNavigationBarTitle({title: params.title}); //标题 
       this.queryInfo({id:options.id,monParam:'onePrice',num:1,attr:254});
    }
})