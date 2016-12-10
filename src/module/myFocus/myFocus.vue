<template>
    <div class="brands">
        <div class="header">
        </div>
        <ul>
            <li>
                <a href='#'>
                <div class="pic-div"><img
                        src="//m.360buyimg.com/n4/s258x258_jfs/t2011/113/969828986/452463/d7d58ac4/56396ea2Nd7c14340.jpg!q70.jpg">
                </div>
                <div class="prolist-content">
                    <div class="prolist-name"><span>学习JavaScript数据结构与算法</span></div>
                    <div class="pro-price"><em>¥<span class="big-price">37.</span><span
                            class="small-price">10</span></em></div>
                    <div class="discount-info"></div>
                    <div class="buttons cf">
                        <span class="cancle-btn J_ping">取消关注</span>
                        <i class="car-btn"></i>
                    </div>
                </div>
                 </a>
            </li>
        </ul>
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
        ul,li
            margin 0
            padding 0
            list-style none

</style>