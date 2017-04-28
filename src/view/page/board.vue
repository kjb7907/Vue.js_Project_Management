<template>
  <div class="hello">

    <div class="container test" v-on:scroll="test" style="margin-top:30px; max-width:800px;width:80%;overflow:scroll;padding:20px;">
      <div class="row">

        <nav>
            <div class="nav-wrapper red lighten-3">
                <a href="#" class="brand-logo center ">Name</a>
            </div>
        </nav>


        <div class="card" style="width:100%;">
            <div style="padding:10px;">
                <form>
                    <div class="row">
                    <div class="input-field col s4">
                        <input v-model="inputWriter" type="text" data-length="10" placeholder="작성자">
                    </div>
                    </div>
                    <div class="row">
                    <div class="input-field col s12">
                        <textarea v-model="inputDetail" class="materialize-textarea" data-length="120" placeholder="본문"></textarea>
                    </div>
                    </div>
                    <div style="height:50px;">
                        <button v-on:click="boardAdd" class="waves-effect waves-light btn red lighten-3" style="float:right;">등록</button>
                    </div>
                </form>
            </div>
        </div>


        <div v-for="board in boardData">
            <div id="boardMemo">
                <div class="card" style="width:100%;min-height:150px;">

                    <div style="padding:20px;">
                        <div style="margin-bottom:10px;">
                                <!--작성자 -->
                                <b>
                                    <span>
                                        {{board.writer}}
                                    </span>
                                </b>
                                <!-- 작성일 -->
                                <span style="float:right;color:#747474;">
                                    {{board.date}} &nbsp;
                                    <button @click="boardUpdate(board.id)">수정</button>
                                    <button @click="boardDel(board.id)">삭제</button>
                                </span>
                        </div>
                        <div class="divider"></div>
                        <!-- 본문 -->
                        <div style="padding-top:10px;">
                            {{board.detail}}
                        </div>
                    </div>

                </div>
            </div>
        </div>



      </div>
    </div>




  </div>
</template>

<script>

export default {
  name: 'board',
  data() {
      return {
        boardData : [
            {id:'1', writer:'작성자1',date:'2017-4-24',detail:'본문'},
            {id:'2', writer:'작성자2',date:'2017-4-24',detail:'본문'},
            {id:'3', writer:'작성자3',date:'2017-4-24',detail:'본문'},
            {id:'4', writer:'작성자4',date:'2017-4-24',detail:'본문'},
            {id:'5', writer:'작성자5',date:'2017-4-24',detail:'본문'}
        ]
        ,inputWriter:''
        ,inputDetail:''
      }
  }
  ,methods:{
      boardAdd : function(event){
          console.log(this);
        this.boardData.unshift({writer:this.inputWriter,date : '2018-04-20',detail:this.inputDetail})
        this.inputWriter = '';
        this.inputDetail = '';
      },
      boardDel : function(id){
        console.log(id);
        //DB삭제
        var isTrue = true;
        if(isTrue){
            for(var idx in this.boardData){
                if(this.boardData[idx]['id'] == id){
                    this.boardData.splice(idx,1);
                }
            }
            //삭제가 성공했으면 데이터 삭제
        } else {
            alert('삭제가 ~~사유로 실패했습니다.');
        }

      },
      boardUpdate : function(){


      },
      test : function(){

        console.log($(window).scrollTop()+'window');
        console.log($(window).height()+'window');
        console.log($(document).height()+'document');
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {

            }
      }
  }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
