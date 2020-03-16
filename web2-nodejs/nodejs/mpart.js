var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}

//M 객체를 밖에서 사용하도록 
module.exports = M;
