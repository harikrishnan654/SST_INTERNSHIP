const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter the float value:",(a)=>{
        var num=parseFloat(a)
        function convertInt(num){
            number=parseInt(num);
            return number;
        }
        result=convertInt(a);
        console.log(result);
        readline.close();
})
    
