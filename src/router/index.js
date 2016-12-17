import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
import test from '../module/test/test.vue'
import detail from '../module/detail/detail.vue'
import cart from '../module/cart/cart.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/AddressList',
      component: AddressList,
      children: [
        { path : '', redirect: '/AddressList/all'},
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
    { path: '/test', component: test },
    { path: '/detail', component: detail },
    { path: '/cart', component: cart },
    { path: '/AddressList', redirect: '/AddressList' },
    { path: '/topic-verify', component: topicVerify }
  ]
})
