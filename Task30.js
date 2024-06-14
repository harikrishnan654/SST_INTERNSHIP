const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

    readline.question("enter the length of rectangle:",(a)=>{
        readline.question("enter the breadth of rectangle:",(b)=>{
            const num1=parseInt(a);
            const num2=parseInt(b);
            function myFunction(a,b){
                let area;
                area=a*b;
                console.log("the area of triangle"+area);
            }
myFunction(a,b);
readline.close();
        })
    })
        
       

                  
        
