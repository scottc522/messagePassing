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
		if (document.getElementById('testingSwitch').checked ==true )
		{
			console.log("TESTINGMODECHECKED");
			testingModeOn = true
		}
		else
		{
			console.log("TESTINGMODEUNCHECKED")
			testingModeOn = false
		}
		console.log(testingModeOn)
	
    })
    
    document.getElementById("blackListB").addEventListener('click' , function(){
        console.log("HIT")
        try {
            var jobject = JSON.parse("{ \"id\" : \"blackList\", \"message\" :" + true +"} " )
            chrome.runtime.sendMessage(jobject);
          // try {
           /// chrome.runtime.sendMessage("true");
          //  }
          //  catch(err) {    
          //      console.log(err)
          //  }
           
            }
            catch(err) {    
                console.log(err)
            }

    })
    document.getElementById("whiteListB").addEventListener('click' , function(){
        console.log("WhiteList")
})
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


 
