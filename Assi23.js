var z;
function adding(a,b,callback){
  z=a+b;
  callback();
}
function displayResult(){
  console.log(z);
}
adding(3,5,displayResult);