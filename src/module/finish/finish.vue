<template>
    <div class="brands">
        <div class="header">
        </div>
        <h5>订单详情</h5>
        <div class="order-tip">
            <h3>订单提交成功</h3>
            <p>订单号：p2016122741710</p>
            <p>应付金额：<i>0元</i></p>
            <p>支付方式：余额支付</p>
        </div>
        <div class="pay-tip" style="margin-bottom:0px">
            <p>请在24小时内完成支付，否则订单将会被自动取消。<br>
            </p>
        </div>
        <div class="order_tips" style="margin-bottom:0px">
            <p>请收货时核对产品和数量与订单产品是否一致！</p>
        </div>
        <router-link to="/finish" class="jump_part">
            <p>
                <input autocomplete="off" value="查看订单" class="sub_btn_y sub_btn">
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
                list: [
                    {text: '麦肯',text:'png',link:'http://www.emeixian.com/mobile/brands.php?b_id=2' }
                ],
                showVariable:false
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


<style lang="stylus" scoped>
    @import url('../../assets/css/bootstrap.min.css')
body
    padding-top 5px
    .order-tip {
        width: 85%;
        padding: 10px;
        margin: 20px auto;
        background: #fffdf7;
        border: 1px solid #cdc2b0;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
    }
        h3 {
            color: #48AE41;
            font-size: 1em;
            font-weight: normal;
        }
    i
        color #1eaa39
        font-weight bold
    .pay-tip {
        width: 85%;
        margin: 5px auto;
        padding: 10px;
        background: #f0ead4;
        border: 1px solid #a4a4a4;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
    }
    .order_tips
        p



</style>