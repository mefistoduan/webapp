<template>
    <div class="enter">
        <div class="header">
        </div>
        <div class="carouselContainer">
            <b-carousel :interval="5000" :controls="true" :indicators="true">
                <b-slide v-for="banner in banners">
                    <router-link v-bind:to="banner.bannerJump" class="jump_part">
                        <img v-bind:src="banner.bannersImg" >
                    </router-link>
                </b-slide>
            </b-carousel>
        </div>

        <div class="row ss-nav">
            <div class="col-25">
                <router-link to="About" class="jump_part">
                    <div><img src="static/images/fenlei.png"></div>
                    <h1>商品分类</h1>
                </router-link>
            </div>
            <div class="col-25">
                <router-link to="About" class="jump_part">
                    <div><img src="static/images/meixianhui.png"></div>
                    <h1>美鲜惠</h1>
                </router-link>
            </div>
            <div class="col-25">
                <router-link to="About" class="jump_part">
                    <div><img src="static/images/yangpinshenling.png"></div>
                    <h1>样品申领</h1>
                </router-link>
            </div>
            <div class="col-25">
                <router-link to="About" class="jump_part">
                    <div><img src="static/images/gerenzhongxin.png"></div>
                    <h1>我的美鲜</h1>
                </router-link>
            </div>
        </div>

        <div class="tabs_index">
            <ul>
                <li v-for="(tab,index) in tabs" v-bind:class="{curr:index === selected}" @click="choose(index)"><a href="javascript:void(0);" v-bind:mxPage="tabs.mxPage">{{tab.text}}</a></li>
            </ul>
        </div>

        <div class="row list_container">
            <p>{{dataNow}}分为您推荐已更新</p>
            <div class="banner list_bg infinite-scroll infinite-scroll-bottom ">
                <div class="m_two_col">
                    <div class="mc">
                        <div class="m_two_col">
                            <ul class="m_two_col-t list-container">
                                <li>
                                    <div class="module">
                                        <a href="goods.php?id=3535" class="external">
                                            <p class="img">
                                                <img src="" alt="" class="" width="100%">
                                            </p>
                                            <div class="goods_price">
                                                <em>￥263.00</em><s></s>
                                            </div>
                                            <p class="g_title">欧麦德 冷冻红薯泥 1kg/袋 12袋/箱</p>
                                        </a>
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
                    {text: '美鲜首发',mxPage:1 },
                    {text: '预售专区',mxPage:2 },
                    {text: '最新推荐',mxPage:3 },
                    {text: '促销专区',mxPage:4 },
                ],
                showVariable:false,
                selected: 0,
                dataNow:'09:37'
            }

        },
        methods: {
            choose:function (index) {
                this.selected = index
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
    width 25%
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


</style>