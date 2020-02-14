$(document).ready(function() {
    var age;
    var arrayPerson = [];
    var cont = 0;



    $('#date').blur(function() {
        var fechaActual = new Date();
        var fanc = $('#date').val().split('-');
        var dateFanc = new Date();
        dateFanc.setFullYear(fanc[0], fanc[1] - 1, fanc[2]);
        if (dateFanc < fechaActual) {
            age = fechaActual.getFullYear() - dateFanc.getFullYear();
            document.getElementById('edad').innerText = age + "años";
        }
    });

    $('#form').submit(e => {
        e.preventDefault();

        const postData = {
            name: $('#name').val(),
            cedula: $('#cedula').val(),
            email: $('#email').val(),
            age: age,
            departament: $("#departament option:selected").val(),
            fprueba: Math.floor(Math.random() * 20) + " hasta " + Math.floor(Math.random() * (31 - 21)) + 21,
            hprueba: Math.floor(Math.random() * 24) + ":" + Math.floor(Math.random() * 60)
        };
        var valor = $("#departament option:selected").val();

        if ((valor == 'Sistemas' && (age >= 23 && age <= 28))) {
            arrayPerson[cont] = postData;
            cont += 1;
        } else if ((valor == 'Financiero' && (age >= 35 && age <= 40))) {
            arrayPerson[cont] = postData;
            cont += 1;
        } else if ((valor == 'Ventas' && (age >= 30 && age <= 35))) {
            arrayPerson[cont] = postData;
            cont += 1;
        } else {
            if (valor == 'Sistemas')
                alert("rango de edad Sistemas : 23 - 28 años ");
            if (valor == 'Financiero')
                alert("rango de edad Fianciero : 35 - 40 años");
            if (valor == 'Ventas')
                alert("rango de edad Ventas : 30 - 35 años ");
        }

    });
});