function changecarpriceByvalue(price){
    price=25000;
    console.log("inside function,price",price);
}
let carprice=20000;
console.log("before function call,carprice",carprice);
changecarpriceByvalue(carprice);
console.log("after function call,carprice",carprice);