const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,

})
readline.question("enter the size of an array:",(n)=>{
    readline.question("enter the elements of an array:",(arr)=>{
        let array=[n]
        
        array.push(arr)
      for(let i=0;i<n;i++){

      }
      console.log(array);
})
})