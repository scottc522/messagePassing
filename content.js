console.log(document.head)
console.log(document.head.childNodes)
console.log(document.head.firstChild)
var doc = document.head.firstChild
while(doc.nextSibling != null){
   
    if(doc.nodeName == "SCRIPT" )
    {
       var jscript = doc.textContent
       
       console.log(jscript)
    }
    doc = doc.nextSibling



}
var myMap = {
     plugins:false,
     userAgent:false,
     screenAH:false,
     appname:false,
     cookiesEnabled:false,
     appcodename:false,
     product:false,
     appVersion:false,
     platform:false,
     language:false,
     java:false,
     pixelD:false,
     colorD:false,
     screenH:false,
     screenW:false,
     screenAW:false,
    

    };

console.log(myMap)
var re = /var? *[\w]*\s=\s*navigator.plugins+/g
if (re.test(jscript)){
    myMap.plugins = true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.userAgent/g
if (re.test(jscript)){
    myMap.userAgent= true
}

re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.appName/g

if (re.test(jscript)){
    myMap.appname = true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.cookieEnabled/g

if (re.test(jscript)){
    myMap.cookiesEnabled =true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.appCodeName/g


if (re.test(jscript)){
    myMap.appcodename =true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.product/g


if (re.test(jscript)){
    myMap.product = true
}

re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.appVersion/g

if (re.test(jscript)){
    myMap.appVersion=true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.platform/g

if (re.test(jscript)){
    myMap.platform=true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.language/g

if (re.test(jscript)){
    myMap.language=true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.javaEnabled/g

if (re.test(jscript)){
    myMap.java = true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.pixelDepth/g

if (re.test(jscript)){
    myMap.pixelD=true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.colorDepth/g

if (re.test(jscript)){
    myMap.colorD=true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.height/g

if (re.test(jscript)){
    myMap.screenH=true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.width/g

if (re.test(jscript)){
    myMap.screenW = true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.availWidth/g

if (re.test(jscript)){
    myMap.screenAW=true
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.availHeight/g

if (re.test(jscript)){
    myMap.screenAH=true
}
console.log(myMap)
try {
    
    var jobject = JSON.parse("{ \"id\" : \"fingerPrintFlags\", \"message\" :" + JSON.stringify(myMap) +"} " )
    console.log(JSON.stringify(myMap ))
    chrome.runtime.sendMessage(jobject);
    }
    catch(err) {    
        console.log(err)
    }


//console.log(document.getElementsByTagName("script").innerHTML )