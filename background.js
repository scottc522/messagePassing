chrome.runtime.onMessage.addListener(function(messageI, sender, sendResponse){  
    var setting = messageI
    console.log(setting.message);
})
