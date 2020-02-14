$(document).ready(function() {
    let data = [];
    let cont = 0;

    fecthData();
    $('#data-result').hide();


    // search key type event
    $('#search').keyup(function() {
        if ($('#search').val()) {
            let search = $('#search').val();
            let template = '';
            for (x of data)
                if (x.name.indexOf(search) != -1) {
                    template += `<li><a href="#" class="data-item">${x.name}</a></li> `;
                    console.log("texto: " + template);

                }

            if (template != '') {
                $('#data-result').show();
                $('#container').html(template);
            } else $('#data-result').hide();
        }
    });

    $('#data-form').submit(e => {
        e.preventDefault();
        const postData = {
            name: $('#name').val(),
            email: $('#email').val(),
            cedula: $('#cedula').val(),
            factorial: todoFactorial(parseInt($('#factorial').val()))
        };
        console.log(postData);
        data[cont] = postData;
        $('#data-form').trigger('reset');
        fecthData();
        cont++;
    });

    // Fetching Tasks
    function fecthData() {
        let template = '';
        for (x of data)
            template += `
            <tr>
            <td>${x.name}</td>
            <td>${x.email}</td>
            <td>${x.cedula}</td>
            <td>${x.factorial}</td>
            </tr>`
        $('#data').html(template);
    }
});

function todoFactorial(n) {
    let template = '';
    template = 'Numero ingresado: ' + n;
    for (var i = 1; i <= n; i++)
        template += '</br>Factorial de ' + i + ' = ' + factorial(i);
    return template;

}

function factorial(n) {
    return n == 0 ? 1 : n * factorial(n - 1);
}