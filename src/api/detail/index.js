const imgs = [
  {src:'static/images/detail/pic01.jpg' },
  {src:'static/images/detail/pic02.jpg' },
  {src:'static/images/detail/pic03.jpg' },
  {src:'static/images/detail/pic04.jpg' },
  {src:'static/images/detail/pic05.jpg' }
]
const banners = [
  {text: '麦肯',bannersImg:'static/images/detail/2801_thumb_P_1467940646393.jpg',bannerJump:'/brands' },
  {text: '麦肯',bannersImg:'static/images/detail/2801_thumb_P_1467997974638.jpg',bannerJump:'/brands' },
  {text: '麦肯',bannersImg:'static/images/detail/2801_thumb_P_1467997974583.jpg',bannerJump:'/brands' }
]
export function getImg(id){
  return new Promise((resolve, reject) => {
    resolve(imgs)
  })
}
export function getBanners(id){
  return new Promise((resolve, reject) => {
    resolve(banners)
  })
}
