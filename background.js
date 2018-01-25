chrome.runtime.onMessage.addListener(function(messageI, sender, sendResponse){  
    var setting = messageI
    console.log("ID    : " + setting.id)
    console.log("MESSAGE      : " + setting.message);
    
})
