<template>
  <div id="app">
    <headerlist></headerlist>
    <div class="container-fluid">
      <div class="row">
        <leftlist></leftlist>
        
        <!-- <rightlist></rightlist>这个是右边的内容，实际上应该是路由器容器放的地方-->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <transition name="tab">
        <router-view></router-view>
        </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerlist from "./components/header.vue";
import leftlist from "./components/leftlist.vue";
import rightlist from "./views/herolist/rightlist";


export default {
  components: {
    headerlist: headerlist,
    leftlist: leftlist,
    rightlist: rightlist,
  }
};
</script>

<style>
.tab-enter{
    opacity: 0;

}
.tab-enter-active{
  transition:all 2s
}
</style>
