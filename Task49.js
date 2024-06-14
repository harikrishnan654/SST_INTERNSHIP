const greet=function(name){
    return "Hello," +name+"!";
};
function displayGreeting(greetingFunction){
    console.log(greetingFunction("John"));
}
console.log(greet("Alice"));
displayGreeting(greet);
