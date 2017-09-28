<template>
  <div>
     关于额
    <hr>
    <ul class="nav">
      <!--<router-link to="/about" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link>-->
      <router-link :to="{name: 'about'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name: 'work'}" tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name: 'hobby'}" tag="li">
        <a>hobby</a>
      </router-link>

    </ul>
    <hr>
    <router-view name="slider"></router-view>
    <router-view class="center"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style >

</style>
