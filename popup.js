document.addEventListener('DOMContentLoaded',function (){
  /* var port = chrome.runtime.connect({name:"content"}); */
/* port.onMessage.addListener(function(message,sender){
  
    console.log(JSON.stringify(message.greeting));
    document.getElementById("urlB").innerHTML = message.greeting + "has been blocked as we suspect " 
  
}); */

var cookieJar = [];
chrome.cookies.getAll({},function(details){
    cookieJar = details;
    //console.log(cookieJar)
    alert("HOORY")
    var tabel = '<table id = \'tabel\'> <tr>';
    
    
    console.log(cookieJar)
    for (index =0; index < cookieJar.length;index++){
        if (cookieJar[index].domain == ".facebook.com" && cookieJar[index].session == true){
            console.log(cookieJar[index])
        }
        
        if (!tabel.includes(cookieJar[index].domain)){
        tabel += '<tr id = ' + index + 'row>' + '<td>' + cookieJar[index].domain  +'</td>' + 
        '<td id =' + index   + '>' +'<button type = "button" id =' +  index +'>'+ "Delete" + '</button>' + '</td>' 
        + '<td id =' + index   + '>' +'<button type = "button" id =' +  index  +'>'+ "Block" + '</button>'+ 
       '<td id =' + index   + '>' +'<button type = "button" id =' +  index +'>'+ "SuperCookie Deletion" + '</button>'+'<tr>';
}
    } 
    tabel  += '</tr> </table>'
    document.getElementById("urlB").innerHTML = tabel
})  
    document.getElementById("urlB").onclick = function(e) {

        if(e.target.innerHTML == "Delete"){
            //console.log(e.target.id)
            domainTD = cookieJar[e.target.id].domain
            console.log(domainTD)
        if (confirm("Do you really wish to delete this all cookies for the domain " + domainTD +" it may cause some services to\
        function incorrectly"));
   {     for(k = 0; k < cookieJar.length; k++)
            { 
        
            var url = "http" + (cookieJar[k].secure ? "s" : "") + "://" + cookieJar[k].domain + cookieJar[k].path;
            if (domainTD == cookieJar[k].domain && cookieJar[k].session == false){
                console.log(cookieJar[k])
           

             chrome.cookies.remove({"url": url, "name": cookieJar[k].name},function(details){
                console.log("I HAVE DELETED")
                console.log(details)
                chrome.cookies.getAll({}, function(params) {
                    console.log(params)
                    
                })
            })  
        }
        } } 
            
} 
    
function deleteCookie(theCookie,id){
   
    console.log(theCookie)
    
    var url = "http" + (cookie.secure ? "s" : "") + "://" + theCookie.domain +
    cookie.path;
chrome.cookies.remove({"url": url, "name": theCookie.name});
}             
            
}

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


 
