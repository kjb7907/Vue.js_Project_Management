
<template>
  <div class="hello">
    <div class="container">

    

        <div style="height:10px;"></div>    

        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">assignment</i>프로젝트 목록</a>
          </div>
        </nav>  

      <div class="card grey lighten-5 " style="padding:10px;">
        <div class="row">

          <div class="col s6 m3">
            <div class="card"style="height:200px;">
            
              <div>
                <div class="center-align">
                  <router-link to="/projectAdd"><i class="material-icons large"style="margin-top:50px;color:#41B883;cursor:Pointer;">add</i></router-link>
                </div>
              </div>    
                          
            </div>
          </div>               

          <template v-for="project in projectListData">

            <router-link :to="'/projectDetail/'+project.PRO_ID" style="color:#4C4C4C">
              <div class="col s6 m3">
                <div class="card"style="min-height:200px;">

                  <div class="flow-text">
                    <div class="center-align" style="font-size:10pt;padding-top:40px;" >
                      
                      <!-- 진행률 100퍼시 마감 -->
                      <div v-if="project.PRO_PROGRESS==100" style="font-size:13pt;color:#ef5350;"><b>프로젝트 마감</b></div>
                      <div v-if="project.PRO_PROGRESS<100" style="font-size:13pt;color:#41B883;"><b>진 행 중</b></div>
                      
                      <!-- 프로젝트명 -->
                      <div style="font-size:16pt;"><i class="material-icons" :style="'color:#'+project.PRO_COLOR">description</i>{{project.PRO_NAME}}</div>          

                      <!-- 진행률 -->
                      <div>프로젝트 진행율: {{project.PRO_PROGRESS}}%
                        <div class="progress container" style="height:10px;">
                          <div class="determinate" :style="'width:' +project.PRO_PROGRESS+'%;background-color:#'+project.PRO_COLOR+';'"></div>
                        </div>                  
                      </div>

                      <!-- 프로젝트 시작일 -->
                      <div>시작일:{{project.PRO_START_DATE}}</div>

                      <!-- 수정 삭제 -->                                    
                      <div style="position:absolute;top:85%;left:70%">
                        <router-link :to="'/projectModify/'+project.PRO_ID"><a :style="'color:#'+project.PRO_COLOR+';'">수정</a></router-link>
                      </div>

                    </div>
                  </div>   

                </div>
              </div>   
            </router-link>                

          </template>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

var context = require('../../context.js');


export default {

  name: 'projectList',
  components: {
    
  }
  ,data () {
    return {
      projectListData : []
    }
  }
  ,mounted : function(){

    /* ----------------------------------------------
    * 프로젝트 리스트 초기값 가져오기
    */
    var initProjectList = 
          $.ajax({
              url:context.hostUrl+'/projectListData',
              async:false,
              type:'get',
              dataType : "json",
              success : function(data){ 

              },
              error : function(err){
                console.log(err);
              }
          });
    //프로젝트 리스트에 바인딩
    this.projectListData = initProjectList.responseJSON;

  } //mounted end

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
