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
    import Modal from '../../components/modal/modal.vue'
    export default {
        data() {
            return {
                model: {
                    addressName:'',
                    addressTel:'',
                    addressInfo:''
                },
                items: [
                    {addressName: 'pizza',addressTel:'15253135699',addressInfo:'山东济南历下区玉兰广场3号楼606' },
                    {addressName: 'spaghetti',addressTel:'15253135699',addressInfo:'山东泰安泰山区泰山路11号' },
                    {addressName: 'pasta',addressTel:'15253135699',addressInfo:'山东淄博张店区海盛水产市场：金晶大道与联通路交叉南100米（金晶大道239）' },
                    {addressName: 'carpaccio',addressTel:'15253135699',addressInfo:'黑龙江哈尔滨通河县一个冬天冻得人想哭的城市15253135699' },
                    {addressName: 'lasagne',addressTel:'15253135699',addressInfo:'山东省 济南市 历下区 文东街道 文化东路38-1号4号楼' },
                    {addressName: 'risotto',addressTel:'18660809824',addressInfo:'山东省 济南市 历下区 解放路1-7号喜士多便利店' },
                    {addressName: 'tagliatelle',addressTel:'15562697669',addressInfo:'山东省 济南市 历下区 甸新北路11号凝萌织坊' },
                    {addressName: 'sformato',addressTel:'13011740566',addressInfo:'大鹏房产联通营业厅' }
                ],
                selected: 0,
                show:false
            }

        },

        methods : {
            choose:function (index) {
                this.selected = index
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
                p
                    width 100%
                    padding-top 0.5em
                    padding-left 1em
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
        .btn
            width 100%
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