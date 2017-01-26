require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
import addressList from './modules/addressList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsOrdNum: 0
  },
  mutations: {
    inc: state => state.goodsOrdNum++,
    dec: state => state.goodsOrdNum--
  },
  modules : {
    addressList
  }
})