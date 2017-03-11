<template>
    <div class="test2">
        <div class="header">
        </div>
        <div class="carouselContainer">
            <swipe class="my-swipe">
                <swipe-item class="slide1">1</swipe-item>
                <swipe-item class="slide2">2</swipe-item>
                <swipe-item class="slide3">3</swipe-item>
            </swipe>
        </div>
        <div class="bottom" @click="see(alert)">
        </div>
    </div>
    </div>
</template>

<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';

    const vueSwipe = VueSwipe.Swipe;
    const vueSwipeItem = VueSwipe.SwipeItem;

    export default {
        data() {
            return {
                items: [
                    {text: '麦肯',brandsImg:'static/images/289_P_1451863294067.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2143_P_1449091000718.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2401_P_1460653361322.jpg' },
                    {text: '麦肯',brandsImg:'static/images/2724_P_1470597064231.jpg' }
                ],
            }

        },
        methods: {
        },
        components: {
            'swipe': vueSwipe,
            'swipe-item': vueSwipeItem
        }
    }
</script>


<style scoped>
      .my-swipe {
          height: 200px;
          color: #fff;
          font-size: 30px;
          text-align: center;
      }

    .slide1 {
        background-color: #0089dc;
        color: #fff;
    }

    .slide2 {
        background-color: #ffd705;
        color: #000;
    }

    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }


</style>