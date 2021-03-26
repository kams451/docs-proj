(function($) {
    AJS.toInit(function() {  
       if (window.location.href.indexOf("Package+API+References") > -1) {
        let embedContent = '<embed type="text/html" src="https://logistics-package-api.sandbox.eshopworld.com/swagger/index.html?urls.primaryName=V4" height="800">';   
        $(".rw_adf_document").append(embedContent);
       }         
    });   
})(AJS.$);
