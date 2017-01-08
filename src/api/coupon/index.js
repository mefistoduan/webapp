const coupons = [
  {saleNum: '20',sumNum:'300',scope:'芝士类产品除外',type:'全场通用',typeColor:'pepper-blue',startData:' 2016.12.05',endDate:' 2016.12.12' },
  {saleNum: '40',sumNum:'500',scope:'芝士类产品除外',type:'双12大促',typeColor:'pepper-red',startData:' 2016.12.05',endDate:' 2016.12.12' },
  {saleNum: '2',sumNum:'50',scope:'芝士类产品除外',type:'新客户专享',typeColor:'pepper-blue',startData:' 2016.11.05',endDate:' 2016.12.12' },
  {saleNum: '11',sumNum:'200',scope:'仅限抄码产品使用',type:'抄码专用',typeColor:'pepper-yellow',startData:' 2016.12.05',endDate:' 2016.12.12' },
  {saleNum: '200',sumNum:'1200',scope:'仅限餐厅级用户使用',type:'餐厅专享',typeColor:'pepper-blue',startData:' 2016.12.05',endDate:' 2016.12.12' },
  {saleNum: '60',sumNum:'310',scope:'芝士类产品除外',type:'已过期',typeColor:'pepper-gary',startData:' 2016.11.05',endDate:' 2016.11.12' },
  {saleNum: '20',sumNum:'30',scope:'仅限济南地区使用',type:'济南专享',typeColor:'pepper-blue',startData:' 2016.12.05',endDate:' 2016.12.12' },
  {saleNum: '20',sumNum:'0',scope:'抄码产品除外',type:'邮费抵扣',typeColor:'pepper-green',startData:' 2016.12.05',endDate:' 2016.12.12' },
]


export function getCoupons(id){
  return new Promise((resolve, reject) => {
    resolve(coupons)
  })
}
