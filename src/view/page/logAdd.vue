
<template>
  <div class="hello">
    <div class="container">

        <div style="height:10px;"></div>    

        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">add</i>로그 등록</a>
          </div>
        </nav> 

        <div class="card" style="padding:20px;">
          <div class="row">
            <form class="col s12">

              <div class="row">

                <div class="input-field col s6">
                  <input id="first_name" type="text" class="validate">
                  <label for="first_name">작성자명</label>
                </div>

                <div class="input-field col s6">
                  <select class="browser-default">
                    <option value="" disabled selected>분류</option> 
                    <option value="1">프로젝트 1</option>
                    <option value="2">프로젝트 2</option>
                    <option value="3">프로젝트 3</option>
                  </select>
                </div>

              </div>

              <div class="row">
                <div class="input-field col s12">
                  <textarea id="textarea1" class="materialize-textarea"></textarea>
                  <label for="textarea1">Textarea</label>
                </div>
              </div>

              <div style="text-align:center;">
                <a class="waves-effect waves-light btn-large" style="background-color:#41B883">등록</a>             
                <router-link to="/logList"><a class="waves-effect waves-light btn-large" style="background-color:#41B883">취소</a></router-link>     
              </div>

            </form>
          </div>           
        </div>

    </div>
  </div>
</template>

<script>

export default {

  name: 'hello',
  components: {
    
  },
  data () {
    return {
      msg: 'index'
    }
  }

  ,methods :{

  }

  ,mounted :function(){

    $('#textarea1').trigger('autoresize');        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
