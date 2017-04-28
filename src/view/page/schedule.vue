
<template>
  <div class="hello">
    <div class="container">
      <h5>준비중</h5>
    </div>
  </div>
</template>

<script>

export default {

  name: 'schedule',
  components: {
    'topNaviMenu': () => import('../module/topNaviMenu'),
    'floatingMenu': () => import('../module/floatingMenu')
  },
  data () {
    return {
      msg: 'index',
      }
    },
  methods:{
    ajaxTest:function(){
        $.ajax({
            url:'/ajaxTest',
            type:'get',
            data:'',
            dataType : "json",
            success:function(data){ 
              console.log('성공');
              console.log(data);
            },
            error:function(err){
              console.log('실패');
              console.log(err);
            }
        });
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
