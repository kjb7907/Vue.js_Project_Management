
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
                <div>시작일 : {{projectData.STARTDATE}}</div>
                <div>마감예정일 : {{projectData.CLOSEDATE}} </div>
              </div>
          
              <div class="col s4">
                <i class="large material-icons" style="color:#41B883">insert_chart</i>
                <div>프로젝트 진행율 : {{projectData.PROGRESS}}%</div>
                <div class="container">
                  <div class="progress" style="height:20px">
                      <div class="determinate" :style="'width:'+ projectData.PROGRESS+'%;background-color:#41B883'"></div>
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
                
                  <form id="logAddForm">
                    <div style="padding: 10px 20px 30px 20px;">

                      <div class="input-field">

                        <!-- 프로젝트 ID -->
                        <input name="projectId"type="hidden" :value="projectData.ID">                          

                        <!-- 작성자 -->
                        <input name="writer" id="input_text" type="text" data-length="10" style="width:40%">
                        <label for="icon_prefix">작성자</label>
                  
                        <!-- 본문 -->
                        <div class="row">
                          <div class="input-field col s12">
                            <textarea name="detail" class="materialize-textarea" data-length="120"></textarea>
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
                                              
                      <div class="row" :id="'memoKey'+log.ID" >

                        <!-- 로그 view-->                            
                        <div class="view log">

                          <!-- 작성자 -->
                          <span style="color:#424242;margin-left:10px;">{{log.WRITER}}</span>

                          <!-- 작성일 -->
                          <span style="float:right;color:#747474;">{{log.LOGDATE}} &nbsp;</span>


                          <!-- 구분선 -->
                          <div class="divider" style="margin:10px;"></div>    

                          <!-- 본문 -->                                                  
                          <div class="col s12">
                            {{log.DETAIL}}
                          </div> 

                          <!-- 버튼 -->
                          <button @click="logDelForm(log.ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">삭제</button>    
                          <button @click="logModifyForm(log.ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">수정</button>                                

                        </div>

                        <!-- 로그 수정 폼 -->
                        <div class="edit log">
                          <form :id="'logModifyForm'+log.ID">
                            
                            <div class="row">

                              <!-- log id -->
                              <input name="logId"type="hidden" :value="log.ID">   
                              <!-- 작성자 -->
                              <div class="col s5">                        
                                <input name="writer"type="text" style="font-size:10pt;"v-bind:value="log.WRITER"/>                     
                              </div>
                              <!-- 본문 -->
                              <div class="input-field col s12">
                                <textarea  name="detail"class="materialize-textarea" data-length="120" style="font-size:10pt;">{{log.DETAIL}}</textarea>
                              </div>     

                            </div>      
                            
                            <button @click="logModifyCancel(log.ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">취소</button>   
                            <button @click="logModifyAction(log.ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">확인</button>      

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

          <div class="card" style="height:480px;overflow:auto">       

            <form style="margin:10px;">

              <!-- 체크리스트 추가 버튼 누르기 전-->
              <div v-if="checkAdd" class="center-align">                
                <!-- 체크리스트 등록 -->
                <div>
                  <a @click="checkAddForm()" style="cursor:pointer;"><i class="material-icons"style="color:#41B883;">add</i></a>
                </div>              
              </div>             
              <!-- 체크리스트 등록 폼 열기-->
              <div v-else>
                  <div><input type="text" id="checkDetail" name="checkDetail"></div>
                  <button @click="checkAddForm()" class="waves-effect waves-teal btn-flat"style="color:#41B883;font-size:10pt;float:right;">취소</button>
                  <button @click="checkAddAction()" class="waves-effect waves-teal btn-flat"style="color:#41B883;font-size:10pt;float:right;">등록</button>                
              </div>


              


              <!-- 체크리스트 목록 -->
              <template v-for="check in checkListData">

                <p>
                  <input @click="checkAction(check.ID)" type="checkbox" class="filled-in" :id="'ck'+check.ID" :checked="(check.SUCCESS == 'true')" />                
                  <label :for="'ck'+check.ID">{{check.DETAIL}}</label>                 
                </p>


              </template>   

            </form>
          </div>

          <div>
            <a class="waves-effect waves-light btn" style="background-color:#41B883;float:right">저장</a>
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
            ,logModifyForm :function(id){
              $("#memoKey"+id).find(".view").each(function(){
                $(this).hide();
              });
              $("#memoKey"+id).find(".edit").each(function(){
                $(this).show();
              });              
            }

            //로그 수정 폼 취소
            ,logModifyCancel :function(id){
              $("#memoKey"+id).find(".view").each(function(){
                $(this).show();
              });
              $("#memoKey"+id).find(".edit").each(function(){
                $(this).hide();
              });   
            }

            //로그 수정  
            ,logModifyAction : function(id){
              $.ajax({
                url:context.hostUrl+'/projectLogModify',
                async:false,
                type:'post',
                data:$('#logModifyForm'+id).serialize(),
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
              });                
            }

            //로그 삭제버튼 클릭 삭제확인창 열기
            ,logDelForm :function(id){
              if(confirm('삭제하시겠습니까?')==true){
                $.ajax({
                  url:context.hostUrl+'/projectLogDelete',
                  async:false,
                  type:'post',
                  data:{logId:id},
                  dataType : "json",
                  success : function(data){ },
                  error : function(err){ console.log(err); }
                });      
                location.reload();                
              }         
            }

            //로그 스크롤 끝 이벤트
            ,logScroll : function(){

                var projectId = this.projectId; //프로젝트id
                var logCurrentCount = this.logCurrentCount; //로그 카운트(페이징처리용)
                var limit = this.limit

                if($('#logScroll').scrollTop()+10 > $('#innerScroll').height() - $('#logScroll').height()+45 ){
                  let logList = 
                  $.ajax({
                    url:context.hostUrl+'/projectLogRead',
                    async:false,
                    type:'get',
                    data:{"id":projectId,"logCurrentCount":logCurrentCount,limit:limit},
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

            }

            //체크리스트 삭제
            ,checkDeleteAction : function(){
              
            }

            //체크리스트 체크/해제
            ,checkAction : function(id){

                let ckValue=$('#ck'+id).prop('checked');
                let projectId = this.projectId; //프로젝트id

                let checkRequest = 
                  $.ajax({
                    url:context.hostUrl+'/projectCheckListCheck',
                    async:false,
                    type:'get',
                    data:{"id":projectId,"ckValue":ckValue,"ckId":id},
                    dataType : "json",
                    success : function(data){ },
                    error : function(err){ console.log(err); }
                  });    

                  this.checkListData = checkRequest.responseJSON.CHECKLIST;
                  this.projectData.PROGRESS = checkRequest.responseJSON.PROGRESS;      

            }             

          } //methods end  

  // mounted == document ready 
  ,mounted : function(){    

    /* -------------------------------------------
    * 라우터에서 매개변수 얻기
    */
    var projectId = this.projectId; //프로젝트id
    var logCurrentCount = this.logCurrentCount; //로그 카운트(페이징처리용)
    var limit = this.limit
    
    /* ----------------------------------------------
    * 프로젝트ID로 프로젝트 상세정보, 로그, 체크리스트 가져오기
    */ 
    var projectInfo = 
          $.ajax({
            url:context.hostUrl+'/projectDetailData',
            async:false,
            type:'get',
            data:{"id":projectId,"logCurrentCount":logCurrentCount,limit:limit},
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
