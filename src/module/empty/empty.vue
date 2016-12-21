<template>
  <div class="about">

</div>
</template>

<script>
    export default {
        data () {
            return {
                model: {
                    goodsId:'',
                },
                items: [
                    {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                shouldCheck:'checked'
            }
        },
        methods: {

        },
        components: {

        }
    }
</script>



<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import url('../../assets/css/bootstrap.min.css');
  .about
    overflow hidden
    z-index 2
</style>