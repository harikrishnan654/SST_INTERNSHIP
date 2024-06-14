const numbers=[1,2,3,4,5];
function displayNumber(number,index){
    console.log("index",index,"value",number);
}

numbers.forEach(displayNumber);