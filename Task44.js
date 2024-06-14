function modifyObject(obj){
    obj.value=100;
    console.log(obj.value);
}
let myobj={value:50};
console.log(myobj.value);
modifyObject(myobj);
console.log(myobj.value);