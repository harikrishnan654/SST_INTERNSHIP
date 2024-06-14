function myFunction(i){
    var sum=0;
    while(i>0){


    mod=i%10;
    sum+=mod;
     i=parseInt(i/10);
     
    
    }
    console.log("sum is"+sum);
}
myFunction(356);

