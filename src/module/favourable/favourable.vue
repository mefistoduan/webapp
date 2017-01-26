<script src="../../../../easy-vue/webpack.config.js"></script>
<template>
    <div class="enter">
        <div class="header">
        </div>
        <div class="tabs_index">
            <ul>
                <li v-for="(tab,index) in tabs" v-bind:class="{curr:index === selected}" @click="choose(index)"><a href="javascript:void(0);" v-bind:mxPage="tabs.mxPage">{{tab.text}}</a></li>
            </ul>
        </div>

        <div class="row list_container">
            <p>{{ new Date().getHours()}}:{{new Date().getMinutes()}}为您推荐已更新</p>
            <div class="banner list_bg infinite-scroll infinite-scroll-bottom ">
                <div class="m_two_col">
                    <div class="mc">
                        <div class="m_two_col">
                            <ul class="m_two_col-t list-container">
                                <li v-for="good in goods">
                                    <div class="module">
                                        <router-link to="/detail" class="jump_part" v-bind:jsstr='good.goodsId'>
                                            <p class="img">
                                                <img v-bind:src="good.goodsImg" alt="" class="" width="100%">
                                            </p>
                                            <div class="goods_price">
                                                <em>￥{{good.goodsPrice}}</em><s></s>
                                            </div>
                                            <p class="g_title">{{good.goodsName}}</p>
                                        </router-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="scroll_more">
                            <p>继续滑动加载更多</p>
                        </div>
                        <!-- 加载提示符 -->
                        <div class="infinite-scroll-preloader">
                            <div class="preloader"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    export default {
        data() {
            return {
                banners: [
                    {text: '麦肯',bannersImg:'static/images/1480704535579815975.jpg',bannerJump:'/brands' },
                    {text: '麦肯',bannersImg:'static/images/1481491446967373839.jpg',bannerJump:'/brands' },
                    {text: '麦肯',bannersImg:'static/images/1482425512746257286.jpg',bannerJump:'/brands' },
                    {text: '麦肯',bannersImg:'static/images/1482685600145886603.jpg',bannerJump:'/brands' },
                    {text: '麦肯',bannersImg:'static/images/1482685485360379362.jpg',bannerJump:'/brands' }
                ],
                tabs: [
                    {text: '秒杀专区',mxPage:1 },
                    {text: '爆款直降',mxPage:2 },
                    {text: '闪购',mxPage:3 },
                    {text: '聚食惠',mxPage:4 },
                    {text: '抄底价特卖',mxPage:5 }
                ],
                goods: [
                    {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795339',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                  goods0: [
                    {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795339',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                goods1: [
                    {goodsId: '333',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '111',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '444',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '555',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '123',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '321',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '222',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '666',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                goods2: [
                    {goodsId: '222',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '333',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '111',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '444',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '123',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '321',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '555',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '666',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                goods3: [
                    {goodsId: '111',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '444',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '123',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '321',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '222',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '333',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '555',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '666',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                showVariable:false,
                selected: 0,
                dataNow:'09:37'
            }

        },
        methods: {
            choose:function (index) {
                this.selected = index
                let page = index
                if(page==0){
                    this.goods = this.goods0
                }
                if(page==1){
                    this.goods = this.goods1
                }
                if(page==2){
                    this.goods = this.goods2
                }
                if(page==3){
                    this.goods = this.goods3
                }
                if(page==4){
                    this.goods = this.goods2
                }

            },
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
    ul,li
        list-style none
        padding 0
        margin 0
    .enter
        background-color #EFEFF4
        img
            margin 0
            padding 0
        .carouselContainer
            width 100%
            height 212px
            overflow hidden
           .carousel
                width 100%
                height 212px
                .carousel-item
                    width 100%
                    height 212px
                    img
                     width 100%
                     height 212px
.ss-nav
    padding 5px 10px
    text-align center
    background-color #fff
    overflow hidden
    margin-left -4%
    margin-top 20px
    .col-25
        background-color #fff
        padding-top 0.3rem
        padding-bottom 0.3rem
        width 25%
        float left
     img
        width 55px
        overflow hidden
        display block
        margin 0 auto
     h1
        font-family "Microsoft Yahei"
        font-size 0.75rem
        font-weight normal
        color #999
        margin 0 auto
        text-align center
        margin-top 0.25em
.tabs_index
    width 100%
    display block
    background-color #fff
    overflow hidden
    margin-top 20px
 ul
    width 100%
    height 100%
    margin 0
    padding 0
  li
    width 20%
    float left
    height 100%
    list-style none
    margin 0
    padding 0
    a
        width 95%
        display block
        text-align center
        padding-top 10px
        padding-bottom 13px!important
        padding-left 0
        padding-right 0
        margin 0 auto
        color #333
        font-size 0.75rem
        text-decoration none
.curr
    a
        color #1EAA39
        padding-bottom 0
        border-bottom 3px solid #1EAA39

.list_container
        display block
     p
        width 90%
        display block
        font-size 12px
        color rgb(153, 153, 153)
        font-family "Microsoft Yahei"
        margin 15px auto 3px
    .list_bg
         ul
            width 95%
            min-width 320px
            padding-left 20px
            padding-right 5px
            display block
            margin 0 auto
            overflow hidden
         li
            width 49%
            display inline-block
            float left
            margin-left 5px
            margin-top 5px
            overflow visible
            position relative
        .goods_name
            width 100%
            height 2.4em
            margin 0 auto
            text-overflow ellipsis
            color black
            overflow hidden
            font-size 1em
            font-weight bold
            background-color #fff
            text-align center
            vertical-align middle
        .goods_price
            width 100%
            height 20%
            color #ee242c
            padding-top 5px
            padding-bottom 5px
            font-size 18px
            font-weight normal
            background-color #fff
            text-align left
            vertical-align middle
             em
                float left
             s
                float left
                color #999999
                text-align left
                text-decoration none
                font-size 14px
                text-indent 5px
                line-height 2em
    .btn
        width 100%
        height 35%
        display block
    .choice_loft
        position relative
        bottom 3rem
        width 70%
        height 3rem
        display block
        margin 0 auto
    .module .img span
        width 100%
        height 1.4em
        displayblock
        color #fff
        margin 0 auto
        padding-top 3px
        padding-left 5px
        font-size 0.875em
        font-family"Microsoft YaHei"
        background-color #333333
        filter Alpha(opacity=40)
        -moz-opacity 0.40
        opacity 0.40
        text-align left
        vertical-align middle
        overflow hidden
        text-wrap normal
        line-height 1em
    .detail
        width 100%
        height 50%
        display block
    .m_two_col *
        -webkit-tap-highlight-color rgba(0, 0, 0, 0)
        -webkit-box-sizing border-box
        -moz-box-sizing border-box
        -ms-box-sizing border-box
        box-sizing border-box

    .m_two_col
        a
         display block
    .m_two_col
        font-size 14px
        width 100%
        min-width 320px
    .m_two_col-t
        li
            overflow hidden
            margin 0 auto
            margin-top 2%
    .m_two_col-t linth-child(even)
        margin-top 2%
        float right
    .module
        height21em
        margin-right 2%
        float left
        background-color #FFF
        padding .7em .5em
        width 100%
        box-shadow 0 1px 1px 0px rgba(0, 0, 0, .2)
        border 1px solid rgba(0, 0, 0, .1)
    .module2
        margin-right 2%
        float left
        background-color #FFF
        padding .7em .5em
        width 100%
        box-shadow 0 1px 1px 0px rgba(0, 0, 0, .2)
        border 1px solid rgba(0, 0, 0, .1)
    .module2 img
        width 100%
    .modulelast-child
        margin-right 0px
    .module .img
        vertical-align middle
        text-align center
        overflow hidden
        padding 2px
    .module .img img
        width 100%
    .module .g_title
        font-size .857em
        height 2.6em
        line-height 1.4em
        overflow hidden
        color #333333
        width 100%
        margin-top 6px
        text-align left
        word-break break-all
        color #2F2F2F!important
    .module
        .g_price
            font-size 1.07em
            color #f75d57
            text-align left
         .jdNum
             font-weight bold
    .scroll_more
        p
            text-align center
//            提示符
.infinite-scroll-preloader
    margin 0.5rem
    text-align: center
.preloader
    width 3rem
    height 3rem
    display inline-block
    -webkit-animation preloader-spin 1s steps(12, end) infinite
    animation preloader-spin 1s steps(12, end) infinite
    -webkit-transform-origin 50%
    transform-origin 50%
.preloader:after
    display block
    content ""
    width 100%
    height 100%
    background url(/static/images/placeholder.svg)
    background-position 50%
    background-size 100%
    background-repeat no-repeat
    @-webkit-keyframes preloader-spin
        100%
            -webkit-transform rotate(360deg)
    @keyframes preloader-spin
        100%
            -webkit-transform rotate(360deg)
            transform rotate(360deg)


</style>