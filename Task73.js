var array1=[1,2,3,4,5]
var array2=[4,5,6,7,8]
var combined=[];

for(var i=0;i< array1.length;i++){
    combined[combined.length]=array1[i];
}
for(var j=0;j<array2.length;j++){
    combined[combined.length]=array2[j];
}


var uniqueElement=[];
for(var k=0;k<combined.length;k++){
    var element=combined[k];
    var count=0;

for(var l=0;l<combined.length; l++){
    if(combined[l]===element){
        count++;
    }
}

if(count===1){
    uniqueElement[uniqueElement.length]=element;
   }
}
console.log(uniqueElement);
