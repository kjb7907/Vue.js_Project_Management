
<template>
  <div class="hello">
    <div class="container">

        <div style="height:10px;"></div>    

        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">assignment</i>{{projectData.NAME}}</a>
          </div>
        </nav>  

      <div class="card grey lighten-5 " style="padding:10px;">
        <div class="row">

        <div class="col s12">
          <div class="card"style="text-align:center">
            <div class="row">
              <div class="col s4">
                <i class="large material-icons" style="color:#41B883">receipt</i>
                <div>시작일 : {{projectData.PRO_STARTDATE}}</div>
                <div>마감예정일 : {{projectData.PRO_CLOSEDATE}} </div>
              </div>
          
              <div class="col s4">
                <i class="large material-icons" style="color:#41B883">insert_chart</i>
                <div>프로젝트 진행율 : {{projectData.PRO_PROGRESS}}%</div>
                <div class="container">
                  <div class="progress" style="height:20px">
                      <div class="determinate" :style="'width:'+ projectData.PRO_PROGRESS+'%;background-color:#41B883'"></div>
                  </div>
                </div>           
              </div>                
            </div>    
          </div>
        </div>
        
        <div class="col s8">

          <div @scroll="logScroll()" id="logScroll" style="height:600px;overflow:auto">

            <div id="innerScroll" style="margin:5px;">
        
              <div class="card"style="text-align:center">
                <i class="material-icons" style="color:#41B883;position:relative;top:5px;">comment</i><span style="font-size:15pt;">로그</span>
              </div>

              <!-- 로그 등록 -->
              <div class="card">

                <!-- 로그 추가 버튼 -->
                <div v-if="formAdd" class="center-align">
                  <a @click="logAddForm()" style="cursor:Pointer;"><i class="material-icons medium"style="color:#41B883">add</i></a>
                </div>
                <!-- 로그 추가버튼 클릭시 -->
                <div v-else>
                
                  <form id="logAddForm" method="POST">
                    <div style="padding: 10px 20px 30px 20px;">

                      <div class="input-field">

                        <!-- 프로젝트 ID -->
                        <input name="proId"type="hidden" :value="projectData.PRO_ID">                          

                        <!-- 작성자 -->
                        <input name="logWriter" id="input_text" type="text" data-length="10" style="width:40%">
                        <label for="icon_prefix">작성자</label>
                  
                        <!-- 본문 -->
                        <div class="row">
                          <div class="input-field col s12">
                            <textarea name="logDetail" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea1">본문</label>
                          </div>
                        </div>                      
                                      
                      </div>


                      <button @click="logAddForm()"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">취소</button>                
                      <button @click="logAddAction()"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">확인</button> 

                    </div>                  
                  </form>            
                </div>              
              </div>    

              <!-- 로그 -->
              
              <div v-for="log in logData">
                <div id="logMemo">
                    <div class="card" style="width:100%;min-height:100px;">
                                              
                      <div class="row" :id="'memoKey'+log.LOG_ID" >

                        <!-- 로그 view-->                            
                        <div class="view log">

                          <!-- 작성자 -->
                          <span style="color:#424242;margin-left:10px;">{{log.LOG_WRITER}}</span>

                          <!-- 작성일 -->
                          <span style="float:right;color:#747474;">{{log.LOG_DATE}} &nbsp;</span>


                          <!-- 구분선 -->
                          <div class="divider" style="margin:10px;"></div>    

                          <!-- 본문 -->                                                  
                          <div class="col s12">
                            {{log.LOG_DETAIL}}
                          </div> 

                          <!-- 버튼 -->
                          <button @click="logDelForm(log.LOG_ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">삭제</button>    
                          <button @click="logModifyForm(log.LOG_ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">수정</button>                                

                        </div>

                        <!-- 로그 수정 폼 -->
                        <div class="edit log">
                          <form :id="'logModifyForm'+log.LOG_ID">
                            
                            <div class="row">

                              <!-- log id -->
                              <input name="logId"type="hidden" :value="log.LOG_ID">   
                              <!-- 작성자 -->
                              <div class="col s5">                        
                                <input name="logWriter"type="text" style="font-size:10pt;"v-bind:value="log.LOG_WRITER"/>                     
                              </div>
                              <!-- 본문 -->
                              <div class="input-field col s12">
                                <textarea  name="logDetail"class="materialize-textarea" data-length="120" style="font-size:10pt;">{{log.LOG_DETAIL}}</textarea>
                              </div>     

                            </div>      
                            
                            <button @click="logModifyCancel(log.LOG_ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">취소</button>   
                            <button @click="logModifyAction(log.LOG_ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">확인</button>      

                          </form>                      
                        </div>


                      </div>

                    </div>
                </div>      
              </div>   

            </div> <!-- innerScroll end -->
     
          </div> <!-- logScroll end -->
          
        </div>

        <div class="col s4">
        
          <div class="card"style="text-align:center">
            <i class="material-icons" style="color:#41B883;position:relative;top:5px;">list</i><span style="font-size:15pt;">체크리스트</span>
          </div>

          <div class="card" style="height:550px;overflow:auto">       

            <div style="margin:10px;">

              <!-- 체크리스트 추가 버튼 누르기 전-->
              <div v-if="checkAdd" class="center-align">                
                <!-- 체크리스트 등록 -->
                <div>
                  <a @click="checkAddForm()" style="cursor:pointer;"><i class="material-icons"style="color:#41B883;">add</i></a>
                </div>              
              </div>             
              <!-- 체크리스트 등록 폼 열기-->
              <div v-else>
                  <div><input type="text" id="ckDetail" name="ckDetail"></div>
                  <button @click="checkAddForm()" class="waves-effect waves-teal btn-flat"style="color:#41B883;font-size:10pt;float:right;">닫기</button>
                  <button @click="checkAddAction()" class="waves-effect waves-teal btn-flat"style="color:#41B883;font-size:10pt;float:right;">등록</button>                
              </div>


              


              <!-- 체크리스트 목록 -->
              <template v-for="check in checkListData">

                <p>
                  <input @click="checkAction(check.CK_ID)" type="checkbox" class="filled-in" :id="'ck'+check.CK_ID" :checked="(check.CK_SUCCESS == 'true')" />                
                  <label :for="'ck'+check.CK_ID">{{check.CK_DETAIL}}</label> <span @click="checkDeleteAction(check.CK_ID)" style="cursor:pointer;font-size:15px;color:#41B883;">x</span>       
                </p>


              </template>   

            </div>
          </div>


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
    
  },
  data () {
    return {
        projectData : { }     
        ,logData : [ ]
        ,checkListData : [ ]
        ,formAdd: true
        ,checkAdd: true
        ,projectId: this.$route.params.projectId
        ,logCurrentCount:1
        ,limit:10
    }
  }
  ,methods : {

            //로그 등록 폼 열기 닫기
            logAddForm : function(){
              if(this.formAdd==true){
                this.formAdd=false;
              }else{
                this.formAdd=true;
              }  
            }

            //로그 등록
            ,logAddAction : function(){

              $.ajax({
                url:context.hostUrl+'/projectLogAdd',
                async:false,
                type:'post',
                data:$('#logAddForm').serialize(),
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
              });  

            }

            //로그 수정버튼 클릭 수정폼 열기 
            ,logModifyForm :function(logId){
              $("#memoKey"+logId).find(".view").each(function(){
                $(this).hide();
              });
              $("#memoKey"+logId).find(".edit").each(function(){
                $(this).show();
              });              
            }

            //로그 수정 폼 취소
            ,logModifyCancel :function(logId){
              $("#memoKey"+logId).find(".view").each(function(){
                $(this).show();
              });
              $("#memoKey"+logId).find(".edit").each(function(){
                $(this).hide();
              });   
            }

            //로그 수정  
            ,logModifyAction : function(logId){
              $.ajax({
                url:context.hostUrl+'/projectLogModify',
                async:false,
                type:'post',
                data:$('#logModifyForm'+logId).serialize(),
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
              });                
            }

            //로그 삭제버튼 클릭 삭제확인창 열기
            ,logDelForm :function(logId){
              if(confirm('삭제하시겠습니까?')==true){
                $.ajax({
                  url:context.hostUrl+'/projectLogDelete',
                  async:false,
                  type:'post',
                  data:{logId:logId},
                  dataType : "json",
                  success : function(data){ },
                  error : function(err){ console.log(err); }
                });      
                location.reload();                
              }         
            }

            //로그 스크롤 끝 이벤트
            ,logScroll : function(){

                var proId = this.projectId; //프로젝트id
                var logCurrentCount = this.logCurrentCount; //로그 카운트(페이징처리용)
                var limit = this.limit

                if($('#logScroll').scrollTop()+10 > $('#innerScroll').height() - $('#logScroll').height()+45 ){
                  let logList = 
                  $.ajax({
                    url:context.hostUrl+'/projectLogRead',
                    async:false,
                    type:'post',
                    data:{"proId":proId,"logCurrentCount":logCurrentCount,limit:limit},
                    dataType : "json",
                    success : function(data){ },
                    error : function(err){ console.log(err); }
                  });   
                  this.logCurrentCount = this.logCurrentCount*1+10;
                  this.limit = this.limit*1+10;
                  console.log(logList.responseJSON);                  
                }                    
            }

            //체크리스트 등록 폼 열기 닫기
            ,checkAddForm : function(){
              if(this.checkAdd==true){
                this.checkAdd=false;
              }else{
                this.checkAdd=true;
              }
            } 

            //체크리스트 등록
            ,checkAddAction : function(){

                console.log(this.projectId);
                let proId = this.projectId; //프로젝트id

                let checkAddRequest = 
                  $.ajax({
                    url:context.hostUrl+'/projectCheckListAdd',
                    async:false,
                    type:'post',
                    data:{"proId":proId,"ckDetail":$('#ckDetail').val()},
                    dataType : "json",
                    success : function(data){ },
                    error : function(err){ console.log(err); }
                  });    

                  this.checkListData = checkAddRequest.responseJSON.proCheckList;
                  this.projectData.PRO_PROGRESS = checkAddRequest.responseJSON.proProgress;  
 

            }

            //체크리스트 삭제
            ,checkDeleteAction : function(){
              alert('삭제');
            }

            //체크리스트 체크/해제
            ,checkAction : function(ckId){

                let ckValue=$('#ck'+ckId).prop('checked');
                let proId = this.projectId; //프로젝트id

                let checkRequest = 
                  $.ajax({
                    url:context.hostUrl+'/projectCheckListCheck',
                    async:false,
                    type:'post',
                    data:{"proId":proId,"ckValue":ckValue,"ckId":ckId},
                    dataType : "json",
                    success : function(data){ },
                    error : function(err){ console.log(err); }
                  });    

                  this.checkListData = checkRequest.responseJSON.proCheckList;
                  this.projectData.PRO_PROGRESS = checkRequest.responseJSON.proProgress;      

            }             

          } //methods end  

  // mounted == document ready 
  ,mounted : function(){    

    /* -------------------------------------------
    * 라우터에서 매개변수 얻기
    */
    var proId = this.projectId; //프로젝트id
    var logCurrentCount = this.logCurrentCount; //로그 카운트(페이징처리용)
    var limit = this.limit
    
    /* ----------------------------------------------
    * 프로젝트ID로 프로젝트 상세정보, 로그, 체크리스트 가져오기
    */ 
    var projectInfo = 
          $.ajax({
            url:context.hostUrl+'/projectDetailData',
            async:false,
            type:'post',
            data:{"proId":proId,"logCurrentCount":logCurrentCount,limit:limit},
            dataType : "json",
            success : function(data){ },
            error : function(err){ console.log(err); }
          });   


      //가져온 상세정보 세팅
      this.projectData=projectInfo.responseJSON.projectDetail;
      this.logData=projectInfo.responseJSON.logList;
      this.checkListData=projectInfo.responseJSON.checkList;
      this.logCurrentCount = this.logCurrentCount*1+10;
      this.limit = this.limit*1+10;
     

   } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit {
  display:none;
}
.log{
  margin:20px;
}
</style>
