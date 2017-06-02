
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
                      <img :src="member.MEM_IMG"
                          alt="" class="circle" style="width:70px;height:70px;">        
                    </div>          
                    {{member.MEM_NAME}}    
                  </span>
                
                  <div>남은 작업 : {{member.COMPLETE}}</div>
                  <div>완료한 작업 : {{member.INCOMPLETE}}</div>
                </div>
                <div class="card-action" style="text-align:right;">
                  <a href="#">작업 관리</a>
                </div>
              </div> 

            </div>          
          </template>

        </div>
    </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'TO-DO',

  components: {
    
  },

  data () {
    return {
      memberList : [],
      modalId : 0,
    }
  }

  ,methods : {  

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
      this.memberList=memberList.responseJSON;    

  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
