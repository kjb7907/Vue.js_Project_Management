
<template>
    <div class="container">
        <div class="row">

          <template v-for="member in memberList">
            <div class="col s12 l2">
              <div class="card">
                <div :style="'width:100%;height:60px;position:absolute;background-color:#'+member.MEM_COLOR+';'">&nbsp;</div>
                <div class="card-content" style="text-align:center;">
                  <span class="card-title" style="position:relative;z-index:1;">                  
                    <div>
                      <template v-if="member.MEM_IMG!=null">
                        <img :src="member.MEM_IMG"
                            alt="" class="circle" style="width:70px;height:70px;">    
                      </template>
                      <template v-else>
                        <a class="btn-floating waves-effect waves-light" style="width:70px;height:70px;">
                          <div style="position:relative;top:12px;font-size:13pt;">{{member.MEM_NAME}}</div>
                        </a>
                      </template>              
                    </div>          
                    {{member.MEM_NAME}}    
                  </span>
                
                  <div>남은 작업 : {{member.INCOMPLETE}}</div>
                  <div>완료한 작업 : {{member.COMPLETE}}</div>
                </div>
                <div class="card-action" style="text-align:right;">
                  <a @click="modalOpen(member.MEM_ID,member.MEM_NAME)" class="waves-effect waves-light btn">작업관리</a>
                </div>
              </div> 

            </div>          
          </template>
        </div>

        <toDoModal :memberName="memberName"></toDoModal>

    </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'TO-DO',

  components: {
    'toDoModal': () => import('../components/to-do_modal')
  },

  data () {
    return {
      memberList : [],
      memberId : 0,
      memberName :'',
    }
  }

  ,methods : {  
    modalOpen : function(id,name){
      this.$store.state.memModalId=id;
      this.memberName=name;
     $('#to-do_modal').modal('open');
    }
  } //methods end  

  // mounted == document ready 
  ,mounted : function(){    

    var memberList = 
          $.ajax({
            url:context.hostUrl+'/getMemberList',
            async:false,
            type:'post',
            data:{},
            dataType : "json",
            success : function(data){ },
            error : function(err){ console.log(err); }
          });   


      //가져온 상세정보 세팅
      console.log(memberList.responseJSON);
      this.memberList=memberList.responseJSON;    


      $('.modal').modal();

  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
