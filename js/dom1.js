// let mypara=document.querySelector("#mypara");
// mypara.addEventListener("click",test)
//console.log(mypara);
//console.log(mypara.classList);

//mypara.setAttribute("class","x");
// mypara.classList.add("x");
// mypara.classList.remove("y");
// mypara.classList.toggle("x");
// function test()
// {
//     console.log("Test called-event raised");

// }

// let btn=document.querySelector("#btn");
// btn.addEventListener("click",function(){
//     console.log("Button clicked");

// })

// let btn1=document.querySelector("#btn1");
// let btn2=document.querySelector("#btn2");

// btn1.addEventListener("click",clickHandler);
// btn2.addEventListener("click",clickHandler);
// function clickHandler()
// {
//     console.log("Event Raised")
// }
// let digits=document.querySelector("#digits");

// let btns=document.querySelectorAll(".btns");
// btns.forEach(function (item){
//     item.addEventListener("click",clickHandler)
// })


// function clickHandler(event)
// {

//     if(digits.innerHTML=="0")
//         digits.innerHTML="";
// //a=a+10;
// //a+=10;

//     digits.innerHTML=digits.innerHTML+event.target.innerHTML;
//     //console.log("Clicked",event.target);
    

// }


let btn=document.querySelector("#btn");
let parent=document.querySelector("#parent");

btn.addEventListener("click",clickHandler)
function clickHandler()
{
    let p=document.createElement("p");
    p.innerHTML="Contet dynamic";
    p.setAttribute("id","p1");
    parent.append(p);


}
let delbtn=document.querySelector("#delbtn");
delbtn.addEventListener("click",deleteHandler);
function deleteHandler()
{
    let p1=document.querySelector("#p1");
    p1.remove();
    

}

