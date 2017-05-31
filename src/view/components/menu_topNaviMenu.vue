<template>
  <div id="app">
    <div class="navbar-fixed">

      <nav style="background-color:#35495E ;">
      
        <div class="nav-wrapper container">
          <router-link to="/"><a href="#" class="brand-logo"><img src="../../assets/logo.png" style="margin-top:5px;"></a></router-link>

          <ul id="nav-mobile" class="right hide-on-med-and-down">

            <li><router-link to="/projectList"><i class="material-icons left">description</i></router-link></li>     
            <li><router-link to="/logList"><i class="material-icons left">chat</i></router-link></li>
            <li><router-link to="/schedule"><i class="material-icons left">today</i></router-link></li>
                 

          </ul>


          <a data-activates="nav-mobile1" class="button-collapse sideBtn"><i class="material-icons">menu</i></a>

        </div>

      </nav>

    </div>

    <!-- 모바일 네비바 -->
    <ul id="nav-mobile1" class="side-nav">
      <li><router-link to="/projectList">프로젝트 목록</router-link></li>     
      <li><router-link to="/logList">로그</router-link></li>
      <li><router-link to="/schedule">일정</router-link></li> 
    </ul>            



  </div>
</template>

<script>

  $(document).ready(function(){
    //사이드네비 슬라이더
    $(".sideBtn").sideNav();

    $('li').click(function(){ 
      $(".sideBtn").sideNav('hide');  
    });
    
  });

export default {
  name: 'topNaviMenu'
}
</script>

<style>

</style>
