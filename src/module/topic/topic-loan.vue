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
                    {picSrc: '../../../static/images/topic/loan/list_01.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_02.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_03.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_04.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_05.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_06.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_07.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_08.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_09.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_10.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_11.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_12.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_13.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_14.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_15.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_16.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_17.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_18.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_19.jpg'},
                    {picSrc: '../../../static/images/topic/loan/list_20.jpg'}
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