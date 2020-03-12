/*
function a(){
  console.log('A');
}
*/
//익명함수, 변수의 값으로 함수를 사용
var a = function(){
  console.log('A');
}

//오래 걸리는 함수
function slowfunc(callback){
  callback();
}

slowfunc(a);
