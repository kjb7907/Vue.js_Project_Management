
<template>
  <div class="hello">
    <div class="container">

        <div style="height:10px;"></div>    

        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">add</i>프로젝트 등록</a>
          </div>
        </nav> 

        <div class="row">
          <div class="col s12">
            <form>

              <div class="card" style="padding:20px;">      
                <div class="row">
                  <div class="col s3">
                    프로젝트명
                  </div>                
                  <div class="col s3">
                    시작일
                  </div>
                  <div class="col s3">
                    종료일
                  </div>                  
                </div>  

                <div class="row">
                  <div class="col s3">
                    <input type="text">
                  </div>                
                  <div class="col s3">
                    <input type="date" class="datepicker">
                  </div>
                  <div class="col s3">
                    <input type="date" class="datepicker">
                  </div> 

                  <div class="col s3">
                    <a class="waves-effect waves-light btn-large" style="background-color:#41B883">등록</a>                  
                  </div>

                </div> 

              </div>
            </form>
          </div>
        </div>        
         
    </div>
  </div>
</template>

<script>

export default {

  name: 'projectAdd',
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
