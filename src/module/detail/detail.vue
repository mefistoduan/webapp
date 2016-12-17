<template>
    <div class="test2">
        <div class="header">
        </div>
        <div class="carouselContainer">
            <b-carousel :interval="5000" :controls="true" :indicators="true">
                <b-slide>
                    <img src="static/images/289_P_1451863294067.jpg" width="375" height="375">
                </b-slide>
                <b-slide>
                    <img src="static/images/2143_P_1449091000718.jpg" width="375" height="375">
                </b-slide>
                <b-slide>
                    <img src="static/images/2401_P_1460653361322.jpg" width="375" height="375">
                </b-slide>
            </b-carousel>
        </div>
        <div class="bottom" @click="see(alert)">
        </div>
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


<style lang="stylus" scoped>
    body
        padding-top 5px
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


</style>