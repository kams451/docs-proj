"use strict";
//HLJS
setTimeout(function(){ 
  hljs.highlightAll();
  //hljs.initHighlightingOnLoad();
  hljs.initLineNumbersOnLoad();
  //console.log("HL Init");
}, 5000);

setInterval(function(){
  hljs.highlightAll();
  //hljs.initHighlightingOnLoad();
  hljs.initLineNumbersOnLoad();
  }, 3000);

  (function ($) {
    AJS.toInit(function () {
      $( "#rw_navigation_menu ul li a" ).click(function(e) {
        console.log("echo");
      })
    });
  })(AJS.$);
