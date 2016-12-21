<template>
    <div class="banner-container">
        <div class="banner"  v-for="item in items"><img v-bind:src ="item.picSrc" width="100%"></div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                model: {
                    picSrc:''
                },
                items: [
                    {picSrc: '../../../static/images/topic/verify/ver_02.jpg'},
                    {picSrc: '../../../static/images/topic/verify/ver_03.jpg'},
                    {picSrc: '../../../static/images/topic/verify/ver_04.jpg'},
                    {picSrc: '../../../static/images/topic/verify/ver_05.jpg'},
                    {picSrc: '../../../static/images/topic/verify/ver_06.jpg'}
                ]
            }
        },
        components:{
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    body
        background-color:#ff0000
        .banner
            width 100%
            overflow hidden
            display block
            img
                padding 0
                margin 0

</style>