"use strict";
//HLJS
setTimeout(function(){ 
  hljs.highlightAll();
  hljs.initHighlightingOnLoad();
  hljs.initLineNumbersOnLoad();
  console.log("HL Init");
}, 5000);

window.onscroll = function() {navScrollFunction()};
let navbar = document.getElementById("rw_header");
let sticky = navbar.offsetTop;
function navScrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
