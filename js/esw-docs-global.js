"use strict";
//HLJS
setTimeout(function(){ 
  hljs.highlightAll();
  //hljs.initHighlightingOnLoad();
  hljs.initLineNumbersOnLoad();
  //console.log("HL Init");
}, 5000);

  (function ($) {
    AJS.toInit(function () {
      $( "#tryCheckout" ).click(function(e) {
        console.log("echo");
      })
    });
    AJS.bind('rw-categories:menu-loaded', function(e, $el, categories){
      console.log("Loaded");
    });
  })(AJS.$);
