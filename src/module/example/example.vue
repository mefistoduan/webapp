<template>
  <div class="example">
    <popup v-bind:title="popup.popupName" :show.sync="show" @ok="ok($index)" @cancel="cancel" cancelText="取消" okText="确定">
      <div style="margin:5px 0">当前可用额度：<span class="user_amount">￥30.00</span></div>
      <div class="dc_price">
        <span class="red_price">试用装价值：</span>
        <span class="gary_price" style="color:#E3462C;">￥13.40</span>
      </div>
      <div class="choice_popup">
        <h5>选择仓库</h5>
        <form action="javascript:addToCart()" method="post" name="ECS_FORMBUY" id="ECS_FORMBUY">
          <ul class="choic_city">

            <li class="store_name curr">
              <a href="javascript:void(0)" id="jinan_store" title="济南仓库" alt="1">[济南仓]<input type="hidden" class="jn_city" name="storehouse" value="jinan_store" checked="checked"></a>
              <input class="jn_store" name="" type="hidden" value="2">
            </li>
          </ul>
        </form>
        <h5>购买数量</h5>
        <div class="pop_info">
         <!--数量计算 todo-->
        </div>
      </div>
    </popup>
    <div class="tabs_goods_list">
      <ul>
        <li v-for="(tab,index) in tabs"  v-bind:class="{curr:index === selected}" @click="choose(index)">
          <a class="external" href="#" v-bind:jsstr='tab.tabsId'>
            <em>{{tab.tabsName}}</em>
          </a>
        </li>
      </ul>
    </div>
    <div class="content_goods_list">
      <ul>
        <li class="new-mu_l2" v-for="example in examples" >
          <span class="new-mu_tmb">
            <img v-bind:src="example.exImg" alt="" width="100" height="100">
          </span>
                <span class="new-mu_l2cw">
                <strong class="new-mu_l2h">{{example.exName}}</strong>
                <span class="new-mu_l2c"><strong class="new-txt-rd2">{{example.exPrice}}</strong></span>
                <span class="mu_detail">
                    <em class="add_apply open-about" v-bind:jsstr="example.exId"  @click="showPopup()">加入申请单</em>
                </span>
            </span>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
    import popup from '../../components/popup/popup.vue'
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    export default {
        data () {
            return {
                model: {
                    goodsId:'',
                },
                 popup: {
                    popupName:'提醒'
                },
                tabs:[
                {tabsName:'综合排序',tabsId:0},
                {tabsName:'上架时间',tabsId:1},
                {tabsName:'价值',tabsId:2}
                ],
                examples: [
                    {exId: 'example',exName: '大成 御膳丸（小样） 200g/袋 50袋/箱',goodsUnit:'单袋',exPrice:'37.40',exImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',exPrice:'57.80',exImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '大成 御膳丸（小样） 200g/袋 50袋/箱',goodsUnit:'单袋',exPrice:'37.40',exImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',exPrice:'57.80',exImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '大成 御膳丸（小样） 200g/袋 50袋/箱',goodsUnit:'单袋',exPrice:'37.40',exImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',exPrice:'57.80',exImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '大成 御膳丸（小样） 200g/袋 50袋/箱',goodsUnit:'单袋',exPrice:'37.40',exImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',exPrice:'57.80',exImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '大成 御膳丸（小样） 200g/袋 50袋/箱',goodsUnit:'单袋',exPrice:'37.40',exImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',exPrice:'57.80',exImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '大成 御膳丸（小样） 200g/袋 50袋/箱',goodsUnit:'单袋',exPrice:'37.40',exImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',exPrice:'57.80',exImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {exId: 'example',exName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'单桶',exPrice:'8.10',exImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                shouldCheck:'checked',
                selected:0,
                show:false
            }
        },
        methods: {
          choose:function (index) {
           this.selected = index
          },
          showPopup(str){
              this.show = true
          },
          ok(popup) {
              this.show = false
              this.autoCalc()
          },
          cancel(popup) {
              this.show = false
          }
        },
        components: {
          popup
        }
    }
</script>



<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import url('../../assets/css/bootstrap.min.css');
  em, i
    font-style normal
  ol, ul
    list-style none
    padding 0
    margin 0
  a
    text-decoration none
  .example
    overflow hidden
    z-index 2
    background-color #efeff4
  .tabs_goods_list
    width 100%
    height 2em
    display block
    margin-top 10px
    margin-bottom 10px
   ul
    width 100%
    height 100%
    display block
    li
      width 33%
      float left
      font-size 14px
      a
        height 2em
        line-height 2em
        display block
        color #656565
        text-align center
  .curr a
    color #1FA139
    font-weight bold
.content_goods_list
  display block
  .new-mu_l2
    width 100%
    padding-top 10px
    padding-bottom 10px
    display block
    overflow hidden
    clear both
    background-color #FAFAFC
    .new-mu_tmb
      width 100px
      height 100px
      margin 0 10px 0 0
      img
       margin-left 15px
    .new-mu_l2cw
      width 65%
      height 100%
      padding-bottom 18px
      float right
      overflow hidden
      _zoom 1
      border-bottom 1px solid #EDEDED
      .new-mu_l2c
        margin-top 10px
        display block
        font-size 20px
      .new-txt-rd2
        min-width 186px
        font-size 20px
        font-weight bold
        color #E3462C
  .mu_detail
    margin-top 10px
    display block
    font-size 12px
    color #999999
    .add_apply
      border 1px solid #ddd
      background #fafafc
      text-align center
      padding 5px
      color #666
    .mu_detail
      margin-top 10px
      display block
      font-size 12px
      color #999999



</style>