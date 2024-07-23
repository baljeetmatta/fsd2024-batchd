
//DOM

//console.log("Welcome to script");
// a=10;
// console.log(a);
// console.log(typeof(a));
// a="test";

// console.log(a);
// console.log(typeof(a));

// 'use strict'
// console.log(username);

// let  username="Code";
// console.log(username);

//var username="Test";
// userName="Test";
// console.log(username);
//int sum(int,int)
// test();

// function test()
// {
//     console.log("Test called")
// }

// var test=function()
// {
//     console.log("Function called");
// }
// //console.log(test());

// test();
/*
function test(x,y=0)
{
    console.log("Test called",x,y);
    //console.log(arguments[0]);
return x+y;
}
let result=test(23,2);
console.log(result);
*/
//callback
// function test()
// {
//     console.log("My Task");
// }
// function test1()
// {
//     console.log("My Task 1");
// }

// function executeTask(task)
// {
//     console.log("Task being executed");
//     task();
        
// }

// executeTask(function(){
//     console.log("Another function")
// });

 //executeTask(test1());

 //ARRAY
// let arr=[];
// arr[20]=10;
// arr[50]=1;

// 1. Data d; //Compile JavaX
// 2. Data *p=new Data();
// Data d; reference/kind of pointer =null
//d=new Data();


// Data d=new Data()
//let d=new Data();
//let arr=new Array(5);

// let arr=[23,3,4,6];

// let result=arr.map(function(item){
// //     if(item%2==0)
// //     return item*2;
// // else

// // return item;
//     return (item%2==0?item*2:item);
    


// })

//console.log(result);

// let result=[];
// arr.forEach(function(item){
// if(item%2==0)
//         result.push(item*2)
//     else
//     result.push(item);
// });
// console.log(result);



//let result=[];
// arr.forEach(function(item){
//     if(item%2==0)
//         result.push(item)
// });
// let result=arr.filter(function(item){
//     if(item%2==0)
//         return true;
    

// })
//console.log(result);
// for(i=0;i<arr.length;i++)
//     console.log(arr[i]);

// arr.forEach(function(item){
//     console.log(item);
    
// })



// let arr1=[100,200,300];
// function print(item,index,array)
// {

//     console.log("Called",item);

// }
// function print1()
// {
//     console.log("Another");

// }
// printArray(arr1,print);
//printArray(arr1,print1);

//console.log(arr);
// arr.push(100);
// console.log(arr);
// let item=arr.pop();
// console.log(arr);
// console.log('item removed is ',item);
//printArray(arr1);


// arr.unshift(100);
// console.log(arr);

// arr.splice(2,2,100,101,102,103);
// console.log(arr);


// function printArray(array,task){

// for(i=0;i<array.length;i++)
//    // console.log(array[i]);
//     task(array[i],i,array);


// }
//OBJECTS
// let obj={name:'Code','age':30,name:'test',
//     education:['10','12th'],
//     marks:{'post graduate':1900,'10th':490,'a12th':510}
// };


// obj.city="Karnal";

// console.log(obj.education[0]);
// //obj.education.forEach
// obj.marks["post graduate"]
// ;
// delete obj.city;
// console.log(obj);
// let obj={};
// obj.name="Code";
// obj.age=30;
// console.log(obj);
// let obj=new Object();

// obj.name="Code";
// obj.age=30;
// console.log(obj);
// let obj={
//     name:"Code",
//     age:30,
//     // getName:function(){
//     //     console.log(obj.name);

//     // }
//   //  getName:getMyName
// }
// for(x in obj)
//     {
//         console.log(x);
//         console.log(obj[x]);
        
        
//     }

// let x=obj;
// let a=10;
// let b=a;

// x.age=100;
// console.log(obj);

// let obj1={
//     name:"Quotient",
//     age:40,
//     // getName:function(){
//     //     console.log(obj.name);

//     // }
//     getName:getMyName
// }


// 1
// function getMyName()
// {
//     console.log(this.name);

// }
// obj1.getName();




const arr=[1,2,3];
arr[Symbol.iterator]=num;
for (const num of arr){
    console.log(num);
}