
<template>
    <div>
        <div class="card"style="text-align:center">
            <div class="row">

            <div class="col s4">
                <i class="large material-icons" :style="'color:#'+projectData.PRO_COLOR">receipt</i>
                <div>시작일 : {{projectData.PRO_START_DATE}}</div>
                <div>마감예정일 : {{projectData.PRO_CLOSE_DATE}} </div>
            </div>
        
            <div class="col s4">
                <i class="large material-icons" :style="'color:#'+projectData.PRO_COLOR">insert_chart</i>
                <div>프로젝트 진행율 : {{projectData.PRO_PROGRESS}}%</div>
                <div class="container">
                <div class="progress" style="height:20px">
                    <div class="determinate" :style="'width:'+ projectData.PRO_PROGRESS+'%;background-color:#'+projectData.PRO_COLOR+';'"></div>
                </div>
                </div>           
            </div> 

            <div class="col s4">
                <i class="large material-icons" :style="'color:#'+projectData.PRO_COLOR">assignment_ind</i>
                <div>담당자 연락처 : {{projectData.PRO_CONTACT}}</div>      
            </div>               

            </div>    
        </div>
    </div>
</template>

<script>

var context = require('../../context.js');

export default {

  name: 'projectInfo',

  components: {
    
  },

  props:['projectData'],

  data () {
    return {
        projectId: this.$route.params.projectId,        
    }
  }

  ,methods : {  

  } //methods end  


  ,mounted : function(){    

  } //mounted end


} //export default end   




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
