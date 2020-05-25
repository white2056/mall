import {request} from './request'

export function getDetail(iid){
  return request ({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}


export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class goodsParam {
  constructor(info, rule){
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class discuss {
  constructor(rate){
    this.disUserName = rate.list[0].user.uname;
    this.disUserImg = rate.list[0].user.avatar;
    this.disContent = rate.list[0].content;
    this.disDate = rate.list[0].created;
    this.disInfo = rate.list[0].extraInfo;
    this.disImg = rate.list[0].images;
    this.disStyle = rate.list[0].style;
    this.disExplain = rate.list[0].explain;
  }
}