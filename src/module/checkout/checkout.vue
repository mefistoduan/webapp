<script src="../../router/index.js"></script>
<link rel="stylesheet" href="../../../../../wamp/www/emeixian/mobile/css/meixian_index.css">
<script src="../../../../auto/build/dev-server.js"></script>
<link rel="stylesheet" href="../../../../../wamp/www/emeixian/themes/68ecshopcom_360buy/css/shop_index.css">
<script src="../../components/popup/index.js"></script>
<template>

  <div class="checkout">
    <!--popup-->
    <popup v-bind:title="popup.popupName" :show.sync="show" @ok="ok($index)" @cancel="cancel" cancelText="取消" okText="确定">
      <div class="part" v-show='addressShow'>
        <ul class="address_ul" >
          <li v-for="(add,index) in address" v-bind:class="{active:index === selected}" class="tab-link" @click="choose(index)">
            <div class="lt">
              <p>
                <span><i>{{add.addressName}}</i></span>
                <s class="tel">{{add.addressTel}}</s>
              </p>
              <p class="address_detail">
                {{add.addressInfo}}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="part" v-show='goodListShow'>
        <ul class="gift_ul">
          <li class="li_warp" v-for="(good,index) in goods" v-bind:value="goodsId">
            <img v-bind:src="good.goodsImg" alt="">
            <p class="goods_name">
              <i class="icon_sample"></i>
              {{good.goodsName}}                           </p>
            <span class="unite">{{good.goodsUnit}}   </span>
            <s class="price">￥{{good.goodsPrice}}</s>
            <div class="calc_num">
              <span class="text">×{{good.goodsNum}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="part" v-show="goodExpressShow">
        <ul class="express_ul">
          <li  v-bind:value="express.expressType" class="usable" v-for="(express,index) in expressList" v-bind:class="{curr_li:index === selected}" @click="chooseExpress(index)">{{express.expressName}}<s></s></li>
        </ul>
        <select name="express_select" class="express_select" v-bind:class="{green:showGreen}" @click="color">
          <option v-bind:value="station.value" v-for="(station,index) in stations">{{station.stationName}}</option>
        </select>

        <div class="deliver_arrive_container" alt="0" style="display: none;">
          <div class="weui_cell_hd">
            <input type="checkbox" name="consignee_pay[0]" class="weui_check" value="0">
            <i class="weui_icon_checked"></i>
          </div>
          <em>运费到付</em>
        </div>
        }
      </div>
      <div class="part" v-show="packageShow">
        <div class="packagePart">
          <div class="show_default_package selected " specil_customr="1">
            <a href="javascript:void(0)" >
              使用推荐包装
            </a>
          </div>
          <!--todo-->
          <div class="show_add_package " style="display:none">
            <a href="javascript:void(0)" >
              编辑可选包装
            </a>
          </div>
        </div>
      </div>

      <div class="part" v-show="accountShow">
        <div class="weui_actionsheet_menu">
          <ul class="account_ul">
            <li alt="1" class="curr_li">当前余额￥<em class="user_surplus">{{account}}</em></li>
            <input class="account_input" placeholder="输入使用的余额" type="number" v-model="accountUse" @blur="checkNum" >
          </ul>
        </div>
      </div>

      <div class="part" v-show="payBiLLShow">
        <div class="weui_actionsheet_menu">
          <ul class="account_ul">
            <input class="account_input" type="text" v-model="payBill" @click="calcPayBill" >
            <li alt="1" class="curr_li">发票类型：<em class="user_surplus">增值税专用发票[3%]</em></li>
          </ul>
        </div>
      </div>
    </popup>
    <!--popup-->

    <div class="buyer_info" @click="showPopup(1)">
      <i class=" icon_local"></i>
      <div>
        <h5> <i>{{receiveName}}</i> <s>{{receiveTel}}</s></h5>
        <span>{{receiveInfo}}</span>
      </div>
    </div>

    <div class="meixian_self_info warehouse">
      <p class="title">美鲜自营：济南仓</p>
      <div class="meixianSelfList goods_detail_list" @click="showPopup(2)">
        <ul>
          <li><img src="../../../static/images/3000_P_1473116647145.jpg" alt=""></li>
        </ul>
        <div class="get_more">
          <div>
            <span>共43件</span>
            <i class="icon_more"></i>
          </div>
          <i class=" icon_left"></i>
        </div>
      </div>
      <div class="clear"></div>

      <div class="express weui_cell"  @click="showPopup(3)">
        <div class="icon_warp">
          <img class="icon_package" src="/static/images/car.png">
        </div>
        <span>配送方式</span>
        <i class="icon icon_left"></i>
        <p>{{expressSelect}}</p>
      </div>

      <div class="package weui_cell" @click="showPopup(4)">
        <div class="icon_warp">
          <img class="icon_package" src="/static/images/box.png">
        </div>
        <span>包装方式</span>
        <i class="icon icon_left"></i>
        <p>￥{{packageFee}}</p>
      </div>
      </div>

    <!--余额 start-->
    <div class="order_info"  @click="showPopup(5)">
      <div class="account weui_cell">
        <span>余额</span>
        <i class="icon icon_left"></i>
        <p>使用余额：￥{{accountUse}}</p>
      </div>
    </div>
    <!--余额 end-->

    <!--支付方式 start-->
    <div class="pay_info">
      <p class="title">支付方式</p>
      <div class="weui_cell" v-for="(pay,index) in pays">
        <i class="icon" v-bind:class='pay.payIcon'></i>
        <span>{{pay.payName}}</span>
        <div class="weui_cell_ft" alt="0">
          <input type="radio" name="payment" class="weui_check" value="1" v-bind:checked='{checked:index === 0}'>
          <span class="weui_icon_checked"></span>
        </div>
      </div>
    </div>
    <!--支付方式 end-->

    <!--发票信息 start-->
    <div class="tax_info" @click="showPopup(6)">
      <a class="tax_info_btn weui_cell">
        <span>发票信息</span>
        <i class="icon icon_left"></i>
        <p>{{payBill}}</p>
      </a>
    </div>
    <!--发票信息 end-->

    <!--结算价格 start-->
    <div class="all_info">
      <a class="weui_cell">
        <span>应付总额</span>
        <p>￥<em class="order_amount each_fee">{{sumFee}}</em></p>
      </a>
      <a class="weui_cell gary_text">
        <span>商品</span>
        <p>￥<em class="goods_amount each_fee">{{goodsFee}}</em></p>
      </a>
      <a class="weui_cell gary_text">
        <span>运费</span>
        <p>￥<em class="shipping_fee each_fee">{{expressFee}}</em></p>
      </a>
      <a class="weui_cell gary_text">
        <span>包装费用</span>
        <p>￥<em class="package_sum_fee each_fee">{{packageFee}}</em></p>
      </a>
      <a class="weui_cell gary_text other_btn">
        <span>其他</span>
        <p>￥<em class="other_fee each_fee">{{payBillFee}}</em></p>
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
        <input data-v-c7d06e48="" type="radio" name="payment" value="1" class="weui_check" checked=checked>
        <span class="order_timer">不限</span>
        <input data-v-c7d06e48="" type="radio" name="payment" value="1" class="weui_check">
        <span class="order_timer">上午</span>
        <input data-v-c7d06e48="" type="radio" name="payment" value="1" class="weui_check">
        <span class="order_timer">下午</span>
      </a>
    </div>
    <!--送货时间 end-->

    <!--提交订单-->
    <div class="submit_info">
      <router-link to="/finish" class="jump_part">
        <button class="submit_btn weui_btn_primary" type="submit">提交订单</button>
      </router-link>
    </div>
</div>
</template>

<script>
    import popup from '../../components/popup/popup.vue'
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    Vue.use(BootstrapVue)
    export default {
        data () {
            return {
                props: {
                    id: {
                        type: String
                    },
                    model: {
                        required: false
                    }
                },
                model:{
                    list:'',
                    size:'md'
                },
                popup: {
                    popupName:'提醒'
                },
                pays: [
                    {payName: '余额支付',payId: '01',payIcon:'icon_balance'},
                    {payName: '微信扫码支付',payId: '02',payIcon:'icon_nativepay'},
                    {payName: '支付宝',payId: '03',payIcon:'icon_alipay'},
                    {payName: '网银在线',payId: '04',payIcon:'icon_chinabank'},
                    {payName: '中国银联',payId: '05',payIcon:'icon_ChinaPay'},
                    {payName: '微信支付',payId: '06',payIcon:'icon_wxpay'},
                    {payName: '银行汇款/转帐',payId: '07',payIcon:'icon_bank'}
                ],
                 address: [
                    {addressName: 'pizza',addressTel:'15253135699',addressInfo:'山东济南历下区玉兰广场3号楼606' },
                    {addressName: 'spaghetti',addressTel:'15253135699',addressInfo:'山东泰安泰山区泰山路11号' },
                    {addressName: 'pasta',addressTel:'15253135699',addressInfo:'山东淄博张店区海盛水产市场：金晶大道与联通路交叉南100米（金晶大道239）' },
                    {addressName: 'carpaccio',addressTel:'15253135699',addressInfo:'黑龙江哈尔滨通河县一个冬天冻得人想哭的城市15253135699' },
                    {addressName: 'lasagne',addressTel:'15253135699',addressInfo:'山东省 济南市 历下区 文东街道 文化东路38-1号4号楼' },
                    {addressName: 'risotto',addressTel:'18660809824',addressInfo:'山东省 济南市 历下区 解放路1-7号喜士多便利店' },
                    {addressName: 'tagliatelle',addressTel:'15562697669',addressInfo:'山东省 济南市 历下区 甸新北路11号凝萌织坊' },
                    {addressName: 'sformato',addressTel:'13011740566',addressInfo:'大鹏房产联通营业厅' }
                ],
                goods: [
                    {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795339',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                expressList: [
                    {expressName: '冷藏保温物流',expressType: '01'},
                    {expressName: '美鲜冷链物流',expressType: '02'},
                    {expressName: '湘达物流',expressType: '03'},
                    {expressName: '和泰汇达',expressType: '04'},
                    {expressName: '永辉物流',expressType: '05'}
                ],
                stations: [
                    {stationName: '选择提货网点',value: '0'},
                    {stationName: '周村',value: '1'},
                    {stationName: '淄博',value: '2'},
                    {stationName: '临淄',value: '3'},
                    {stationName: '淄川',value: '4'},
                    {stationName: '博山',value: '5'}
                ],
                selected: -1,
                show:false,
                receiveName:'mefisto',
                receiveTel:'13526548654',
                receiveInfo:'山东淄博张店区海盛水产市场',
                addressShow:false,
                goodListShow:false,
                goodExpressShow:false,
                packageShow:false,
                expressSelect:'未选择',
                showGreen:false,
                accountShow:false,
                payBiLLShow:false,
                packageFee:30.30,
                expressFee:120.20,
                account:3000.30,
                goodsFee:375.00,
                sumFee:525.50,
                accountUse:0.00,
                payBill:'发票抬头',
                payBillFee:0.00

            }
        },
        methods: {
            autoCalc:function () {
                let payFeeFloat = parseFloat(this.packageFee)
                let sum = (this.goodsFee + this.expressFee + payFeeFloat).toFixed(2)
                this.sumFee = sum
            },
            calcPayBill:function () {
                let payFee = (this.goodsFee*0.003).toFixed(2)
                this.payBillFee = payFee
            },
            checkNum:function () {
                let Num = this.accountUse
                let max = this.account
                if (Num>max){
                    this.accountUse = max
                }
                else{
                    if(Num<0){
                        this.accountUse = 0
                    }
                }
            },
            color:function () {
              this.showGreen = true
            },
            choose:function (index) {
                this.selected = index
                this.receiveName = this.address[index].addressName
                this.receiveTel = this.address[index].addressTel
                this.receiveInfo = this.address[index].addressInfo
                this.show = false
            },
            chooseExpress:function (index) {
                this.selected = index
                let name =''
                index==0?name = '冷藏保温物流':index==1?name = '美鲜冷链物流':index==2?name = '湘达物流':index==3?name = '和泰汇达':index==4?name = '永辉物流':name = ''
                this.expressSelect = name
            },
            showPopup(str){
                this.show = true
                this.addressShow = false
                this.goodListShow = false
                this.goodExpressShow = false
                this.packageShow = false
                this.accountShow = false
                this.payBiLLShow = false
                if(str == 1){
                  this.addressShow = true
                }
                if(str == 2){
                    this.goodListShow = true
                }
                if(str == 3){
                    this.goodExpressShow = true
                }
                if(str == 4){
                    this.packageShow = true
                }
                if(str == 5){
                    this.accountShow = true
                }
                if(str == 6){
                    this.payBiLLShow = true
                }
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
            popup, BootstrapVue
        }
    }
</script>



<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import url('../../assets/css/bootstrap.min.css');
  /*主页面*/
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
          s,i
            float left
            margin-right 10px
            text-decoration none
            font-style normal
        span
          width 90%
          height 1.2em
          display block
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
      margin-left 10px
      margin-right 20px
  .all_info
      span
        height 100%
        font-family 'Microsoft Yahei'
        font-size 1.32em
        color #999999
        float left
        margin-right 10px
      .gary_text
        width 100%
        display block
      .weui_check
        margin-top 1em
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
      border-top none
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
    height auto
    overflow hidden
    display block
    margin 0 auto
    margin-bottom 1em
    padding-top 1em
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
.weui_check
  appearance none
  -moz-appearance none
  -webkit-appearance none
  width 12px
  height 20px
  cursor pointer
  background url(/static/images/checkbox.png) no-repeat 0px -36px
  vertical-align middle
  outline none
  border none
  float left
.weui_check:checked
  background url(/static/images/checkbox.png) no-repeat 0px 2px
  outline none
  border none
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*子页面内容*/
  /*地址选择器 start*/
  .part
    width 100%
    overflow hidden
    display block
  .address_ul
    width 100%
    overflow hidden
    display block
    overflow scroll
    padding 0
    padding-top 30px
    padding-bottom 30px
    margin 0
    list-style none
    .active
      background-color #676F85!important
      color #fff
      .lt
        span
          color #fff
    li
      width 100%
      overflow hidden
      display block
      color #999999
      padding-top 1em
      padding-bottom 1em
      border-top 1px solid #eeeeee
    .lt
      width 81%
      float left
      padding-left 20px
      p
        width 100%
        padding-top 0.5em
        font-family Microsoft Yahei
        font-size 1.2em
        display block
        float left
      span
        float left
        i
        font-style normal
        color #333
        font-weight bold
      s
        float right
        text-decoration none
  /*地址选择器 end*/
  .gift_ul 
    width 100%
    height 15em
    display block
    overflow scroll
    padding 0
    padding-top 20px

  .li_warp
    width 96%
    height 10em
    float left
    display block
    padding-bottom 1em
    border-bottom 1px solid #eeeeee
    img
      width 7.59em
      height 7.59em
      float left
      margin-top 1em
      margin-right 0.5em
      border 1px solid #eeeeee
   .goods_name
      padding-top 1em
      padding-right 0.5em
      padding-left 0.5em
      font-family "Microsoft Yahei"
      font-size 0.875em
      color rgb(101, 101, 101)
      overflow hidden
    .unite
      width 60%
      height 1.2em
      font-family "Microsoft Yahei"
      font-size 1em
      color rgb(153, 153, 153)
      line-height 1.8em
      padding-left 0.5em
      display block
    
   .price
      max-width 49%
      height 2em
      display block
      font-family "Microsoft Yahei"
      font-size 1.5em
      color rgb(51, 51, 51)
      float left
      line-height 2em
      font-weight bold
      text-decoration none
  .li_warp:nth-child(1)
    border-top 1px solid #eeeeee
    margin-top 10px
  .calc_num
    max-width 10.625em
    height 1.875em
    display block
    float right
    margin-top 0
    margin-right 0.5em
  /*配送方式*/
  .express_ul
    width 50%
    height 14em
    overflow scroll
    overflow-x hidden
    float left
    margin-bottom 2em
    padding-top 2em
    li
      width 90%
      padding 3px 3px
      margin-top 1em
      float none!important
      margin-left 1%
      margin-right 1%
      border 1px solid #999999
      border-radius 4px
      font-family "Microsoft Yahei", "微软雅黑"
      font-size 0.875em
      color #999999
      line-height 3em
      text-align center
   li.curr_li
    border 1px solid #15AD35
    color #15AD35
.express_select
  width 40%
  height 3em
  float right
  margin-top 3.8em
  margin-right 10px
  color rgb(153, 153, 153)
  background-color rgb(255, 255, 255)
  -webkit-appearance none
  text-indent 1em
  font-family "Microsoft Yahei"
  font-size 0.875em
  border-width 1px
  border-style solid
  border-color rgb(238, 238, 238)
  border-image initial
.green
  color #1eaa39!important
  border 1px solid #1eaa39
  outline none
.packagePart
  margin-top 4em
  overflow hidden
.show_add_package
    width 40%
    float left
    color #999999
    margin-left 10px
    margin-bottom 10px
    text-align center
    border 1px solid #999999
    -moz-border-radius 4px
    -webkit-border-radius 4px
    padding 1px
    padding-top 5px
    padding-bottom 5px
.show_default_package
    width 40%
    float left
    color #999999
    margin-left 10px
    margin-bottom 10px
    text-align center
    border 1px solid #999999
    -moz-border-radius 4px
    -webkit-border-radius 4px
    padding 1px
    padding-top 5px
    padding-bottom 5px

  .selected
    border 2px solid #1a9733
    padding 0px
    padding-top 4px
    padding-bottom 4px
    a
      color #1a9733
a
  width 100%
  display block
  text-decoration none
.weui_actionsheet_menu
  background-color #FBFBFB
  margin-top 3em
  .account_ul
    width 100%
    display block
    overflow hidden
    list-style none
    padding 0
    li
      width 90%
      height 3em
      display block
      margin 0 auto
      border 1px solid #F2F2F2
      border-radius 4px
      margin-top 1em
      text-indent 2em
      line-height 3em
      color #999999
    .curr_li
      color #15AD35 !important
      border 1px solid #15AD35 !important
  .account_input
    width 90%
    height 3em
    font-size 1.1em
    display block
    margin 0 auto
    margin-top 1em
    border 1px solid #F2F2F2
    text-indent 2em
    line-height 2em
    -webkit-appearance none

</style>
