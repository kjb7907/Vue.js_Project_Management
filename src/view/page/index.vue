
<template>
  <div class="hello">
    <div class="container">
      <div class="row">

        <div style="height:10px;"></div>

        <div class="col s4">
      

            <ul class="collection with-header card">
              <router-link to="/projectList">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">description</i>
                  <div>프로젝트</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>
              <li class="collection-item">example1</li>
            </ul>         

        </div>

        <div class="col s4">


            <ul class="collection with-header card">
              <router-link to="/logList">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">chat</i>
                  <div>로그</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>
              <li class="collection-item">example1</li>
            </ul>      

        </div>

        <div class="col s4">


            <ul class="collection with-header card">
              <router-link to="/schedule">
                <div style="text-align:center;color:#41B883">
                  <i class="large material-icons">today</i>
                  <div>일정</div>      
                </div>
                <li class="collection-header"></li>
              </router-link>
              <li class="collection-item">example1</li>
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
