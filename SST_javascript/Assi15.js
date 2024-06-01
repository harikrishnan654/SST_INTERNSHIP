const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
function stringNum(){
    readline.question("enter a string:",(str)=>{
        readline.question("enter an integer:",(int)=>{
          var num=parseInt(int);
          console.log("the string is "+str+"the number is "+int);  
        })
        

    })

}
stringNum();

    
    