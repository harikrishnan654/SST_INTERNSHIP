const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
function compare(){
    readline.question("enter a string\n",(first)=>{
        readline.question("enter second string\n",(second)=>{
            if(first==second){
                console.log("the two strings are same ");

            }
            else{
                    console.log("the two strings are not same");
            }
        })
    })
}
compare();