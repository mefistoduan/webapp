<template>
    <div class="test2">
        <h1 @click="ajaxInfo">{{info}}</h1>
    </div>
</template>

<script>
import jQuery from 'jquery'
export default {
    data() {
        return {
            info:'duan',
        }
    },
    methods: {
        ajaxInfo:function() {
        let $this = this
            jQuery.ajax({
                type: 'get',
                url: "static/data.json",
                success: function (data) {
                console.log(data.sites[0].Name);
                     $this.info =  data.sites[0].Name;//jquery ajax调取数据
                     //tips:这里的this需要从外部引入一次
                }
            })

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