<template>
  <div class="orderdetail">
    <h2>订单详情</h2>
    <ul class="order-list">
      <li>
        <div class="order-box">
          <div class="order-width">
            <p>订单编号：{{orderId}}</p>
            <p>订单金额：￥{{orderPrice}}元</p>
            <p>订单日期：{{orderDate}}</p>
          </div>
          <div class="pay-button" >
            <div class="pay-order"><a @click="confirm">{{orderState}}</a></div>
          </div>
        </div>
      </li>
      <li>
        <div class="order-box">
          <ul class="book-list">
            <li class="border-bottom">
              <a href="#">
                <div class="order-msg" v-for="item in items">
                  <img v-bind:src="item.goodsImg" class="img_ware">
                  <div class="order-msg">
                    <p class="title">{{item.goodsName}}</p>
                    <p class="price">￥{{item.goodsPrice}}元<span></span></p>
                    <p class="order-data">单袋X{{item.goodsNum}}</p>
                  </div>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </li>
      <li>
        <div class="order-box">
          <div class="order-width">
            <p class="border-bottom usr-name">
              {{addressName}}									<span class="fr">{{addressTel}}</span>
            </p>
            <p class="usr-addr">{{addressDetail}}</p>
          </div>
        </div>
      </li>
      <li>
        <div class="order-box">
          <div class="order-width">
            <p class="border-bottom usr-name">付款方式:<span class="fr">{{payType}}</span></p>
            <p>商品总价
              :<span class="fr red">￥{{paySum}}元</span></p>
            <p>+ 配送费用: <span class="fr red">￥{{payFee}}元</span></p>
            <p>- 使用余额: <span class="fr red">￥{{payAccount}}元</span></p>
            <p>应付款金额: <span class="fr red">￥{{payShould}}元</span></p>
          </div>
        </div>
      </li>
      <li>
        <div class="order-box">
          <div class="order-width">
            <p class="border-bottom usr-name">配送信息<span class="fr"></span></p>
            <p>配送方式：{{expressType}}</p>
            <p>支付方式：{{expressPay}}</p>
          </div>
        </div>
      </li>
      <li>
        <div class="order-box">
          <div class="order-width">
            <p class="border-bottom usr-name">缺货信息<span class="fr"></span></p>
            <p>如遇缺货时的处理方式:  等待所有商品备齐后再发</p>
          </div>
        </div>
      </li>
    </ul>
    <modal title="确认收货" :show.sync="show" @ok="ok(model)" @cancel="cancel" cancelText="取消" okText="确定">
        <h4>是否确认收货？</h4>
      <small>*确认不可取消，请在收到后确认操作</small>
    </modal>
</div>
</template>

<script>
    import Modal from '../../components/modal/modal.vue'
    export default {
        data () {
            return {
                    model: {
                        addressName:'',
                        addressTel:'',
                        addressInfo:''
                    },
                items: [
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                shouldCheck:'checked',
                orderId:2016122801606,
                orderPrice:21.90,
                orderDate:'2016-12-28 09:03:01',
                addressName:'张飞',
                addressTel:'18765835796',
                addressDetail:' [山东  济南  历下区] 玉兰广场3号楼606  [250021] ',
                payType:' 在线支付',
                paySum:11.90,
                payFee:10.00,
                payAccount:21.9,
                payShould:0.00,
                expressType:'市内快递',
                expressPay:'余额支付',
                orderState:'确认收货',
                show:false
            }
        },
        methods: {
            confirm:function () {
                this.show = true
            },
            ok(model) {
                this.show = false
                this.orderState = '已收货'
            },
            cancel() {
                this.show = false
            }
        },
        components: {
            Modal
        }
    }
</script>



<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import url('../../assets/css/bootstrap.min.css');
ul, ol
    list-style none
    padding 0
    margin 0

  .orderdetail
    overflow hidden
    z-index 2
    background-color #f3f4f6
    h2
      font-size 22px
      text-align center
  .order-list
    position relative
    top 0px
    li
      display list-item
      text-align center
  .order-box
    margin-top 10px
    background #FFF
    border-top 1px solid #c8c7cc
    border-bottom 1px solid #c8c7cc
    display inline-block
    width 100%
    overflow hidden
  .order-width
    color #707070
    font-size 14px
    margin 0 10px
    p
      min-height 30px
      padding-top 10px
      text-align left
      vertical-align bottom
  .pay-button
    text-align center
    color #FFF
    height 50px
    font-size 14px
    display block
  .pay-order
    clear left
    margin 0 auto
    width 140px
    height 30px
    background-color #1daa39
    font-size 16px
    text-align center
    line-height 30px
    vertical-align middle
    border-radius 3px
    margin-top 10px
    margin-bottom 15px
    display inline-block
    color #FFF
    a
      color #FFF
  .book-list
    li
      padding 5px 0
      margin-left 10px
     .order-msg
        overflow hidden
        margin-top 3px
        margin-bottom 3px
    img
        width 88px
        height 88px
        float left
        border 1px solid #e4e4e4
        margin-left 10px
        margin-right 10px
    .title
      height 41px
      overflow hidden
      font-size 16px
      line-height 20px
      color #333
   .price
      color #f02323
      font-size 14px
      span
        float right
        width 10px
        height 10px
        margin-right 15px
        border-top 2px solid #ebeaec
        border-right 2px solid #ebeaec
        -webkit-transform rotate(45deg)
        -moz-transform rotate(45deg)
        -o-transform rotate(45deg)
        -ms-transform rotate(45deg)
        transform rotate(45deg)
  .order-data
    color #7b7b7b
  .order-width
    color #707070
    font-size 14px
    margin 0 10px
    .fr
      float right
  .usr-addr
    margin-top 10px
    margin-bottom 10px
.red
  color #f02323
</style>