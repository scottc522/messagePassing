document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM CONTENT LOADED")
    document.getElementById("demo").addEventListener("click", function(){
        try {
        chrome.runtime.sendMessage(true);
        }
        catch(err) {    
            console.log(err)
        }
        
    });
    
})

var testingModeOn = true

document.addEventListener('DOMContentLoaded',function (){
	document.getElementById('testingSwitch').addEventListener('change', function(){
        try {
           var jobject = JSON.parse("{ \"id\" : \"testingSwitch\", \"message\" :" +document.getElementById('testingSwitch').checked+"} ")
           chrome.runtime.sendMessage(jobject) ;
           
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


 
