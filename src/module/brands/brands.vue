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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {brandsName: '麦肯',brandsImg:'static/images/1464133902912161957.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: '蓝顿旭美',brandsImg:'static/images/1464133380387838103.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: '典发',brandsImg:'static/images/1464131729030369013.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: '达伟',brandsImg:'static/images/1464131621150210414.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: '路多萨',brandsImg:'static/images/1464133728131345859.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: 'mg',brandsImg:'static/images/1464133212250391412.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: '麦西恩',brandsImg:'static/images/1464131621150210414.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: '荷美尔',brandsImg:'static/images/1464133918021244284.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: '爱薯福',brandsImg:'static/images/1464133234297250681.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' },
                    {brandsName: 'ligo',brandsImg:'static/images/1464133580775209681.png',brandsUrl:'http://www.emeixian.com/mobile/brands.php?b_id=2' }
                ]
            }

        }
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