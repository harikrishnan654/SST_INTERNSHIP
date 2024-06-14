const person={
    fullName:function(city,country){
        return this.firstName+" " +this.lastName + "," + city+","+ country;
    }
}
const person1={
    firstName:"Harikrishnan",
    lastName:"MA",
}
console.log(person.fullName.apply(person1,["india","norway"]))
