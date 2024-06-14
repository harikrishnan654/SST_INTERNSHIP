const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
function name(){
    readline.question("enter your name:",(name)=>{

        readline.question("enter your age:",(age)=>{
            console.log(name+" is "+age+"years old ");
     })
  }) 
}
    
name()

