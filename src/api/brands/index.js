const items = [
  {brandsName: '麦肯',brandsImg:'static/images/1464133902912161957.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: '蓝顿旭美',brandsImg:'static/images/1464133380387838103.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: '典发',brandsImg:'static/images/1464131729030369013.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: '达伟',brandsImg:'static/images/1464131621150210414.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: '路多萨',brandsImg:'static/images/1464133728131345859.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: 'mg',brandsImg:'static/images/1464133212250391412.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: '麦西恩',brandsImg:'static/images/1464131621150210414.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: '荷美尔',brandsImg:'static/images/1464133918021244284.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: '爱薯福',brandsImg:'static/images/1464133234297250681.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
  {brandsName: 'ligo',brandsImg:'static/images/1464133580775209681.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' }
]


export function getBrands(id){
  return new Promise((resolve, reject) => {
    resolve(items)
  })
}
