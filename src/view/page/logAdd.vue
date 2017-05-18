
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
                  <input id="logAddWriter" type="text" class="validate">
                  <label for="first_name">작성자명</label>
                </div>

                <div class="input-field col s6">
                  <select id="logAddProId" class="browser-default">
                    <option value="" disabled selected>분류</option> 
                    <template v-for="project in projectData">
                      <option :value="project.PRO_ID">{{project.PRO_NAME}}</option>
                    </template>
                  </select>
                </div>

              </div>

              <div class="row">
                <div class="input-field col s12">
                  <textarea id="logAddDetail" class="materialize-textarea"></textarea>
                  <label for="textarea1">본문</label>
                </div>
              </div>

              <div class="row">

                <div class="col s12 l4">
                  <input id="logAddMemberKey" type="password" placeholder="MEMBERKEY">
                </div>

                <div class="col s12 l6">
                  <input @click="logAddAction" type="button" class="waves-effect waves-light btn-large" value="등록" style="background-color:#41B883">             
                  <router-link to="/logList"><a class="waves-effect waves-light btn-large" style="background-color:#41B883">취소</a></router-link>                     
                </div>

              </div>

            </form>
          </div>           
        </div>

    </div>
  </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'name',

  components: {
    
  },

  data () {
    return {
      projectData : ''
      
    }
  }

  ,methods : {  

    //로그 등록
    logAddAction : function(){
      if($('#logAddMemberKey').val() == context.memberKey){
        let logAddAction =
        $.ajax({
          url:context.hostUrl+'/projectLogAdd',
          async:false,
          type:'post',
          data:{proId:$('#logAddProId').val(),logWriter:$('#logAddWriter').val(),logDetail:$('#logAddDetail').val()},
          dataType : "json",
          success : function(data){ },
          error : function(err){ console.log(err); }
        });  

        this.$router.push('/logList');
        Materialize.toast('로그가 등록되었습니다..!', 4000);
      }else {
        Materialize.toast('멤버키 불일치.!', 4000);
      }

    }
    ,
  } //methods end  

  // mounted == document ready 
  ,mounted : function(){ 

    //init projectData
    let initProjectData =
      $.ajax({
        url:context.hostUrl+'/searchLogProject',
        async:false,
        type:'post',
        data:{ },
        dataType : "json",
        success : function(data){ },
        error : function(err){ console.log(err); }
      });     

      this.projectData=initProjectData.responseJSON;

  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
