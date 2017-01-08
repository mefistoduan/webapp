const address = [
  {addressName: 'pizza',addressTel:'15253135699',addressInfo:'山东济南历下区玉兰广场3号楼606' },
  {addressName: 'spaghetti',addressTel:'15253135699',addressInfo:'山东泰安泰山区泰山路11号' },
  {addressName: 'pasta',addressTel:'15253135699',addressInfo:'山东淄博张店区海盛水产市场：金晶大道与联通路交叉南100米（金晶大道239）' },
  {addressName: 'carpaccio',addressTel:'15253135699',addressInfo:'黑龙江哈尔滨通河县一个冬天冻得人想哭的城市15253135699' },
  {addressName: 'lasagne',addressTel:'15253135699',addressInfo:'山东省 济南市 历下区 文东街道 文化东路38-1号4号楼' },
  {addressName: 'risotto',addressTel:'18660809824',addressInfo:'山东省 济南市 历下区 解放路1-7号喜士多便利店' },
  {addressName: 'tagliatelle',addressTel:'15562697669',addressInfo:'山东省 济南市 历下区 甸新北路11号凝萌织坊' },
  {addressName: 'sformato',addressTel:'13011740566',addressInfo:'大鹏房产联通营业厅' }
]
const goods = [
  {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795339',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
]

export function getAddress(id){
  return new Promise((resolve, reject) => {
    resolve(address)
  })
}
export function getGoods(id){
  return new Promise((resolve, reject) => {
    resolve(goods)
  })
}