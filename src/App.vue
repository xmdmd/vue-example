<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <!--<a href="/home">home</a>--><!--直接用a标签是跳转页面-->
        <router-link :to="index" tag="li" event="click">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link><!--可以制作单页面应用，不刷新页面-->
        <li>
          <router-link :to="{path:'/document#abc'}" active-class="activeClass" event="click">document</router-link>
          <!--<a href="/document">document</a>-->
        </li>
        <li>
          <router-link to="/about" event="click">about</router-link>
         <!-- <a href="/about">about</a>-->
        </li>
        <li>
          <router-link to="/user/tip/1" event="click">user</router-link>
        </li>
      </ul>
    </div>
    <router-view name="slider" ></router-view>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/home'
    }
  }
}
</script>

<style>
</style>
