var res;
var str;
var patt = new RegExp(/^[0-9\s]+$/g);
do {
    str = prompt("ingrese una palabra:");

    res = patt.test(str);
    if (!res && str != "")
        alert("Ha ingresado mal la palabra vuelva a ingresar")
    else
        document.write(str);
} while (!res && str != "");