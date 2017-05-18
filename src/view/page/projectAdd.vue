
<template>
  <div class="hello">
    <div class="container">

        <div style="height:10px;"></div>    

        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">add</i>프로젝트 등록</a>
          </div>
        </nav> 

        <div class="row">
          <div class="col s12">

              <div class="card" style="padding:20px;">      

                <div class="row">

                  <div class="col s4">
                    프로젝트명 
                    <input id="proName" type="text">
                  </div>   

                  <div class="col s4">
                    시작일
                    <input id="proStartDate" type="date" class="datepicker">
                  </div>

                  <div class="col s4">
                    종료일
                    <input id="proCloseDate" type="date" class="datepicker">
                  </div>    

                </div>  

                <div class="row">

                  <div class="col s4">
                    담당자 연락처
                    <input id="proContact" type="text">
                  </div>                    

                  <div class="col s3">
                    색상
                    <input id="proColor" type="text">
                  </div>    

                  <div class="col s2">
                    <div class="colorbox" style="background-color:#41B883;" colorValue="41B883"></div>
                    <div class="colorbox" style="background-color:#0277bd;" colorValue="0277bd"></div>
                    <div class="colorbox" style="background-color:#e57373;" colorValue="e57373"></div>
                    <div class="colorbox" style="background-color:#fb8c00;" colorValue="fb8c00"></div>
                    <div class="colorbox" style="background-color:#00bcd4;" colorValue="00bcd4"></div>
                    <div class="colorbox" style="background-color:#ec407a;" colorValue="ec407a"></div>            
                  </div>                                         

                </div>                  

                <div class="row">

                  <div class="col s3">
                    MEMBER KEY
                    <input id="memberKey" type="password">
                  </div>      

                  <div class="col s6">
                    <button @click="projectAddAction()" class="waves-effect waves-light btn-large" style="background-color:#41B883">등록</button> 
                    <router-link to="/projectList"><button class="waves-effect waves-light btn-large" style="background-color:#41B883">취소</button></router-link>              
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

  name: 'projectAdd',
  components: {
    
  },
  data () {
    return {
      msg: 'index'
    }
  }
  ,methods : {
    projectAddAction : function(){

      if($('#memberKey').val()==context.memberKey){
        $.ajax({

          url:context.hostUrl+'/projectAdd',
          async:false,
          type:'post',
          data:{
            proName:$('#proName').val()
            ,proStartDate:$('#proStartDate').val()
            ,proCloseDate:$('#proCloseDate').val()
            ,proColor:$('#proColor').val()
            ,proContact:$('#proContact').val()
            },
          dataType : "json",
          success : function(data){ },
          error : function(err){ console.log(err); }
        });  
      
        this.$router.push('/projectList');
        Materialize.toast('프로젝트가 등록되었습니다.!', 4000);
      }else{
        Materialize.toast('멤버키 불일치.!', 4000);
      }
    }
  }
  ,mounted : function(){

    //datepicker
    $('.datepicker').pickadate({
        format: 'yyyy-mm-dd',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });   

    //색상선택
    $('.colorbox').click(function(){
      $('#proColor').val($(this).attr('colorValue'));
    });

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .colorbox{
    width:30px;
    height:30px;
    display:inline-block;
    cursor:pointer;
  }

</style>
