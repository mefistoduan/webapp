
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
const goods0 = [
  {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795339',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
]
const goods1 = [
  {goodsId: '333',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '111',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '444',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '555',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '123',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '321',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '222',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '666',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
]
const goods2 = [
  {goodsId: '222',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '333',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '111',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '444',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '123',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '321',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '555',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '666',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
]
const goods3 = [
  {goodsId: '111',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '444',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '123',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '321',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '222',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '333',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '555',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
  {goodsId: '666',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
]
export function getgoods(id){
  return new Promise((resolve, reject) => {
    resolve(goods)
  })
}
export function getgoods0(id){
  return new Promise((resolve, reject) => {
    resolve(goods0)
  })
}
export function getgoods1(id){
  return new Promise((resolve, reject) => {
    resolve(goods1)
  })
}
export function getgoods2(id){
  return new Promise((resolve, reject) => {
    resolve(goods2)
  })
}
export function getgoods3(id){
  return new Promise((resolve, reject) => {
    resolve(goods3)
  })
}