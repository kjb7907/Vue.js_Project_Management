
<template>
  <div class="hello">
    
    <div class="row">
      <div class="col s12">
        <full-calendar :events="fcEvents" locale="en"></full-calendar>
      </div>
    </div>
  
  </div>
</template>

<script>
var demoEvents = [
	{
      title : '캘린더 테스트1',
      start : '2017-05-10',
      end : '2017-05-10'
    }

  ,	{
      title : '캘린더 테스트2',
      start : '2017-05-10',
      end : '2017-05-10'
    }
  ,	{
      title : '캘린더 테스트3',
      start : '2017-05-12',
      end : '2017-05-12'
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


  } //method end

  ,mounted : function(){


  } //mounted end

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
