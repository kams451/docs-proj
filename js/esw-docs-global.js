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
        e.preventDefault();
        let form = new FormData();
        form.append("grant_type", "client_credentials");
        form.append("scope", "checkout.preorder.api.all");
        form.append("client_id", "gocasual.checkout.client");
        form.append("client_secret", "?-:;U-!J!KQ_0ze_M_+DTJ}1wv]U}#W#");

        let settings = {
          "url": "https://security-sts.sandbox.eshopworld.com/connect/token",
          "method": "POST",
          "timeout": 0,
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };

        $.ajax(settings).done(function (response) {
           console.log("Response",response);
        });

      })
    });
  })(AJS.$);
