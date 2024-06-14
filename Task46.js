function changecarpriceByrefrence(car){
    car.price=25000;
    console.log("inside function,car price:",car.price);
}
let car={
    model:"Toyota",
    price:"20000",
};
console.log("before function call,car model:",car.model);
console.log("before function call,car price:",car.price);
changecarpriceByrefrence(car);
console.log("after function call,car model:",car.model);
console.log("after function call,car model:",car.price);
