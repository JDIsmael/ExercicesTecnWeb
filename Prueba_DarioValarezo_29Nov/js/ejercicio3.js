var div = document.getElementsByTagName("div");

function mouseOver(obj) {
    if (obj.id == "div1")
        document.body.style.backgroundColor = "blue";
    else if (obj.id == "div2")
        document.body.style.backgroundColor = "yellow";
    else if (obj.id == "div3")
        document.body.style.backgroundColor = "black";
    else if (obj.id == "div4")
        document.body.style.backgroundColor = "green";
    else if (obj.id == "div5")
        document.body.style.backgroundColor = "red";
}