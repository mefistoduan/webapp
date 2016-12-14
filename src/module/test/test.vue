<template>
    <div class="brands">
        <div class="header">
        </div>
        <ul class="wap_brand">
           <button @click="open(alert)">alert</button>
            <b-alert :show="showVariable" :state="state" dismissible>
                This is an alert
            </b-alert>
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
                list: [
                    {text: '麦肯',text:'png',link:'http://www.emeixian.com/mobile/brands.php?b_id=2' }
                ],
                showVariable:false
            }

        },
        methods: {
            open:function (alert) {
               this.showVariable = true
            }
        },
        components: {
            alert
        }
    }
</script>


<style lang="stylus" scoped>
    @import url('../../assets/css/bootstrap.min.css')
    body
        padding-top 5px
    .wap_brand
        width 100%
        list-style none
        margin 0 auto
        padding 0
        overflow hidden
        padding-bottom 20px
        li
            width 50%
            padding 10px 0 0
            float left
            div
                width 90%
                height 9em
                padding 5px
                margin 0 auto
                border 1px solid #ccc
                -webkit-border-radius 10px 5px
                text-align center
                a
                    margin 0
                    width 100%
                    display block
                    color #999
                    text-align center
                    font-size 20px
            img
                width 100%
                margin 0 auto
            .b-name a
                border-top 1px solid #ccc

</style>