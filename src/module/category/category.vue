<template>
  <div class="category">
    <div id="wrapper">
      <div id="scroller" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
        <ul>
          <li class="cur">
            <a class="J_ping" type-code="-10086" href="javascript:void(0);">肉禽蛋品</a>
            <input class="goods_cat_id" name="" type="hidden" value="166">
          </li>
        </ul>
      </div>
      <div class="iScrollVerticalScrollbar iScrollLoneScrollbar">
        <div class="iScrollIndicator"></div>
      </div>
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