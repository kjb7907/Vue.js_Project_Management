
<template>
<div>

          <div class="card"style="text-align:center">
            <i class="material-icons" :style="'color:#'+projectData.PRO_COLOR+';position:relative;top:5px;'">comment</i><span style="font-size:15pt;">로그</span>
          </div>
          
          <div id="logScroll" style="height:700px;overflow:auto">

            <div id="innerScroll" style="margin:5px;">
        
              <!-- 로그 등록 -->
              <div class="card">

                <!-- 로그 추가 버튼 -->
                <div v-if="formAdd" class="center-align">
                  <a @click="logAddForm()" style="cursor:Pointer;"><i class="material-icons medium":style="'color:#'+projectData.PRO_COLOR+';'">add</i></a>
                </div>
                <!-- 로그 추가버튼 클릭시 -->
                <div v-else>
                
                    <div style="padding: 10px 20px 30px 20px;">

                      <div class="input-field">

                        <!-- 프로젝트 ID -->
                        <input id="logAddProId"type="hidden" :value="projectData.PRO_ID">                          

                        <!-- 작성자 -->
                        <input id="logAddWriter" type="text" data-length="10" style="width:40%">
                        <label for="icon_prefix">작성자</label>
                  
                        <!-- log add member key -->
                        <input id="logAddMemberKey" type="password" data-length="10" style="width:40%" placeholder="MEMBERKEY">
           

                        <!-- 본문 -->
                        <div class="row">
                          <div class="input-field col s12">
                            <textarea v-on:keyup.enter="logAddAction" id="logAddDetail" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea1">본문</label>
                          </div>
                        </div>                      
                                      
                      </div>


                      <button @click="logAddForm()"class="waves-effect waves-teal btn-flat" :style="'color:#'+projectData.PRO_COLOR+';font-size:9pt;float:right;'">취소</button>                
                      <button @click="logAddAction()"class="waves-effect waves-teal btn-flat" :style="'color:#'+projectData.PRO_COLOR+';font-size:9pt;float:right;'">확인</button> 

                    </div>                  
         
                </div>              
              </div>    

              <!-- 로그 -->
              
              <div v-for="(log,index) in logData">
                <div id="logMemo">
                    <div class="card" style="width:100%;min-height:100px;">
                                              
                      <div class="row" :id="'memoKey'+log.LOG_ID" >

                        <!-- 로그 view-->                            
                        <div class="view log">

                          <!-- 인덱스 번호 -->
                          <input id="" type="hidden" :value="index">
                          
                          <!-- 작성자 -->
                          <span style="color:#424242;margin-left:10px;font-size:12pt;">{{log.LOG_WRITER}} </span>

                          <!-- 작성일 -->
                          <span style="float:right;color:#747474;font-size:12pt;">{{log.LOG_DATE}} &nbsp;</span>


                          <!-- 구분선 -->
                          <div class="divider" style="margin:10px;"></div>    

                          <!-- 본문 -->                                                  
                          <div class="col s12" style="word-break: break-all; font-size:12pt;">
                            {{log.LOG_DETAIL}}
                          </div> 

                          <!-- 버튼 -->
                          <button @click="logDelForm(log.LOG_ID,index)"class="waves-effect waves-teal btn-flat" :style="'color:#'+projectData.PRO_COLOR+';font-size:9pt;float:right;'">삭제</button>    
                          <button @click="logModifyForm(log.LOG_ID,index)"class="waves-effect waves-teal btn-flat" :style="'color:#'+projectData.PRO_COLOR+';font-size:9pt;float:right;'">수정</button>                                

                        </div>

                        <!-- 로그 수정 폼 -->
                        <div class="edit log">

                            <div class="row">

                              <!-- 작성자 -->
                              <div class="col s12">                        
                                <input :id="'logModifyLogWriter'+log.LOG_ID" type="text" style="font-size:12pt;width:40%"v-bind:value="log.LOG_WRITER"/>    
                                <!-- log modify member key -->
                                <input :id="'logModifyMemberKey'+log.LOG_ID" type="password" data-length="10" style="width:40%" placeholder="MEMBERKEY">                                                 
                              </div>
                              <!-- 본문 -->
                              <div class="input-field col s12">
                                <textarea  :id="'logModifyDetail'+log.LOG_ID" class="materialize-textarea" data-length="120" style="font-size:12pt;">{{log.LOG_DETAIL}}</textarea>
                              </div>     

                            </div>      
                            
                            <button @click="logModifyCancel(log.LOG_ID)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">취소</button>   
                            <button @click="logModifyAction(log.LOG_ID,index)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">확인</button>      

               
                        </div>


                      </div>

                    </div>
                </div>      
              </div> <!-- v-for end --> 

                <!-- 로그 더보기 -->
                <div v-if="formAdd" class="center-align">
                  <a @click="logNextPage()" style="cursor:Pointer;"><i class="material-icons medium":style="'color:#'+projectData.PRO_COLOR+';'">playlist_add</i></a>
                </div>              

            </div> <!-- innerScroll end -->
     
          </div> <!-- logScroll end -->
</div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'logList',

  components: {
    
  },

  props : [
    'projectData'
  ],

  data () {
    return {

        //프로젝트 정보
        projectId: this.$route.params.projectId,
        //로그 등록 창 open/close
        formAdd: true,
        //페이징 카운트
        logCurrentCount:1,
        //한페이지당 가져오는 로그 개수
        limit:10,
        logData : [],
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


                let log = logAddAction.responseJSON;

                this.formAdd=true;
                this.logData.unshift(log) ;
                Materialize.toast('로그가 등록되었습니다.!', 4000);
              } else {
                Materialize.toast('멤버키 불일치.!', 4000);
              }



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
            ,logModifyAction : function(logId,index){

              
              if($('#logModifyMemberKey'+logId).val() == context.memberKey){
                $.ajax({
                  url:context.hostUrl+'/projectLogModify',
                  async:false,
                  type:'post',
                  data:{ logId : logId
                        ,logWriter : $('#logModifyLogWriter'+logId).val()
                        ,logDetail : $('#logModifyDetail'+logId).val()},
                  dataType : "json",
                  success : function(data){ },
                  error : function(err){ console.log(err); }
                });    
                
                let log = { LOG_ID : logId
                        ,LOG_WRITER : $('#logModifyLogWriter'+logId).val()
                        ,LOG_DETAIL : $('#logModifyDetail'+logId).val()}

                this.logData.splice(index,1,log);  

                $("#memoKey"+logId).find(".view").each(function(){
                  $(this).show();
                });
                $("#memoKey"+logId).find(".edit").each(function(){
                  $(this).hide();
                });   
                Materialize.toast('로그가 수정 되었습니다.!', 4000);
              } else {
                Materialize.toast('멤버키 불일치.!', 4000);
              }

              
         
            }

            //로그 삭제버튼 클릭 삭제확인창 열기
            ,logDelForm :function(logId,index){

              var logDeleteMemberKey = prompt("멤버키 입력");
              if(logDeleteMemberKey == context.memberKey){
                $.ajax({
                  url:context.hostUrl+'/projectLogDelete',
                  async:false,
                  type:'post',
                  data:{logId:logId},
                  dataType : "json",
                  success : function(data){ },
                  error : function(err){ console.log(err); }
                });      
                this.logData.splice(index,1);   
                Materialize.toast('로그가 삭제되었습니다..!', 4000);
              }else {
                Materialize.toast('멤버키 불일치.!', 4000);
              }

     
            }

            //로그 페이징
            ,logNextPage : function(){


                var proId = this.projectId; //프로젝트id
                var logCurrentCount = this.logCurrentCount; //로그 카운트(페이징처리용)
                var limit = this.limit


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
                let log=logList.responseJSON;
                for(var i in log){
                  this.logData.push(log[i]);
                }

                console.log(logList.responseJSON);                  
                                   
            }
  } //methods end  

  // mounted == document ready 
  ,mounted : function(){    

    var initLogList = 
          $.ajax({
            url:context.hostUrl+'/projectLogRead',
            async:false,
            type:'post',
            data:{"proId":this.projectId,"logCurrentCount":this.logCurrentCount,limit:this.limit},
            dataType : "json",
            success : function(data){ },
            error : function(err){ console.log(err); }
          });   
          this.logCurrentCount = this.logCurrentCount*1+10;
          this.limit = this.limit*1+10;
          this.logData = initLogList.responseJSON;

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
