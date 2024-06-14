let courses=["html","css","javascript","react","node.js","c"];
console.log("original Array: " + courses);
//let lastElement=courses.pop()
//console.log("after removed the last element:" + courses);
//let firstElement=courses.shift();
//console.log("after removed the first element:" + courses);
courses.splice(1,4);
console.log("after removed 2 elements starting from index 1: " + courses);