
 const navAparecer=document.querySelector(".nav-elementos")


 const buttonToogle= document.querySelector("#button-toggle");
 buttonToogle.addEventListener("click",function(){
  navAparecer.classList.toggle("active");
  }) 

 

//  document.addEventListener("DOMContentLoaded", function() {
//     const navAparecer = document.querySelector(".nav-elementos");
//     const buttonToogle = document.querySelector("#button-toggle");

//     buttonToogle.addEventListener("click", function() {
//         navAparecer.classList.toggle("active");
//     });
// });