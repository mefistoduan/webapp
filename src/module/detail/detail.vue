<template>
    <div class="detail">
        <div class="tabs_index">
            <ul>
                <li v-for="(tab,index) in tabs" v-bind:class="{curr:index === selected}" @click="choose(index)"><a href="javascript:void(0);" v-bind:mxPage="tabs.mxPage">{{tab.text}}</a></li>
            </ul>
        </div>

        <div class="carouselContainer" v-show="tab01">
                <div v-for="banner in banners">
                        <img v-bind:src="banner.bannersImg" >
                </div>
        </div>

        <div class="detail_content" v-show="tab01">
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
        <div class="detail_img" v-show="tab02">
            <img v-bind:src="img.src" alt="" v-for="img in imgs">
        </div>
        <p class="evaluate" v-show="tab03">该商品暂无评价</p>
        <div class="" v-show="tab03"></div>
        <nav class="bar bar-tab foot-nav">
            <a class=" external tab_item_small" href="javascript:;" @click="collect">
                <span><img class="icon icon_attention" v-bind:src="attentionImg"></span>
                <span class="tab-label">{{attentionInfo}}</span>
            </a>
            <router-link to="/cart" class="external tab_item_small">
                <img class="icon icon_cart" src="../../../static/images/detail/gouwuche.png">
                <span class="tab-label">购物车</span>
            </router-link>
            <a class="tab-item external orange_btn open-about" href="#" @click="showPopup">
                <span class="tab-label">立即购买</span>
            </a>
            <a class="tab-item external green_btn open-about" href="#" @click="showPopup">
                <span class="tab-label">加入购物车</span>
            </a>
        </nav>
        <!--popup-->
        <popup v-bind:title="popup.popupName" :show.sync="show" @ok="ok($index)" @cancel="cancel" cancelText="取消" okText="确定">
            <div class="content-block">
                <div class="dc_price">
                    <span class="red_price">￥81.6</span>
                </div>
                <div class="choice_popup">
                    <h5>选择仓库</h5>
                        <ul class="choic_city">
                            <li class="curr">
                                <a href="javascript:void(0)" id="jinan_store" title="济南仓库">[济南仓]剩余<span id="jn_stock">{{goodsNum}}</span></a>
                            </li>
                        </ul>
                        <h5>选择规格</h5>
                        <ul class="unite_ul">
                            <li class="curr">
                                <a href="javascript:void(0)">
                                    单袋
                                </a>
                            </li>
                        </ul>
                    <h5>购买数量</h5>
                    <div class="pop_info">
                        <div class="calc_num">
                            <a class="btn_reduce" @click="dec">-</a>
                            <input name="number" type="text" class="text" v-bind:value="goodsOrdNum">
                            <input type="hidden" name="miaosha_attr" value="">
                            <a class="btn_add" @click="inc">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </popup>
    </div>
</template>

<script>
    import Vue from 'vue'
    import popup from '../../components/popup/popup.vue'
    import store from '../../store'
    import {getImg, getBanners} from '../../api/detail'
    export default {
        data() {
            return {
                popup: {
                    popupName:'购买菜单'
                },
                items: [
                {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' },
                {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' },
                {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' }
                ],
                tabs: [
                {text: '基本信息',mxPage:1 },
                {text: '图文详情',mxPage:2 },
                {text: '评价(0)',mxPage:3 }
                ],
                imgs: [],
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
                showVariable:false,
                tab01:true,
                tab02:false,
                tab03:false,
                show:false
            }
        },
        beforeMount(){
            getImg(this.$router.currentRoute.params.id).then(value => {
                this.imgs = value
              }),
              getBanners(this.$router.currentRoute.params.id).then(value => {
                this.banners = value
              })
            },
        computed: {
            goodsOrdNum () {
                return store.state.goodsOrdNum
            }
         },
        methods: {
        choose:function (index) {
                this.selected = index
                let page = index
                this.tab01=false
                this.tab02=false
                this.tab03=false
                if(page==0){
                    this.goods = this.goods0
                    this.tab01= true
                }
                if(page==1){
                    this.goods = this.goods1
                    this.tab02= true
                }
                if(page==2){
                    this.goods = this.goods2
                    this.tab03= true
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
            },
            ok(popup) {
                this.show = false
                this.$router.push({ path:'/cart'})
            },
            cancel(popup) {
                this.show = false
            },
            showPopup:function () {
                this.show = true
            },
            inc () {
            store.commit('inc')
             },
            dec () {
                store.commit('dec')
            }
        },
        components: {
            popup
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
        width 60%
        height 80%
        display block
        margin 0 auto
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
    z-index 5
    right 6px
    bottom -4px
    background url(../../../static/images/detail/EN.png) no-repeat top center
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
    background url(../../../static/images/detail/CH.png) no-repeat top center
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
.detail_img
    img
        width 100%
        overflow hidden
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
        height 32px
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
/*popup*/
.content-block
    overflow-y scroll
    margin-top 40px
    .red_price
        font-size 14px
        display inline
        line-height 1.5em
        float left
        color #E3462C
        font-weight bold
.choice_popup
    h5
        font-size 16px
        color #333333
        font-weight normal
        margin-top 3px
        margin-bottom 3px
    ul
        width 100%
        height 2.8em
        display block
        margin 0 auto
        li
            height 2.6em
            margin-right 20px
            overflow hidden
        li.curr
            width auto
            padding 5px 10px
            float left
            border 1px solid #1EAA39
            color #1EAA39
            a
                width 100%
                height 2.6em
                float left
                color #1EAA39

            span
                float right
                margin-left 10px
.evaluate
    text-align center
    padding-top 10px
//   calc
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
.alert
    position fixed
    right 0
    left 0
    top 10%
</style>