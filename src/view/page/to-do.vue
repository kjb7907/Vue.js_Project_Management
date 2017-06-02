
<template>
    <div class="container">
        <div class="row">

          <div class="col s12 l2">
            <div class="card">
              <div class="cyan darken-1" style="width:100%;height:60px;position:absolute;">&nbsp;</div>
              <div class="card-content" style="text-align:center;">
                <span class="card-title" style="position:relative;z-index:1;">                  
                  <div>
                    <img src="data:image/jpeg;base64,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" 
                         alt="" class="circle" style="width:70px;"> 
                  </div>          
                  bruce lee    
                </span>
               
                <div>남은 작업 : 9</div>
                <div>완료한 작업 : 40</div>
              </div>
              <div class="card-action" style="text-align:center;">
                <a href="#">작업 추가</a>
                <a href="#">작업 관리</a>
              </div>
            </div> 

          </div>
        </div>
    </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'name',

  components: {
    
  },

  data () {
    return {

    }
  }

  ,methods : {  

  } //methods end  

  // mounted == document ready 
  ,mounted : function(){    

  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
