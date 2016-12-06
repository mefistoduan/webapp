<template>
    <div class="brands">
        <div class="header">
        </div>

        <ul class="wap_brand">
            <li v-for="item in items">
                <p class="new-tit new-p-re">
                    <span class="new-txt"> 段长鹏</span>
                    <span class="new-txt-rd2">15253135699</span>
		        <span class="new-txt-rd2 new-option-r"><span class="new-icon2"></span>
		        <a href="address.php?act=default_address&amp;id=5370">设为默认地址</a></span>
                </p>
            </li>
            <li @click='ok'>
                添加新地址
            </li>
        </ul>
        <modal title="123" :show.sync="show" @ok="ok">
            123
        </modal>
        <div class="bottom">
        </div>
    </div>
    </div>
</template>

<script>
    import Modal from '../../components/modal/modal.vue'
    export default {
        data() {
            return {
                items: [
                    {addressName: 'pizza',addressTel:'15253135699',addressInfo:'山东济南历下区玉兰广场3号楼606' },
                    {addressName: 'spaghetti',addressTel:'15253135699',addressInfo:'山东泰安泰山区泰山路11号' },
                    {addressName: 'pasta',addressTel:'15253135699',addressInfo:'山东淄博张店区海盛水产市场：金晶大道与联通路交叉南100米（金晶大道239）' },
                    {addressName: 'pasta',addressTel:'15253135699',addressInfo:'黑龙江哈尔滨通河县一个冬天冻得人想哭的城市15253135699' },
                ]
            }

        },
        methods : {
            ok() {
                this.show = false
            }
        },
        components: {
            Modal
        }

    }
</script>


<style lang="stylus" scoped>
    @import url('../../assets/css/bootstrap.min.css');
    body
        padding-top 5px
    my-modal
        display none
    .wap_brand
        width 100%
        list-style none
        margin 0 auto
        padding 0
        overflow hidden
        padding-bottom 20px
        li
            width 50%
            padding 10px 0 0
            float left
            div
                width 90%
                height 9em
                padding 5px
                margin 0 auto
                border 1px solid #ccc
                -webkit-border-radius 10px 5px
                text-align center
                a
                    margin 0
                    width 100%
                    display block
                    color #999
                    text-align center
                    font-size 20px
            img
                width 100%
                margin 0 auto
            .b-name a
                border-top 1px solid #ccc


</style>