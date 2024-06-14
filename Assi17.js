const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
function area(){
    readline.question("enter the length of rectangle:",(a)=>{
        readline.question("enter the bredth of rectangle:",(b)=>{
            const num1=parseInt(a);
            const num2=parseInt(b);

            var area;
            area= num1*num2;
            console.log("the area of rectanle"+area)
            })
}       
)}

area();