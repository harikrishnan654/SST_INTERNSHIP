const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the string:",(name)=>{

const myFunc=function(string){
    var hg=string;
    let  pg=hg.split("").reverse().join("");
    if(hg===pg){
        
        var yeh=( string+" is a palindrome");
        return yeh;
    }
    else{
        var nop=(string+" is not palindrome");
        return nop;
    }
}
let result=myFunc(name);
console.log(result);
readline.close();
})