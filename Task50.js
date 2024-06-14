function applyoperation(value,operation){
    return operation(value);

}
function double(num){
    return num*2;
}
console.log(applyoperation(4,double));