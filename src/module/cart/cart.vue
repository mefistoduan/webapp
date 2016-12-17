<template>
    <div class="cart">
            <div class="title_jn">
                <div class="weui_cell_hd meixian_self_item city_qd_all check_item" alt="1">
                    <input type="checkbox" class="weui_check" name="checkbox1" checked="checked">
                    <i class="weui_icon_checked checked"></i>
                </div>
                <span>全选</span>
                <i class="line"></i>
            </div>
            <ul class="list">
                <li >
                    <div class="weui_cell_hd meixian_self_item city_qd_item check_item goods_checkbox_item" alt="1">
                        <input type="checkbox" class="weui_check" checked="checked" name="rec_id[]" value="795337">
                        <i class="weui_icon_checked checked"></i>
                    </div>
                    <div class="li_warp">
                        <a href="goods.php?id=1558"> <img src="/images/201602/thumb_img/1558_thumb_G_1454287961453.jpg" alt=""></a>
                        <p class="goods_name"><a href="goods.php?id=1558">辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱</a></p>
                        <span class="unite">单袋</span>
                        <p class="price_container">
                            <s class="price" alt="37.40">￥37.40</s>
                            <s class="delete"></s>
                        </p>
                        <div class="calc_num">
                            <a class="btn_reduce"></a>
                            <input name="number" type="text" class="text" value="1">
                            <input type="hidden" name="miaosha_attr" value="">
                            <a class="btn_add"></a>
                        </div>
                    </div>
                </li>
            </ul>
    </div>
    </div>
</template>

<script>
//    import Vue from 'vue'
//    import BootstrapVue from 'bootstrap-vue'
//    Vue.use(BootstrapVue)
    export default {
        data() {
            return {
                items: [
                    {text: '麦肯',brandsImg:'static/images/289_P_1451863294067.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2143_P_1449091000718.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2401_P_1460653361322.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' }
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
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
    body
        padding-top 5px
        img
            margin 0
            padding 0
         ul， ol
            list-style none
        .title_jn
            width 100%
            height 5.375em
            .weui_cell_hd
                margin-top 1.5em
                margin-left 10px
                margin-right 10px
                float left
            span
                font-size 1.75em
                line-height 5.375em
        .list
            width 100%
            overflow hidden
            display block
            margin 0 auto
            padding-bottom 1em
            li
                width 100%
                height 11.8rem
                display block
                .li_warp
                    width 98%
                    height 100%
                    float right
                    border-bottom 1px solid #eee
                    img
                        width 8.625rem
                        height 8.625rem
                        float left
                        margin-top 1rem
                        margin-right 10px
                        border 1px solid #eee

</style>