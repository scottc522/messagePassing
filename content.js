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
var myMap = new Map();
myMap.set("plugins", false)
myMap.set("userAgent",false)
myMap.set("screenAH",false)
myMap.set("appname",false)
myMap.set("cookiesEnabled",false)
myMap.set("appcodename",false)
myMap.set("product",false)
myMap.set("appVersion",false)
myMap.set("platform",false)
myMap.set("language",false)
myMap.set("java",false)
myMap.set("pixelD",false)
myMap.set("colorD",false)
myMap.set("screenH",false)
myMap.set("screenW",false)
myMap.set("screenAW",false)

console.log(myMap)
var re = /var? *[\w]*\s=\s*navigator.plugins+/g
if (re.test(jscript)){
    myMap.set("plugins", true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.userAgent/g
if (re.test(jscript)){
    myMap.set("userAgent",true)
}

re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.appName/g

if (re.test(jscript)){
    myMap.set("appname",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.cookieEnabled/g

if (re.test(jscript)){
    myMap.set("cookiesEnabled",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.appCodeName/g


if (re.test(jscript)){
    myMap.set("appcodename",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.product/g


if (re.test(jscript)){
    myMap.set("product",true)
}

re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.appVersion/g

if (re.test(jscript)){
    myMap.set("appVersion",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.platform/g

if (re.test(jscript)){
    myMap.set("platform",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.language/g

if (re.test(jscript)){
    myMap.set("language",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)navigator.javaEnabled/g

if (re.test(jscript)){
    myMap.set("java",true)}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.pixelDepth/g

if (re.test(jscript)){
    myMap.set("pixelD",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.colorDepth/g

if (re.test(jscript)){
    myMap.set("colorD",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.height/g

if (re.test(jscript)){
    myMap.set("screenH",true)    
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.width/g

if (re.test(jscript)){
    myMap.set("screenW",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.availWidth/g

if (re.test(jscript)){
    myMap.set("screenAW",true)
}
re = /( * "?[\w]*"? *: * "? *'?"? * \+ |var? *[\w]*\s=\s*)screen.availHeight/g

if (re.test(jscript)){
    myMap.set("screenAH",true)
}
console.log(myMap)
//console.log(document.getElementsByTagName("script").innerHTML )