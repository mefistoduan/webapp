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
                <span class="detail_English" id="detail_isEnglish"></span>
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
            <div class="choice_goods_warp">
                <div class="choice_goods">
                    <a href="#" class="open-about">
                        <em>请选择规格/仓库</em>
                        <img src="#" alt="">
                    </a>
                </div>
            </div>
            <div class="other_info">
                <table>
                    <tbody>
                    <tr>
                        <td class="info_title">
                            <em>简介：</em>
                        </td>
                        <td class="info_content">
                            <em>欧萨混合油橄榄果渣油，所选橄榄油均来自优质橄榄果，经过科学萃取工艺精制而成，每一滴都散发橄榄油独特的清香味道。与其它类型的食用油相比，橄榄油口味更清爽，不易氧化，更能保持食物的原有风味，对于偏爱清淡口味的中国人尤其合适。整箱购买价格更实惠！</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>重量：</em>
                        </td>
                        <td class="info_content">
                            <em>1L</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>规格：</em>
                        </td>
                        <td class="info_content">
                            <em>1L/瓶，12瓶/箱</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>保质期：</em>
                        </td>
                        <td class="info_content">
                            <em>24个月</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>储存方法：</em>
                        </td>
                        <td class="info_content">
                            <em>储存于阴凉、干燥、通风处</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>储存：</em>
                        </td>
                        <td class="info_content">
                            <em>常温</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>包装：</em>
                        </td>
                        <td class="info_content">
                            <em>平装</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>产地：</em>
                        </td>
                        <td class="info_content">
                            <em>意大利</em>
                        </td>
                    </tr>
                    <tr>
                        <td class="info_title">
                            <em>积分：</em>
                        </td>
                        <td class="info_content">
                            <em id="jifen">16</em>
                        </td>
                    </tr>
                    </tbody>
                </table>
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
                items: [
                {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' }
                ],
                tabs: [
                {text: '基本信息',mxPage:1 },
                {text: '图文详情',mxPage:2 },
                {text: '评价(0)',mxPage:3 }
                ],
                banners: [
                {text: '麦肯',bannersImg:'static/images/1548_thumb_G_1449958534489.jpg',bannerJump:'/brands' },
                {text: '麦肯',bannersImg:'static/images/930_thumb_G_1449958224043.jpg',bannerJump:'/brands' },
                {text: '麦肯',bannersImg:'static/images/1315_thumb_G_1451859599090.jpg',bannerJump:'/brands' }
                ],
                selected: 0,
                goodsNum: 12,
                goodsName:'欧萨 混合油橄榄果渣油 意大利进口 1L/瓶 12瓶/箱',
                oenglish:"OUSA POMACE OLIVE OIL imported from Italy 1L/bottle 12bottles/carton",
                ochinese:"欧萨 混合油橄榄果渣油 意大利进口 1L/瓶 12瓶/箱",
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
            width 80%
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
    background url(../../../static/images/detail/CH.png) no-repeat top right
    background-size 100% 100%
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
     .info_title
        width 58px
        height 1.8em
     td
        font-size 12px
        padding 0
        margin 0
        margin-bottom 10px
.dc_info
    span
        background-color #7D7D7D
        color #fff
        text-align center
        font-size 14px
        padding 2px 5px
        border-radius: 4px
        float left

</style>