const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
    readline.question("enter a number:",(num)=>{
        var num=parseInt(num) 
        function myFunction(num){

    
          var square;
           square=num*num;
           return square;

        }
        var result=myFunction(num);
        console.log(result);

    }) 

