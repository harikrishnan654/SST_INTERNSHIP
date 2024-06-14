const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,

})
readline.question("enter the student name:",(a)=>{
    readline.question("enter your roll number:",(b)=>{
      readline.question("enter your age:",(c)=>{
        readline.question("enter your class:",(d)=>{
      const person={          
      
        firstname:a,
        rollnumber:b,
        age:c,
        class:d,
      
      details:function(){
        console.log("/nName: "+person.firstname);
        console.log("roll no: "+person.rollnumber);
        console.log("age: "+person.age);
        console.log("class: "+person.class);
      }
    };
    person.details();
    readline.close();
  });
});
    });
  });
  
      
                
              
          

    
