document.addEventListener('DOMContentLoaded',function (){
  var port = chrome.runtime.connect({name:"content"});
port.onMessage.addListener(function(message,sender){
  
    console.log(JSON.stringify(message.greeting));
    document.getElementById("urlB").innerHTML = message.greeting + "has been blocked as we suspect " 
  
});

  document.getElementById('urlB').addEventListener('click', function(tab){
    //if(document.getElementById('urlB').innerHTML.length > 1){
      console.log(11)
      window.alert("BOO!!!!")
    //}
  })
  //chrome.runtime.onMessage.addListener(function(messageI, sender, sendResponse){  
    //window.alert(messageI)
    //document.getElementById('urlB').value = "Some text to enter"

    //var setting1 = messageI.messages
    //window.alert(setting)
    //var setting = JSON.stringify(messageI)
  //  console.log("ID    : " + messageI.id)
    //console.log("MESSAGE      : " + setting.message);
   //const chrome = require('sinon-chrome');
   //window.alert(setting)

    

	document.getElementById('testingSwitch').addEventListener('change', function(){
        try {
           var jobject = JSON.parse("{ \"id\" : \"testingSwitch\", \"message\" :" +document.getElementById('testingSwitch').checked+"} ")
           chrome.runtime.sendMessage(JSON.stringfy(jobject)) ;
           
            }
            catch(err) {    
                console.log(err)
            }
	
    })
    
    document.getElementById("blackListB").addEventListener('click' , function(){
        console.log("HIT")
        try {
            var jobject = JSON.parse("{ \"id\" : \"blackList\", \"message\" :" + true +"} " )
            chrome.runtime.sendMessage(jobject);
            }
            catch(err) {    
                console.log(err)
            }

    })
    document.getElementById("whiteListB").addEventListener('click' , function(){
        console.log("WhiteList")
        try {
            var jobject = JSON.parse("{ \"id\" : \"whiteList\", \"message\" :" + true +"} " )
            chrome.runtime.sendMessage(jobject);
           
            }
            catch(err) {    
                console.log(err)
            }

})
    document.getElementById("Senddata").addEventListener('click', function(){
          console.log("Senddata")
        try {
            var jobject = JSON.parse("{ \"id\" : \"Senddata\", \"message\" :" +document.getElementById('Senddata').checked+"} ")
            chrome.runtime.sendMessage(jobject) ;
           
            }
            catch(err) {    
                console.log(err)
            }
    } )



document.getElementById("HTTPSrequire").addEventListener('click', function(){
    console.log("HTTPSrequire")
  try {
      var jobject = JSON.parse("{ \"id\" : \"HTTPSrequire\", \"message\" :" +document.getElementById('HTTPSrequire').checked+"} ")
      chrome.runtime.sendMessage(jobject) ;
     
      }
      catch(err) {    
          console.log(err)
      }
} )



document.getElementById("spoofing").addEventListener('click', function(){
    console.log("spoofing")
  try {
      var jobject = JSON.parse("{ \"id\" : \"spoofing\", \"message\" :" +document.getElementById('spoofing').checked+"} ")
      chrome.runtime.sendMessage(jobject) ;
     
      }
      catch(err) {    
          console.log(err)
      }
} )
})

//document.addEventListener('DOMContentLoaded', function () {
	//document.getElementById('Backbtn1').addEventListener('click',function(){
		//	window.open("popup.html", "_self")
	//})
	
//})

document.addEventListener('DOMContentLoaded', function () {
	
    document.getElementById('demo').addEventListener('click', function(tab){
		window.open("TestingHelpPage.html", "_self")
		//var action_url = "TestingHelpPage.html";
    //chrome.tabs.create({ url: action_url });
	});
});


 
