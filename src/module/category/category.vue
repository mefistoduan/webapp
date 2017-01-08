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
import {getCategory, getCategoryPage} from '../../api/category'
    export default {
        data () {
            return {
                model: {
                    goodsId:'',
                },
                categorys: [],
                items:[ ],
                shouldCheck:'checked',
                selected:0
            }
        },
          beforeMount(){
            getCategory(this.$router.currentRoute.params.id).then(value => {
                this.categorys = value
              })
            getCategoryPage(this.$router.currentRoute.params.id).then(value => {
                this.items = value
              })
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