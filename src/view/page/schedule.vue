
<template>
  <div class="hello">

    <div class="container">

      <div style="height:10px;"></div>    
      <nav class="grey lighten-5">
        <div class="nav-wrapper">
          <a class="brand-logo center"style="color:#41B883;"><i class="material-icons large">today</i>일정</a>
        </div>
      </nav>

      <div style="height:10px;"></div>
      <full-calendar :events="fcEvents" locale="en"
                    @changeMonth="changeMonth"
                    @dayClick="dayClick"
                    @eventClick="eventClick"
                    @moreClick="moreClick">
      </full-calendar>        
    </div>

 
    </div>
  
  </div>
</template>

<script>

var demoEvents = [
    {
      title : '캘린더 테스트1asdsadasdasd',
      start : '2017-05-12',
      end : '2017-05-13',
      testid : 1,
      cssClass : 'cal-red'
    }    
    ,
    {
      title : '캘린더 테스트2sadasdasdasdsda',
      start : '2017-05-14',
      end : '2017-05-14',
      testid : 2,
      cssClass : 'cal-normal'
    }     
]
export default {

  name: 'schedule',
  components: {
    'full-calendar': require('vue-fullcalendar')
  },
  data () {
    return {
        fcEvents : demoEvents
      }
    }
  ,methods:{
    test : function(){
      console.log(this.$emit);
    }
    ,changeMonth : function(start, end, current){
      console.log('changeMonth : '+start, end, current);
    }
    ,dayClick : function(event, jsEvent, pos){
      console.log('dayClick : '+event, jsEvent, pos);
    }
    ,eventClick : function(){
      console.log('eventClick');
    }
    ,moreClick : function(){
      console.log('moreClick');
    }

  } //method end

  ,mounted : function(){


    

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



</style>
