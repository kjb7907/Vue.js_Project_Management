
<template>
  <div class="hello">
    <div class="container">
        <div style="height:10px;"></div>    
        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">chat</i>로그</a>
          </div>
        </nav>  

        <div class="row">

          <!-- 로그 -->


          <div class="col s9 m12 l9 flow-text">

            <!-- 로그 추가 -->
            <div class="card grey lighten-5">

              <!-- 로그 추가 버튼 -->
              <div class="center-align">
              <router-link to="/logAdd">
                <a style="cursor:Pointer;">
                  <i class="material-icons medium"style="color:#41B883">add</i>
                </a>
              </router-link>
              </div>
       
            </div>             

            <div @scroll="logScroll()" id="logScroll" style="height:600px;overflow:auto">
              <div id="innerScroll" style="margin:5px;">
                <div v-for="log in logData">
                  <div class="card grey lighten-5 moaTitle">
                    <div style="padding:5px;font-size:10pt">
                      <div class="row" :id="'logId'+log.logId">

                        <!-- 로그 view -->
                        <div class="view">
                          <div class="col s2">
                            {{log.LOG_WRITER}} :                  
                          </div>

                          <div class="col s8">
                            {{log.LOG_DETAIL}}
                          </div>  

                          <div class="col s2">
                            <div style="font-size:8pt;color:#41B883">{{log.LOG_PROJECT}}</div>  
                            {{log.LOG_DATE}}</br>
                            <a class="pointer" @click="logUpdateForm(log.LOG_ID)">수정</a> 
                            <a class="pointer" @click="logDeleteForm(log.LOG_ID)">삭제</a>
                          </div>                     
                        </div>

                        <!-- 로그 edit -->
                        <div class="edit">
                        
                          <div class="col s2">
                            <input type="text" :value="log.LOG_WRITER">                
                          </div>

                          <div class="col s8">
                            <textarea class="materialize-textarea" data-length="120" style="font-size:10pt;">{{log.LOG_DETAIL}}</textarea>
                          </div>  

                          <div class="col s2">
                            <a class="pointer" @click="logUpdateForm(log.LOG_ID)">확인</a> 
                            <a class="pointer" @click="logUpdateFormOut(log.LOG_ID)">취소</a>
                          </div>                        
                        </div>
                                        
                      </div>
                    </div>           
                  </div>            
                </div>    
              </div>
            </div> 
                                                                                            
          </div>

          <!-- 모아보기 -->
          <div class="col s3 m12 l3 flow-text">

            <div class="row">

              <div class="col s12 m6 l12">
                <div class="card grey lighten-5 center-align moaTitle">
                  <span style="font-size:15pt;">날짜별 모아보기</span>
                  <div style="padding-left:10px;padding-right:10px;">
                    <input type="date" class="datepicker"> ~
                    <input type="date" class="datepicker">
                  </div>
                  <div style="text-align:right;">
                    <a class="waves-effect waves-light btn" style="background-color:#41B883;margin-bottom:5px;">모아보기</a>
                  </div>              
                </div>
              </div>

              <div class="col s12 m6 l12">
                <div class="card grey lighten-5 center-align moaTitle">
                  <span style="font-size:15pt;">프로젝트별 모아보기</span>
                  <div style="padding-left:10px;padding-right:10px;">
                  </div>     
                  <div class="collection" style="font-size:11pt;">
                    <a @click="projectLogSearch(1)" id="proItem1" class="collection-item projectSelector" style="cursor:pointer">프로젝트1</a>
                    <a @click="projectLogSearch(2)" id="proItem2" class="collection-item projectSelector" style="cursor:pointer">프로젝트2</a>
                    <a @click="projectLogSearch(3)" id="proItem3" class="collection-item projectSelector" style="cursor:pointer">프로젝트3</a>
                    <a @click="projectLogSearch(4)" id="proItem4" class="collection-item projectSelector" style="cursor:pointer">프로젝트4</a>
                  </div>                       
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

  name: 'logList',
  components: {
    
  },
  data () {
    return {
      logData:[
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},
                {LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},

      ]
      ,projectData:[

      ]
      ,logCurrentCount:1
      ,limit:10
    }
  },
  methods:{
    //로그 수정 폼 열기
    logUpdateForm : function(logId){
      $('#logId'+logId).find('.edit').show();
      $('#logId'+logId).find('.view').hide();
    },
    //로그 수정 폼 닫기
    logUpdateFormOut : function(logId){
      $('#logId'+logId).find('.view').show();
      $('#logId'+logId).find('.edit').hide();
    },

    //로그 삭제 확인 창
    logDeleteForm : function(){
      if(confirm('삭제하시겠습니까?')==true){

      }else{

      }    
    },

    //날짜별 모아보기 

    //로그스크롤 끝
    logScroll : function(){   
        if($('#logScroll').scrollTop()+20 > $('#innerScroll').height() - $('#logScroll').height()+45 ){
          console.log('test');
          this.logData.push({LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'});
          this.logData.push({LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'});
          this.logData.push({LOG_ID:'1', LOG_WRITER:'작성자1',LOG_DATE:'2017-4-24',LOG_DETAIL:'본문1',LOG_PROJECT:'project1'},);     
        }
    }    

    //프로젝트별 모아보기
    ,projectLogSearch : function(proId){
      $('.projectSelector').removeClass('active');
      $('#proItem'+proId).addClass('active')
    }

  } //methods end

  ,mounted : function(){

    //init logData

    //datepicker
    $('.datepicker').pickadate({
        format: 'yyyy-mm-dd',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });       
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.collection .collection-item.active{
  background-color:#41B883;
}

.moaTitle {
    border-left: solid;
    border-left-color: #41B883;  
}


.edit {
  display:none;
}

.pointer{
  cursor:pointer;
}
</style>
