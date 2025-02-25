// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }

// var result = add(2,5);
// console.log(result);

// (function(){
//     console.log('prince');
// })();

//call back function
// function callback(){
//     console.log('now adding is successful complete');
// }

// const add =function(a,b,callback){
//     var result =a+b;
//     console.log('result: '+result);
//     callback();
// }

// add(3,100,callback)

const add =function(a,b,prince){
    var result =a+b;
    console.log('result: '+result);
    prince();
}

// add(2,3,function(){
//     console.log('add completed');
// });

add(2,3, ()=>console.log('add completed'));
 
const file=require('./importFiles');
var _=require('loadash');


console.log('server file is avilable');
var age=file.age;

var result=file.addNumber(age+18, 10);
console.log(age);
console.log('result is now '+result);

