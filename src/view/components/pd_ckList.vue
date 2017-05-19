
<template>
<div>

    <div class="card"style="text-align:center">
    <i class="material-icons" :style="'color:#'+projectData.PRO_COLOR+';position:relative;top:5px;'">list</i><span style="font-size:15pt;">체크리스트</span>
    </div>

    <div class="card" style="height:250px;overflow:auto">       

    <div style="margin:10px;">

        <!-- 체크리스트 추가 버튼 누르기 전-->
        <div v-if="checkAdd" class="center-align">                
        <!-- 체크리스트 등록 -->
        <div>
            <a @click="checkAddForm()" style="cursor:pointer;"><i class="material-icons":style="'color:#'+projectData.PRO_COLOR+';'">add</i></a>
        </div>              
        </div>         
            
        <!-- 체크리스트 등록 폼 열기-->
        <div v-else>
            <!-- log modify member key -->
            <input id="ckAddMemberKey" type="password" data-length="10" placeholder="MEMBERKEY"> 
            <div><input v-on:keyup.enter="checkAddAction" type="text" id="ckDetail" placeholder="체크리스트 항목" ></div>

            <button @click="checkAddForm()" class="waves-effect waves-teal btn-flat":style="'color:#'+projectData.PRO_COLOR+';font-size:10pt;float:right;'">닫기</button>
            <button @click="checkAddAction()" class="waves-effect waves-teal btn-flat":style="'color:#'+projectData.PRO_COLOR+';font-size:10pt;float:right;'">등록</button>                
        </div>
    
        <!-- 체크리스트 목록 -->
        <template v-for="check in ckList">

        <p>
            <input @click="checkAction(check.CK_ID)" type="checkbox" class="filled-in" :id="'ck'+check.CK_ID" :checked="(check.CK_SUCCESS == 'true')" />                
            <label :for="'ck'+check.CK_ID">{{check.CK_DETAIL}}</label> <span @click="checkDeleteAction(check.CK_ID)" :style="'cursor:pointer;font-size:15px;color:#'+projectData.PRO_COLOR+';'">x</span>       
        </p>


        </template>   

    </div>
    </div>

</div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'ckList',
  
  props :[
            //프로젝트 정보
            'projectData',
            //초기 체크리스트
            'checkListData'
        ],

  components: {
    
  },

  data () {
    return {
        //프로젝트 id
        projectId: this.$route.params.projectId,
        //체크리스트 등록폼 open
        checkAdd: true , 
        ckList : [],
    }
  }

  ,methods : {  
            //체크리스트 등록 폼 열기 닫기
            checkAddForm : function(){
              if(this.checkAdd==true){
                this.checkAdd=false;
              }else{
                this.checkAdd=true;
              }
            } 

            //체크리스트 등록
            ,checkAddAction : function(){

                if($('#ckAddMemberKey').val() == context.memberKey){
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

                    $('#ckDetail').val('');
                    Materialize.toast('체크리스트 등록.!', 4000);
                    this.ckList = checkAddRequest.responseJSON.proCheckList;
                    this.$emit('checkAddAction', checkAddRequest.responseJSON.proProgress);
                }else {
                  Materialize.toast('멤버키 불일치.!', 4000);
                }              
 
            }

            //체크리스트 삭제
            ,checkDeleteAction : function(ckId){

                var ckDeleteMemberKey = prompt("멤버키 입력");
                if(ckDeleteMemberKey == context.memberKey){
                  let proId = this.projectId; //프로젝트id

                  let checkAddRequest = 
                    $.ajax({
                      url:context.hostUrl+'/projectCheckListDelete',
                      async:false,
                      type:'post',
                      data:{"proId":proId,"ckId":ckId},
                      dataType : "json",
                      success : function(data){ },
                      error : function(err){ console.log(err); }
                    });    

                    this.ckList = checkAddRequest.responseJSON.proCheckList;
                    this.$emit('checkDeleteAction', checkAddRequest.responseJSON.proProgress);
                    Materialize.toast('체크리스트가 삭제되었습니다..!', 4000);
                }else {
                  Materialize.toast('멤버키 불일치.!', 4000);
                }
   
                           
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

                  this.ckList = checkRequest.responseJSON.proCheckList;
                  this.$emit('checkAction',checkRequest.responseJSON.proProgress);    

            }              

  } //methods end  


  ,mounted : function(){    
    this.ckList = this.checkListData;
      

  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
