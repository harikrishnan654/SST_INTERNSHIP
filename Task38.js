const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
    readline.question("enter a radius:",(a)=>{
        const num=parseInt(a);
        var result=areaCircle(a);
        console.log(result); 


        function areaCircle(num){
        var area=Math.PI*Math.pow(num,2)
            return area;
        
        }


         


    })