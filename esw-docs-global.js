$( "#rw_navigation_menu a" ).on( "click", function() {
  //HLJS 
  setTimeout(function(){ 
    hljs.highlightAll();
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
    console.log("123");
  }, 5000);
  
  
});
