$(document).ready(function() {

    // Testing Jquery
    console.log('jquery is working!');
    $('#body-data').hide();

    $('#test-form').submit(e => {
        e.preventDefault();
        const postData = {
            name: $('#name').val(),
            surname: $('#surname').val()
        };
        $.post('php/data.php', postData, (response) => {
            const text = JSON.parse(response);
            let template = '';
            text.forEach(text_aux => {
                template += `
                    <tr>
                    <td>${text_aux.name} </td>
                    <td>${text_aux.surname}</td>
                    </tr>
                  `
            });
            $('#body-data').html(template).show('slow');
            $('#test-form').trigger('reset');
        });
    });
});