(function($) {
    AJS.toInit(function() {  
       var href = window.location.href; 
       //if (href.indexOf("Package+API+References") > -1) {
        var embedContent = '<embed type="text/html" src="https://logistics-package-api.sandbox.eshopworld.com/swagger/index.html?urls.primaryName=V4" height="800">';   
        $("#rw_content").prepend("HELLO!");
        $('#rw_wrapper').prepend("Hello world!");
        console.log("HELLO");   
       //}         
    });   
})(AJS.$);
