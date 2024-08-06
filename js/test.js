// // let  request=new XMLHttpRequest();
// // request.open("POST","https://reqres.in/api/users");
// // ///request.setRequestHeader("Content-Type","application/json");

// // request.addEventListener("load",function(response){
// //    //sconsole.log(response);
// //     console.log(request.responseText);
    
// // })
// // request.onreadystatechange=function(){
// //     console.log(request.readyState);

// // }
// // console.log("called");

// // let json={name:'test',job:'testjob'}
// // request.send(JSON.stringify(json));

// let data=fetch("https://reqres.in/api/users?page=2").then(function(response){
//     return response.json();
// }).then(function(response){
//   //  console.log(response);
    
// })

// async function  code()
// {
//     let result=await fetch("https://reqres.in/api/users?page=2");
//     let jsonresult=await result.json();

//     console.log(jsonresult.data);


// }
// code()