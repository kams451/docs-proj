"use strict";
//HLJS
setTimeout(function(){ 
  hljs.highlightAll();
  //hljs.initHighlightingOnLoad();
  hljs.initLineNumbersOnLoad();
  //console.log("HL Init");
}, 3000);


  (function ($) {
    //AJS.toInit(function () {
      $( "#rw_navigation_menu ul li a" ).click(function(e) {
        console.log("echo");
      })
    //});
  })(AJS.$);
