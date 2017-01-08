const categorys = [
  {categoryId: '5337',categoryName: '肉禽蛋品'},
  {categoryId: '3123',categoryName: '海鲜水产'},
  {categoryId: '3211',categoryName: '粮油副食'},
  {categoryId: '3122',categoryName: '蔬菜水果'},
  {categoryId: '2211',categoryName: '薯制品'},
  {categoryId: '1133',categoryName: '乳制品'},
  {categoryId: '6111',categoryName: '披萨意面'},
  {categoryId: '1221',categoryName: '牛排系列'},
  {categoryId: '1221',categoryName: '汉堡系列'},
  {categoryId: '1221',categoryName: '特色小食'},
  {categoryId: '1221',categoryName: '烘焙甜品'},
  {categoryId: '1221',categoryName: '酒水饮品'},
  {categoryId: '1221',categoryName: '包材系列'},
  {categoryId: '1221',categoryName: '水产大全'},
  {categoryId: '5122',categoryName: '速冻果蔬'}
]
const items = [
  {itemTitle:'冷冻肉产品',itemTUrl:'/About'
    ,goods:[
    {goodsName:'牛产品',goodsIMG:'../../../static/images/category/93.png',goodsUrl:'/About'},
    {goodsName:'鸭产品',goodsIMG:'../../../static/images/category/339.png',goodsUrl:'/About'},
    {goodsName:'鸽子',goodsIMG:'../../../static/images/category/376.png',goodsUrl:'/About'}
  ]
  },
  {itemTitle:'生鲜肉类',itemTUrl:'/About'
    ,goods:[
    {goodsName:'羊肉产品',goodsIMG:'../../../static/images/category/454.png',goodsUrl:'/About'},
    {goodsName:'鹅产品',goodsIMG:'../../../static/images/category/458.png',goodsUrl:'/About'},
    {goodsName:'鹌鹑',goodsIMG:'../../../static/images/category/506.png',goodsUrl:'/About'}
  ]
  },
  {itemTitle:'冷冻禽类',itemTUrl:'/About'
    ,goods:[
    {goodsName:'鸡类',goodsIMG:'../../../static/images/category/507.png',goodsUrl:'/About'}
  ]
  },
  {itemTitle:'肉制品',itemTUrl:'/About'
    ,goods:[
    {goodsName:'腌肉',goodsIMG:'../../../static/images/category/339.png',goodsUrl:'/About'},
    {goodsName:'培根',goodsIMG:'../../../static/images/category/93.png',goodsUrl:'/About'},
    {goodsName:'丸子',goodsIMG:'../../../static/images/category/339.png',goodsUrl:'/About'},
    {goodsName:'火腿',goodsIMG:'../../../static/images/category/376.png',goodsUrl:'/About'}
  ]
  },
  {itemTitle:'蛋品',itemTUrl:'/About'
    ,goods:[
    {goodsName:'新鲜蛋品',goodsIMG:'../../../static/images/category/93.png',goodsUrl:'/About'},
    {goodsName:'腌制蛋品',goodsIMG:'../../../static/images/category/376.png',goodsUrl:'/About'}
  ]
  }
]

export function getCategory(id){
  return new Promise((resolve, reject) => {
    resolve(categorys)
  })
}

export function getCategoryPage(id){
  return new Promise((resolve, reject) => {
    resolve(items)
  })
}