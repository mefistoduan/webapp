<template>
    <div class="cart">
            <div class="title_jn">
                <input type="checkbox" class="weui_check" v-bind:checked="shouldCheck"   name="rec_list" @click='choiceAll()'>
                <p>全选</p>
            </div>
            <ul class="list">
                <b-alert :show="showVariable" :state="state" dismissible>
                    低于或高于限制数量
                </b-alert>
                <li v-for="(item, index) in items">
                    <div class="weui_cell_hd meixian_self_item city_qd_item check_item goods_checkbox_item" alt="1">
                        <input type="checkbox" class="weui_check" v-bind:checked="shouldCheck" name="rec_id[]" v-bind:value="item.goodsId">
                    </div>
                    <div class="li_warp">
                        <a v-bind:href="item.goodsUrl"> <img v-bind:src="item.goodsImg" alt=""></a>
                        <p class="goods_name"><a v-bind:href="item.goodsUrl">{{item.goodsName}}</a></p>
                        <span class="unite">{{item.goodsUnit}}</span>
                        <p class="price_container">
                            <s class="price" alt="37.40">￥{{item.goodsPrice}}</s>
                            <s class="delete"  @click="deleteItem(index)">X</s>
                        </p>
                        <div class="calc_num">
                            <a class="btn_reduce" @click="reduce(index)">-</a>
                            <input name="number" type="text" class="text" v-bind:value="item.goodsNum">
                            <input type="hidden" name="miaosha_attr" value="">
                            <a class="btn_add" @click="add(index)">+</a>
                        </div>
                    </div>
                </li>
            </ul>
        <div id='sumAllContainer'>
            <em></em>
            <router-link to="/coupon" class="jump_part">
                <button type="submit" class="submit"><i>去结算（<span>{{sumNum}}</span>件）</i></button>
            </router-link>
            <p>
                <span class="sub">总计不含运费</span>
                <span class="sum">￥<i class="sum_value">{{sumPrice}}</i></span>
            </p>
        </div>
        <modal title="提醒" :show.sync="show" @ok="ok(index)" @cancel="cancel" cancelText="取消" okText="确定">
            <p>是否删除该产品？</p>
        </modal>
    </div>
</template>

<script>
    import Modal from '../../components/modal/modal.vue'
    import Vue from 'vue'

    export default {
        data () {
            return {
             model: {
                    goodsId:'',
                },
                items: [
                    {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795339',goodsName: '丽莎莉达牌意大利粉 丽歌制造 2.5kg/包 5包/箱',goodsUnit:'整箱',goodsPrice:'101.00',goodsNum:'2',goodsImg:'../../../static/images/2143_P_1449091000718.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '东古 蚝油 6kg/桶 2桶/箱',goodsUnit:'单桶',goodsPrice:'57.80',goodsNum:'1',goodsImg:'../../../static/images/2401_P_1460653361322.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '广味源 广味海鲜酱 255g/瓶 12瓶/箱',goodsUnit:'整箱',goodsPrice:'78.00',goodsNum:'1',goodsImg:'../../../static/images/2613_P_1464119690629.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '元盛 经典牛肉饼 1.8kg/袋（40片）4袋/箱',goodsUnit:'整箱',goodsPrice:'155.50',goodsNum:'1',goodsImg:'../../../static/images/2724_P_1470597064231.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '鼎丰 料酒王 500ml/瓶 12瓶/箱 ',goodsUnit:'单瓶',goodsPrice:'4.40',goodsNum:'11',goodsImg:'../../../static/images/3000_P_1473116647145.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '香瓜 生态种植 不催熟',goodsUnit:'单斤',goodsPrice:'2.60',goodsNum:'5',goodsImg:'../../../static/images/3329_P_1477943781488.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                show:false,
                showVariable:false,
                state:'warning',
                sumPrice:375.00,
                sumNum:43,
                shouldCheck:'checked'
            }
        },
        methods: {
            choiceAll:function(){
                if(this.shouldCheck==''){
                    this.shouldCheck='checked'
                }else{
                    this.shouldCheck=''
                }
            },
            choiceItem(index) {
                 if(this.shouldCheck==''){
                    this.shouldCheck='checked'
                }else{
                    this.shouldCheck=''
                }
            },
            deleteItem(index) {
                this.show = true
            },
            ok(index) {
                this.items.splice(index,1)
                this.show = false
            },
            cancel() {
                this.show = false
            },
            add:function(index) {
                var n = this.items[index].goodsNum
                if(n<20){
                    n++
                }
                else{
                    n=20
                    this.showVariable = false
                    this.showVariable = true
                }
                this.items[index].goodsNum = n

                var N = 0
                var P = 0
                for(var i=0;i<this.items.length;i++){
                    if(this.shouldCheck=='checked'){
                      N += parseInt(this.items[i].goodsNum);
                    }

                }
                for(var i=0;i<this.items.length;i++){
                    if(this.shouldCheck=='checked'){
                    P += parseFloat(this.items[i].goodsNum)*parseFloat(this.items[i].goodsPrice);
                    }
                }

                 this.sumNum = N
                 this.sumPrice = P.toFixed(2)


            },
             reduce:function(index) {
                var n = this.items[index].goodsNum
                if(n>0){
                    n--
                }
                else{
                    n=0
                    this.showVariable = false
                    this.showVariable = true
                }
                this.items[index].goodsNum = n
                this.sumNum  = 0
                var N = 0
                var P = 0
                for(var i=0;i<this.items.length;i++){
                    N += parseInt(this.items[i].goodsNum)
                }
                for(var i=0;i<this.items.length;i++){
                    P += parseFloat(this.items[i].goodsNum)*parseFloat(this.items[i].goodsPrice);
                }
                 this.sumNum = N
                 this.sumPrice = P.toFixed(2)
            }

        },
        components: {
        Modal
        }
    }

</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
    body
        padding-top 5px
        padding-left 0
        img
            margin 0
            padding 0
         ul， ol
            list-style none
        .title_jn
            width 100%
            height 5.375em
            .weui_cell_hd
                margin-top 1.5em
                margin-left 10px
                margin-right 10px
                float left
        .list
            width 100%
            overflow hidden
            display block
            margin 0 auto
            padding-left 0
            padding-bottom 1em
            li
                width 100%
                height 12.3rem
                display block
                a
                    float left
                .goods_checkbox_item
                    width 10px
                    margin-left 5px
                    margin-top 50px
                    float left
                .li_warp
                    width 95%
                    height 100%
                    float right
                    border-bottom 1px solid #eee
                    img
                        width 8.625rem
                        height 8.625rem
                        float left
                        margin-top 1rem
                        margin-right 10px
                        border 1px solid #eee
                    .goods_name
                        padding-top 0.5rem
                        height 2.6em
                        font-family "Microsoft Yahei"
                        font-size 1.5rem
                        color rgb(101, 101, 101)
                        line-height 1.3em
                        overflow hidden
                    .unite
                        width 60%
                        height 1.2rem
                        font-family "Microsoft Yahei"
                        font-size 1.25rem
                        color rgb(153, 153, 153)
                        line-height 1.2rem
                        float left
                        display block
                    .price_container 
                        width 60%
                        height 3.2em
                        display block
                        margin 0
                        padding 0
                        float left
                    
                        .price 
                            max-width 49%
                            height 100%
                            display block
                            font-family "Microsoft Yahei"
                            font-size 1.5rem
                            color rgb(51, 51, 51)
                            float left
                            line-height 3.5rem
                            font-weight bold
                            text-decoration none
                        
                    .delete 
                        width 16px
                        height 16px
                        margin-top 0.7em
                        font-family "Microsoft Yahei"
                        font-size 16px
                        float left
                        line-height 16px
                        text-align center
                        margin-left 0.5rem
                        cursor pointer
                        background red
                        color #fff
                        text-decoration none
                        border-radius 25px
                    .calc_num 
                        max-width 10.625rem
                        height 1.875rem
                        display block
                        float left
                        margin-right 0.5rem
                    
                        .btn_reduce 
                            width 24px
                            height 30px
                            float left
                            border 1px solid #ddd
                            text-align center
                            line-height 30px
                            text-decoration none
                        .btn_add
                            width 24px
                            height 30px
                            float left
                            border 1px solid #ddd
                            text-align center
                            line-height 30px
                            text-decoration none
                        input.text 
                            width 40px
                            height 30px
                            float left
                            display inline-block
                            box-sizing border-box
                            border 1px solid #dddddd
                            border-left none
                            border-right none
                            text-align center
                            color #E3462C
                            -webkit-appearance none
                            border-radius 0
            .alert
               position fixed
               right 0
               left 0
               top 10%
        #sumAllContainer
            width 100%
            height 6.125rem
            display block
            margin 0 auto
            float left
            background-color #F9F9FB
            margin-top 2rem
            button
                width 11.25rem
                height 4.625rem
                float right
                margin-top 1rem
                margin-right 0.5rem
                background-color #15AD35
                border 1px solid #15AD35
                border-radius 4px
                outline none
                color #fff
                text-align center
                line-height 3.625rem
                font-family "Microsoft Yahei"
                font-size 1.5rem
            p
                width 50%
                max-width 80%
                height 100%
                float right
                line-height 6.125rem
                margin-right 1rem
                .sub
                    float left
                    height  100%
                    color #999999
                    font-size 1.25rem
                    line-height 6.125rem
                .sum
                    float left
                    height 100%
                    font-family Verdana
                    font-weight bold
                    color #333
                    font-size 1.75rem
                    i
                    float right
                    font-style normal
                    margin-left 0.5em
                    line-height 6.125rem
</style>