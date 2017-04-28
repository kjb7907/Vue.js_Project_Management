<template>
  <div id="app">
    <nav class="nav-extended"style="background-color:#35495E ;">
      <div class="nav-wrapper container">
        <router-link to="/"><a href="#" class="brand-logo"><img src="../../assets/logo.png" style="height:60px"class="left">Title</a></router-link>

        <ul id="nav-mobile" class="right hide-on-med-and-down">

          <li><router-link to="/projectList"><i class="material-icons left">description</i></router-link></li>     
          <li><router-link to="/logList"><i class="material-icons left">chat</i></router-link></li>
          <li><router-link to="/schedule"><i class="material-icons left">today</i></router-link></li>

          <li>
            <a  data-activates="slide-out" class="sideBtn">
              <i class="material-icons left">menu</i>
            </a>
          </li>                    

        </ul>
      </div>

    </nav>

    <ul id="slide-out" class="side-nav">

      <li><a><i class="material-icons">list</i>side navi</a></li>
      <li><a><b>list Title</b></a></li>
      <li><a>example1</a></li>
      <li><a>example2</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader"><b>list Title</b></a></li>
    </ul>

  </div>
</template>

<script>

  $(document).ready(function(){
    //사이드네비 슬라이더
    $(".sideBtn").sideNav();
  });

export default {
  name: 'topNaviMenu'
}
</script>

<style>

</style>
