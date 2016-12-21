<template>
    <div class="test2">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {text: '麦肯',brandsImg:'static/images/289_P_1451863294067.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2143_P_1449091000718.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2401_P_1460653361322.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' }
                ],
            }

        },
        methods: {
        },
        components: {
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
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