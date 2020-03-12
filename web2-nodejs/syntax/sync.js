var fs = require('fs'); // require('fs'); 는 node 모듈에 파일시스템을 가져온다는 의미


//readFileSync 동기
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8')
console.log(result);
console.log('C');
//A-B-C


//readFile 비동기, return 값이 없음
console.log('A');
//call back : 파일을 읽은 후에 나중에 호출
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result);
});
console.log('C');
//A-C-B
