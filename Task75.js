const person={
    firstName:"harikrishnan",
    lastName:"MA",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
const member={
    firstName:"hege",
    lastName:"Nilsen",
}
let fullName=person.fullName.bind(member);
console.log(fullName());