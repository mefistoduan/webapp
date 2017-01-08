<template>
    <div class="brands">
        <div class="header">
        </div>
        <div class="pepper-con" >
            <div class="pepper-w"   v-for="coupon in coupons">
                <div class="pepper" v-bind:class="coupon.typeColor" >
                    <div class="pepper-l">
                        <p class="pepper-l-num">
                            <i>¥</i><span> {{coupon.saleNum}}</span><i>.00</i>（满{{coupon.sumNum}}.00可用）
                        </p>
                        <p class="pepper-l-con">使用范围：{{coupon.scope}}</p>
                    </div>
                    <div class="pepper-r">
                        <span>{{coupon.type}}</span>
                        <div>
                            {{coupon.startData}}
                            <p class="pepper-line">~</p>
                            {{coupon.endDate}}
                        </div>
                        <i class="right-arrow"></i>
                    </div>
                </div>
                <div class="pepper-b" v-bind:class="coupon.typeColor">
                    <div class="pb-con"></div>
                    <div class="pb-border"></div>
                </div>
            </div>
        </div>

        <div class="bottom">
        </div>
    </div>
</template>

<script>
    import {getCoupons} from '../../api/coupon'
    export default {
        data() {
            return {
                model: {
                    saleNum:'',
                    sumNum:'',
                    type:'',
                    typeColor:'',
                    startData:'',
                    endDate:''
                },
                coupons: [ ],
            }
        },
  beforeMount(){
          getCoupons(this.$router.currentRoute.params.id).then(value => {
              this.coupons = value
            })
          },
        components: {
        }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    body
        padding-top 5px
    .pepper-w
        width 95%
        margin 0 auto
        position relative
        .pepper
            width 100%
            overflow hidden
            margin-top 1em
            color #686868
            border 1px solid #bfbfbf
            border-bottom 0
            background #fff
            .pepper-l
                float left
                width 70%
                box-shadow 2px 2px 4px #f5f5f5
                position relative
                padding-bottom 10px
                padding-left 0.4em
                .pepper-l-num
                    font-size 12px
                    border-bottom 1px solid #dddddd
                    border-right 10px solid #fff
                    font-weight bold
                    font-family verdana
                    i
                        font-size 21px
                        display inline
                    span
                        display inline-block
                        padding-bottom 6px
                        padding-top 10px
                        font-size 35px
                        font-weight bold
                        font-family verdana
                .pepper-l-con
                    font-size 12px
                    padding-top 6px
                    line-height 16px
            .pepper-r
                font-size 13px
                float left
                width 30%
                height 100%
                text-align center
                span
                    display block
                    padding 0.2em 18px 0.2em 0
                    margin 10px auto 5px
                    background #fff
                    text-align center
                    font-family '微软雅黑'
                    font-size 14px
                div
                    display inline-block
                    vertical-align top
        .pb-con
            color #fff
            min-height 8px
            padding 7px 0 6px 8px
            font-size 12px
        .pepper-blue
            .pepper-l-num
                  color #46c6c9
            .pb-con
                  background #74d2d4
        .pepper-red
            .pepper-l-num
                color #ed4e51
            .pb-con
                background #ed4e51
        .pepper-yellow
            .pepper-l-num
                color #FDDD00
            .pb-con
                background #FDDD00
        .pepper-green
            .pepper-l-num
                color #1eaa39
            .pb-con
                background #1eaa39
        .pepper-gary
            .pepper-l-num
                color #999
            .pb-con
                background #999
</style>