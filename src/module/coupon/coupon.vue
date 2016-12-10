<template>
    <div class="brands">
        <div class="header">
        </div>
        <div class="pepper-con" >
            <div class="pepper-w"   v-for="item in items">
                <div class="pepper" v-bind:class="item.typeColor" >
                    <div class="pepper-l">
                        <p class="pepper-l-num">
                            <i>¥</i><span> {{item.saleNum}}</span><i>.00</i>（满{{item.sumNum}}.00可用）
                        </p>
                        <p class="pepper-l-con">使用范围：{{item.scope}}</p>
                    </div>
                    <div class="pepper-r">
                        <span>{{item.type}}</span>
                        <div>
                            {{item.startData}}
                            <p class="pepper-line">~</p>
                            {{item.endDate}}
                        </div>
                        <i class="right-arrow"></i>
                    </div>
                </div>
                <div class="pepper-b" v-bind:class="item.typeColor">
                    <div class="pb-con"></div>
                    <div class="pb-border"></div>
                </div>
            </div>
        </div>

        <div class="bottom">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    saleNum:'',
                    sumNum:'',
                    type:'',
                    typeColor:'',
                    startData:'',
                    endDate:''
                },
                items: [
                    {saleNum: '20',sumNum:'300',scope:'芝士类产品除外',type:'全场通用',typeColor:'pepper-blue',startData:' 2016.12.05',endDate:' 2016.12.12' },
                    {saleNum: '40',sumNum:'500',scope:'芝士类产品除外',type:'双12大促',typeColor:'pepper-red',startData:' 2016.12.05',endDate:' 2016.12.12' },
                    {saleNum: '2',sumNum:'50',scope:'芝士类产品除外',type:'新客户专享',typeColor:'pepper-blue',startData:' 2016.11.05',endDate:' 2016.12.12' },
                    {saleNum: '11',sumNum:'200',scope:'仅限抄码产品使用',type:'抄码专用',typeColor:'pepper-yellow',startData:' 2016.12.05',endDate:' 2016.12.12' },
                    {saleNum: '200',sumNum:'1200',scope:'仅限餐厅级用户使用',type:'餐厅专享',typeColor:'pepper-blue',startData:' 2016.12.05',endDate:' 2016.12.12' },
                    {saleNum: '60',sumNum:'310',scope:'芝士类产品除外',type:'已过期',typeColor:'pepper-gary',startData:' 2016.11.05',endDate:' 2016.11.12' },
                    {saleNum: '20',sumNum:'30',scope:'仅限济南地区使用',type:'济南专享',typeColor:'pepper-blue',startData:' 2016.12.05',endDate:' 2016.12.12' },
                    {saleNum: '20',sumNum:'0',scope:'抄码产品除外',type:'邮费抵扣',typeColor:'pepper-green',startData:' 2016.12.05',endDate:' 2016.12.12' },
                ],
            }

        },

        components: {
        }

    }
</script>


<style lang="stylus" scoped>
    body
        padding-top 5px
    .pepper-w
        width 95%
        margin 0 auto
        position relative
        .pepper
            width 100%
            overflow hidden
            margin-top 1em
            color #686868
            border 1px solid #bfbfbf
            border-bottom 0
            background #fff
            .pepper-l
                float left
                width 70%
                box-shadow 2px 2px 4px #f5f5f5
                position relative
                padding-bottom 10px
                padding-left 0.4em
                .pepper-l-num
                    font-size 12px
                    border-bottom 1px solid #dddddd
                    border-right 10px solid #fff
                    font-weight bold
                    font-family verdana
                    i
                        font-size 21px

                    span
                        display inline-block
                        padding-bottom 6px
                        padding-top 10px
                        font-size 35px
                        font-weight bold
                        font-family verdana
                .pepper-l-con
                    font-size 12px
                    padding-top 6px
                    line-height 16px
            .pepper-r
                font-size 13px
                float left
                width 30%
                height 100%
                text-align center
                span
                    display block
                    padding 0.2em 18px 0.2em 0
                    margin 10px auto 5px
                    background #fff
                    text-align center
                    font-family '微软雅黑'
                    font-size 14px
                div
                    display inline-block
                    vertical-align top
        .pb-con
            color #fff
            min-height 8px
            padding 7px 0 6px 8px
            font-size 12px
        .pepper-blue
            .pepper-l-num
                  color #46c6c9
            .pb-con
                  background #74d2d4
        .pepper-red
            .pepper-l-num
                color #ed4e51
            .pb-con
                background #ed4e51
        .pepper-yellow
            .pepper-l-num
                color #FDDD00
            .pb-con
                background #FDDD00
        .pepper-green
            .pepper-l-num
                color #1eaa39
            .pb-con
                background #1eaa39
        .pepper-gary
            .pepper-l-num
                color #999
            .pb-con
                background #999
</style>