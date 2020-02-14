function eliminar_item() {
    var combo = document.getElementById("itemSelec");
    combo.remove(document.getElementById("itemSelec").selectedIndex);
}

function agregar_item() {
    if (document.form.inputItem.value.length == 0) {
        alert("Debes escribir algo");
    } else {
        var nuevoItem = document.form.inputItem.value;
        var combo = document.getElementById("itemSelec");
        var option = document.createElement("option");
        combo.options.add(option, 0);
        combo.options[0].value = nuevoItem;
        combo.options[0].innerText = nuevoItem;
        document.form.inputItem.value = "";
    }
}

function modificar_item() {
    if (document.form.inputItem.value.length == 0) {
        alert("Debes escribir algo");
    } else {
        eliminar_item();
        agregar_item();
    }
}