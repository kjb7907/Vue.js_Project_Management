<template>
  <div id="app">
  
    <div class="fixed-action-btn">
        <a class="btn-floating btn-large" style="background-color:#35495E;">
        <i class="large material-icons">dashboard</i>
        </a>
        <ul>
        <li><a href="#/schedule" class="btn-floating green"><i class="material-icons">today</i></a></li>
        <li><a href="#/projectList" class="btn-floating red"><i class="material-icons">description</i></a></li>
        <li><a href="#/logList" class="btn-floating yellow darken-1"><i class="material-icons">chat</i></a></li>
        <li><a href="#/logAdd" class="btn-floating blue"><i class="material-icons">edit</i></a></li>
        

        </ul>
    </div>
        
  </div>
</template>

<script>



export default {
  name: 'floatingMenu'
}
</script>

<style>

</style>
