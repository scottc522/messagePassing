console.log(document.head)
console.log(document.head.childNodes)
console.log(document.head.firstChild)
var doc = document.head.firstChild
while(doc.nextSibling != null){
   
    if(doc.nodeName == "SCRIPT" )
    {
        console.log(doc.textContent)
    }
    doc = doc.nextSibling

}
//console.log(document.getElementsByTagName("script").innerHTML )