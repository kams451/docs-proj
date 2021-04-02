
  AJS.toInit(function() {  
      $( "#rw_navigation_menu a" ).on( "click", function() {
        console.log("M Click");
        //HLJS 
        setTimeout(function(){ 
          hljs.highlightAll();
          hljs.initHighlightingOnLoad();
          hljs.initLineNumbersOnLoad();
          console.log("HL Init");
        }, 5000);


      });       
  });
