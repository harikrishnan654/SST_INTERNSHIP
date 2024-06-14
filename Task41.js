const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the name:",(a)=>{
    const myFunc=function(name){
        var nameis=name;
        return nameis;
    }; 
  var result= myFunc(a);
  console.log("hello "+ result);
  readline.close();
});
