<template>
  <div id="app">
    <div class="header">
      <div class="inner">
        <button class="logo btn btn-success btn-md" alt="logo" @click="showBar"><i class="glyphicon glyphicon-align-justify"></i></button>
        <div class=" col-xs-7 search_part">
          <span class="icon_question"><i class="glyphicon glyphicon-search"></i></span>
          <input type="text" class="search_content" placeholder="试试薯条">
          <input type="button" class="search_content_button" value="搜索">
        </div>
        <router-link to="/About"><button class="btn btn-success btn-md"><i class="glyphicon glyphicon-user"></i></button></router-link>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <vue-progress-bar></vue-progress-bar>
    <!--侧边栏-->
    <EgdSideBar :show-sidebar.sync="showSidebar"></EgdSideBar>
    <!--侧边栏遮罩层-->
    <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar"></div>
  </div>

</template>
<script>
import EgdSideBar from 'sidebar'
    export default {
      components: {
      EgdSideBar
        }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  body
    font-family Roboto, Helvetica, sans-serif
    font-size 15px
    margin 0
    padding-top 65px
  a
    color #34495e
    text-decoration none
  .header
    width 100%
    background-color #5cb85c
    position fixed
    z-index 5
    top 0
    left 0
    right 0
    .inner
      overflow hidden
      dislay block
      max-width 360px
      box-sizing border-box
      margin 3px auto
      z-index 2
 .search_part
    float left!important
    height 30px
    overflow hidden
    a
      color rgba(255, 255, 255, .8)
      line-height 24px
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      /*margin-right 1.8em*/
      &:hover
        color #fff
      &.router-link-active
        color #fff
        font-weight 400
      &:nth-child(6)
        margin-right 0
      float right
      line-height 30px
    .github
      color #fff
      font-size .9em
      margin 0
      float right
  img
      margin-top 3px
      margin-left 10px
  .logo
    margin-left 10px
    margin-right 10px
    display inline-block
    float left

  .view
    width  100%
    overflow hidden
    display block
    max-width 800px
    margin 0 auto
  .fade-enter-active, .fade-leave-active
    transition all .2s ease

  .fade-enter, .fade-leave-active
    opacity 0

  @media (max-width 860px)
    .header .inner
      padding 15px 0px

  @media (max-width 600px)
    body
      font-size 14px
    .header
      .inner
        pading 15px
        padding-left 1px
        padding-right 1px
      a
        margin-right 1em
      .github
        display none
  .sidebar-mask
    position: fixed
    transform: translateZ(0)
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 5
    background: rgba(0, 0, 0, 0.7)
.icon_question
    width 30px
    height 30px
    float left
    padding-left 8px
    padding-top 5px
    background-color #ddd
    float left
  i
    display block
.search_content
  width 55%
  height 30px
  border none
  line-height 30px
  text-align center
  margin 0
  padding 0
  float left
.search_content_button
  width 39px
  height 30px
  margin 0
  padding 0
  background-color #5cb85c
  color #fff
  outline none
  border 2px solid #fff
  float left
</style>
