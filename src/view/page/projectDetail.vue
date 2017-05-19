
<template>
  <div class="hello">
    <div class="container">

        <div style="height:10px;"></div> 
        
        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center":style="'color:#'+projectData.PRO_COLOR+';'"><i class="material-icons large">assignment</i>{{projectData.PRO_NAME}}</a>
          </div>
        </nav>  

      <div class="card grey lighten-5 " style="padding:10px;">
        <div class="row">

          <div class="col s12 m12 l12">
            <projectInfo :projectData="projectData">
            </projectInfo>
          </div>

          <div class="col s12 m12 l12">
            <ckList :projectData="projectData"
                    v-on:checkAddActio="setProgress"
                    v-on:checkDeleteAction="setProgress"
                    v-on:checkAction="setProgress">
            </ckList>       
          </div>   

          <div class="col s12 l12">
            <logList :projectData="projectData">
            </logList>                   
          </div>             
      
        </div>
      </div>

    </div>
  </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'projectDetail',
  components: {
    'projectInfo': () => import('../components/pd_projectInfo'),
    'ckList': () => import('../components/pd_ckList'),
    'logList': () => import('../components/pd_logList')      
  },
  data () {
    return {
        projectData : { }     
        ,projectId: this.$route.params.projectId
        ,logCurrentCount:1
        ,limit:10
    }
  }
  ,methods : {
              setProgress : function(progress){          
                this.projectData.PRO_PROGRESS = progress;
              }
     
          } //methods end  

  // mounted == document ready 
  ,mounted : function(){    


    /* ----------------------------------------------
    * 프로젝트ID로 프로젝트 상세정보, 로그, 체크리스트 가져오기
    */ 
    var projectInfo = 
          $.ajax({
            url:context.hostUrl+'/projectDetailData',
            async:false,
            type:'post',
            data:{"proId":this.projectId},
            dataType : "json",
            success : function(data){ },
            error : function(err){ console.log(err); }
          });   


      //가져온 상세정보 세팅
      this.projectData=projectInfo.responseJSON;


   } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
