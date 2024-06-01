const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("enter first number:",(x)=>{
    readline.question("enter the second number:",(y)=>{
       
        
function addition(num1,num2){
    const numm1=parseInt(x);
    const numm2=parseInt(y);

    var sum;
    sum=numm1+numm2;
    console.log(sum);
}
addition(x,y);
function substraction(num1,num2){
    var sub;
    sub=num1-num2;
    console.log(sub);
}
substraction(x,y);
function multiplication(num1,num2){
    var multi;
    multi=num1*num2;
    console.log(multi);
}
multiplication(x,y);
function division(num1,num2){
    var div;
    div=num1/num2;
    console.log(div);
}
division(x,y)
readline.close();
    })
})