
<template>
  <div class="hello">
    <div class="container">

        <div style="height:10px;"></div>    

        <nav class="grey lighten-5">
          <div class="nav-wrapper">
            <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">assignment</i>Project 1</a>
          </div>
        </nav>  

      <div class="card grey lighten-5 " style="padding:10px;">
        <div class="row">

        <div class="col s12">
          <div class="card"style="text-align:center">
            <div class="row">
              <div class="col s4">
                <i class="large material-icons" style="color:#41B883">receipt</i>
                <div>시작일 : 2017-04-20</div>
                <div>마감예정일 : 2017-05-20 </div>
              </div>
          
              <div class="col s4">
                <i class="large material-icons" style="color:#41B883">insert_chart</i>
                <div>프로젝트 진행율 : 70%</div>
                <div class="container">
                  <div class="progress" style="height:20px">
                      <div class="determinate" style="width: 70%;background-color:#41B883"></div>
                  </div>
                </div>           
              </div>                
            </div>    
          </div>
        </div>
        
        <div class="col s8">

          <div @scroll="logScroll()" id="logScroll" style="height:600px;overflow:auto">

            <div id="innerScroll">
        
              <div class="card"style="text-align:center">
                <i class="material-icons" style="color:#41B883;position:relative;top:5px;">comment</i><span style="font-size:15pt;">로그</span>
              </div>

              <!-- 로그 추가 -->
              <div class="card">

                <!-- 로그 추가 버튼 -->
                <div v-if="formAdd" class="center-align">
                  <a @click="logAddForm()" style="cursor:Pointer;"><i class="material-icons medium"style="color:#41B883">add</i></a>
                </div>
                <!-- 로그 추가버튼 클릭시 -->
                <div v-else>
                
                  <form>
                    <div style="padding: 10px 20px 30px 20px;">

                      <div class="input-field">
                        <input id="input_text" type="text" data-length="10">
                        <label for="icon_prefix">작성자</label>
                        <!-- 본문 -->
                        <div class="row">
                          <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>
                            <label for="textarea1">본문</label>
                          </div>
                        </div>                      
                                      
                      </div>


                      <button @click="logAddForm()"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">취소</button>                
                      <button @click="logAddForm()"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">확인</button> 

                    </div>                  
                  </form>            
                </div>              
              </div>    

              <!-- 로그 -->
              
              <div v-for="log in logData">
                <div id="logMemo">
                    <div class="card" style="width:100%;min-height:100px;">
                                              
                      <div class="row" :id="'memoKey'+log.id" >

                        <!-- 로그 view-->                            
                        <div class="view log">

                          <!-- 작성자 -->
                          <span style="color:#424242;margin-left:10px;">{{log.writer}}</span>

                          <!-- 작성일 -->
                          <span style="float:right;color:#747474;">{{log.date}} &nbsp;</span>


                          <!-- 구분선 -->
                          <div class="divider" style="margin:10px;"></div>    

                          <!-- 본문 -->                                                  
                          <div class="col s12">
                            {{log.detail}}
                          </div> 

                          <!-- 버튼 -->
                          <button @click="logDelForm(log.id)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">삭제</button>    
                          <button @click="logUpdateForm(log.id)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">수정</button>                                

                        </div>

                        <!-- 로그 수정 -->
                        <div class="edit log">

                          <!-- 작성자 -->
                          <div class="row">
                            <div class="col s6">
                              <div>                              
                              <input type="text" style="font-size:10pt;"v-bind:value="log.writer"/>
                              </div>                            
                            </div>
                          </div>                            

                          <div>
                            <div class="input-field col s12">
                              <textarea  class="materialize-textarea" data-length="120" style="font-size:10pt;">{{log.detail}}</textarea>
                            </div>                                     
                          </div>

                          <button @click="logConfirm(log.id)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">취소</button>   
                          <button @click="logConfirm(log.id)"class="waves-effect waves-teal btn-flat" style="color:#41B883;font-size:9pt;float:right;">확인</button>                              

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
                  <a @click="checkAddForm()"><i class="material-icons"style="color:#41B883;">add</i></a>
                </div>              
              </div>             
              <!-- 체크리스트 등록 폼 열기-->
              <div v-else>
                  <div><input type="text"></div>
                  <a @click="checkAddForm()" class="waves-effect waves-teal btn-flat"style="color:#41B883;font-size:10pt;float:right;">취소</a>
                  <a @click="checkAddForm()" class="waves-effect waves-teal btn-flat"style="color:#41B883;font-size:10pt;float:right;">등록</a>                
              </div>


              


              <!-- 체크리스트 -->
              <div v-for="check in checkList">
                <p>
                  <input type="checkbox" v-bind:id="check.id" :name="check.id" v-model="check.checked"/>                
                  <label :for="check.id">{{check.detail}}</label>                 
                </p>                          
              </div>   
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

export default {

  name: 'projectDetail',
  components: {
    
  },
  data () {
    return {     
        logData : [
              {id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문2'},
              {id:'2', writer:'작성자2',date:'2017-4-24',detail:'본문3'},
              {id:'3', writer:'작성자3',date:'2017-4-24',detail:'본문4'},
              {id:'4', writer:'작성자4',date:'2017-4-24',detail:'본문5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문6'}          
        ]
        ,checkList : [
            {id:'1',detail:'요구사항 분석',checked:"true"},
            {id:'2',detail:'아키텍쳐 설계',checked:true},
            {id:'3',detail:'db 설계',checked:false}          
        ]
        ,formAdd: true
        ,checkAdd: true

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
            },

            //체크리스트 등록 폼 열기 닫기
            checkAddForm : function(){
              if(this.checkAdd==true){
                this.checkAdd=false;
              }else{
                this.checkAdd=true;
              }
            },      

            //수정버튼 클릭 수정폼 열기 
            logUpdateForm :function(id){
              $("#memoKey"+id).find(".view").each(function(){
                $(this).hide();
              });
              $("#memoKey"+id).find(".edit").each(function(){
                $(this).show();
              });              
            },

            //수정 확인
            logConfirm :function(id){
              $("#memoKey"+id).find(".view").each(function(){
                $(this).show();
              });
              $("#memoKey"+id).find(".edit").each(function(){
                $(this).hide();
              });   
            },     

            //삭제버튼 클릭 삭제확인창 열기
            logDelForm :function(id){
              console.log(this.logData);
              confirm('삭제창 열기');
            },

            //로그 스크롤 끝
            logScroll(){   
                if($('#logScroll').scrollTop() == $('#innerScroll').height() - $('#logScroll').height()+45 ){
                  this.logData.push({id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문2asd'});
                }             
            }

          } //methods end  

  // mounted == document ready 
  ,mounted : function(){

            
           } //mounted end


} //export default end   



var logDataArr = [
              {id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문2'},
              {id:'2', writer:'작성자2',date:'2017-4-24',detail:'본문3'},
              {id:'3', writer:'작성자3',date:'2017-4-24',detail:'본문4'},
              {id:'4', writer:'작성자4',date:'2017-4-24',detail:'본문5'},
              {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문6'}
            ]

var checkListArr = [
            {id:'1',detail:'요구사항 분석',checked:"true"},
            {id:'2',detail:'아키텍쳐 설계',checked:true},
            {id:'3',detail:'db 설계',checked:false}
          ]    

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
