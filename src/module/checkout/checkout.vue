<script src="../../components/popup/index.js"></script>
<template>
  <div class="checkout">
    <div class="buyer_info" @click="Popup()"></div>
    <popup title="选项" :show.sync="show" @ok="ok(model)" @cancel="cancel"  cancelText="取消" okText="确定">
    </popup>

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
                    addressInfo:''
                },
                items: [
                    {goodsId: '795337',goodsName: '辣西西里 意大利面#5面条 意大利进口 3千克/袋 4袋/箱',goodsUnit:'单袋',goodsPrice:'37.40',goodsNum:'3',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'},
                    {goodsId: '795337',goodsName: '蒜米 去皮蒜瓣 蒜头 无公害 ',goodsUnit:'单斤',goodsPrice:'8.10',goodsNum:'19',goodsImg:'../../../static/images/289_P_1451863294067.jpg',goodsUrl:'goods.php?id=795337'}
                ],
                show:false

            }
        },
        methods: {
            Popup:function(){
                this.show = true
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
            popup
        }
    }
</script>



<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import url('../../assets/css/bootstrap.min.css');
  .checkout
    overflow hidden
    z-index 2
    .buyer_info {
      width: 100%;
      height: 6.04em;
      background-color: #1eaa39;
    }
</style>