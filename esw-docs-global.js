$( "#rw_navigation_menu a" ).on( "click", function() {
  console.log("123");
  //HLJS 
  setTimeout(function(){ 
    hljs.highlightAll();
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
  }, 5000);
  
  
});
