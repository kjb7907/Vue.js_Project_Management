
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

            <div v-for="log in logData">
              <div class="card grey lighten-5 moaTitle">
                <div style="padding:5px;font-size:10pt">
                  <div class="row">

                    <div class="col s2">
                      {{log.writer}} :                  
                    </div>

                    <div class="col s8">
                      {{log.detail}}
                    </div>  

                    <div class="col s2">
                      <div style="font-size:8pt;color:#41B883">{{log.project}}</div>  
                      {{log.date}}</br>
                      <a @click="logUpdateForm(log.id)">수정</a> 
                      <a @click="logDeleteForm(log.id)">삭제</a>
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
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문5',project:'project5'}        
      ]
    }
  },
  methods:{
    logUpdateForm : function(){
      alert('업데이트 폼 열기');
    },
    logDeleteForm : function(){
      if(confirm('삭제 폼 열기')==true){

      }else{

      }
      
    }
  }
}
$(document).on('click','.datepicker',function(){
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });   
})






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
</style>
