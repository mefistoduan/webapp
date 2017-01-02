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
                    <router-link v-bind:to="banner.bannerJump" class="jump_part">
                        <img v-bind:src="banner.bannersImg" >
                    </router-link>
                </b-slide>
            </b-carousel>
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
.detail
    width 100%
    overflow hidden
    padding-top 5px
    background-color #efeff4
    img
        margin 0
        padding 0
    .carouselContainer
        width 375px
        height 375px
        overflow hidden
       .carousel
            width 375px
            height 375px
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
</style>