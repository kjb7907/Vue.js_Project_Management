
<template>
  <div class="container">
    <h4>부모 자식간 데이터 바인딩 테스트</h4>
    {{parentData1}}

    <div class="row">
      <div class="col s12">
        <testComponent1 :parentData="parentData1"
                        v-on:btnClick="parentEvent">
        </testComponent1>
      </div>
    </div>

    <div class="row">
      <div class="col s12">
        <testComponent2 :parentData.sync="parentData1">
        </testComponent2>
      </div>
    </div>    

  </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'parent',

  components: {
    'testComponent1': () => import('../components/testComponent1'),
    'testComponent2': () => import('../components/testComponent2')    
  },

  data () {
    return {
      parentData1:'부모 데이터1',
      parentData2:'부모 데이터2'
    }
  }

  ,methods : {
    parentEvent : function(child){
      this.parentData1=child;
    }
 
  } //methods end  

  // mounted == document ready 
  ,mounted : function(){    
    console.log('부모');
    console.log(this.$refs);
  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
