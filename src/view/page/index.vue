
<template>
  <div class="hello">
    <div class="container">
      <div class="row">

        <div style="height:10px;"></div>

        <div class="col s6 l4">
      

            <ul class="collection with-header card">
              <router-link to="/projectList">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">description</i>
                  <div>프로젝트 관리</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>

            </ul>         

        </div>

        <div class="col s6 l4">


            <ul class="collection with-header card">
              <router-link to="/logList">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">chat</i>
                  <div>전체 프로젝트 로그</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>

            </ul>      

        </div>

        <div class="col s6 l4">


            <ul class="collection with-header card">
              <router-link to="/schedule">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">today</i>
                  <div>일정 관리</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>

            </ul>         

        </div>         

        <div class="col s6 l4">


            <ul class="collection with-header card">
              <router-link to="/">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">picture_in_picture</i>
                  <div>프로젝트 모니터링(준비중)</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>

            </ul>         

        </div>  

        <div class="col s6 l4">


            <ul class="collection with-header card">
              <router-link to="/">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">dns</i>
                  <div>자료실(준비중)</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>

            </ul>         

        </div>          



      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'index',
  components: {
    
  },
  data () {
    return {
      msg: 'index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
