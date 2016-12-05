<template>
    <div class="brands">
        <div class="header">
        </div>
        <ul class="wap_brand">
            <li v-for="item in items">
                <div>
                    <p class="b-img">
                        <a href="brands.php?b_id=2">
                            <img v-bind:src = item.brandsImg alt="">
                        </a>
                    </p>
                    <p class="b-name">
                        <a href="brands.php?b_id=2">{{item.brandsName}}</a>
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
                    {brandsName: '麦肯',brandsImg:'../../assets/img/about.jpg' },
                    {brandsName: '蓝顿旭美' }
                ]
            }

        }
    }
</script>


<style lang="stylus" scoped>
    body
        padding-top 5px
    .wap_brand
        width 100%
        list-style none
        margin 0 auto
        padding 0
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