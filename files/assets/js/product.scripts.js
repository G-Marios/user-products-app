$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/products',
        dataType: 'JSON'
    }).done(function (response) {
        // console.log(response);

        let data = response.data;
        let status = response.status;

        if (status) {
            createTbody(data);
        } else {
            console.log('Πρόβλημα στην αναζήτηση των προϊόντων');
        }
    });

    $('.row').on('click', '.btnSubmit', function () {
        // console.log('Hello Products');

        let product = $('#product').val();
        let cost = $('#cost').val();
        let description = $('#description').val();
        let quantity = $('#quantity').val();
        console.log(product, cost, description, quantity);

        const item = {
            'product': product,
            'cost': cost,
            'description': description,
            'quantity': quantity
        };

        console.log(item);

        $.ajax({
            url: 'http://localhost:3000/api/products',
            type: 'post',
            data: item,
            dataType: 'JSON'
        }).done(function (response) {
            console.log(response);
        });
    });
});

function createTbody(data) {
    // console.log('createTbody', data);
    const len = data.length;

    for (i = 0; i < len; i++) {
        let product = data[i].product;
        let cost = data[i].cost;
        let description = data[i].description;
        let quantity = data[i].quantity;

        let tr_str = '<tr>' + '<td>' + product + '</td>' + '<td>' + cost + '</td>' + '<td>' + description + '</td>' + '<td>' + quantity + '</td>' + '</tr>';
        $('#userTable tbody').append(tr_str);
    }
}
