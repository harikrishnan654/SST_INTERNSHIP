const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("enter first number:",(x)=>{
    readline.question("enter the second number:",(y)=>{
        const num1=parseInt(x);
        const num2=parseInt(y);
   
    function myFunction(x,y){
    let product;
    product=x*y;
    console.log("the product is"+product);

}
myFunction(x,y);
readline.close();
    })

})
