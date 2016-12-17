<template>
    <div class="cart">
            <div class="title_jn">
                <div class="weui_cell_hd meixian_self_item check_item" alt="1">
                </div>
                <i class="line"></i>
            </div>
            <ul class="list">
                <li >
                    <div class="weui_cell_hd meixian_self_item city_qd_item check_item goods_checkbox_item" alt="1">
                        <input type="checkbox" class="weui_check" checked="checked" name="rec_id[]" value="795337">
                    </div>
                    <div class="li_warp">
                        <a href="goods.php?id=1558"> <img src="../../../static/images/289_P_1451863294067.jpg" alt=""></a>
                        <p class="goods_name"><a href="goods.php?id=1558">辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱</a></p>
                        <span class="unite">单袋</span>
                        <p class="price_container">
                            <s class="price" alt="37.40">￥37.40</s>
                            <s class="delete">X</s>
                        </p>
                        <div class="calc_num">
                            <a class="btn_reduce">-</a>
                            <input name="number" type="text" class="text" value="1">
                            <input type="hidden" name="miaosha_attr" value="">
                            <a class="btn_add">+</a>
                        </div>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {message: 'Apple',checked:false},
                    {message: 'Peach',checked:false},
                    {message: 'Orange',checked:false},
                    {message: 'Pear',checked:false}
                ]
            }
        },
        methods: {
        },
        components: {
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
    body
        padding-top 5px
        padding-left 0
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
        .list
            width 100%
            overflow hidden
            display block
            margin 0 auto
            padding-left 0
            padding-bottom 1em
            li
                width 100%
                height 11.8rem
                display block
                a
                    float left
                .goods_checkbox_item
                    width 10px
                    height 100%
                    margin-left 5px
                    margin-top 50px
                    float left
                .li_warp
                    width 95%
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
                    .goods_name
                        padding-top 0.5rem
                        height 2.6em
                        font-family "Microsoft Yahei"
                        font-size 1.5rem
                        color rgb(101, 101, 101)
                        line-height 1.3em
                        overflow hidden
                    .unite
                        width 60%
                        height 1.2rem
                        font-family "Microsoft Yahei"
                        font-size 1.25rem
                        color rgb(153, 153, 153)
                        line-height 1.2rem
                        float left
                        display block
                    .price_container 
                        width 60%
                        height 3.2em
                        display block
                        margin 0
                        padding 0
                        float left
                    
                        .price 
                            max-width 49%
                            height 100%
                            display block
                            font-family "Microsoft Yahei"
                            font-size 1.5rem
                            color rgb(51, 51, 51)
                            float left
                            line-height 3.5rem
                            font-weight bold
                            text-decoration none
                        
                    .delete 
                        width 16px
                        height 16px
                        margin-top 0.7em
                        font-family "Microsoft Yahei"
                        font-size 16px
                        float left
                        line-height 16px
                        text-align center
                        margin-left 0.5rem
                        cursor pointer
                        background red
                        color #fff
                        text-decoration none
                        border-radius 25px
                    .calc_num 
                        max-width 10.625rem
                        height 1.875rem
                        display block
                        float left
                        margin-right 0.5rem
                    
                        .btn_reduce 
                            width 24px
                            height 30px
                            float left
                            border 1px solid #ddd
                            text-align center
                            line-height 30px
                            text-decoration none
                        .btn_add
                            width 24px
                            height 30px
                            float left
                            border 1px solid #ddd
                            text-align center
                            line-height 30px
                            text-decoration none
                        input.text 
                            width 40px
                            height 30px
                            float left
                            display inline-block
                            box-sizing border-box
                            border 1px solid #dddddd
                            border-left none
                            border-right none
                            text-align center
                            color #E3462C
                            -webkit-appearance none
                            border-radius 0
                        
</style>