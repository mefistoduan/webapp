<template>
  <div class="category">
    <div id="wrapper">
      <div id="scroller">
        <ul>
          <li v-for='(category,index) in categorys' v-bind:class="{curr:index === selected}"  @click="choose(index)">
            <a class="J_ping" v-bind:categoryId="category.categoryId" href="javascript:void(0);">{{category.categoryName}}</a>
            <input class="goods_cat_id" name="" type="hidden" value="166">
          </li>
        </ul>
      </div>
      <div class="iScrollVerticalScrollbar iScrollLoneScrollbar">
        <div class="iScrollIndicator"></div>
      </div>
    </div>
    <div id="wrapper-con">
      <div id="scroller-con">
        <div class="alltype-right-type" v-for="item in items">
        <h4>
          <em>{{item.itemTitle}}</em>
          <a v-bind:href="item.itemTUrl">查看全部&gt;</a>
        </h4>
        <ul class="alltype-con-ul clearfix">
          <li v-for="good in item.goods">
            <a class="J_ping" v-bind:href="good.goodsUrl">
              <img v-bind:src="good.goodsIMG" alt="" width="100%">
              <span>{{good.goodsName}}</span>
            </a>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                model: {
                    goodsId:'',
                },
                categorys: [
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
                ],
                items:[
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
                ],
                shouldCheck:'checked',
                selected:0
            }
        },
        methods: {
         choose:function (index) {
                this.selected = index
            }

        },
        components: {

        }
    }
</script>



<style lang="stylus" rel="stylesheet/stylus" scoped>
  ol, ul
    list-style none
    margin 0
    padding 0
    em, i
      font-style normal
.category
  overflow hidden
  z-index 2
  #wrapper
    position absolute
    z-index 2
    width 90px
    left 0
    height 100%
    top 70px
    background #fff
    overflow hidden
    #scroller
      width 90px
      position absolute
      z-index 2
      -webkit-tap-highlight-color rgba(0,0,0,0)
      top 0
      left 0
      ul
        height 640px
        overflow-y scroll
      li
        height 49px
        line-height 49px
        border-bottom 1px solid #e0e0e0
        border-right 1px solid #e0e0e0
        background #f3f4f6
        text-align center
      .curr
        a
          width 101%
          border-right 1px solid #fff
          background #fff
          color #1FA139
      a
        display block
        width 100%
        height 49px
        line-height 49px
        text-decoration none
        font-size 13px
        color #252525
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
#wrapper-con
  position absolute
  z-index 1
  width 100%
  left 0
  height 100%
  top 70px
  background #fff
  overflow-x hidden
  overflow-y scroll
  #scroller-con
    position absolute
    z-index 1
    -webkit-tap-highlight-color rgba(0,0,0,0)
    top 0
    width 100%
    left 0
    .alltype-right-type
      margin 0 11px 0 13px
      padding-left 100px
      padding-bottom 20px
      h4
        width 90%
        display inline-block
        font-size 12px
        margin 0
        padding 10px 0 0 0
        line-height 1em
        color #888
        a
          float right
          font-family "Microsoft Yahei"
          font-weight normal
          color rgb(31, 161, 57)
    .alltype-con-ul
      border 0
      margin-top 10px
    li
      width 32.8%
      height 90px
      float left
      text-align center
      a
        width 62px
        height 62px
        border 0
        display block
        img
          border none
          text-decoration none
        span
          font-size 12px
          display block
          margin 5px 0 9px
          line-height 1.1em
          height 1.1em
          overflow hidden
          text-overflow ellipsis
          width 100%
          display block
          text-align center
          color #333333
          overflow hidden


</style>