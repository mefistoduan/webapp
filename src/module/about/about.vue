<template>
  <div class="about">
    <div class="header">
      <img src='../../assets/img/about.jpg'/>
      <div class="text">hi~ mefisto</div>
      <div class="level">
        <i class="glyphicon glyphicon-arrow-up"></i>
        升级还需要消费 ： ￥<em>5000</em>
      </div>
      <div class="info">
        <ul class="my-watch cf">
          <a id="guanzhudeshangpin" href="#">
            <li>
              <span class="watch-goods">
                  <em class="watch-re">注册会员 </em>
              </span>
              <span class="watch-shop">会员等级</span>
            </li>
          </a>
          <a id="guanzhudedianpu" href="#">
            <li class="mar bdr-l bdr-r">
                <span class="watch-goods ">
                    <em class="watch-re">￥0.00元 </em>
                  </span>
              <span class="watch-shop">账户余额</span>
            </li>
          </a>
          <a id="liulanjilu" href="#">
            <li>
              <span class="watch-goods">
                  <em class="watch-re">10积分</em>
              </span>
              <span class="watch-shop">可用积分</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
    <div class="body">
        <div class="item">
      <router-link to="/brands" class="jump_part">
      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-tag"></i>
          </div>

            <div class="in-item-info my-item bdbr-1px">
              <div class="fl">
                <span class="myJD-Order">品牌专区</span>
              </div>
              <div class="fr">
                <i class="glyphicon glyphicon-chevron-right"></i>
              </div>
            </div>
        </div>
      </div>
      </router-link>

      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-map-marker"></i>
          </div>
          <div class="in-item-info my-item bdbr-1px">
            <div class="fl">
              <span class="myJD-Order">地址管理</span>
            </div>
            <div class="fr">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-shopping-cart"></i>
          </div>
          <div class="in-item-info my-item bdbr-1px">
            <div class="fl">
              <span class="myJD-Order">购物车</span>
            </div>
            <div class="fr">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-bookmark"></i>
          </div>
          <div class="in-item-info my-item bdbr-1px">
            <div class="fl">
              <span class="myJD-Order">我的红包</span>
            </div>
            <div class="fr">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-heart"></i>
          </div>
          <div class="in-item-info my-item bdbr-1px">
            <div class="fl">
              <span class="myJD-Order">我的收藏</span>
            </div>
            <div class="fr">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-list-alt"></i>
          </div>
          <div class="in-item-info my-item bdbr-1px">
            <div class="fl">
              <span class="myJD-Order">会员认证</span>
            </div>
            <div class="fr">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-yen"></i>
          </div>
          <div class="in-item-info my-item bdbr-1px">
            <div class="fl">
              <span class="myJD-Order">美鲜贷</span>
            </div>
            <div class="fr">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="in-item  my-item">
          <div class="couponIn-icon w-18">
            <i class="glyphicon glyphicon-bullhorn"></i>
          </div>
          <div class="in-item-info my-item bdbr-1px">
            <div class="fl">
              <span class="myJD-Order">帮助中心</span>
            </div>
            <div class="fr">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
        <div class="bottom">
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    beforeMount(){
      this.$Progress.start()
    },
    mounted(){
      this.$Progress.finish()
    }
  }
</script>



<style lang="stylus" scoped>
  .about
    overflow hidden
    z-index 2
    .header
      position relative
      height 220px
      text-align center
      background-image url('../../assets/img/about-bj.jpg')
      background-size cover
      img
        margin 30px 0 15px 0
        width 60px
        height 60px
        border-radius 50%
        border 5px solid #fff
      .text
        color #333
        font-weight bold
      .level
        color #F19149
        em
          font-weight bold
      .info
        ul
          list-style none
          padding 0
          a
            width 33%
            float left
            color #333
            margin 0
            font-size 12px
          .watch-goods
            display block
            text-align center
            color #666666
            .watch-re
              color #333
              font-size 16px
              font-weight bold
              font-style normal
          .watch-shop
              color #999999
    .body
      height 100%
      .item
        width 100%
    .jump_part
            width 100%
            margin-right 0
            display block
        .in-item
          height 44px
          line-height 44px
          padding 0 0 0 10px
          width 100%
          overflow hidden
          display -webkit-box
          display -moz-box
          vertical-align middle
        .w-18
          width 18px
          color #999
        .couponIn-icon
          height 100%
          display table-cell
          margin-right 10px
          line-height 44px
          vertical-align top
        .in-item-info
          vertical-align middle
          padding-right 10px
          -webkit-box-flex 1
          -moz-box-flex 1
          margin-left 10px
          border-bottom 1px solid #e3e5e9
          .fl
            float left
            span
              display inline-block
              vertical-align middle
              color #333
          .fr
            float right
            color #999
  .bdbr-1px:after
    height 1px
    content ''
    width 100%
    border-top 1px solid #e3e5e9
    position absolute
    bottom -1px
    right 0
    transform scaleY(.5)
    -webkit-transform scaleY(.5)
    z-index 10
</style>