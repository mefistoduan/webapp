<template>
    <div class="brands">
        <div class="header">
        </div>
        <h5>订单详情</h5>
        <div class="order-tip">
            <h3>{{orderState}}</h3>
            <p>订单号：{{orderNum}}</p>
            <p>应付金额：<i>{{orderPrice}}元</i></p>
            <p>支付方式：{{orderPayType}}</p>
        </div>
        <div class="pay-tip" style="margin-bottom:0px">
            <p>请在24小时内完成支付，否则订单将会被自动取消。<br>
            </p>
        </div>
        <div class="order_tips" style="margin-bottom:0px">
            <p>请收货时核对产品和数量与订单产品是否一致！</p>
        </div>
        <router-link to="/order" class="jump_part bottom_link">
            <p>
            <div autocomplete="off" value="done" class="sub_btn_y sub_btn">查看订单</div>
            </p>
        </router-link>
    </div>
</template>

<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    export default {
        data() {
            return {
                orderState:'订单提交成功',
                orderNum:'p2016122741710',
                orderPrice:525.50,
                orderPayType:'余额支付'
            }

        },
        methods: {
            open:function () {
               this.showVariable = false
               this.showVariable = true
            }
        },
        components: {
            alert
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import url('../../assets/css/bootstrap.min.css')
body
    padding-top 5px
    h5
        text-align center
        font-size 2em
        padding-top 20px
    .order-tip
        width 85%
        padding 10px
        margin 20px auto
        background #fffdf7
        border 1px solid #cdc2b0
        border-radius 5px
        -webkit-border-radius 5px
        -moz-border-radius 5px

        h3
            color #48AE41
            font-size 1em
            font-weight normal

    i
        color #1eaa39
        font-weight bold
    .pay-tip
        width 85%
        margin 5px auto
        padding 10px
        background #f0ead4
        border 1px solid #a4a4a4
        border-radius 5px
        -webkit-border-radius 5px
        -moz-border-radius 5px

    .order_tips
        p
            width 90%
            display block
            margin 0 auto
            text-align center
            color rgb(255,0,0)
    .sub_btn_y
        color #2b2b2b
        text-shadow 1px 0 0 #fff

    .sub_btn
        display block
        background-color red
        border none
        width 90%
        margin 10px auto 0
        height 40px
        line-height 40px
        color #fff
        font-size 1em
        font-weight bold
        cursor pointer
        text-align center
        border-radius 5px
        -webkit-border-radius 5px
        -moz-border-radius 5px
        text-shadow 1px 0 0 #000
        border-bottom 1px solid #bcb0a3
.bottom_link
    width 60%
    overflow hidden
    display block
    margin 0 auto
    float none


</style>