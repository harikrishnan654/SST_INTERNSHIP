function outerFunction(){
    let outerVariable='I am outsude!';
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}
const myClosure=outerFunction();
myClosure();//"I am outside!"