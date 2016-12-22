<script src="../../components/popup/index.js"></script>
<template>

  <div class="checkout">
    <!--popup-->
    <popup title="提醒" :show.sync="show" @ok="ok($index)" @cancel="cancel" cancelText="取消" okText="确定">
    </popup>
    <!--popup-->

    <div class="buyer_info" @click="showPopup()">
      <i class=" icon_local"></i>
      <div>
        <h5> <i>张飞</i> <s>13526548695</s></h5>
        <span>山东&nbsp;济南&nbsp;历下区&nbsp;玉兰广场3号楼606</span>
      </div>
    </div>

    <div class="meixian_self_info warehouse">
      <p class="title">美鲜自营：济南仓</p>
      <div class="meixianSelfList goods_detail_list">
        <ul>
          <li><img src="../../../static/images/3000_P_1473116647145.jpg" alt=""></li>
        </ul>
        <div class="get_more">
          <div>
            <span>共2件</span>
            <i class="icon_more"></i>
          </div>
          <i class=" icon_left"></i>
        </div>
      </div>
      <div class="clear"></div>

      <div class="express weui_cell">
        <div class="icon_warp">
          <img class="icon_package" src="/static/images/car.png">
        </div>
        <span>配送方式</span>
        <i class="icon icon_left"></i>
        <p>未选择</p>
      </div>

      <div class="package weui_cell">
        <div class="icon_warp">
          <img class="icon_package" src="/static/images/box.png">
        </div>
        <span>包装方式</span>
        <i class="icon icon_left"></i>
        <p>￥0</p>
      </div>
    </div>

    <!--余额 start-->
    <div class="order_info">
      <div class="account weui_cell">
        <span>余额</span>
        <i class="icon icon_left"></i>
        <p>使用余额：￥0.00</p>
      </div>
    </div>
    <!--余额 end-->

    <!--支付方式 start-->
    <div class="pay_info">
      <p class="title">支付方式</p>
      <div class="weui_cell">
        <i class="icon icon_balance"></i>
        <span>余额支付</span>
        <div class="weui_cell_ft" alt="0">
          <input type="radio" name="payment" class="weui_check" value="1">
          <span class="weui_icon_checked"></span>
        </div>
      </div>
    </div>
    <!--支付方式 end-->

    <!--发票信息 start-->
    <div class="tax_info">
      <a class="tax_info_btn weui_cell">
        <span>发票信息</span>
        <i class="icon icon_left"></i>
        <p>开发票</p>
      </a>
    </div>
    <!--发票信息 end-->

    <!--结算价格 start-->
    <div class="all_info">
      <a class="weui_cell">
        <span>应付总额</span>
        <p>￥<em class="order_amount each_fee">64.01</em></p>
      </a>
      <input type="hidden" name="order_amount" value="64.01">
      <a class="weui_cell gary_text">
        <span>商品</span>
        <p>￥<em class="goods_amount each_fee">64.01</em></p>
      </a>
      <a class="weui_cell gary_text">
        <span>运费</span>
        <p>￥<em class="shipping_fee each_fee">0.00</em></p>
      </a>
      <a class="weui_cell gary_text">
        <span>包装费用</span>
        <p>￥<em class="package_sum_fee each_fee">0.00</em></p>
      </a>
      <a class="weui_cell gary_text other_btn" style="display:none">
        <span>其他</span>
        <div class="icon_warp">
          <img class="icon_info" src="">
        </div>
        <p>￥<em class="other_fee each_fee">0.00</em></p>
      </a>
      <a class="weui_cell gary_text fee_option" style="display:none">
        <span>补上次抄码差价</span>
        <p>￥<em class="card_fee each_fee">0.00</em></p>
      </a>

    </div>
    <!--结算价格 end-->

    <!--留言 start-->
    <div class="leave_message_info">
      <div class="weui_cell">
        <div class="weui_cell_bd weui_cell_primary">
          <textarea name="postscript" class="weui_textarea" placeholder="您可以在此留言给商家..." rows="3"></textarea>
        </div>
      </div>
    </div>
    <!--留言 end-->

    <!--送货时间 start-->
    <div class="all_info">
      <a class="weui_cell gary_text">
        <span>最佳送货时间</span>
        <span class="order_timer order_timer_curr">不限</span>
        <span class="order_timer">上午</span>
        <span class="order_timer">下午</span>
        <input type="hidden" id="order_start_timer" name="best_time" value="不限">
      </a>
    </div>
    <!--送货时间 end-->

</div>
</template>

<script>
    import popup from '../../components/popup/popup.vue'
    export default {
        data () {
            return {
                popup: {
                    addressName:'',
                    addressTel:'',
                    addressInfo:'',
                },
                items: [
                    {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                show:false

            }
        },
        methods: {
            showPopup(){
                this.show = true
            },
            ok(popup) {
                this.show = false
                this.items.push(popup);
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
  ol, ul
    list-style none
  .clear
    clear: both;
  .checkout
    width 100%
    background-color #F0F3F5
    overflow hidden
    z-index 2
    .buyer_info
      width 100%
      height 6.04em
      background-color #fff
      margin-bottom 20px
      .icon_local
        width 1.65em
        height 2.1em
        float left
        margin-left 1.1em
        margin-top 2em
        background url(../../../static/images/address.png)
        background-position top center
        background-repeat no-repeat
        background-size 100%
      div
        width 70%
        overflow hidden
        float left
        margin-top 0.875em
        margin-left 1em
        h5
         
          font-size 1.32em
          color rgb(51, 51, 51)
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          s
            text-decoration none
        span
          width 90%
         
          font-size 1.1em
          color rgb(153, 153, 153)
          overflow hidden
    .meixian_self_info
      width 100%
      overflow hidden
      display block
      margin 0 auto
      background-color #fff
      margin-top 1em
      margin-bottom 20px
      .title
        height 1.95em
       
        font-size 1em
        color rgb(101, 101, 101)
        margin-left 1em
        margin-top 0.5em
        line-height 1.5em
      .meixianSelfList
        margin-left 10px
        border-top 1px solid #EDEDED
        overflow hidden
        ul
          width 75%
          height 100%
          float left
          li
            width 4.5em
            height 4.5em
            float left
            margin-top 1em
            margin-bottom 1em
            margin-right 0.5em
            border 1px solid #ebebeb
            img
              width 70%
              height 70%
              display block
              margin 0 auto
              margin-top 15%
    .get_more
      position relative
      width 22%
      height 100%
      float right
      div
        width 50%
        display block
        float left
        margin-top 2em
      .icon_left
        width: 1.675em;
        height: 26px;
        float: right;
        background: url(../../../static/images/arrow_right.png);
        background-size: 100%;
        background-repeat: no-repeat;
        margin-top: 30px!important;
        margin-right: 12px;
      .icon_more
        width 2.875em
        height 2.875em
        display block
        background url(../../../static/images/donit.png)
        background-size 100%
        background-position 0 -10px
  .weui_cell
    height 44px
    padding 0px 15px!important
    margin-left 10px
    border-top 1px solid #d9d9d9
    font-size 0.5em
    .weui_cell_ft
      position relative
      width 2em
      height 2em
      float right
      margin-right 1em
      margin-top 10px
      text-align right
      color #888
    .icon_warp
      width 2em
      height 100%
      float left
      display table-cell
      margin-right 10px
      line-height 44px
      vertical-align top
      img
        width: 100%;
        vertical-align: middle;
    span
      height 100%
      line-height 44px
     
      font-size 1.32em
      color rgb(153, 153, 153)
      float left
      margin-left 10px
    .icon_left
      width 1.675em
      height 20px
      float right
      background: url(../../../static/images/arrow_right.png)
      background-size 100%
      background-repeat no-repeat
      margin-top 14px
    p
      height 100%
      float right
      margin-bottom 0
      margin-right 1em
     
      font-size 1.32em
      color rgb(51, 51, 51)
      line-height 44px
  .tax_info 
    width 100%
    overflow hidden
    display block
    margin  0 auto
    background-color #fff
    margin-top 1em
    a
      width 100%
      display block
    span 
      height 100%
      line-height 44px
      font-size 1.32em
      color #999999
      float left
    p
      height 100%
      display inline-block
      float right
      margin-right 1em
      font-size 1.32em
      color #333333
      line-height 44px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      text-align right
  .stockout_info
    width 100%
    overflow hidden
    display block
    margin  0 auto
    background-color #fff
    margin-top 1em
    a
      display block
      span
        height 100%
        line-height 44px
        font-size 1.32em
        color #999999
        float left
    p
      height 100%
      width 7em
      display inline-block
      float right
      margin-right 1em
      font-size 1.32em
      color #333333
      line-height 44px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      text-align right
  .order_info
    width 100%
    overflow hidden
    display block
    margin  0 auto
    background-color #fff
    margin-top 1em
      span
        height 100%
        line-height 44px
        font-size 1.32em
        color #999999
        float left
  .pay_info
    width: 100%
    overflow: hidden
    display: block
    margin:  0 auto
    background-color: #fff
    margin-top: 1em
    .title
      height 1.95em
      font-size 1em
      color rgb(101, 101, 101)
      margin-left 1em
      margin-top 0.5em
      line-height 1.5em
    span
      margin-left: 1em
      font-family: "Microsoft Yahei"
      font-size: 1.32em
      line-height: 44px
  .icon
    width 1.98em
    height 2.20em
    float: left
    margin-top: 10px
    margin-right: 0.5rem
  .icon_balance
    background url(../../../static/images/balance.png)top center no-repeat
    background-size: 100%
  .icon_bank
    background url(../../../static/images/bank.png)top center no-repeat
    background-size: 100%
  .icon_alipay
    background url(../../../static/images/alipay.png)top center no-repeat
    background-size: 100%
  .icon_chinabank
    background url(../../../static/images/chinabank.png)top center no-repeat
    background-size: 100%
  .icon_ChinaPay
    background url(../../../static/images/ChinaPay.png)top center no-repeat
    background-size: 100%
  .icon_ChinaPaywuka
    background url(../../../static/images/ChinaPayb2b.png)top center no-repeat
    background-size: 100%
  .icon_ChinaPayb2b
    background url(../../../static/images/ChinaPaywuka.png)top center no-repeat
    background-size: 100%
  .icon_wxpay
    background url(../../../static/images/wxpay.png)top center no-repeat
    background-size: 100%
  .icon_nativepay
    background url(../../../static/images/nativepay.png)top center no-repeat
    background-size: 100%
  .icon_cod
    background url(../../../static/images/cod.png)top center no-repeat
    background-size: 100%
  .all_info
    width 100%
    overflow hidden
    display block
    margin 0 auto
    background-color #fff
    margin-top 1em
    .weui_cell
      width 100%
      display block
      border-bottom 1px solid #ddd
    .order_timer
      padding-left 2.2em
      position relative
      margin-left 10px
    .order_timer:before
      content '\EA01'
      color #C9C9C9
      font-size 23px
      display block
      position absolute
      z-index 1
      left0
      top10px
      font-family weui
      font-style normal
      font-weight 400
      speak none
      vertical-align middle
      text-decoration inherit
      width 1em
      text-align center
      font-variant normal
      text-transform none
      line-height 1em
      margin-left .2em
  .order_timer.order_timer_curr:before
    content '\EA06'
    color #09BB07
  .all_info
      span
        height 100%
        line-height 44px
        font-family 'Microsoft Yahei'
        font-size 1.32em
        color #999999
        float left
      .gary_text
        width 100%
        display block
    order_timer:before
      content '\EA01'
      color #C9C9C9
      font-size 23px
      display block
  .order_timer.order_timer_curr:before
      content '\EA06'
      color #09BB07
    a
      p
        max-width 50%
        display inline-block
        float right
        font-family 'Microsoft Yahei'
        font-size 1.32em
        line-height 44px
        color #999999
  .all_sum
    font-weight bold
    color #333333
  .leave_message_info
    width 100%
    overflow hidden
    display block
    margin 0 auto
    background-color #fff
    margin-top 1em
    .weui_cell
      height auto
  .weui_cell_primary
    display block
   .weui_textarea
      width 98%
      display block
      margin 20px auto
      border 1px solid #eeeeee
      line-height 2em
      text-indent 1em
      -webkit-appearance none
  .submit_info
    width 100%
    height 6em
    display block
    margin 0 auto
    padding-top 2.2em
    overflow hidden
    .submit_btn
      width 90%
      height 3em
      border 1px solid #15AD35
      display block
      margin 0 auto
      background-color#15AD35
      border-radius 4px
      color #fff
      font-family 'Microsoft Yahei'
      font-size 1.75em
      line-height 3em
  .account,.tax_info_btn,.gary_text,.leave_message_info
    border none
</style>