function hasproperty(obj,prop){
for(var key in obj){
 if(key === prop){
    return true;
 }
  }
  return false;
}
var person={
    name:"hari",
    age:16,
    occupation:"Engineer"
};
var res=hasproperty(person, "name1");
if(res == true)
{
  console.log("present");
}
else
{
  console.log("not present")
}