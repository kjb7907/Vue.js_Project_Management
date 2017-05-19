
<template>
  <div>
    <h5>컴포넌트1</h5>
    {{parentData}}
    <button @click="btnClick">버튼</button>
  </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'child2',

  components: {
    
  },

  props : [
    'parentData'
  ],

  data () {
    return {

    }
  }

  ,methods : {  
    btnClick : function(){

      var child='자식데이터1';
      this.$emit('btnClick',child);
    }
  } //methods end  

  // mounted == document ready 
  ,mounted : function(){    
    console.log(this);
    console.log('자식1');
  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
