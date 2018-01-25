chrome.runtime.onMessage.addListener(function(messageI, sender, sendResponse){  
    //var setting = messageI
    console.log("ID    : " + messageI.id)
   // console.log("MESSAGE      : " + setting.message);
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
       break
    }
})
