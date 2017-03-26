<template>
    <div class="brands">
        <div class="header">
        </div>
        <ul class="address_ul" >
            <li v-for="(item,index) in items" v-bind:class="{active:index === selected}" class="tab-link" @click="choose(index)">
                <div class="lt">
                    <p>
                        <span>收货人：<i>{{item.addressName}}</i></span>
                        <s class="tel">{{item.addressTel}}</s>
                    </p>
                    <p class="address_detail">
                        {{item.addressInfo}}
                    </p>
                </div>
                <div class="rt">
                    <s @click="deleteIt(index)">X</s>
                </div>
            </li>
        </ul>
        <button @click='address' class="btn btn-success">
            添加新地址
        </button>
        <modal title="添加新地址" :show.sync="show" @ok="ok(model)" @cancel="cancel" cancelText="取消" okText="确定">
            <input type="text" class="add_name form-control " v-model="model.addressName" placeholder="姓名">
            <input type="text" class="add_tel form-control" v-model="model.addressTel" placeholder="电话">
            <input type="text" class="add_address form-control" v-model="model.addressInfo" placeholder='详细地址'>
        </modal>
        <div class="bottom">
        </div>
    </div>
</template>

<script>
import {getAddress} from '../../api/address'
import Modal from '../../components/modal/modal.vue'
    export default {
        data() {
            return {
                model: {
                    addressName:'',
                    addressTel:'',
                    addressInfo:''
                },
                items: [],
                selected: 0,
                show:false
            }

        },
        beforeMount(){
            getAddress(this.$router.currentRoute.params.id).then(value => {
                this.items = value
              })
            },
        methods : {
            choose:function (index) {
                this.selected = index
            },
            deleteIt:function (index) {
                 this.items.splice(index, 1)
            },
            address() {
                this.show = true
            },
            ok(model) {
                this.show = false
                this.items.push(model);
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
    body
        padding-top 5px
     .address_ul
         width 100%
         overflow hidden
         display block
         overflow scroll
         padding 0
         padding-bottom 30px
         margin 0
         margin-bottom 1em
         list-style none
         .active
            background-color #676F85!important
            color #fff
            .lt
                span
                    color #fff
                i
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
                p
                    width 100%
                    padding-top 0.5em
                    padding-left 1em
                    font-family Microsoft Yahei
                    font-size 1.2em
                    display block
                    float left
                span
                    overflow hidden
                    display block
                    i
                        float right
                        font-style normal
                        color #333
                        font-weight bold
                s
                    display block
                    text-decoration none
            .rt
                s
                    float right
                    margin-right 1em
                    text-decoration none
                    font-size 18px
                    text-align center

        .btn
            width 100%
            height 3em
            font-size 18px
            color #fff!important
            position fixed
            bottom 0
        .add_tel
            margin-top 10px
            margin-bottom 10px
        .form-control
            color #000
            font-weight bold


</style>