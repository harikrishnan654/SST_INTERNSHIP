class calc{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
adding(){
    var sum;
    sum=this.num1+this.num2;
    return sum;
}
sub(){
    var sum;
    sum=this.num1-this.num2;
    return sum;
}
div(){
    var sum;
    sum=this.num1/this.num2;
    return sum;
}
multi(){
    var sum;
    sum=this.num1/this.num2;
    return sum;
}
}
const mainsum=new calc(5,7);
console.log("adding "+mainsum.adding());
console.log("sub "+mainsum.sub());
console.log("div "+mainsum.div());
console.log("multi "+mainsum.multi())