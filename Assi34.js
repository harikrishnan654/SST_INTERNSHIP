class DateofBirth{
    constructor(year){
        this.year=year;
    }
    age(){
        const date=new Date();
        return date.getFullYear()-this.year;
    }
}
const myAge=new DateofBirth(2007);
console.log("the person is" +myAge.age()+ "years old");