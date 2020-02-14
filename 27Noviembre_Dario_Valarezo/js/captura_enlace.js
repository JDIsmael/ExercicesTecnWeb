var enlace = document.getElementsByTagName("a");
var str = "";
for (x of enlace)
    str += x.href + "\n";

alert("La pagina tiene " + enlace.length + " enlaces\n\n" + str);


var parrafo = document.getElementsByTagName("*");
str = "";
for (x of parrafo)
    str += x.className + "\n";

alert("La pagina tiene " + parrafo.length + " clases\n\n" + str);

var div = document.getElementsByTagName("div");
str = "";
for (x of div)
    str += x + "\n";

alert("La pagina tiene " + div.length + " clases\n\n" + str);