<template>
  <div id="app">
    <topNaviMenu></topNaviMenu>
    <floatingMenu></floatingMenu>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    'topNaviMenu': () => import('../module/topNaviMenu'),
    'floatingMenu': () => import('../module/floatingMenu')
  },
  show:true

}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}



@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
body{
  background-color: #f5f5f5;
  font-family: "NOTO", sans-serif;
  font-weight: NORMAL;
  font-size:10pt;
}

</style>
