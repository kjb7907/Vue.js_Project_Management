
<template>
  <div class="hello">
    <div class="container">

        <div style="height:10px;"></div> 
        
        <nav class="nav-extended" :style="'background-color:#'+projectData.PRO_COLOR+';'">
          <div class="nav-wrapper">
            <a class="brand-logo center"><i class="material-icons large">assignment</i>{{projectData.PRO_NAME}}</a>
            
          <ul class="right ">
            <li>
              <router-link :to="'/projectModify/'+projectData.PRO_ID"><a><i class="material-icons left">settings</i>수정</a></router-link>            
            </li>
          </ul>     

          <ul class="left ">
            <li>
              <router-link to="/projectList"><a><i class="material-icons left" style="transform: rotate(180deg)">trending_flat</i></a></router-link>            
            </li>
          </ul>   

          </div>

          <div class="nav-content">
            <ul class="tabs tabs-transparent"id="tabs-swipe-demo">
              <li class="tab"><a class="active" href="#tab1">프로젝트 정보</a></li>
              <li class="tab"><a href="#tab2">작업 목록</a></li>
              <li class="tab"><a href="#tab3">로그</a></li>
            </ul>
          </div>    

        </nav>  

      <div class="card grey lighten-5 " style="padding:10px;">

        <!-- 탭 1 프로젝트 정보-->
        <div id="tab1" class="col s12">
          <div class="col s12 m12 l12">
            <projectInfo :projectData="projectData">
            </projectInfo>
          </div>        
        </div>

        <!-- 탭 2 체크리스트-->
        <div id="tab2" class="col s12">
          <div class="col s12 m12 l12">
            <ckList :projectData="projectData"
                    v-on:checkAddActio="setProgress"
                    v-on:checkDeleteAction="setProgress"
                    v-on:checkAction="setProgress">
            </ckList>       
          </div>           
        </div>

        <!-- 탭 3 로그-->
        <div id="tab3" class="col s12">
          <div class="col s12 l12">
            <logList :projectData="projectData">
            </logList>                   
          </div>                     
        </div>


        <div class="row">


        
      
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

      $('ul.tabs').tabs();

   } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
