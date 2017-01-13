import {rootUrl,rootUrl2} from '../../utils/params';
Page({
    data: {
        imgUrls: [  
            {  
                url:`${rootUrl2}/images/201507/goods_img/82_P_1437473839218.jpg` 
            },{  
                url:`${rootUrl2}/images/201507/goods_img/82_P_1437473839877.jpg`  
            },{  
                url:`${rootUrl2}/images/201507/goods_img/82_P_1437701889783.jpg` 
            }   
        ],
        specLst:[ //规格参数
            {     
                value:'240',  
                text:'200ml_100ml*100ml' 
            }
        ],
        id:'',
        attr:'',
        num:1,
        onePrice: '',
        morePrice:'',
        infoImg:`${rootUrl2}/images/upload/Image/水灵灵(1).jpg`,
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        
    },
     onShareAppMessage() {
        return {
        title: '佰露集微商城',
        desc: '一个专卖良心商品的小网站',
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
    howMorePri(num){
        this.setData({
                num:num,
                morePrice:num*this.data.onePrice
            });
    },
    queryInfo({id=false,monParam,num=false,attr=false}={}){
        const setDa = (money)=>{
            console.log(`money:${money}`)
            const json = {};
            json[monParam] = money
            return json;
        };
        console.log(`id:${this.data.id}`)
        wx.request({
                    url: `${rootUrl}/goods.php?act=price&id=${id?id:this.data.id}&attr=${attr?attr:this.data.attr}&number=${num?num:this.data.num}`,
                    method: 'GET',
                    data: {},
                    header: {
                        'Accept': 'application/json'
                    },
                    success: (res)=> {
                        this.setData(setDa(res.data.result));
                    }
                })
    },
    onLoad(options) {
        this.setData({
            id:options.id
        })
       this.queryInfo({id:options.id,monParam:'onePrice',num:1,attr:254});
       wx.setNavigationBarTitle({title:'中国'})
    }

})