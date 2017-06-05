
<template>
  <div id="to-do_modal" class="modal">
    <div class="modal-content">
      <h4>{{memberName}}</h4>
      <div>
        작업 추가
        <div class="row">

            <div class="col s12 l10">
                <input placeholder="작업 내용" id="toDoCkDetail" type="text" class="validate">      
            </div>

            <div class="col s12 l4">
                <select class="browser-default" id="toDoProId">
                    <option value=" ">프로젝트 선택</option>
                    <template v-for="project in projectData">
                        <option :value="project.PRO_ID">{{project.PRO_NAME}}</option>                    
                    </template>
                </select>
            </div>

            <div class="col s12 l2">
                <input placeholder="MEMBER KEY" id="logAddMemberKey" type="password" class="validate">      
            </div> 

            <div class="col s12 l2">
                <a @click="addToDoAction(memberId)" class="waves-effect waves-light btn-large">등록</a>   
            </div>                        
        </div>
      </div>
      남은 작업 목록
        <ul class="collection">
            <template v-for="toDo in toDoList">
                <li class="collection-item">
                    <span style="font-size:12pt;">{{toDo.CK_DETAIL}}</span>  
                    <span :style="'font-size:9pt;color:#'+toDo.PRO_COLOR+';'">{{toDo.PRO_NAME}}</span>
                    <span style="font-size:9pt"><a @click="checkToDoAction(toDo.CK_ID)">완료</a> <a @click="deleteToDoAction(toDo.CK_ID)">삭제</a></span>
                </li>
            </template>
        </ul> 
      <div>{{memModalId}}</div>
    </div>
    <div class="modal-footer">
      <a class="modal-action modal-close waves-effect waves-green btn-flat">닫기</a>
    </div>
  </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'to-do_modal',

  props : ['memberName'],
  components: {
    
  },

  data () {
    return {
        toDoList : [] ,
        projectData : []
    }
  }

  ,methods : {  

      addToDoAction (){
        if($('#logAddMemberKey').val() == context.memberKey){
            let checkAddRequest = 
            $.ajax({
                url:context.hostUrl+'/addMemberCheckList',
                async:false,
                type:'post',
                data:{  proId:$('#toDoProId').val(),
                        ckDetail:$('#toDoCkDetail').val(),
                        memberId:this.$store.state.memModalId
                    },
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
            }); 
            this.toDoReload();    
            $('#toDoCkDetail').val();
            Materialize.toast('To-do가 등록되었습니다..!', 4000);      
               
        }else {
            Materialize.toast('멤버키 불일치.!', 4000);
        }
      },
      deleteToDoAction(id){
        var ckDeleteMemberKey = prompt("멤버키 입력");
        if(ckDeleteMemberKey == context.memberKey){
        let deleteToDoRequest = 
            $.ajax({
                url:context.hostUrl+'/projectCheckListDelete',
                async:false,
                type:'post',
                data:{ckId:id},
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
            }); 
            this.toDoReload();          
        } else {
            Materialize.toast('멤버키 불일치.!', 4000);
        }          
   
      },
      checkToDoAction(id){
        if(confirm('완료 하시겠습니까?')==true){
            let checkToDoRequest = 
            $.ajax({
                url:context.hostUrl+'/complateToDo',
                async:false,
                type:'post',
                data:{ckId:id},
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
            }); 
            this.toDoReload();  
        }   
      },
      toDoReload(){
        let memberCheckList = 
            $.ajax({
                url:context.hostUrl+'/getMemberCheckList',
                async:false,
                type:'post',
                data:{memberId :this.$store.state.memModalId},
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
            });    
            this.toDoList = memberCheckList.responseJSON;      
      }

  } //methods end  

  // mounted == document ready 
  ,mounted : function(){    

    $('.modal').modal();

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

  ,computed : {
      memModalId (){
        let memberCheckList = 
            $.ajax({
                url:context.hostUrl+'/getMemberCheckList',
                async:false,
                type:'post',
                data:{memberId :this.$store.state.memModalId},
                dataType : "json",
                success : function(data){ },
                error : function(err){ console.log(err); }
            });    
            this.toDoList = memberCheckList.responseJSON;      
      }
  }


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    cursor:pointer;
}
</style>
