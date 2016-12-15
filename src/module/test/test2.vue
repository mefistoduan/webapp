<template>
    <div class="brands">
        <div class="header">
        </div>
        <ul class="wap_brand">
            <b-carousel :interval="3000" :controls="true" :indicators="true">
                <b-slide v-for="item in items">
                    <img v-bind:src="item.brandsImg">
                </b-slide>
            </b-carousel>
        </ul>
        <div class="bottom" @click="see(alert)">
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
                    {text: '麦肯',text:'png',brandsImg:'static/images/289_P_1451863294067.jpg' },
                    {text: '麦肯',text:'png',brandsImg:'static/images/2143_P_1449091000718.jpg' },
                    {text: '麦肯',text:'png',brandsImg:'static/images/2401_P_1460653361322.jpg' },
                    {text: '麦肯',text:'png',brandsImg:'static/images/2724_P_1470597064231.jpg' }
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
    @import url('../../assets/css/bootstrap.min.css')
    body
        padding-top 5px
        ul
            padding 0
            margin 0
            .carousel
                width 100%
                height 400px
                overflow hidden
                padding 0
                margin 0
                img
                    padding 0
                    margin 0
                .carousel-control
                    padding 0
                    margin 0
</style>