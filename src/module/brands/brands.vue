<template>
    <div class="brands">
        <div class="header">
        </div>
        <ul class="wap_brand">
            <li v-for="item in items">
                <div>
                    <p class="b-img">
                        <a v-bind:href="item.brandsUrl">
                            <img  v-bind:src ="item.brandsImg" alt="">
                        </a>
                    </p>
                    <p class="b-name">
                      <a v-bind:href="item.brandsUrl">
                          {{item.brandsName}}
                        </a>
                    </p>
                </div>
            </li>
        </ul>
        <div class="bottom">
        </div>
    </div>
</template>

<script>
import {getBrands} from '../../api/brands'
    export default {
        data() {
            return {
                items: []
            }
        },
     beforeMount(){
        getBrands(this.$router.currentRoute.params.id).then(value => {
            this.items = value
          })
        },
    }
</script>


<style lang="stylus"  rel="stylesheet/stylus" scoped>
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