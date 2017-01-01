<script src="../popup/index.js"></script>
<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="swiper-slide">
      <!--侧边栏头部-->
      <div class="sidebar-header">
          工具栏
      </div>
      <!--侧边栏列表-->
      <div class="sidebar-list">
        <ul class="menu-fixed-list" style="display: block;">
          <li class="fore01">
            <router-link to="/" class="jump_part">
              首页
            </router-link>
          </li>
          <li class="fore02">
            <router-link to="/category" class="jump_part">
              列表
            </router-link>
          </li>
          <li class="fore03">
            <router-link to="/About" class="jump_part">
              设置
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'egd-sidebar',
    componentName: 'egd-sidebar',
    props: ['showSidebar'],
    data () {
      return {
        list: []
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .show-sidebar{
    transform: translateX(240px);
    -webkit-transform: translateX(240px);
  }
  .sidebar-box{
    position: fixed;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 240px;
    left: -240px;
    z-index: 99;
    top: 0;
    bottom: 0;
    transition: all .3s ease;
    background: #fff;
    &.show-sidebar{
      transform: translateX(240px);
      -webkit-transform: translateX(240px);
    }
    .swiper-slide {
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
  .sidebar-box{
    .sidebar-header{
      padding: 15px;
      background: #5cb85c;
      color: #fff;
      font-weight: bold;
    }
  }
  .sidebar-list{
    padding-bottom: 20px;
    background: #f9f9f9;
    .menu-fixed-list {
    width: 100%;
    overflow: hidden;
      li{
        width: 100%;
        overflow: hidden;
        display: block;
        font-size:14px;
        padding-top: 5px;
        padding-bottom: 5px;
        a{
          width:  100%;
          height: 100%;
          display: block;
          text-align: center;
          color:#5cb85c;
        }

      }
    }
  }



</style>

