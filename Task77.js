class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    
}
age(){
    const date=new Date();
    return date.getFullYear()-this.year;
  }  
}
const mycar=new car("ford",2014);
console.log("mycar is"+mycar.age()+"years old");
