class sumofDigit{
    constructor(a){
      this.a=a;  
    }
    digits(){
       var result=0;


       while(this.a>0){
        result=result+this.a%10;
        this.a=parseInt(this.a/10);
        
       } 
       return result;
    }
}
const sum=new sumofDigit(235);
console.log(sum.digits());

