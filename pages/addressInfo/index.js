import add from '../../utils/address.js';
Page({
  data:{
    addressinfo:[
      {title:'收货人:',type:'text'},
      {title:'手机号码:',type:'number',lenght:11},
      {title:'所在地区:',click:true},
      {title:'详细地址:',type:'text'}
    ],
    arrayPro:[],
    arrayCity:[],
    arrayQu:[],
    pro:'',
    city:'',
    qu:'',
    indexPro:'',
    indexCity: '',
    indexQu:''

  },
  changePro(e){
    const index = e.detail.value;
    const pro = this.data.arrayPro[index];
    const cities = this.cityAndQuLst(pro);
    this.setData({
      indexPro: index,
      pro:pro,
      arrayCity:cities,
      arrayQu:[],
      indexCity: '',
      city:'',
      qu:'',
      indexQu:''
    })
  },
   changeCity(e){
    const index = e.detail.value;
    const city = this.data.arrayCity[index];
    const qus = this.cityAndQuLst(city);
    this.setData({
      indexCity: index,
      city: city,
      arrayQu:qus,
      qu:'',
      indexQu:''
    })
  },
   changeQu(e){
    const index = e.detail.value;
    const qu = this.data.arrayQu[index];
    this.setData({
      indexQu:index,
      qu:qu
    })
  },
  proLst(){
    const pros = [];
    add.forEach((item)=>{
        if(!item.parent) pros.push(item.name);    
    })
    this.setData({
      arrayPro:pros
    })
  },
  cityAndQuLst(pro){
    let value = '';
    const cities=[];
    add.forEach((item)=>{
        if(item.name==pro) value=item.value;
        if(item.parent === value ) cities.push(item.name);
    })
    return cities;
  },
  onLoad(options){
    let title = '编辑地址';
    if(options.name) title='修改地址';
    wx.setNavigationBarTitle({ title:title });
    this.proLst();
  }
})