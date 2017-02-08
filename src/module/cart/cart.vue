<template>
    <div class="cart">
            <div class="title_jn">
                <input type="checkbox" class="shoppting-checkbox" v-bind:checked="shouldCheck"   name="rec_list" @click='choiceAll()'>
                <p class="cart_title">全选</p>
            </div>
            <ul class="list">
                <li v-for="(item, index) in items">
                    <div class="weui_cell_hd meixian_self_item city_qd_item check_item goods_checkbox_item" alt="1">
                        <input type="checkbox" class="shoppting-checkbox" v-bind:checked="shouldCheck" name="rec_id[]" v-bind:value="item.goodsId">
                    </div>
                    <div class="li_warp">
                        <router-link to="/detail"> <img v-bind:src="item.goodsImg" alt=""></router-link>
                        <p class="goods_name"><router-link to="/detail">{{item.goodsName}}</router-link></p>
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
            <router-link to="/checkout" class="jump_part">
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
import {getCarts} from '../../api/cart'
    export default {
        data () {
            return {
             model: {
                    goodsId:'',
                },
                items: [ ],
                show:false,
                showVariable:false,
                state:'warning',
                sumPrice:'375.00',
                sumNum:43,
                shouldCheck:'checked'
            }
        },
         beforeMount(){
            getCarts(this.$router.currentRoute.params.id).then(value => {
                this.items = value
              })
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
                this.show = false

            },
            cancel() {
                this.show = false
            },
            add:function(index) {
                let n = this.items[index].goodsNum
                if(n<20){
                    n++
                }
                else{
                    n=20
                    this.showVariable = false
                    this.showVariable = true
                }
                this.items[index].goodsNum = n
                let N = 0
                let P = 0
                for(let i=0;i<this.items.length;i++){
                    if(this.shouldCheck=='checked'){
                      N += parseInt(this.items[i].goodsNum);
                    }
                }
                for(let i=0;i<this.items.length;i++){
                    if(this.shouldCheck=='checked'){
                    P += parseFloat(this.items[i].goodsNum)*parseFloat(this.items[i].goodsPrice);
                    }
                }
                 this.sumNum = N
                 this.sumPrice = P.toFixed(2)
            },
             reduce:function(index) {
                let n = this.items[index].goodsNum
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
                let N = 0
                let P = 0
                for(let i=0;i<this.items.length;i++){
                    N += parseInt(this.items[i].goodsNum)
                }
                for(let i=0;i<this.items.length;i++){
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
            padding-left 10px
            padding-top 20px
            .weui_cell_hd
                margin-top 1.5em
                margin-left 10px
                margin-right 10px
                float left
        .cart_title
            float left
            font-size 20px
            font-weight bold
            margin-left 10px
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
                    line-height 16px
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
                vertical-align middle
                margin-right 0.5rem
                margin-top 10px
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
    .shoppting-checkbox
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
    .shoppting-checkbox:checked
        background url(/static/images/checkbox.png) no-repeat 0px 2px
        outline none
        border none
</style>