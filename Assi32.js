class product{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }

product(){
    var produ;
    produ=this.num1*this.num2;
    return produ;
}

}
const multi=new product(5,5);
console.log("product is "+multi.product());