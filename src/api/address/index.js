const items = [
  {addressName: 'pizza',addressTel:'15253135699',addressInfo:'山东济南历下区玉兰广场3号楼606' },
  {addressName: 'spaghetti',addressTel:'15253135699',addressInfo:'山东泰安泰山区泰山路11号' },
  {addressName: 'pasta',addressTel:'15253135699',addressInfo:'山东淄博张店区海盛水产市场：金晶大道与联通路交叉南100米（金晶大道239）' },
  {addressName: 'carpaccio',addressTel:'15253135699',addressInfo:'黑龙江哈尔滨通河县一个冬天冻得人想哭的城市15253135699' },
  {addressName: 'lasagne',addressTel:'15253135699',addressInfo:'山东省 济南市 历下区 文东街道 文化东路38-1号4号楼' },
  {addressName: 'risotto',addressTel:'18660809824',addressInfo:'山东省 济南市 历下区 解放路1-7号喜士多便利店' },
  {addressName: 'tagliatelle',addressTel:'15562697669',addressInfo:'山东省 济南市 历下区 甸新北路11号凝萌织坊' },
  {addressName: 'sformato',addressTel:'13011740566',addressInfo:'大鹏房产联通营业厅' }
]


export function getAddress(id){
  return new Promise((resolve, reject) => {
    resolve(items)
  })
}
