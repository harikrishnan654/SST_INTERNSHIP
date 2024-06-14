class rectangle{
   constructor(length,bredth){
    this.length=length;
    this.bredth=bredth;
   }
   area(){
    const area=this.length*this.bredth;
    return area; 
   }
}
const arearect=new rectangle(5,6)
console.log("area of reactangle is "+arearect.area());
