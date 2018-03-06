chrome.runtime.onMessage.addListener(function(messageI, sender, sendResponse){  
    //var setting = messageI
  //  console.log("ID    : " + messageI.id)
   // console.log("MESSAGE      : " + setting.message);
   //const chrome = require('sinon-chrome');
   console.log("BACKGROUND SCRIPT RUNNING")
    switch(messageI.id) {
        case "testingSwitch":
            console.log("Testing Switch hit")
            console.log(messageI.message)
            break;
        case "blackList":
           console.log("blackList switch hit")
           console.log(messageI.message)
           break;
        case "WhiteList":
           console.log("white list switch hit")
           console.log(messageI.message)
           break;
         case "Senddata":
         console.log("Senddata Switch hit")
         console.log(messageI.message)
         break;
       case "HTTPSrequire":
          console.log("HTTPSrequire switch hit")
          console.log(messageI.message)
          break;
       case "spoofing":
       console.log(messageI.message)
       console.log("spoofing list switch hit")
       break
       case "whiteList":
       console.log(messageI.message)
       console.log("WhiteList list switch hit")
       break;
       case "fingerPrintFlags":
       console.log(messageI.message)
       console.log("recieved flags")
    }
})
/* 
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        console.log("DETAILS" )   
        console.log("url:"+details.url);   
          console.log(details.requestBody);
        
        console.log(details.requestHeaders)
      for (var i = 0; i < details.requestHeaders.length; ++i) {
          console.log(details.requestHeaders[i])
        switch (details.requestHeaders[i].name) {
         case 'User-Agent':
          details.requestHeaders.splice(i, 1,  {  
            "name":"User-Agent",
            "value":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
         });
          break;
        }
      }
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        console.log(details.requestHeaders[i])
      switch (details.requestHeaders[i].name) {
       case 'DNT':
        details.requestHeaders.splice(i, 1,  {  
          "name":"DNT",
          "value":"1"
       });
        break;
      }
    }

     
        console.log(JSON.stringify(details))
      return {requestHeaders: details.requestHeaders};
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]); */

 /*  chrome.webRequest.onBeforeRequest.addListener(
      function(details)
      {

         // console.log(details.requestBody.byteLength);
          for (i=0;details.requestBody.length;i++){
            x = details.requestBody[i]
            console.log(x)
          }
      },
      {urls: ["<all_urls>"]},
      ['requestBody']
  );  */
//URL patterns https://developer.chrome.com/extensions/match_patterns 
    var domains = ["*://*.bbc.co.uk/*","*://*.oracle.com/*"]


    chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      chrome.runtime.onConnect.addListener(function(port){
          port.postMessage({greeting:details.url});
        });
        console.log(details.url)
    console.log("message appears to have been fired")

        return {cancel: true};
    },
    {

        urls: domains

    },
    ["blocking"]
);
  