import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../module/index/App.vue'
import About from '../module/about/about.vue'
import AddressList from '../module/addressList/index.vue'
import createListView from '../module/addressList/CreateListView.js'
import addAddressList from '../module/addressList/add.vue'
import infoAddressList from '../module/addressList/info.vue'
import brands from '../module/brands/brands.vue'
import address from '../module/address/address.vue'
import coupon from '../module/coupon/coupon.vue'
import myFocus from '../module/myFocus/myFocus.vue'
import topicVerify from '../module/topic/topic-verify.vue'
import topicLoan from '../module/topic/topic-loan.vue'
import help from '../module/topic/help.vue'
import detail from '../module/detail/detail.vue'
import cart from '../module/cart/cart.vue'
import test from '../module/test/test.vue'
import test2 from '../module/test/test2.vue'
import testajax from '../module/test/testajax.vue'
import finish from '../module/finish/finish.vue'
import category from '../module/category/category.vue'
import favourable from '../module/favourable/favourable.vue'
import example from '../module/example/example.vue'
import orderlist from '../module/orderlist/orderlist.vue'
import orderdetail from '../module/orderdetail/orderdetail.vue'
import checkout from '../module/checkout/checkout.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '',
      component: index,
      children: [
        { path : '', component: index},
        { path : '/AddressList/all',component: createListView('all') },
        { path : '/AddressList/favorite',component: createListView('favorite') },
        { path : '/AddressList/add',component: addAddressList },
        { path : '/AddressList/all/:id(\\d+)', component: infoAddressList},
        { path : '/AddressList/favorite/:id(\\d+)', component: infoAddressList}
      ]
    },
    { path: '/brands',component: brands  },
    { path: '/About', component: About },
    { path: '/address', component: address },
    { path: '/coupon', component: coupon },
    { path: '/myFocus', component: myFocus },
    { path: '/help', component: help },
    { path: '/topicLoan', component: topicLoan },
    { path: '/detail', component: detail },
    { path: '/cart', component: cart },
    { path: '/checkout', component: checkout },
    { path: '/test', component: test },
    { path: '/test2', component: test2 },
    { path: '/testajax', component: testajax },
    { path: '/finish', component: finish },
    { path: '/category', component: category },
    { path: '/favourable', component: favourable },
    { path: '/example', component: example },
    { path: '/orderlist', component: orderlist},
    { path: '/orderdetail', component: orderdetail},
    { path: '/AddressList', redirect: '/AddressList' },
    { path: '/topic-verify', component: topicVerify }
  ]
})
