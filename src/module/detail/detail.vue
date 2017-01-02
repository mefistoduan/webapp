<template>
    <div class="detail">
        <div class="tabs_index">
            <ul>
                <li v-for="(tab,index) in tabs" v-bind:class="{curr:index === selected}" @click="choose(index)"><a href="javascript:void(0);" v-bind:mxPage="tabs.mxPage">{{tab.text}}</a></li>
            </ul>
        </div>

        <div class="carouselContainer">
            <b-carousel :interval="5000" :controls="false" :indicators="true">
                <b-slide v-for="banner in banners">
                        <img v-bind:src="banner.bannersImg" >
                </b-slide>
            </b-carousel>
        </div>

        <div class="detail_content">
            <p class="dc_name"  id="detail_goods_name">
                <em>[ID:05626] </em>{{goodsName}}</p>
            <div class="dc_price">
                <span class="red_price" id="price">￥33.4</span>
                <span v-bind:class="language" id="detail_isEnglish" @click='turnName'></span>
            </div>
            <div class="dc_info">
                <ul>
                    <li class="stock_info">
                        <span>库存信息</span>
                        <p>
                            <em>[济南仓]</em>
                            <s>{{goodsNum}}</s>
                        </p>
                    </li>
                    <!-- -->
                </ul>
            </div>
            <div class="other_info">
                <table>
                    <tbody>
                    <tr>
                        <td class="info_title">
                            <em>简介：</em>
                        </td>
                        <td class="info_content">
                            <em>{{goodsInfo}}</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>重量：</em>
                        </td>
                        <td class="info_content">
                            <em>{{goodsWeight}}</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>规格：</em>
                        </td>
                        <td class="info_content">
                            <em>{{goodsUnit}}</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>保质期：</em>
                        </td>
                        <td class="info_content">
                            <em>{{goodsLimitTime}}</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>储存：</em>
                        </td>
                        <td class="info_content">
                            <em>{{goodsSave}}</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>包装：</em>
                        </td>
                        <td class="info_content">
                            <em>{{goodsPackage}}</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>产地：</em>
                        </td>
                        <td class="info_content">
                            <em>{{goodsProd}}</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>积分：</em>
                        </td>
                        <td class="info_content">
                            <em id="jifen">{{goodsIntegral}}</em>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <nav class="bar bar-tab foot-nav">
            <a class=" external tab_item_small" href="javascript:;" @click="collect">
                <span><img class="icon icon_attention" v-bind:src="attentionImg"></span>
                <span class="tab-label">{{attentionInfo}}</span>
            </a>
            <router-link to="/cart" class="external tab_item_small">
                <img class="icon icon_cart" src="../../../static/images/detail/gouwuche.png">
                <span class="tab-label">购物车</span>
            </router-link>
            <a class="tab-item external orange_btn open-about" href="#">
                <span class="tab-label">立即购买</span>
            </a>
            <a class="tab-item external green_btn open-about" href="#">
                <span class="tab-label">加入购物车</span>
            </a>
        </nav>
    </div>
</template>

<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    export default {
        data() {
            return {
                items: [
                {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' }
                ],
                tabs: [
                {text: '基本信息',mxPage:1 },
                {text: '图文详情',mxPage:2 },
                {text: '评价(0)',mxPage:3 }
                ],
                banners: [
                {text: '麦肯',bannersImg:'static/images/detail/2801_thumb_P_1467940646393.jpg',bannerJump:'/brands' },
                {text: '麦肯',bannersImg:'static/images/detail/2801_thumb_P_1467997974638.jpg',bannerJump:'/brands' },
                {text: '麦肯',bannersImg:'static/images/detail/2801_thumb_P_1467997974583.jpg',bannerJump:'/brands' }
                ],
                selected: 0,
                goodsNum: 12,
                goodsName:'欧萨 混合油橄榄果渣油 意大利进口 1L/瓶 12瓶/箱',
                language:'detail_English',
                oenglish:"OUSA POMACE OLIVE OIL imported from Italy 1L/bottle 12bottles/carton",
                ochinese:"欧萨 混合油橄榄果渣油 意大利进口 1L/瓶 12瓶/箱",
                goodsInfo:"欧萨混合油橄榄果渣油，所选橄榄油均来自优质橄榄果经过科学萃取工艺精制而成，每一滴都散发橄榄油独特的清香味道。与其它类型的食用油相比，橄榄油口味更清爽，不易氧化，更能保持食物的原有风味，对于偏爱清淡口味的中国人尤其合适。整箱购买价格更实惠！",
                goodsWeight:'1l',
                goodsUnit:'1kg/袋，12袋/箱',
                goodsLimitTime:'24个月',
                goodsSave:'冷冻',
                goodsProd:'意大利·佛罗伦萨',
                goodsPackage:'平装',
                goodsIntegral: 24,
                attentionInfo:'关注',
                attentionImg:'../../../static/images/detail/shoucang.png',
                attention:'../../../static/images/detail/shoucang.png',
                attentioned:'../../../static/images/detail/shoucang_fill.png',
                showVariable:false
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
            },
        turnName:function(){
            if( this.language == 'detail_English' ){
                this.language = 'detail_chinese'
                this.goodsName = this.oenglish
            }
            else{
                this.language = 'detail_English'
                this.goodsName = this.ochinese
            }
            },
        collect:function(){
            if( this.attentionInfo == '关注' ){
                this.attentionInfo = '已关注'
                this.attentionImg = this.attentioned
            }
            else{
                this.attentionInfo = '关注'
                this.attentionImg = this.attention
            }
            }
        },
        components: {
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
    ul,li
        list-style none
        padding 0
        margin 0
.detail
    width 100%
    overflow hidden
    padding-top 5px
    background-color #efeff4
    img
        margin 0
        padding 0
.carouselContainer
    width 100%
    height 232px
    overflow hidden
    display block
.carousel
    width 100%
    height 212px
    overflow hidden
    display block
    margin-top 10px
    margin-bottom 10px
    .carousel-item
        overflow hidden
        img
            width 57%
            overflow hidden
            display block
            margin 0 auto
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
        width 33%
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
            border-top 3px solid #fff
    .curr
        a
            color #1EAA39
            padding-bottom 0
            border-top 3px solid #1EAA39
.detail_content
    width 100%
    display block
    margin 0 auto
    background-color #fff
    .dc_name
        width 95%
        height 3.5em
        overflow hidden
        padding-top 10px
        margin 0 auto
        display block
        font-size 18px
        color #333333
        line-height 1.5em
         em
            font-style normal
            color #656565
            font-family Verdana
    .dc_price
        width 95%
        height 2em
        display block
        margin 0 auto
        margin-top 10px
        margin-bottom 10px
        position relative
     .red_price
        float left
        color #E3462C
        font-weight bold
        font-size 34px
.detail_English
    width 22px
    height 22px
    position absolute
    z-index 10
    right 6px
    bottom -4px
    background url(../../../static/images/detail/EN.png) no-repeat top right
    cursor pointer
    color #999
    font-size 12px
    font-family Arial,sans-serif
    background-size 100% 100%
.detail_chinese
    width 22px
    height 22px
    position absolute
    z-index 10
    right 6px
    bottom -4px
    background url(../../../static/images/detail/CH.png) no-repeat top right
    background-size 100% 100%
    cursor pointer
    color #999
    font-size 12px
    font-family Arial,sans-serif
.dc_info
    width 100%
    margin 0 auto
    margin-top 20px
    display block
 ul
    width 95%
    display block
    padding 0
    padding-bottom 10px
    margin 0 auto
    li
        width 100%
        height 2.3em
        padding 0
        margin 0
        list-style none
        overflow hidden
        span
            background-color #7D7D7D
            color #fff
            text-align center
            font-size 14px
            padding 2px 5px
            border-radius 4px
            float left
        p
            width 80%
            float left
            padding 0
            padding-left 20px
            margin 0
            font-size 14px
            font-style normal
            text-decoration none
            em
                color #1EAA39
                font-style normal
                text-decoration none
             s
                text-decoration none
.choice_goods_warp
    width 100%
    height 4em
    display block
    padding-top 1em
    background-color #F9F9FB
    .choice_goods
        width 100%
        height 2em
        background-color #fff
        display block
        .open-about
            display block
            height 2em
    em
        float left
        font-style normal
        text-align left
        font-size 18px
        color #697177
        margin-left 10px
        vertical-align middle
        line-height 2em
        img
            width 14px
            float right
            margin-right 10px
            vertical-align middle
            margin-top 10px
.other_info
    width 100%
    display block
    overflow hidden
    background-color #F9F9FB
    margin-top 20px
     em
        font-style normal
        text-decoration none
 table
    width 95%
    display block
    margin 0 auto
    margin-bottom 1em
    border-collapse collapse
    border-spacing 0
    font-size 12px
    color #333
    padding-top 20px
 .info_title
    width 90px
    height 1.8em
 td
    font-size 12px
    padding 0
    margin 0
    margin-bottom 10px
em
    font-style normal
    text-decoration none
.dc_info
    span
        background-color #7D7D7D
        color #fff
        text-align center
        font-size 14px
        padding 2px 5px
        border-radius: 4px
        float left

    /*nav*/
.bar-tab
    position fixed
    right 0
    left 0
    z-index 10
    bottom 0
    width 100%
    height 5rem
    padding 0
    table-layout fixed

.bar-tabbefore
    content ''
    position absolute
    left 0
    top 0
    bottom auto
    right auto
    height 1px
    width 100%
    background-color #e7e7e7
    display block
    z-index 15
    -webkit-transform-origin 50% 0%
    transform-origin 50% 0%
.tab_item_small
    width 15%
    height 100%
    float left
    line-height 30px
    background-color #fff
    img
        width 32px
        display block
        margin 0 auto
 .tab-label
    position relative
    display block
    font-size 12px
    color #656565
    text-align center
.icon
    position relative
    z-index 20
    padding .5rem .1rem
    font-size 1rem
    line-height 1.2rem

.tab-item
    position relative
    display table-cell
    width 1%
    height 5rem
    color #929292
    text-align center
    vertical-align middle
.orange_btn
    color #fff
    font-weight bold
    font-family "Microsoft Yahei"!important
    background-color #F18D01
    padding-left 10px
    padding-right 10px
    .tab-label
        color #fff
.green_btn
    color #fff
    font-weight bold
    font-family "Microsoft Yahei"!important
    background-color #199733
    padding-left 10px
    padding-right 10px
    .tab-label
        color #fff
</style>