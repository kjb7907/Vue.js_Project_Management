
<template>
  <div class="hello">

    <div class="container">

      <div style="height:10px;"></div>    
      <nav class="grey lighten-5">
        <div class="nav-wrapper">
          <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">today</i>일정</a>
          <ul class="right ">
            <li>
              <a @click="scheduleAddModalOpen" style="color:#41B883;">
                <i class="material-icons left">add</i>일정등록
              </a>
            </li>
          </ul>        
        </div>
      </nav>

      <div style="height:10px;"></div>
      <full-calendar :events="fcEvents"
                    lang="en" 
                    @changeMonth="changeMonth"
                    @dayClick="dayClick"
                    @eventClick="eventClick"
                    @moreClick="moreClick">
      </full-calendar>    

      <!-- 일정 등록 modal -->
      <div id="scheduleAdd" class="modal">
        <div class="modal-content">
          <h4 style="font-weight:lighter;">일정등록</h4>
          <div class="row">

            
            <div class="col s12 l6">
              내용
              <input id="schDetail" type="text">
            </div>

            <div class="col s12 l3">
              시작일
              <input id="schStartDate" type="date">
            </div>      
            
            <div class="col s12 l3">
              종료일
              <input id="schCloseDate" type="date">
            </div>   

            <div class="col s12 l3">
              일정 색상
              <input type="text" id="schColor">
            </div>        

            <div class="col s12 l6">
              <div class="colorbox" style="background-color:#41B883;" colorValue="cal-normal"></div>
              <div class="colorbox" style="background-color:#ef5350;" colorValue="cal-red"></div>    
              <div class="colorbox" style="background-color:#00bcd4;" colorValue="cal-cyan"></div>           
            </div>                                   
            
          </div>
        </div>
        <div class="modal-footer">          
          <button @click="modalClose" class="modal-action modal-close waves-effect waves-green btn-flat">닫기</button>
          <button @click="scheduleAddAction" class="modal-action modal-close waves-effect waves-green btn-flat">등록</button>
        </div>
      </div>  

      <!-- day 상세 modal -->
      <div id="dayDetail" class="modal" style="max-width:500px;">
        <div class="modal-content">

          <template v-for="(day,index) in dayEvents">
            <div style="font-size:14pt;font-weight:lighter;">
              {{day.title}} 
              <a @click="dayScheduleDelete(day.SCH_ID,index)" style="font-size:10pt;">삭제</a>
            </div>
          </template>

        </div>
        <div class="modal-footer">
          <button @click="modalClose" class="modal-action modal-close waves-effect waves-green btn-flat">닫기</button>
        </div>

      </div>      
    </div>

 
    </div>
  
  </div>
</template>

<script>
var context = require('../../context.js');


export default {

  name: 'schedule',
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  
  data () {
    return {
        fcEvents : [ ]
        ,dayEvents : [ ]
      }
    }
  ,methods:{

    //달 변경
    changeMonth : function(start, end, current){
      console.log('changeMonth : '+start, end, current);

      let getSchadueData =
      $.ajax({
        url:context.hostUrl+'/searchSchedule',
        async:false,
        type:'post',
        data:{schStartDate:start,schCloseDate:end},
        dataType : "json",
        success : function(data){ },
        error : function(err){ console.log(err); }
      });   

      this.fcEvents = getSchadueData.responseJSON;  

    }

    //일 클릭
    ,dayClick : function(date, jsEvent, pos){

      //yyyy-mm-dd변환
      function pad(num) {
          num = num + '';
          return num.length < 2 ? '0' + num : num;
      }
      let celDate = date.getFullYear() +'' + pad(1+date.getMonth()) +'' + pad(date.getDate());

      let getSchadueData =
      $.ajax({
        url:context.hostUrl+'/searchDaySchedule',
        async:false,
        type:'post',
        data:{celDate:celDate},
        dataType : "json",
        success : function(data){ },
        error : function(err){ console.log(err); }
      });   

      this.dayEvents = getSchadueData.responseJSON;
     
      $('#dayDetail').modal('open');
    }

    ,eventClick : function(date){ }

    ,moreClick : function(){ }

    ,scheduleAddModalOpen : function(){
      $('#scheduleAdd').modal('open');
    }

    //일정등록
    ,scheduleAddAction : function(){
      let addSchedule =
      $.ajax({
        url:context.hostUrl+'/addSchedule',
        async:false,
        type:'post',
        data:{ schDetail : $('#schDetail').val() 
              ,schStartDate : $('#schStartDate').val()
              ,schCloseDate : $('#schCloseDate').val()
              ,schColor : $('#schColor').val()
              },
        dataType : "json",
        success : function(data){ },
        error : function(err){ console.log(err); }
      });  

      let sch = {
        title : $('#schDetail').val() 
        ,start : $('#schStartDate').val()
        ,end : $('#schCloseDate').val()
        ,cssClass : $('#schColor').val()
      }   

      this.fcEvents.push(sch);  

    } 

    //일정삭제
    ,dayScheduleDelete : function(SCH_ID,index){
      if(confirm('일정을 삭제 하시겠습니까?')==true){

        let schduleDelete=
        $.ajax({
          url:context.hostUrl+'/deleteSchedule',
          async:false,
          type:'post',
          data:{ schId:SCH_ID},
          dataType : "json",
          success : function(data){ },
          error : function(err){ console.log(err); }
        });

        //day event 에서 제거
        this.dayEvents.splice(index,1);
        //fc event 에서 제거
        let arr = this.fcEvents     
        for(var i in arr){
          if(arr[i].SCH_ID==SCH_ID){
            arr.splice(i,1)
            return ;
          }
        }  

      }
    }   

    ,modalClose : function(){
      $('.modal').modal('close');
    }
    ,setModal:function(date){
    
          console.log(date);   
    }


  } //method end

  ,mounted : function(){


    $('.colorbox').click(function(){
      $('#schColor').val($(this).attr('colorValue'));
    });

    //modal
    $('.modal').modal();
    //datepicker
    $('.datepicker').pickadate({
        format: 'yyyy-mm-dd',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });   

  } //mounted end

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>



  .cal-normal {
    background-color: #41B883!important;
    color : #FFFFFF!important;
  }
  
  .cal-red{
    background-color: #ef5350!important;
    color : #FFFFFF!important;
  }

  .cal-cyan{
    background-color: #00bcd4!important;
    color : #FFFFFF!important;    
  }

  .colorbox{
    width:30px;
    height:30px;
    display:inline-block;
    cursor:pointer;
  }


</style>
