var express = require('express');//익스프레스 모듈 로드해 변수에 저장
var app = express(); //애플리케이션이라는 객체를 리턴한다.
app.use(express.static('dist')); // 정적인 파일이 위치할 디렉터리를 지정하는 코드



app.get('/ajaxTest', function(req,res) {
  console.log('ajaxTest 라우터');
  var arr = [
    {id:'1',name:'user1'},
    {id:'2',name:'user2'},
    {id:'3',name:'user3'},
    {id:'4',name:'user4'}
  ]
  res.send(arr);
});



app.listen(3000,function(){ //3000번 포트 리스닝
  console.log('Connected 3000 port'); //리스닝이 실행되면 콘솔에 출력
});
