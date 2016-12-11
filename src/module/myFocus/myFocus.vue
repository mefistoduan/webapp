<template>
    <div class="brands">
        <div class="header">
        </div>
        <ul class="myattention-productlist">
            <li  v-for="(item,index) in items" v-bind:class="id">
                <a href='javascript:void(0)' class="myattention-productlist-a">
                    <div class="pic-div">
                        <img  v-bind:src ="item.picSrc">
                        <span v-bind:class="item.proGone">{{item.proInfo}}</span>
                    </div>
                    <div class="prolist-content">
                        <div class="prolist-name"><span> {{item.goodsName}}</span></div>
                        <div class="pro-price"><em>¥<span class="big-price">{{item.goodsPrice}}.</span><span
                                class="small-price">{{item.goodsSmallPrice}}</span></em></div>
                        <div class="discount-info"></div>
                        <div class="buttons cf">
                            <span class="cancle-btn" @click="cancelFocus(index)">取消关注</span>
                            <i class="car-btn"></i>
                        </div>
                    </div>
                </a>
                <modal title="提醒" :show.sync="show" @ok="ok($index)" @cancel="cancel" cancelText="取消" okText="确定">
                    <p>是否取消关注？</p>
                </modal>
            </li>
        </ul>

        <div class="bottom">
        </div>
    </div>
</template>

<script>
    import Modal from '../../components/modal/modal.vue'
    export default {
        data() {
            return {
                model: {
                    picSrc:'',
                    goodsName:'',
                    goodsPrice:'',
                    goodsSmallPrice:'',
                    proGone:'',
                    proInfo:'',
                    id:''
                },
                items: [
                    {picSrc: '../../../static/images/3000_P_1473116647145.jpg',goodsName:'扇贝 深海无污染扇贝 2.5kg/袋',goodsPrice:'34',goodsSmallPrice:'50',proGone:'pro-gone',proInfo:'缺货',id:1 },
                    {picSrc: '../../../static/images/2613_P_1464119690629.jpg',goodsName:'雪山 柳叶鱼 挪威进口 8kg/箱',goodsPrice:'138',goodsSmallPrice:'00',proGone:'',proInfo:'' ,id:2},
                    {picSrc: '../../../static/images/2724_P_1470597064231.jpg',goodsName:'金平 冻南美青虾肉 去壳青虾 约10kg/箱',goodsPrice:'541',goodsSmallPrice:'00',proGone:'pro-',proInfo:'' ,id:3},
                    {picSrc: '../../../static/images/2401_P_1460653361322.jpg',goodsName:'宝骏龙 粉丝半壳扇贝 蒜蓉粉丝贝 4.5kg/箱',goodsPrice:'114',goodsSmallPrice:'00',proGone:'',proInfo:'' ,id:4},
                    {picSrc: '../../../static/images/2143_P_1449091000718.jpg',goodsName:'全伟东 鲷鱼片 4.54kg/箱',goodsPrice:'148',goodsSmallPrice:'00',proGone:'',proInfo:'',id:5 },
                    {picSrc: '../../../static/images/289_P_1451863294067.jpg',goodsName:'元盛 黑椒沙律牛排 150g/袋 80袋/箱',goodsPrice:'58',goodsSmallPrice:'50',proGone:'pro-gone',proInfo:'限济南地区',id:6 },
                    {picSrc: '../../../static/images/3329_P_1477943781488.jpg',goodsName:'安井 紫薯糯米球 约25g/个 2.5kg/袋（约100个/袋） 4袋/箱  不支持威海地区购买',goodsPrice:'29',goodsSmallPrice:'90',proGone:'pro-gone',proInfo:'限餐厅用户' ,id:7}
                ],
                moreData: [
                    {picSrc: '../../../static/images/3000_P_1473116647145.jpg',goodsName:'扇贝 深海无污染扇贝 2.5kg/袋',goodsPrice:'34',goodsSmallPrice:'50',proGone:'pro-gone',proInfo:'缺货',id:1 },
                    {picSrc: '../../../static/images/2613_P_1464119690629.jpg',goodsName:'雪山 柳叶鱼 挪威进口 8kg/箱',goodsPrice:'138',goodsSmallPrice:'00',proGone:'',proInfo:'' ,id:2},
                    {picSrc: '../../../static/images/2724_P_1470597064231.jpg',goodsName:'金平 冻南美青虾肉 去壳青虾 约10kg/箱',goodsPrice:'541',goodsSmallPrice:'00',proGone:'pro-',proInfo:'' ,id:3},
                    {picSrc: '../../../static/images/2401_P_1460653361322.jpg',goodsName:'宝骏龙 粉丝半壳扇贝 蒜蓉粉丝贝 4.5kg/箱',goodsPrice:'114',goodsSmallPrice:'00',proGone:'',proInfo:'' ,id:4},
                    {picSrc: '../../../static/images/2143_P_1449091000718.jpg',goodsName:'全伟东 鲷鱼片 4.54kg/箱',goodsPrice:'148',goodsSmallPrice:'00',proGone:'',proInfo:'',id:5 },
                    {picSrc: '../../../static/images/289_P_1451863294067.jpg',goodsName:'元盛 黑椒沙律牛排 150g/袋 80袋/箱',goodsPrice:'58',goodsSmallPrice:'50',proGone:'pro-gone',proInfo:'限济南地区',id:6 },
                    {picSrc: '../../../static/images/3329_P_1477943781488.jpg',goodsName:'安井 紫薯糯米球 约25g/个 2.5kg/袋（约100个/袋） 4袋/箱  不支持威海地区购买',goodsPrice:'29',goodsSmallPrice:'90',proGone:'pro-gone',proInfo:'限餐厅用户' ,id:7}
                ],
                 show:false
            }

        },
        methods : {
            cancelFocus(index) {
                this.show = true
            },
            ok($index) {
                this.items.splice($index,1)
                this.show = false
            },
            cancel() {
                this.show = false
            },
            loadMore() {
            //scroll to do
                yourAjaxMethod(function(moreData) {
                this.items.push(moreData);
            }.bind(this));
    }
        },
        components: {
            Modal
        }

    }

</script>


<style lang="stylus" scoped>
    body
        padding-top 5px
        ul,li
            margin 0
            padding 0
            list-style none
    .myattention-productlist
        overflow hidden
        li
            width 100%
            overflow hidden
            display block
            .myattention-productlist-a
                width 100%
                float left
                display block
                padding 9px 0 0 10px
                margin 5px
                overflow hidden
            .pic-div
                height 5.62em
                width 5.62em
                border-radius 2px
                overflow hidden
                position relative
                margin-top 2px
                float left
                img
                    width 100%
                    height 100%
                    margin 0
                    padding 0
                .pro-gone
                    height 1.2em
                    display block
                    width 100%
                    position: absolute
                    bottom 0
                    left 0
                    background-color rgba(0,0,0,0.5)
                    text-align center
                    line-height 1.2rem
                    font-size .5625rem
                    color #fff
                    z-index 2
            .prolist-content
                width 70%
                float left
                overflow hidden
                padding-top 10px
                padding-bottom 10px
                position relative
                -webkit-box-flex 1
                -moz-box-flex 1
                margin-left 10px
                padding-right 5px
                .prolist-name
                    color #232326
                    font-size 0.875em
                    line-height 1.3em
                    height 2.4em
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    display -moz-box
                    box-orient vertical
                    -webkit-box-orient vertical
                    margin-bottom 16px
                    font-weight 200
                    font-style none
                    font-family Verdana
                .pro-price
                    margin-bottom 8px
                    color red
                    height 0.937em
                    line-height 0.973em
                    overflow hidden
                    font-size 1em
                    font-weight bold
                    em
                        font-size 0.675em
                        margin-right 8px
                        display inline-block
                        height 1.12em
                        overflow hidden
                        float left
                        vertical-align top
                        position relative
                        top 0
                        font-style normal
                    .big-price
                        font-size 0.94em
                        color #f02323
                .buttons
                    margin-top 2px
                    .cancle-btn
                        width 5.375em
                        color #686868
                        font-size 0.625em
                        height 1.7em
                        line-height 1em
                        text-align center
                        float left
                        padding 3px
                        margin-right 10px
                        border 1px solid #dddddd
                        box-shadow 1px 1px
                    .car-btn
                        position absolute
                        background url("../../../static/images/car_btn.png") top center no-repeat
                        background-size 23px 22px
                        background-position 7px 7px
                        width 39px
                        height 37px
                        bottom 3px
                        right 5px
                        display block
                        z-index 1
                .cf:after
                    content ""
                    display block
                    height 0
                    clear both
                    visibility hidden
        .prolist-content:after
            content  ''
            height  1px
            width  200%
            position  absolute
            left  0
            top  auto
            right  auto
            bottom  0
            background-color  #e3e5e9
            border  0 solid transparent
            border-radius  0
            -webkit-border-radius  0
            transform  scale(0.5)
            -webkit-transform  scale(0.5)
            -moz-transform  scale(0.5)
            -ms-transform  scale(0.5)
            -o-transform  scale(0.5)
            transform-origin  top left
            -webkit-transform-origin  top left
            -moz-transform-origin  top left




</style>