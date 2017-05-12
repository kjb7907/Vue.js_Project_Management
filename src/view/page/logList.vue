
<template>
  <div class="hello">
    <div class="container">
        <div style="height:10px;"></div>    

        <h1>준비중</h1>

        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">chat</i>로그</a>
          </div>
        </nav>  

        <div class="row">

          <!-- 로그 -->


          <div class="col s9 flow-text">

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
                      <div class="row" :id="'logId'+log.id">

                        <!-- 로그 view -->
                        <div class="view">
                          <div class="col s2">
                            {{log.writer}} :                  
                          </div>

                          <div class="col s8">
                            {{log.detail}}
                          </div>  

                          <div class="col s2">
                            <div style="font-size:8pt;color:#41B883">{{log.project}}</div>  
                            {{log.date}}</br>
                            <a class="pointer" @click="logUpdateForm(log.id)">수정</a> 
                            <a class="pointer" @click="logDeleteForm(log.id)">삭제</a>
                          </div>                     
                        </div>

                        <!-- 로그 edit -->
                        <div class="edit">
                          <div class="col s2">
                            <input type="text" :value="log.writer">                
                          </div>

                          <div class="col s8">
                            <textarea class="materialize-textarea" data-length="120" style="font-size:10pt;">{{log.detail}}</textarea>
                          </div>  

                          <div class="col s2">
                            <a class="pointer" @click="logUpdateForm(log.id)">확인</a> 
                            <a class="pointer" @click="logUpdateFormOut(log.id)">취소</a>
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
          <div class="col s3 flow-text">

            <div class="card grey lighten-5 center-align moaTitle">
              <span style="font-size:15pt;">날짜별 모아보기</span>
              <div style="padding-left:10px;padding-right:10px;">
                <input type="date" class="datepicker">
              </div>
              <div style="text-align:right;">
                <a class="waves-effect waves-light btn" style="background-color:#41B883;margin-bottom:5px;">정렬</a>
              </div>              
            </div>

            <div class="card grey lighten-5 center-align moaTitle">
              <span style="font-size:15pt;">프로젝트별 모아보기</span>
              <div style="padding-left:10px;padding-right:10px;">
              </div>              
            </div>    

            <div class="collection card" style="font-size:11pt;">
              <a class="collection-item">프로젝트1</a>
              <a class="collection-item active">프로젝트2</a>
              <a class="collection-item">프로젝트3</a>
              <a class="collection-item">프로젝트4</a>
            </div>

          </div>          
          
        </div>

    </div>
  </div>
</template>

<script>

export default {

  name: 'logList',
  components: {
    
  },
  data () {
    return {
      logData:[
              {id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문1',project:'project1'},
              {id:'2', writer:'작성자2',date:'2017-4-24',detail:'본문2',project:'project2'},
              {id:'3', writer:'작성자3',date:'2017-4-24',detail:'본문3',project:'project3'},
              {id:'4', writer:'작성자4',date:'2017-4-24',detail:'본문4',project:'project4'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'}        
      ]
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
    //프로젝트별 모아보기
    //로그스크롤 끝
    logScroll(){   
        if($('#logScroll').scrollTop()+20 > $('#innerScroll').height() - $('#logScroll').height()+45 ){
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문asd2asd'});
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본123d문2asd'});
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문asdasd2asd'});

          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문2aasdasdsd'});
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본asdas문2asd'});
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본asd문2asd'});
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본asd문2asd'});
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문sdasd2asd'});
          this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문asd2asd'});
          
        }             
    }    
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
